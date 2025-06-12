export const PRIVACY_PAGE_INFO = {
  lastUpdated: "12 de junio de 2025",
  effectiveDate: "12 de junio de 2025",
  version: "1.0.0",
  title: "Política de Privacidad",
  subtitle:
    "Tu privacidad es nuestra prioridad. Conoce cómo protegemos y utilizamos tu información.",
  introTitle: "Compromiso con tu Privacidad",
  introText:
    "En Semestrix, entendemos la importancia de proteger tu información personal y académica. Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y compartimos tu información cuando utilizas nuestros servicios de planificación académica.",
  contactTitle: "¿Preguntas sobre tu Privacidad?",
  contactSubtitle:
    "Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos tu información, no dudes en contactarnos.",
  contactEmail: "castaneda.systems@gmail.com",
  supportLink: "/help",
  footerDescription:
    "Esta Política de Privacidad puede actualizarse periódicamente para reflejar cambios en nuestras prácticas o por otros motivos operativos, legales o regulatorios.",
} as const;

export const PRIVACY_SECTIONS = [
  {
    title: "1. Información que Recopilamos",
    content: [
      {
        subtitle: "Información Personal",
        text: "Recopilamos información que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, información académica (carrera, universidad, materias cursadas), y preferencias de configuración.",
      },
      {
        subtitle: "Preferencias y Configuración",
        text: "Guardamos tus elecciones de tema, idioma y otras opciones de personalización para ofrecerte una experiencia consistente en cada sesión.",
      },
      {
        subtitle: "Feedback y Soporte",
        text: "Al enviarnos sugerencias, reportes de errores o valoraciones, almacenamos ese contenido para mejorar Semestrix y responder a tus solicitudes.",
      },
    ],
  },
  {
    title: "2. Cómo Utilizamos tu Información",
    content: [
      {
        subtitle: "Prestación de Servicios",
        text: "Utilizamos tu información para proporcionar, mantener y mejorar nuestros servicios de planificación académica, incluyendo la generación de horarios personalizados y recomendaciones.",
      },
      {
        subtitle: "Comunicación",
        text: "Podemos usar tu información de contacto para enviarte actualizaciones importantes sobre el servicio, notificaciones académicas, y responder a tus consultas.",
      },
      {
        subtitle: "Mejora del Servicio",
        text: "Analizamos patrones de uso agregados y anónimos para mejorar nuestras funcionalidades y desarrollar nuevas características que beneficien a todos los usuarios.",
      },
    ],
  },
  {
    title: "3. Compartir tu Información",
    content: [
      {
        subtitle: "No Vendemos tu Información",
        text: "Nunca vendemos, alquilamos o compartimos tu información personal con terceros con fines comerciales. Tu información académica y personal es estrictamente confidencial.",
      },
      {
        subtitle: "Proveedores de Servicios",
        text: "Podemos compartir información con proveedores de servicios confiables que nos ayudan a operar nuestra plataforma, siempre bajo estrictos acuerdos de confidencialidad.",
      },
      {
        subtitle: "Requerimientos Legales",
        text: "Podemos divulgar información personal si es requerido por ley o para proteger nuestros derechos, propiedad o seguridad, o la de nuestros usuarios.",
      },
    ],
  },
  {
    title: "4. Seguridad de los Datos",
    content: [
      {
        subtitle: "Encriptación",
        text: "Toda la información sensible se transmite utilizando protocolos de encriptación SSL/TLS y se almacena en servidores seguros con acceso restringido.",
      },
      {
        subtitle: "Acceso Restringido",
        text: "Solo quien desarrolla y mantiene Semestrix puede acceder a la base de datos, protegida en servidores seguros.",
      },
      {
        subtitle: "Copia de Respaldo",
        text: "Realizamos backups automáticos periódicos; esos respaldos se borran tras 30 días para evitar retenciones prolongadas.",
      },
    ],
  },
  {
    title: "5. Tus Derechos y Controles",
    content: [
      {
        subtitle: "Acceso y Actualización",
        text: "Puedes acceder, actualizar o corregir tu información personal en cualquier momento a través de la configuración de tu cuenta o contactándonos directamente.",
      },
      {
        subtitle: "Eliminación de Datos",
        text: "Puedes solicitar la eliminación de tu cuenta y datos personales. Procesaremos estas solicitudes de acuerdo con las leyes aplicables y nuestras políticas de retención.",
      },
      {
        subtitle: "Control de Comunicaciones",
        text: "Puedes optar por no recibir comunicaciones promocionales en cualquier momento, aunque seguiremos enviando notificaciones importantes del servicio.",
      },
    ],
  },
  {
    title: "6. Cookies y Tecnologías Similares",
    content: [
      {
        subtitle: "Uso de Cookies",
        text: "Utilizamos cookies y tecnologías similares para mejorar tu experiencia, recordar tus preferencias, y analizar el uso de nuestros servicios.",
      },
      {
        subtitle: "Control de Cookies",
        text: "Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad de nuestros servicios.",
      },
      {
        subtitle: "Cookies de Terceros",
        text: "Podemos usar servicios de terceros para análisis y publicidad, que pueden establecer sus propias cookies. Estos terceros tienen sus propias políticas de privacidad.",
      },
    ],
  },
  {
    title: "7. Retención de Datos",
    content: [
      {
        subtitle: "Período de Retención",
        text: "Conservamos tu información personal durante el tiempo que sea necesario para proporcionar nuestros servicios y cumplir con nuestras obligaciones legales.",
      },
      {
        subtitle: "Eliminación Automática",
        text: "Los datos de cuentas inactivas durante más de 3 meses pueden ser eliminados automáticamente, previa notificación al usuario.",
      },
      {
        subtitle: "Datos de Respaldo",
        text: "Los datos pueden persistir en copias de respaldo durante un período adicional por razones de seguridad y continuidad del servicio.",
      },
    ],
  },
  {
    title: "8. Menores de Edad",
    content: [
      {
        subtitle: "Restricción de Edad",
        text: "Nuestros servicios están destinados a usuarios mayores de 13 años. No recopilamos intencionalmente información personal de menores de 13 años.",
      },
      {
        subtitle: "Consentimiento Parental",
        text: "Si descubrimos que hemos recopilado información de un menor de 13 años sin el consentimiento parental verificable, tomaremos medidas para eliminar esa información.",
      },
    ],
  },
] as const;
