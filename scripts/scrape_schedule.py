import requests
import browser_cookie3
from bs4 import BeautifulSoup
import json
import re
import time
import argparse
import concurrent.futures
from functools import lru_cache

# URLs
BASE = "https://usuarios.ingenieria.usac.edu.gt"
HORARIOS_URL = f"{BASE}/horarios/semestre/1"
RESTRICCIONES_URL = f"{BASE}/restricciones"


def setup_session(browser="firefox"):
    try:
        if browser.lower() == "firefox":
            cj = browser_cookie3.firefox(domain_name="usuarios.ingenieria.usac.edu.gt")
        elif browser.lower() == "chrome":
            cj = browser_cookie3.chrome(domain_name="usuarios.ingenieria.usac.edu.gt")
        else:
            raise ValueError(f"Navegador no soportado: {browser}")

        session = requests.Session()
        session.cookies = cj

        session.headers.update(
            {
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
                "Accept": "text/html, */*; q=0.01",
                "Accept-Language": "es-419,es;q=0.7",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
                "Origin": BASE,
                "Referer": HORARIOS_URL,
            }
        )

        resp = session.get(HORARIOS_URL)
        resp.raise_for_status()

        return session
    except Exception as e:
        raise Exception(f"Error al configurar sesión: {str(e)}")


def extract_course_data(row):
    cols = row.find_all("td")
    if not cols or len(cols) < 11:
        return None

    full_text = ""
    if cols[0].find("strong"):
        full_text = cols[0].find("strong").text.strip()
    else:
        full_text = cols[0].text.strip()

    course_code = full_text[:4] if len(full_text) >= 4 else ""
    course_name = full_text[5:].strip() if len(full_text) > 4 else full_text

    restriction_cell = cols[10]
    restriction_button = restriction_cell.find(
        "button", onclick=re.compile(r"verRestricciones")
    )

    restriction_params = None
    if restriction_button:
        onclick_text = restriction_button.get("onclick", "")
        match = re.search(
            r"verRestricciones\('(\d+)'\s*,\s*'([^']+)'\s*,\s*'(\d+)'\s*,\s*'(\d+)'\)",
            onclick_text,
        )

        if match:
            restriction_params = {
                "codigo": match.group(1),
                "seccion": match.group(2),
                "anio": match.group(3),
                "periodo": match.group(4),
            }

    data = {
        "course_code": course_code,
        "course_name": course_name,
        "section": cols[1].text.strip(),
        "mode": cols[2].text.strip() if len(cols) > 2 else "",
        "building": cols[3].text.strip() if len(cols) > 3 else "",
        "classroom": cols[4].text.strip() if len(cols) > 4 else "",
        "start_time": cols[5].text.strip() if len(cols) > 5 else "",
        "end_time": cols[6].text.strip() if len(cols) > 6 else "",
        "days": cols[7].text.strip() if len(cols) > 7 else "",
        "professor": cols[8].text.strip() if len(cols) > 8 else "",
        "teaching_assistant": cols[9].text.strip() if len(cols) > 9 else "",
        "has_restrictions": restriction_button is not None,
        "restriction_params": restriction_params,
        "restrictions": None,
    }

    return data


def get_courses(session):
    try:
        response = session.get(HORARIOS_URL)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")
        courses = []

        tables = soup.select("table.table")

        for table in tables:
            rows = table.select("tr:not(:first-child)")

            courses.extend(
                [
                    course
                    for course in [extract_course_data(row) for row in rows]
                    if course is not None
                ]
            )

        return courses
    except Exception as e:
        print(f"Error al obtener cursos: {str(e)}")
        return []


