"use client";

import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Img } from "react-image";
import { Images } from "../../assets/images";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-20 mt-20 lg:mt-40 w-full z-[20] dark:bg-transparent bg-white"
        >
            {/* Text Content Section */}
            <div className="h-full w-full flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center m-auto text-center lg:text-start lg:pr-8 xl:pr-12">
                <motion.div
                    variants={slideInFromTop}
                    className="welcome-box py-2 px-2 border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0 flex items-center"
                >
                    <SparklesIcon className="text-[#7042f8] mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <h1 className="welcome-text text-[13px] sm:text-sm md:text-base">
                        FI Scheduler by Ricardious
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white max-w-[600px] w-auto h-auto mx-auto lg:mx-0"
                >
                    <span>
                        Planifica tus horarios
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            sin preocupaciones{" "}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-600 dark:text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
                >
                    Crea y organiza tu horario académico sin conflictos de forma rápida y sencilla con FI Scheduler, la herramienta ideal para optimizar tu tiempo y evitar solapamientos de clases.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-[150px] sm:w-[180px] mx-auto lg:mx-0 text-sm sm:text-base dark:text-white whitespace-nowrap"
                >
                    Comenzar Ahora
                </motion.a>
            </div>

            {/* Image Section */}
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
            >
                <Img
                    src={Images.control_panel}
                    alt="calendar"
                    className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[650px] h-auto 
                    brightness-100 dark:brightness-75 
                    hue-rotate-0 dark:hue-rotate-15 
                    contrast-100 dark:contrast-125 
                    saturate-100 dark:saturate-150 
                    drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;