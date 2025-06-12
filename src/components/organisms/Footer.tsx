import SocialLink from "@atoms/SocialLink";
import FooterLink from "@atoms/FooterLink";
import { FOOTER_LINKS, SOCIAL_LINKS, APP_INFO } from "@constants/footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {APP_INFO.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  {APP_INFO.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-1 bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-medium backdrop-blur-sm">
                    100% Gratuito
                  </span>
                  <span className="px-2 py-1 bg-blue-100/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium backdrop-blur-sm">
                    Código Abierto
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <div key={social.label}>
                    <SocialLink
                      href={social.href}
                      iconName={social.iconName}
                      label={social.label}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Producto
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      external={(link as any).external}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Información
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.info.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      external={(link as any).external}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Soporte
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      external={(link as any).external}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      external={(link as any).external}
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-200/30 dark:border-gray-700/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Mantente informado
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Síguenos en GitHub para las últimas actualizaciones
              </p>
            </div>

            <a
              href={APP_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/50 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
            >
              <span>⭐</span>
              Seguir en GitHub
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <p>
                © {currentYear} {APP_INFO.name}. Hecho con ❤ en{" "}
                {APP_INFO.location}
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <span>v{APP_INFO.version}</span>
              <span>•</span>
              <FooterLink href="/changelog">Changelog</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
