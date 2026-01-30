import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import Header from './components/Header.tsx'
import Skills from './pages/Skills.tsx'
import Interests from './pages/Interests.tsx'
import Projects from './pages/Projects.tsx'
import Footer from './components/Footer.tsx'
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Interests" element={<Interests />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
    <Footer />
    </div>
  )
}



