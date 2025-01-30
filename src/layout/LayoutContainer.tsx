import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StarsCanvas from "../components/design/StarBackground";

const LayoutContainer: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
        }
    }, [isDarkMode]);

    return (
        <>
            <StarsCanvas />
            <div className="min-h-screen flex flex-col">
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <main className="relative z-0 flex-grow">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default LayoutContainer;
