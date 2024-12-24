import { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <h1 className="flex justify-center items-center h-screen">Home Page</h1>
      </div>
    </Router>
  )
}

export default App
