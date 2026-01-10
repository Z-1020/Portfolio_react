import { Link, useLocation } from 'react-router-dom'


export default function Header() {
  const { pathname } = useLocation()
  return (
    
    <header className="bg-sky-600 text-white p-4 flex justify-center items-center">
      <h1 className='text-stone-50 text-3xl mr-4'>Portfolio</h1>
      <nav className="max-w-6xl mx-auto flex gap-6 flex justify-end text-stone-50 text-center">
        {pathname === '/' && (
          <>
            
            <Link to="/PersonalProjects" className='text-sm/6'>Projets personnels</Link>
            <Link to="/EducationProjects" className='text-sm/6'>Formation</Link>
            <Link to="/Interests" className='text-sm/6'>Centre d'intérêts</Link>
            
          </>
        )}
        {pathname === '/PersonalProjects' && (
          <>
            <Link to="/" className='text-sm/6'>Accueil</Link>
            <Link to="/EducationProjects" className='text-sm/6'>Formation</Link>
            <Link to="/Interests" className='text-sm/6'>Centre d'intérêts</Link>
            
          </>
        )}
        {pathname === '/EducationProjects' && (
          <>
            <Link to="/" className='text-sm/6'>Accueil</Link>
            <Link to="/PersonalProjects" className='text-sm/6'>Projets personnels</Link>
            <Link to="/Interests" className='text-sm/6'>Centre d'intérêts</Link>
            
          </>
        )}
        {pathname === '/Interests' && (
          <>
            <Link to="/" className='text-sm/6'>Accueil</Link>
            <Link to="/PersonalProjects" className='text-sm/6'>Projets personnels</Link>
            <Link to="/EducationProjects" className='text-sm/6'>Formation</Link>
            
          </>
        )}
      </nav>
    </header>
  )
}