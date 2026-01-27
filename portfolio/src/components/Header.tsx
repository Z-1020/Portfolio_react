import { Link, useLocation } from 'react-router-dom'
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <header className="bg-stone-400 text-white p-4 font-roboto">
       <div className="max-w-7xl mx-auto flex items-center">
      <h1 className='text-stone-50 text-3xl mr-4'>Portfolio</h1>
      <nav className="ml-auto">
        <div className="flex items-center ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-white text-2xl focus:outline-none md:hover:text-stone-600"
          aria-label="Menu"
        >
           {isOpen ? "X": "☰"}
        </button>
        <ul className={`${isOpen ? "block" : "hidden"} md:flex absolute text-center hover:text-stone-600 md:static top-16 left-0 w-full md:w-auto bg-stone-400 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}
              className="text-white hover:text-stone-600 md:focus:text-stone-900">
              Accueil
            </Link>
          </li>

          <li>
            <Link to="/Skills" onClick={() => setIsOpen(false)}
              className="text-white hover:text-stone-600 md:focus:text-stone-900">
              Compétences
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}
              className="text-white hover:text-stone-600 md:focus:text-stone-900">
              Projets
            </Link>
          </li>

          <li>
            <Link to="/Interests" onClick={() => setIsOpen(false)}
              className="text-white hover:text-stone-600 md:focus:text-stone-900">
              Centre d'intérêts
            </Link>
          </li>
        </ul>
            </div>
            
      </nav>
      </div>
    </header>
  )
}