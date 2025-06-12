import React from "react";
import SvgIcon from "@atoms/SvgIcon";

interface IconContainerProps {
  iconName: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "blue" | "primary" | "purple" | "green";
}

const IconContainer: React.FC<IconContainerProps> = ({
  iconName,
  size = "lg",
  variant = "blue",
}) => {
  const variants = {
    blue: {
      base: "from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400",
      hover:
        "group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:from-blue-800/40 dark:group-hover:to-indigo-800/40 group-hover:text-blue-700 dark:group-hover:text-blue-300",
      border:
        "border-blue-200/50 dark:border-blue-700/30 group-hover:border-blue-300/70 dark:group-hover:border-blue-600/50",
      shadow:
        "group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20",
    },
    primary: {
      base: "from-primary/10 to-secondary/10 text-primary",
      hover: "group-hover:from-primary/20 group-hover:to-secondary/20",
      border: "border-primary/20 group-hover:border-primary/40",
      shadow: "group-hover:shadow-primary/20",
    },
    purple: {
      base: "from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 text-purple-600 dark:text-purple-400",
      hover:
        "group-hover:from-purple-100 group-hover:to-violet-100 dark:group-hover:from-purple-800/40 dark:group-hover:to-violet-800/40 group-hover:text-purple-700 dark:group-hover:text-purple-300",
      border:
        "border-purple-200/50 dark:border-purple-700/30 group-hover:border-purple-300/70 dark:group-hover:border-purple-600/50",
      shadow:
        "group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-400/20",
    },
    green: {
      base: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-600 dark:text-green-400",
      hover:
        "group-hover:from-green-100 group-hover:to-emerald-100 dark:group-hover:from-green-800/40 dark:group-hover:to-emerald-800/40 group-hover:text-green-700 dark:group-hover:text-green-300",
      border:
        "border-green-200/50 dark:border-green-700/30 group-hover:border-green-300/70 dark:group-hover:border-green-600/50",
      shadow:
        "group-hover:shadow-green-500/20 dark:group-hover:shadow-green-400/20",
    },
  };

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-14 h-14",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  const currentVariant = variants[variant];

  return (
    <div
      className={`
        inline-flex items-center justify-center 
        ${sizeClasses[size]} 
        mb-4 rounded-2xl 
        bg-gradient-to-br ${currentVariant.base} 
        ${currentVariant.hover} 
        transition-all duration-500 
        backdrop-blur-sm 
        border ${currentVariant.border} 
        group-hover:shadow-lg ${currentVariant.shadow} 
        group-hover:scale-110 group-hover:-rotate-3
      `}
    >
      <SvgIcon
        name={iconName}
        size={size}
        className="group-hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default IconContainer;
