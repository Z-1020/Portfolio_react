import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import Header from './components/Header.tsx'
import PersonalProjects from './pages/PersonalProjects.tsx'
import Interests from './pages/Interests.tsx'
import EducationProjects from './pages/EducationProjects.tsx'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PersonalProjects" element={<PersonalProjects />} />
      <Route path="/Interests" element={<Interests />} />
      <Route path="/EducationProjects" element={<EducationProjects />} />
    </Routes>
    </div>
  )
}



