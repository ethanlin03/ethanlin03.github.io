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
            <AboutPage needNavBar={false} marginTop={32}/>
            <ProjectsPage id="projectsection" needNavBar={false} marginTop={0}/>
            <ExperiencePage id="experiencesection" needNavBar={false} marginTop={0}/>
            <ResumePage id="resumesection" needNavBar={false} marginTop={10}/>
            <ContactPage id="contactsection" needNavBar={false} marginTop={10}/>
        </div>
    )
};

export default HomePage;