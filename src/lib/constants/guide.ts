export const GUIDE_STEPS = [
  {
    iconName: "user",
    title: "Crea tu Perfil",
    description:
      "Comienza configurando tu información académica básica para personalizar tu experiencia.",
    details: [
      "Ingresa tu información personal y carrera",
      "Selecciona tu universidad y plan de estudios",
      "Define tus objetivos académicos y fecha objetivo de graduación",
      "Configura tus preferencias de notificaciones",
    ],
    direction: "left" as const,
  },
  {
    iconName: "cloud-upload",
    title: "Importa tus Materias",
    description:
      "Sube tu historial académico o ingresa manualmente las materias que has cursado.",
    details: [
      "Carga tu historial académico desde un archivo PDF o Excel",
      "Ingresa manualmente las materias aprobadas y sus calificaciones",
      "Registra las materias en curso del semestre actual",
      "Verifica que toda la información esté correcta",
    ],
    direction: "right" as const,
  },
  {
    iconName: "bolt",
    title: "Configura tu Plan",
    description:
      "Establece tus preferencias de horarios y define tu estrategia de estudio.",
    details: [
      "Configura tus horarios disponibles para clases",
      "Establece la carga académica máxima por semestre",
      "Define prioridades entre materias obligatorias y electivas",
      "Configura recordatorios y alertas importantes",
    ],
    direction: "left" as const,
  },
  {
    iconName: "telescope",
    title: "¡Comienza a Planificar!",
    description:
      "Utiliza todas las herramientas para optimizar tu camino hacia la graduación.",
    details: [
      "Explora las materias disponibles para el próximo semestre",
      "Genera horarios optimizados automáticamente",
      "Revisa tu progreso y proyección de graduación",
      "Recibe recomendaciones personalizadas para tu plan de estudios",
    ],
    direction: "right" as const,
  },
] as const;
