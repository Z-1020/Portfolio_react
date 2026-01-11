import { Link, useLocation } from 'react-router-dom'
import { useState } from "react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <header className="bg-sky-600 text-white p-4 font-roboto">
       <div className="max-w-7xl mx-auto flex items-center">
      <h1 className='text-stone-50 text-3xl mr-4'>Portfolio</h1>
      <nav className="ml-auto">
        <div className="flex items-center ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-white text-2xl focus:outline-none"
          aria-label="Menu"
        >
          ☰
        </button>
        <ul
          className={`
            ${isOpen ? "block" : "hidden"}
            md:flex
            absolute md:static top-16 left-0 w-full md:w-auto
            bg-sky-600 md:bg-transparent
            p-4 md:p-0
            space-y-4 md:space-y-0 md:space-x-6
          `}
        >
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300">
              Accueil
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300">
              À propos
            </Link>
          </li>

          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300">
              Projets
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
            </div>
            
      </nav>
      </div>
    </header>
  )
}