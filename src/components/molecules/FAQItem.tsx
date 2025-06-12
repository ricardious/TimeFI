import { motion } from "framer-motion";
import DropdownIcon from "@atoms/DropdownIcon";
import CollapsibleContent from "@atoms/CollapsibleContent";
import { textReveal } from "@lib/helpers/motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  delay,
}: FAQItemProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={textReveal(delay)}
      className="border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 md:px-8 py-4 md:py-6 text-left flex items-center justify-between hover:bg-white/10 dark:hover:bg-gray-700/20 transition-colors duration-200"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white pr-4">
          {question}
        </h3>
        <DropdownIcon isOpen={isOpen} size="md" />
      </button>

      <CollapsibleContent isOpen={isOpen}>
        <div className="px-6 md:px-8 pb-4 md:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          {answer}
        </div>
      </CollapsibleContent>
    </motion.div>
  );
};

export default FAQItem;
