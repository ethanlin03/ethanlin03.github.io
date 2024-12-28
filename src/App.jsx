import { useState } from 'react'
import NavBar from './components/NavBar'
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
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/resume" element={<ResumePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
