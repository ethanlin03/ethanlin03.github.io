import NavBar from "../components/NavBar";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ExperiencePage from "./ExperiencePage";
import ResumePage from "./ResumePage";
import ContactPage from "./ContactPage";

const HomePage = () => {
    return (
        <div>
            <NavBar home={true}/>
            <AboutPage needNavBar={false}/>
            <ProjectsPage id="projectsection" needNavBar={false}/>
            <ExperiencePage id="experiencesection" needNavBar={false}/>
            <ResumePage id="resumesection" needNavBar={false}/>
            <ContactPage id="contactsection" needNavBar={false} viewHeight={0}/>
        </div>
    )
};

export default HomePage;