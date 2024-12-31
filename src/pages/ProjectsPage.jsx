import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    return (
        <div>
            <NavBar/>
            <div className="mt-32 flex justify-center">
            <ProjectCard 
                imageSrc=""
                title={"PillPal"} 
                skills={[{ text: "React" }, { text: "Flask" }, { text: "Material-UI" }, { text: "MySQL" }, { text: "JavaScript" }, { text: "Python" }]} 
                description=""
                link="/pillpal"
            />
            </div>
        </div>
    )
};

export default ProjectsPage;