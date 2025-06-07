import { Outlet } from "react-router-dom";
import Header from "@organisms/Header";
import StarsCanvas from "@atoms/StarBackground";

const LayoutContainer: React.FC = () => {
  return (
    <>
      <StarsCanvas />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="relative z-0 flex-grow">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default LayoutContainer;
