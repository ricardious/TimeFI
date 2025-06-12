export const HELP_CATEGORIES = [
  {
    iconName: "circle-help",
    title: "Preguntas Frecuentes",
    description:
      "Encuentra respuestas rápidas a las dudas más comunes sobre el uso de la plataforma.",
  },
  {
    iconName: "definition-search-book",
    title: "Documentación",
    description:
      "Accede a guías detalladas y documentación completa sobre todas las funcionalidades.",
  },
  {
    iconName: "video",
    title: "Video Tutoriales",
    description:
      "Aprende paso a paso con nuestros tutoriales en video explicativos y fáciles de seguir.",
  },
  {
    iconName: "customer-support",
    title: "Soporte Técnico",
    description:
      "Contacta a nuestro equipo de soporte para resolver problemas técnicos específicos.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Qué es Semestrix?",
    answer:
      "Semestrix es la herramienta definitiva para estudiantes de Ingeniería USAC que te ayuda a planificar tu carrera de manera inteligente y eficiente, eliminando el dolor de cabeza de organizar horarios, gestionar prerrequisitos y hacer seguimiento de tu progreso académico.",
  },
  {
    question: "¿Cómo funciona la planificación automática de horarios?",
    answer:
      "Nuestro sistema analiza tu progreso académico, prerrequisitos pendientes y tus preferencias de horario para generar automáticamente las mejores combinaciones de materias. Puedes configurar tus horarios disponibles, carga máxima de créditos y prioridades en la sección de configuración.",
  },
  {
    question: "¿Puedo modificar manualmente mi horario generado?",
    answer:
      "Sí, completamente. Aunque el sistema genera horarios optimizados automáticamente, siempre puedes hacer ajustes manuales. Puedes agregar, quitar o cambiar materias, modificar horarios específicos y el sistema te alertará sobre cualquier conflicto o prerrequisito faltante.",
  },
  {
    question: "¿Cómo se calculan las proyecciones de graduación?",
    answer:
      "Las proyecciones se basan en tu progreso actual, materias pendientes, carga promedio de créditos por semestre y disponibilidad de materias. El sistema considera factores como prerrequisitos, materias que se ofrecen solo en ciertos semestres y tu ritmo de estudio preferido.",
  },
  {
    question: "¿Qué hago si mi pensum no está en la lista?",
    answer:
      "Abre un issue en el repositorio de GitHub para solicitar la inclusión de tu pensum. Mientras tanto, activa el modo 'Pensum Personalizado' y configura manualmente tu plan de estudios y prerrequisitos.",
  },
  {
    question: "¿Cómo comparto mi planificación?",
    answer:
      "Utiliza el botón 'Exportar' para descargar tu horario en PDF o como imagen, y compártelo fácilmente por correo, mensajería o redes sociales.",
  },
  {
    question: "¿Cuánto cuesta usar Semestrix?",
    answer:
      "Semestrix es completamente gratuito: emplea exclusivamente los servicios gratuitos de Firebase para mantener el servicio accesible para todos los estudiantes.",
  },
] as const;
