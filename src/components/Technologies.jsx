import assembly from "../assets/assembly-icon.png";
import aws from "../assets/aws-icon.png"
import cpp from "../assets/cpp-icon.png";
import css from "../assets/css-icon.png";
import docker from "../assets/docker-icon.png";
import html from "../assets/html-icon.png";
import java from "../assets/java-icon.png";
import javascript from "../assets/javascript-logo.svg";
import materialui from "../assets/materialui-icon.png";
import mysql from "../assets/mysql-logo.svg";
import nodejs from "../assets/nodejs-icon.png";
import python from "../assets/python-icon.png";
import react from "../assets/react-icon.png";
import salesforce from "../assets/salesforce-icon.png";
import { motion } from "framer-motion";

const Technologies = () => {
    const iconsRow1 = [
        { src: java, alt: "Java", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[0.8]", label: "Java" },
        { src: cpp, alt: "C++", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[0.9]", label: "C++" },
        { src: python, alt: "Python", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[1.0]", label: "Python" },
        { src: javascript, alt: "JavaScript", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[1.0]", label: "JavaScript" },
        { src: nodejs, alt: "Node.js", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[0.9]", label: "Node.js" },
        { src: react, alt: "React", height: "h-[2.125vh] sm:h-[2.50vh]", aspect: "aspect-[1.25]", label: "React" },
        { src: html, alt: "HTML", height: "h-[2.125vh] sm:h-[2.50vh]", aspect: "aspect-[1.0]", label: "HTML" },
        { src: css, alt: "CSS", height: "h-[2.125vh] sm:h-[2.50vh]", aspect: "aspect-[1.25]", label: "CSS" },
        { src: materialui, alt: "Material UI", height: "h-[2.125vh] sm:h-[2.50vh]", aspect: "aspect-[1.25]", label: "Material UI" },
        { src: mysql, alt: "MySQL", height: "h-[3.74vh] sm:h-[4.4vh]", aspect: "aspect-[1.0]", label: "MySQL" },
        { src: assembly, alt: "Assembly", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[1.0]", label: "Assembly" },
        { src: aws, alt: "AWS", height: "h-[2.67vh] sm:h-[3.14vh]", aspect: "aspect-[1.0]", label: "AWS" },
        { src: docker, alt: "Docker", height: "h-[2.125vh] sm:h-[2.50vh]", aspect: "aspect-[1.25]", label: "Docker" },
        { src: salesforce, alt: "Salesforce", height: "h-[2.125vh] sm:h-[2.50vh]", aspect: "aspect-[1.5]", label: "Salesforce" },
    ];
    
    return (
        <div>
            <motion.h1 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-4"
            >
                Technologies
            </motion.h1>
            <div className="flex flex-wrap justify-start items-center gap-6">
                {iconsRow1.map((icon, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <motion.div
                            whileHover={{ scale: 1.2, fontWeight: 600 }}
                            className="flex flex-col items-center min-w-[18vw] sm:min-w-0"
                        >
                            <motion.div
                                initial={{ rotate: 0, opacity: 0 }}
                                whileInView={{ opacity: 1}}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="block"
                            >
                                <div className="bg-gray-300 border-gray-400 border rounded-full flex items-center justify-center h-[6.28vh] aspect-square">
                                    <div className="bg-white border-gray-500 border rounded-full flex items-center justify-center h-[5.02vh] aspect-square">
                                    <motion.div
                                        initial={{ rotate: 0, opacity: 0 }}
                                        whileInView={{ opacity: 1, rotateY: -360}}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        viewport={{ once: true}}
                                        className="inline-block"
                                    >
                                            <img src={icon.src} alt={icon.alt} className={`${icon.height} ${icon.aspect}`} />
                                    </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            <p className="text-xs sm:text-sm mt-2 text-center">{icon.label}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;