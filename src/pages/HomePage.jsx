import NavBar from '../components/NavBar';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import ResumeSection from '../components/ResumeSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="scroll-smooth">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </>
  );
}
