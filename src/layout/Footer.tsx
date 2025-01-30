import { Link } from "react-router-dom";
import routesConstants from "../constants/routeConstants";
import { Icons } from "../assets/icons";

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center relative border-t-[1px] border-t-white border-solid">
            <div className="px-4 max-w-[1320px] mx-auto lg:py-8 md:py-6 py-4 flex flex-col sm:flex-row gap-y-6 items-center justify-between w-full">
                <Link to={routesConstants.HOME}>
                    <img src={Icons.logo} className="lg:max-w-[160px] max-w-[120px]" />
                </Link>
                <div className="flex items-center lg:gap-x-7 md:gap-x-6 gap-x-5">
                    <Link
                        to=""
                        className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out"
                    >
                        Already a member?
                    </Link>
                    <Link
                        to=""
                        className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] lg:min-h-[44px] min-h-[40px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135"
                    >
                        log in
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
