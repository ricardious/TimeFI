import { Link } from "react-router-dom";
import { APP_INFO } from "@constants/footer";

const LegalFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacidad", href: "/legal/privacy" },
    { label: "Términos", href: "/legal/terms" },
    // { label: "Contacto", href: "/legal/contact" },
  ];

  return (
    <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <div className="mb-4">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 inline-block"
            >
              {APP_INFO.name}
            </Link>
          </div>

          <p className="mb-4">
            &copy; {currentYear} {APP_INFO.name}. Hecho con ❤ en{" "}
            {APP_INFO.location}
          </p>

          <div className="flex justify-center items-center gap-6 text-sm">
            {footerLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-6">
                <Link
                  to={link.href}
                  className="hover:text-primary transition-colors duration-200 hover:translate-x-1"
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="text-gray-400">•</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            v{APP_INFO.version}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LegalFooter;
