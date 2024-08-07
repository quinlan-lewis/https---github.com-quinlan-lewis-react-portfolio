import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { projects } from "../data";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    image,
    width,
    height
}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeIn("up", "easeOut", 0, 0.75)}
            className={`max-w-large w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
        >
            <div className={`relative w-${width}`}>
                <img
                    src={image}
                    alt='project_image'
                    className={`w-${width} h-${height} object-cover md:rounded-3xl`}
                />
            </div>

            <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center md:pt-0 ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
                <h3 className='text-white font-medium text-md sm:text-lg md:text-xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
                <ul className="max-w-7xl list-none space-y-8 p-6">
                    {description.map((detail, index) => (
                        <li
                            key={`experience-detail-${index}`}
                            className="text-slate-500 text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
                            dangerouslySetInnerHTML={{ __html: detail }}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
    }, [controls, inView]);

    return (
        <div className='text-center md:text-left md:px-20 lg:px-40'>
            <motion.div ref={ref} animate={controls} initial="hidden" variants={textVariant()}>
                <h2 className="text-white font-bold md:text-[80px] sm:text-[50px] text-[40px] text-center">
                    Projects
                </h2>
            </motion.div>

            <div className='mt-10 md:mt-20 flex flex-col flex-wrap content-center gap-10 md:gap-20 align-middle md:py-8'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;