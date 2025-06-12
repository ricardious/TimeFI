interface LegalFooterInfoProps {
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  description?: string;
}

const LegalFooterInfo = ({
  lastUpdated,
  effectiveDate,
  version,
  description,
}: LegalFooterInfoProps) => (
  <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
    <div className="bg-gray-50/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Actualizaciones de la Política
        </h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>
            Última actualización: <strong>{lastUpdated}</strong>
          </span>
          <span className="hidden sm:block">•</span>
          <span>
            Efectiva desde: <strong>{effectiveDate}</strong>
          </span>
          <span className="hidden sm:block">•</span>
          <span>
            Versión: <strong>{version}</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default LegalFooterInfo;
