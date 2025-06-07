import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@lib/helpers/motion";

interface CTAButtonProps {
  label: string;
  delay?: number;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  delay = 0.8,
  onClick,
}) => (
  <motion.a
    variants={fadeIn(delay)}
    onClick={onClick}
    className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-[150px] sm:w-[180px] mx-auto text-sm sm:text-base dark:text-white whitespace-nowrap"
  >
    {label}
  </motion.a>
);

export default CTAButton;
