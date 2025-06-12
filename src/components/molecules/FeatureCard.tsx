import { motion } from "framer-motion";
import IconContainer from "@atoms/IconContainer";
import { fadeIn } from "@lib/helpers/motion";

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({
  iconName,
  title,
  description,
  delay,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn(delay)}
      className="group relative p-6 md:p-8 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 cursor-pointer"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <IconContainer iconName={iconName} variant="blue" />

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-300 group-hover:-translate-y-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
