interface LegalIntroCardProps {
  title: string;
  children: React.ReactNode;
}

const LegalIntroCard = ({ title, children }: LegalIntroCardProps) => (
  <div className="mb-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
    <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </div>
);

export default LegalIntroCard;
