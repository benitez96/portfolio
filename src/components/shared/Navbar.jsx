import React, {useEffect, useState} from 'react';

export const NavbarComponent = () => {

  const [bg, setBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <header 
      className={ `w-screen fixed z-10 text-gray-400 ${bg || menuOpen ? 'bg-teal-600 text-white' : '' } body-font transition duration-500` }
      style={{'zIndex': 100}}>
      <div className="container flex flex-row flex-wrap items-center justify-between p-5 mx-auto sm:justify-start">
        <span className="ml-3 text-xl">
            <a href="#" className="text-lg font-bold ">
              Daniel Benitez
            </a>
        </span>
        <nav className={`flex-wrap items-start sm:justify-center ${ menuOpen ? '' : 'hidden' } sm:block py-1 sm:pl-4 ml-4 text-white sm:border-l ${bg ? 'border-gray-400' :'border-gray-700'} xs:flex-col flex transition-all duration-500`}>
          <a href="#" className="mr-5 hover:text-white w-full sm:w-auto" >
            Home
          </a> 
          <a href="#projects" className="mr-5 hover:text-white w-full" >
            Projects
          </a> 
          <a href="#experience" className="mr-5 hover:text-white w-full" >
            Experience
          </a> 
          <a href="#technologies" className="mr-5 hover:text-white w-full" >
            Technologies
          </a> 
          <a href="#about" className="mr-5 hover:text-white w-full" >
            Contact
          </a>
        </nav>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}

        <div className="absolute top-5 right-5 sm:invisible">
          <button onClick={() => setMenuOpen(prev => !prev)} type="button" className={ `text-gray-500 hover:text-white focus:outline-none focus:text-gray-600` } aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className={ `w-6 h-6 fill-current ${menuOpen || bg ? 'text-white' : '' }` }>
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>



      </div>
    </header>


  );
}






