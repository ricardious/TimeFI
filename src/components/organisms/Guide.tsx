import { motion } from "framer-motion";
import {
  fadeIn,
  slideInFromBottom,
  staggerContainer,
} from "@lib/helpers/motion";
import { GUIDE_STEPS } from "@lib/constants/guide";
import SectionTitle from "@atoms/SectionTitle";
import CTAButton from "@atoms/CTAButton";
import GuideStep from "@molecules/GuideStep";

const Guide = () => {
  return (
    <section
      id="guide"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-20 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/30 dark:to-transparent"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div variants={fadeIn(0.2)} className="mb-6">
            <SectionTitle>Cómo usar nuestra plataforma</SectionTitle>
          </motion.div>

          <motion.p
            variants={slideInFromBottom}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Sigue estos sencillos pasos para comenzar a planificar tu carrera
            universitaria de manera inteligente y eficiente.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {GUIDE_STEPS.map((step, index) => (
            <GuideStep
              key={index}
              stepNumber={index + 1}
              iconName={step.iconName}
              title={step.title}
              description={step.description}
              details={step.details}
              delay={0.2 + index * 0.2}
              direction={step.direction}
              isLast={index === GUIDE_STEPS.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div variants={fadeIn(1.0)} className="text-center mt-20">
          <CTAButton label="Comenzar Ahora" delay={1.0} />

          <motion.p
            variants={slideInFromBottom}
            className="mt-6 text-gray-500 dark:text-gray-400"
          >
            ¿Necesitas ayuda? Consulta nuestra documentación completa
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Guide;
