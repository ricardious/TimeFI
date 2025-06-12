import SvgIcon from "@atoms/SvgIcon";

interface SocialLinkProps {
  href: string;
  iconName: string;
  label: string;
  className?: string;
}

const SocialLink = ({
  href,
  iconName,
  label,
  className = "",
}: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-10 h-10 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 ${className}`}
  >
    <SvgIcon name={iconName} size="sm" />
  </a>
);

export default SocialLink;
