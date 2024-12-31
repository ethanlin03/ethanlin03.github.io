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
        { src: java, alt: "Java", height: "h-12", width: "w-10", label: "Java" },
        { src: cpp, alt: "C++", height: "h-12", width: "w-10", label: "C++" },
        { src: python, alt: "Python", height: "h-12", width: "w-12", label: "Python" },
        { src: javascript, alt: "JavaScript", height: "h-12", width: "w-12", label: "JavaScript" },
        { src: nodejs, alt: "Node.js", height: "h-12", width: "w-10", label: "Node.js" },
        { src: react, alt: "React", height: "h-10", width: "w-12", label: "React" },
        { src: html, alt: "HTML", height: "h-10", width: "w-10", label: "HTML" },
        { src: css, alt: "CSS", height: "h-10", width: "w-12", label: "CSS" },
        { src: materialui, alt: "Material UI", height: "h-10", width: "w-12", label: "Material UI" },
        { src: mysql, alt: "MySQL", height: "h-12", width: "w-12", label: "MySQL" },
        { src: assembly, alt: "Assembly", height: "h-12", width: "w-12", label: "Assembly" },
        { src: aws, alt: "AWS", height: "h-12", width: "w-12", label: "AWS" },
        { src: docker, alt: "Docker", height: "h-10", width: "w-12", label: "Docker" },
        { src: salesforce, alt: "Salesforce", height: "h-18", width: "w-12", label: "Salesforce" },
    ];
    
    const iconsRow2 = [
        { src: materialui, alt: "Material UI", height: "h-10", width: "w-12", label: "Material UI" },
        { src: mysql, alt: "MySQL", height: "h-12", width: "w-12", label: "MySQL" },
        { src: assembly, alt: "Assembly", height: "h-12", width: "w-12", label: "Assembly" },
        { src: aws, alt: "AWS", height: "h-12", width: "w-12", label: "AWS" },
        { src: docker, alt: "Docker", height: "h-10", width: "w-12", label: "Docker" },
        { src: salesforce, alt: "Salesforce", height: "h-18", width: "w-12", label: "Salesforce" },
    ];
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Technologies</h1>
            <div className="flex flex-wrap justify-start items-center gap-6 mb-4">
                {iconsRow1.map((icon, index) => (
                    <div key={index} className="flex flex-col items-center mb-4">
                        <div className="bg-gray-300 border-gray-400 border rounded-full flex items-center justify-center h-28 w-28">
                            <div className="bg-white border-gray-500 border rounded-full flex items-center justify-center h-20 w-20">
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