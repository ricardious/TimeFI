import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerList,
  listItem,
} from "@lib/helpers/motion";
import IconContainer from "@atoms/IconContainer";
import StepBadge from "@atoms/StepBadge";
import StepConnector from "@atoms/StepConnector";

interface GuideStepProps {
  stepNumber: number;
  iconName: string;
  title: string;
  description: string;
  details: readonly string[];
  delay: number;
  direction: "left" | "right";
  isLast?: boolean;
}

const GuideStep = ({
  stepNumber,
  iconName,
  title,
  description,
  details,
  delay,
  direction,
  isLast = false,
}: GuideStepProps) => {
  const slideVariant =
    direction === "left" ? slideInFromLeft(delay) : slideInFromRight(delay);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideVariant}
      className="relative group/step"
    >
      <div className="relative">
        {/* Step Card */}
        <div className="relative p-8 rounded-3xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 cursor-pointer">
          {/* Gradient background on hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Step Number Badge */}
            <StepBadge stepNumber={stepNumber} variant="blue" size="md" />

            {/* Icon */}
            <IconContainer iconName={iconName} variant="blue" size="lg" />

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover/step:text-primary transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              {description}
            </p>

            {/* Details List */}
            <motion.ul
              className="space-y-3"
              variants={staggerList(delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  variants={listItem}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                >
                  <div className="w-2 h-2 bg-gradient-to-br from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

      {/* Connector Line */}
      {!isLast && <StepConnector variant="primary" lineHeight="md" />}
    </motion.div>
  );
};

export default GuideStep;
