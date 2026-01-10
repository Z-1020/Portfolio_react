import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Header() {
  return (
    <div className=" w-h-screen flex bg-midnight  ">
      <h1 className="text-4xl font-bold text-white">
        Bienvenue sur mon Portfolio
      </h1>
      <nav>
        <a href='*'>Centres d'intérêt</a>
        <a href='*'>Projets personnels</a>
        <a href='*'>Projets réalisés lors de ma formation</a>
      </nav>
    </div>
  )
}