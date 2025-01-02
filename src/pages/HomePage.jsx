import NavBar from "../components/NavBar";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <AboutPage id="aboutsection"/>
            <ProjectsPage id="projectsection"/>
            <ExperiencePage id="experiencesection"/>
            <ResumePage id="resumesection"/>
            <ContactPage id="contactsection"/>
        </div>
    )
};

export default HomePage;