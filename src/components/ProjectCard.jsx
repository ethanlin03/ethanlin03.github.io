import SkillIcon from "./SkillIcon";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ imageSrc, title, skills, description }) => {
    return (
        <div
            className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl"
        >
            <div
                className="relative m-0 overflow-hidden rounded-t-xl md:rounded-r-none md:rounded-l-xl bg-white bg-clip-border text-gray-700 aspect-w-16 aspect-h-9 md:aspect-w-40 md:aspect-h-10 w-full md:w-1/2"
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-4 md:p-6 flex flex-col justify-start w-full md:w-1/2 relative">
                <h6 className="mb-2 md:mb-4 block text-base md:text-lg font-semibold uppercase leading-relaxed tracking-normal text-black antialiased text-left">
                    {title}
                </h6>
                <p className="mb-6 block text-sm md:text-base font-normal leading-relaxed text-gray-500 antialiased text-left">
                    {description}
                </p>
                <div className="flex flex-wrap mb-4">
                    {skills.map((item, index) => (
                        <SkillIcon key={index} text={item.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;