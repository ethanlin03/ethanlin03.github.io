import SkillIcon from "./SkillIcon";
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ imageSrc, title, skills, description, link }) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        if (link) {
            navigate(link); // Navigate to the specified route
        }
    };

    return (
        <div
            className="relative flex flex-col md:flex-row w-full max-w-[80rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl cursor-pointer"
            onClick={handleLearnMore}
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
                <h6
                    className="mb-2 md:mb-4 block text-base md:text-lg font-semibold uppercase leading-relaxed tracking-normal text-black antialiased text-left"
                >
                    {title}
                </h6>
                <p
                    className="mb-4 block text-sm md:text-base font-normal leading-relaxed text-gray-500 antialiased text-left"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></p>
                <div className="flex flex-wrap mb-4">
                    {skills.map((item, index) => (
                        <SkillIcon key={index} text={item.text} />
                    ))}
                </div>
                <div className="mt-auto">
                    <button
                        type="button"
                        onClick={handleLearnMore}
                        className="flex select-none items-center gap-2 rounded-lg text-center align-middle font-sans text-xs font-bold uppercase text-black transition-transform"
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;