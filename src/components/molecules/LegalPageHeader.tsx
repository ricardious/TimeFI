import GradientTitle from "@atoms/GradientTitle";

interface LegalPageHeaderProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
}

const LegalPageHeader = ({
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
}: LegalPageHeaderProps) => (
  <div className="text-center mb-16 animate-fade-in">
    <GradientTitle gradientText={title} className="mb-6" />
    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
      {subtitle}
    </p>

    <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/20">
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          Última actualización
        </p>
        <p className="font-semibold text-gray-900 dark:text-white">
          {lastUpdated}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          Efectiva desde
        </p>
        <p className="font-semibold text-gray-900 dark:text-white">
          {effectiveDate}
        </p>
      </div>
    </div>
  </div>
);

export default LegalPageHeader;
