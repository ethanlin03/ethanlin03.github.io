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

const Technologies = () => {
    const iconsRow1 = [
        { src: java, alt: "Java", height: "h-10", width: "w-8", label: "Java" },
        { src: cpp, alt: "C++", height: "h-10", width: "w-9", label: "C++" },
        { src: python, alt: "Python", height: "h-10", width: "w-10", label: "Python" },
        { src: javascript, alt: "JavaScript", height: "h-10", width: "w-10", label: "JavaScript" },
        { src: nodejs, alt: "Node.js", height: "h-10", width: "w-9", label: "Node.js" },
        { src: react, alt: "React", height: "h-8", width: "w-10", label: "React" },
        { src: html, alt: "HTML", height: "h-8", width: "w-8", label: "HTML" },
        { src: css, alt: "CSS", height: "h-8", width: "w-10", label: "CSS" },
        { src: materialui, alt: "Material UI", height: "h-8", width: "w-10", label: "Material UI" },
        { src: mysql, alt: "MySQL", height: "h-14", width: "w-14", label: "MySQL" },
        { src: assembly, alt: "Assembly", height: "h-10", width: "w-10", label: "Assembly" },
        { src: aws, alt: "AWS", height: "h-10", width: "w-10", label: "AWS" },
        { src: docker, alt: "Docker", height: "h-8", width: "w-10", label: "Docker" },
        { src: salesforce, alt: "Salesforce", height: "h-18", width: "w-12", label: "Salesforce" },
    ];
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Technologies</h1>
            <div className="flex flex-wrap justify-start items-center gap-6 mb-20">
                {iconsRow1.map((icon, index) => (
                    <div key={index} className="flex flex-col items-center mb-4">
                        <div className="bg-gray-300 border-gray-400 border rounded-full flex items-center justify-center h-20 w-20">
                            <div className="bg-white border-gray-500 border rounded-full flex items-center justify-center h-16 w-16">
                                <img src={icon.src} alt={icon.alt} className={`${icon.height} ${icon.width}`} />
                            </div>
                        </div>
                        <p className="text-md mt-2 justify-self-center">{icon.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;