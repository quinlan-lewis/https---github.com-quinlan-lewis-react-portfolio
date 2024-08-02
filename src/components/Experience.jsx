import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { experiences } from "../data";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick, isActive, isMobile }) => {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${isMobile ? "text-quaternary" : ""
                }`}
        >
            {(isActive || isMobile) && (
                <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
            )}
            <h3
                className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${isActive || isMobile ? "text-quaternary" : "text-slate-600"
                    }`}
            >
                {experience.title}
            </h3>
            <p
                className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${isActive || isMobile ? "text-white" : "text-slate-600"
                    }`}
            >
                {experience.company_name} | {experience.date}
            </p>
        </div>
    );
};

const ExperienceDetails = ({ experience }) => {
    return (
        <div className="flex mt-5 overflow-y-hidden">
            <ul className="flex flex-col justify-center max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 w-exps h-exps">
                {experience.details.map((detail, index) => (
                    <li
                        key={`experience-detail-${index}`}
                        className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
                        dangerouslySetInnerHTML={{ __html: detail }}
                    />
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    const [selectedJob, setSelectedJob] = useState(experiences[0]);
    const [isMobile, setIsMobile] = useState(false);

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize(); // Check initial screen size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <motion.div ref={ref} animate={controls} initial="hidden" variants={textVariant()}>
                <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px] text-center">
                    Experience
                </h2>
            </motion.div>

            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={fadeIn("up", "easeOut", 0, 0.75)}
            >
                <div className="md:p-20 flex flex-col items-center justify-center sm:flex-row">
                    <div className="flex flex-col z-10">
                        {experiences.map((experience, index) => (
                            <ExperienceCard
                                key={`experience-${index}`}
                                experience={experience}
                                onClick={() => setSelectedJob(experience)}
                                isActive={selectedJob === experience}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>

                    <div className="flex justify-end z-10 sm:block">
                        <ExperienceDetails experience={selectedJob} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;