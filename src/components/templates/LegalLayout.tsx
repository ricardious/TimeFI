import { Outlet } from "react-router-dom";
import LegalNavigation from "@components/organisms/LegalNavigation";
import LegalFooter from "@components/organisms/LegalFooter";

const LegalLayout = () => {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <LegalNavigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <LegalFooter />
    </div>
  );
};

export default LegalLayout;
