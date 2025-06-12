import { motion } from "framer-motion";
import SvgIcon from "@atoms/SvgIcon";

interface DropdownIconProps {
  isOpen: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const DropdownIcon = ({
  isOpen,
  size = "md",
  className = "text-primary",
}: DropdownIconProps) => {
  return (
    <motion.div
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={`flex-shrink-0 ${className}`}
    >
      <SvgIcon name="chevron-down" size={size} />
    </motion.div>
  );
};

export default DropdownIcon;
