import { FEATURES } from "@lib/constants/features";
import SectionTitle from "@atoms/SectionTitle";
import FeatureCard from "@molecules/FeatureCard";
import CTAButton from "@atoms/CTAButton";

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 md:py-24 px-4 md:px-8 lg:px-20 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle className="mb-6">
            Funciones que potencian tu éxito académico
          </SectionTitle>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubre todas las herramientas que te ayudarán a planificar,
            organizar y optimizar tu experiencia universitaria de manera
            inteligente.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <CTAButton label="Explorar Todas las Funciones" delay={0.8} />
        </div>
      </div>
    </section>
  );
};

export default Features;