@lru_cache(maxsize=128)
def get_restriction_text(session, course_code, section, year, period):
    data = {"codigo": course_code, "seccion": section, "anio": year, "periodo": period}

    max_retries = 3
    current_try = 0
    backoff_factor = 1.5

    while current_try < max_retries:
        try:
            response = session.post(RESTRICCIONES_URL, data=data)
            response.raise_for_status()

            soup = BeautifulSoup(response.text, "html.parser")

            restrictions_text = []

            restriction_cards = soup.select("blockquote.card-bodyquote p strong")
            if restriction_cards:
                restrictions_text = [
                    card.get_text(strip=True) for card in restriction_cards
                ]
            else:
                modal_body = soup.select_one(".modal-body")
                if modal_body:
                    for elem in modal_body.select("p, strong, div"):
                        text = elem.get_text(strip=True)
                        if text and "modal" not in text.lower() and len(text) > 5:
                            restrictions_text.append(text)

            return (
                restrictions_text
                if restrictions_text
                else ["No se encontraron restricciones específicas"]
            )

        except requests.exceptions.RequestException as e:
            print(
                f"Error en intento {current_try+1}/{max_retries} para curso {course_code}-{section}: {str(e)}"
            )
            current_try += 1
            time.sleep(backoff_factor**current_try)

        except Exception as e:
            print(f"Error inesperado: {str(e)}")
            current_try += 1
            time.sleep(1)

    return ["Error al obtener restricciones después de varios intentos"]


def process_course(session, course, delay=0.2):
    if not course["has_restrictions"] or not course["restriction_params"]:
        course["restrictions"] = ["No tiene restricciones"]
        return course

    params = course["restriction_params"]
    try:
        time.sleep(delay)

        course["restrictions"] = get_restriction_text(
            session,
            params["codigo"],
            params["seccion"],
            params["anio"],
            params["periodo"],
        )

        return course
    except Exception as e:
        print(
            f"Error procesando curso {course['course_code']}-{course['section']}: {str(e)}"
        )
        course["restrictions"] = [f"Error: {str(e)}"]
        return course


def main():
    parser = argparse.ArgumentParser(
        description="Scrapea información de cursos y restricciones de manera optimizada"
    )
    parser.add_argument(
        "--browser",
        type=str,
        default="firefox",
        choices=["firefox", "chrome"],
        help="Navegador del cual obtener cookies (firefox o chrome)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="public/schedules.json",
        help="Nombre del archivo de salida",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.2,
        help="Tiempo de espera base entre solicitudes (en segundos)",
    )
    parser.add_argument(
        "--threads",
        type=int,
        default=8,
        help="Número de hilos concurrentes para procesar solicitudes",
    )
    args = parser.parse_args()

    start_time = time.time()
    print(f"Configurando sesión con cookies de {args.browser}...")

    try:
        session = setup_session(args.browser)
    except Exception as e:
        print(f"Error al obtener cookies del navegador: {str(e)}")
        print(
            "Asegúrate de haber iniciado sesión en el sitio web antes de ejecutar este script."
        )
        return

    print("Obteniendo lista de cursos...")
    courses = get_courses(session)
    print(f"Se encontraron {len(courses)} cursos.")

    courses_with_restrictions = [c for c in courses if c["has_restrictions"]]
    total = len(courses_with_restrictions)
    print(f"Procesando {total} cursos con restricciones usando {args.threads} hilos...")

    processed_courses = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.threads) as executor:
        futures = [
            executor.submit(process_course, session, course, args.delay)
            for course in courses_with_restrictions
        ]

        for i, future in enumerate(concurrent.futures.as_completed(futures)):
            try:
                processed_course = future.result()
                processed_courses.append(processed_course)
                print(
                    f"[{i+1}/{total}] Procesado: {processed_course['course_name']} - {processed_course['section']}"
                )
            except Exception as e:
                print(f"Error en el procesamiento: {str(e)}")

    processed_dict = {
        f"{course['course_code']}-{course['section']}": course["restrictions"]
        for course in processed_courses
    }

    for course in courses:
        key = f"{course['course_code']}-{course['section']}"
        if key in processed_dict:
            course["restrictions"] = processed_dict[key]
        else:
            course["restrictions"] = ["Sin restricciones"]

    for course in courses:
        if "has_restrictions" in course:
            del course["has_restrictions"]
        if "restriction_params" in course:
            del course["restriction_params"]

    def course_code_to_int(course):
        try:
            return int(course["course_code"])
        except (ValueError, TypeError):
            return float("inf")

    sorted_courses = sorted(courses, key=course_code_to_int)

    with open(args.output, "w", encoding="utf-8") as json_file:
        json.dump(sorted_courses, json_file, ensure_ascii=False, indent=4)

    print(f"Los datos se han guardado en '{args.output}'")


if __name__ == "__main__":
    main()
