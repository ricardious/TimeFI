import { Link } from "react-router-dom";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

const FooterLink = ({
  href,
  children,
  external = false,
  className = "",
}: FooterLinkProps) => {
  const baseClasses = `text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:translate-x-1 ${className}`;

  return (
    <Link
      to={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={baseClasses}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
