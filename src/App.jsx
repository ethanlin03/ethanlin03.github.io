import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

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
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage needNavBar={true} about={true}/>}/>
          <Route path="/projects" element={<ProjectsPage needNavBar={true}/>} />
          <Route path="/experience" element={<ExperiencePage needNavBar={true}/>} />
          <Route path="/resume" element={<ResumePage needNavBar={true}/>}/>
          <Route path="/contact" element={<ContactPage needNavBar={true} viewHeight={80}/>}/>
        </Routes>
      </div>
    </Router>
  )
};

export default App;
