import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl lg:text-5xl",
    lg: "text-4xl md:text-5xl lg:text-6xl",
  };

  return (
    <h2
      className={`
        font-bold
        text-gray-900 
        dark:text-white
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
