import SvgIcon from "@atoms/SvgIcon";

interface ContactSectionProps {
  title: string;
  subtitle: string;
  email: string;
  supportLink: string;
}

const ContactSection = ({
  title,
  subtitle,
  email,
  supportLink,
}: ContactSectionProps) => (
  <section className="mt-16 p-8 bg-white/15 dark:bg-gray-900/15 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-2xl">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
      {title}
    </h2>
    <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
      {subtitle}
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl mb-4 border border-white/20">
          <SvgIcon name="mail" size="md" className="text-primary" />
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Email
        </h3>
        <a
          href={`mailto:${email}`}
          className="text-primary hover:text-secondary transition-colors"
        >
          {email}
        </a>
      </div>

      <div className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl mb-4 border border-white/20">
          <SvgIcon name="circle-help" size="md" className="text-secondary" />
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          Soporte
        </h3>
        <a
          href={supportLink}
          className="text-secondary hover:text-primary transition-colors"
        >
          Centro de Ayuda
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
