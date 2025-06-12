import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CollapsibleContentProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  duration?: number;
}

const CollapsibleContent = ({
  isOpen,
  children,
  className = "",
  duration = 0.3,
}: CollapsibleContentProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration, ease: "easeInOut" }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default CollapsibleContent;
