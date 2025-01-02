import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage needNavBar={true} marginTop={32}/>}/>
          <Route path="/projects" element={<ProjectsPage needNavBar={true} marginTop={32}/>} />
          <Route path="/experience" element={<ExperiencePage needNavBar={true} marginTop={32}/>} />
          <Route path="/resume" element={<ResumePage needNavBar={true} marginTop={32}/>}/>
          <Route path="/contact" element={<ContactPage needNavBar={true} marginTop={32}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
