import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="flex-grow">
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
