import asyncio
import aiohttp
import json
import re
import time
import argparse
from bs4 import BeautifulSoup
from asyncio import Semaphore
from typing import List, Dict, Optional, Tuple
import logging

# URLs
BASE = "https://usuarios.ingenieria.usac.edu.gt"
HORARIOS_URL = f"{BASE}/horarios/semestre/1"
RESTRICCIONES_URL = f"{BASE}/restricciones"

RESTRICTIONS_CACHE = {}


class CourseProcessor:
    def __init__(self, max_concurrent: int = 10, delay: float = 0.1):
        self.semaphore = Semaphore(max_concurrent)
        self.delay = delay
        self.session = None
        self.timeout = aiohttp.ClientTimeout(total=20, connect=10)

    async def setup_session(self):
        connector = aiohttp.TCPConnector(
            limit=20,
            limit_per_host=10,
            ttl_dns_cache=300,
            use_dns_cache=True,
            keepalive_timeout=30,
            enable_cleanup_closed=True,
        )

        headers = {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "es-419,es;q=0.9,en;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "DNT": "1",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
        }

        self.session = aiohttp.ClientSession(
            connector=connector, timeout=self.timeout, headers=headers
        )

        try:
            async with self.session.get(HORARIOS_URL) as response:
                response.raise_for_status()
                print(f"✓ Conexión exitosa. Status: {response.status}")
        except Exception as e:
            await self.close_session()
            raise Exception(f"Error al configurar sesión: {str(e)}")

    async def close_session(self):
        if self.session:
            await self.session.close()

    def extract_course_data(self, row) -> Optional[Dict]:
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

    async def get_courses(self) -> List[Dict]:
        try:
            print("Descargando página de horarios...")
            async with self.session.get(HORARIOS_URL) as response:
                response.raise_for_status()
                html_content = await response.text()

            soup = BeautifulSoup(html_content, "html.parser")
            courses = []

            tables = soup.select("table.table")
            print(f"Encontradas {len(tables)} tablas")

            for i, table in enumerate(tables):
                rows = table.select("tr:not(:first-child)")
                print(f"Tabla {i+1}: {len(rows)} filas de cursos")

                table_courses = []
                for row in rows:
                    course = self.extract_course_data(row)
                    if course is not None:
                        table_courses.append(course)

                courses.extend(table_courses)

            print(f"Total de cursos extraídos: {len(courses)}")
            return courses

        except asyncio.TimeoutError:
            print("Error: Timeout al obtener cursos")
            return []
        except Exception as e:
            print(f"Error al obtener cursos: {str(e)}")
            return []

    async def get_restriction_text(
        self, course_code: str, section: str, year: str, period: str
    ) -> List[str]:
        cache_key = f"{course_code}-{section}-{year}-{period}"

        if cache_key in RESTRICTIONS_CACHE:
            return RESTRICTIONS_CACHE[cache_key]

        data = {
            "codigo": course_code,
            "seccion": section,
            "anio": year,
            "periodo": period,
        }

        max_retries = 2
        current_try = 0

        while current_try < max_retries:
            try:
                async with self.semaphore:
                    if current_try > 0:
                        await asyncio.sleep(self.delay * (current_try + 1))
                    else:
                        await asyncio.sleep(self.delay)

                    headers = {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Requested-With": "XMLHttpRequest",
                        "Origin": BASE,
                        "Referer": HORARIOS_URL,
                    }

                    async with self.session.post(
                        RESTRICCIONES_URL, data=data, headers=headers
                    ) as response:
                        response.raise_for_status()
                        html_content = await response.text()

                soup = BeautifulSoup(html_content, "html.parser")
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

                result = (
                    restrictions_text
                    if restrictions_text
                    else ["No se encontraron restricciones específicas"]
                )

                RESTRICTIONS_CACHE[cache_key] = result
                return result

            except asyncio.TimeoutError:
                current_try += 1
                if current_try < max_retries:
                    print(
                        f"Timeout reintentando {course_code}-{section} ({current_try}/{max_retries})"
                    )

            except Exception as e:
                current_try += 1
                if current_try < max_retries:
                    print(
                        f"Error reintentando {course_code}-{section} ({current_try}/{max_retries}): {str(e)}"
                    )

        result = ["Error al obtener restricciones después de varios intentos"]
        RESTRICTIONS_CACHE[cache_key] = result
        return result

    async def process_course(self, course: Dict) -> Dict:
        """Procesa un curso individual para obtener sus restricciones"""
        if not course["has_restrictions"] or not course["restriction_params"]:
            course["restrictions"] = ["No tiene restricciones"]
            return course

        params = course["restriction_params"]
        try:
            course["restrictions"] = await self.get_restriction_text(
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

    async def process_all_courses(
        self, courses: List[Dict], skip_restrictions: bool = False
    ) -> List[Dict]:
        """Procesa todos los cursos de manera asíncrona"""
        if skip_restrictions:
            print("Omitiendo descarga de restricciones...")
            for course in courses:
                course["restrictions"] = ["Restricciones no descargadas"]
            return courses

        courses_with_restrictions = [c for c in courses if c["has_restrictions"]]
        total = len(courses_with_restrictions)

        print(
            f"Procesando {total} cursos con restricciones usando {self.semaphore._value} conexiones concurrentes..."
        )

        if total > 0:
            tasks = [
                self.process_course(course) for course in courses_with_restrictions
            ]

            batch_size = 20
            processed_courses = []

            for i in range(0, len(tasks), batch_size):
                batch = tasks[i : i + batch_size]
                batch_results = await asyncio.gather(*batch, return_exceptions=True)

                for j, result in enumerate(batch_results):
                    if isinstance(result, Exception):
                        print(f"Error en lote: {str(result)}")
                        original_course = courses_with_restrictions[i + j]
                        original_course["restrictions"] = [f"Error: {str(result)}"]
                        processed_courses.append(original_course)
                    else:
                        processed_courses.append(result)

                print(f"Procesados {min(i + batch_size, total)}/{total} cursos...")

            processed_dict = {
                f"{course['course_code']}-{course['section']}": course["restrictions"]
                for course in processed_courses
            }

            for course in courses:
                key = f"{course['course_code']}-{course['section']}"
                if key in processed_dict:
                    course["restrictions"] = processed_dict[key]
                elif not course["has_restrictions"]:
                    course["restrictions"] = ["Sin restricciones"]
        else:
            print("No se encontraron cursos con restricciones.")
            for course in courses:
                course["restrictions"] = ["Sin restricciones"]

        return courses


async def main():
    parser = argparse.ArgumentParser(
        description="Scrapea información de cursos y restricciones (versión asíncrona optimizada)"
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
        default=0.05,
        help="Tiempo de espera base entre solicitudes (en segundos)",
    )
    parser.add_argument(
        "--concurrent",
        type=int,
        default=15,
        help="Número de conexiones concurrentes",
    )
    parser.add_argument(
        "--skip-restrictions",
        action="store_true",
        help="Omitir la descarga de restricciones (solo obtener horarios básicos)",
    )

    args = parser.parse_args()

    start_time = time.time()
    print("Configurando procesador asíncrono...")

    processor = CourseProcessor(max_concurrent=args.concurrent, delay=args.delay)

    try:
        await processor.setup_session()

        print("Obteniendo lista de cursos...")
        courses = await processor.get_courses()

        if not courses:
            print("No se pudieron obtener cursos. Terminando...")
            return

        print(f"Se encontraron {len(courses)} cursos.")

        courses = await processor.process_all_courses(courses, args.skip_restrictions)

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

        try:
            with open(args.output, "w", encoding="utf-8") as json_file:
                json.dump(sorted_courses, json_file, ensure_ascii=False, indent=4)

            elapsed_time = time.time() - start_time
            print(f"✓ Los datos se han guardado en '{args.output}'")
            print(f"✓ Tiempo total: {elapsed_time:.2f} segundos")
            print(f"✓ Cursos procesados: {len(sorted_courses)}")
            print(f"✓ Restricciones en cache: {len(RESTRICTIONS_CACHE)}")

        except Exception as e:
            print(f"Error al guardar archivo: {str(e)}")

    except Exception as e:
        print(f"Error durante la ejecución: {str(e)}")
    finally:
        await processor.close_session()


def run_main():
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n✗ Proceso interrumpido por el usuario")
    except Exception as e:
        print(f"✗ Error fatal: {str(e)}")


if __name__ == "__main__":
    run_main()
