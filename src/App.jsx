import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutSection'
import ProjectsPage from './pages/ProjectsSection'
import ExperiencePage from './pages/ExperienceSection'
import ResumePage from './pages/ResumeSection'
import ContactPage from './pages/ContactSection'
import NavBar from './components/NavBar'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<AboutPage needNavBar={true} about={true}/>}/>
            <Route path="/projects" element={<ProjectsPage needNavBar={true}/>} />
            <Route path="/experience" element={<ExperiencePage needNavBar={true}/>} />
            <Route path="/resume" element={<ResumePage needNavBar={true}/>}/>
            <Route path="/contact" element={<ContactPage needNavBar={true} viewHeight={80}/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
};

export default App;
