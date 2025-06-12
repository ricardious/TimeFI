import LegalPageHeader from "@molecules/LegalPageHeader";
import LegalIntroCard from "@molecules/LegalIntroCard";
import LegalSection from "@molecules/LegalSection";
import ContactSection from "@molecules/ContactSection";
import LegalFooterInfo from "@molecules/LegalFooterInfo";
import { PRIVACY_PAGE_INFO, PRIVACY_SECTIONS } from "@constants/privacy";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 md:px-8 lg:px-20">
        <LegalPageHeader
          title={PRIVACY_PAGE_INFO.title}
          subtitle={PRIVACY_PAGE_INFO.subtitle}
          lastUpdated={PRIVACY_PAGE_INFO.lastUpdated}
          effectiveDate={PRIVACY_PAGE_INFO.effectiveDate}
        />

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <LegalIntroCard title={PRIVACY_PAGE_INFO.introTitle}>
            <p>{PRIVACY_PAGE_INFO.introText}</p>
          </LegalIntroCard>

          {PRIVACY_SECTIONS.map((section, sectionIndex) => (
            <LegalSection
              key={sectionIndex}
              title={section.title}
              content={section.content}
            />
          ))}

          <ContactSection
            title={PRIVACY_PAGE_INFO.contactTitle}
            subtitle={PRIVACY_PAGE_INFO.contactSubtitle}
            email={PRIVACY_PAGE_INFO.contactEmail}
            supportLink={PRIVACY_PAGE_INFO.supportLink}
          />

          <LegalFooterInfo
            lastUpdated={PRIVACY_PAGE_INFO.lastUpdated}
            effectiveDate={PRIVACY_PAGE_INFO.effectiveDate}
            version={PRIVACY_PAGE_INFO.version}
            description={PRIVACY_PAGE_INFO.footerDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
