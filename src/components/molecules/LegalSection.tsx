interface LegalContentItem {
  subtitle: string;
  text: string;
}

interface LegalSectionProps {
  title: string;
  content: readonly LegalContentItem[];
}

const LegalSection = ({ title, content }: LegalSectionProps) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b-2 border-gradient-to-r from-primary to-secondary">
      {title}
    </h2>

    <div className="space-y-8">
      {content.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="bg-gray-50/20 dark:bg-gray-800/20 backdrop-blur-sm p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/20 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {item.subtitle}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-0">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default LegalSection;
