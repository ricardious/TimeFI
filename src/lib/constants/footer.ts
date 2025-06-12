export const FOOTER_LINKS = {
  product: [
    { label: "Funciones", href: "#features" },
    { label: "Guía de Uso", href: "#guide" },
    { label: "Centro De Ayuda", href: "/help" },
    {
      label: "Github",
      href: "https://github.com/ricardious/Semestrix",
      external: true,
    },
  ],
  info: [
    { label: "Acerca de", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ],
  support: [
    { label: "Documentación", href: "/docs" },
    { label: "Tutorial", href: "/tutorial" },
    { label: "FAQ", href: "/faq" },
    {
      label: "Reportar Bug",
      href: "https://github.com/ricardious/Semestrix/issues",
      external: true,
    },
  ],
  legal: [
    { label: "Privacidad", href: "/legal/privacy" },
    { label: "Términos", href: "/legal/terms" },
    { label: "Código Abierto", href: "/open-source" },
  ],
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/ricardious/Semestrix",
    iconName: "github",
    label: "GitHub",
  },
] as const;

export const APP_INFO = {
  name: "Semestrix",
  version: "1.0.0",
  description:
    "Tu compañero inteligente para planificar y optimizar tu carrera universitaria. Simplifica tu camino hacia el éxito académico con Semestrix.",
  location: "Guatemala",
  github: "https://github.com/ricardious/Semestrix",
} as const;
