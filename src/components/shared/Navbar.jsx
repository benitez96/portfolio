import React from 'react';

export const NavbarComponent = ({ section: active, setSection }) => {


  const handleChangeSection = (e) => {
    const url = e.target.href.split('/')
    const section = url[url.length - 1]
    setSection(section)
  }

  return (
    <header 
      className="sticky top-0 w-auto text-gray-400 bg-black body-font"
      style={{'zIndex': 100}}>
      <div className="container flex flex-row flex-wrap items-center justify-between p-5 mx-auto sm:justify-start">
        <span className="ml-3 text-xl">
            <a onClick={handleChangeSection} href="#" className="text-lg font-bold ">
              Daniel Benitez
            </a>
        </span>
        <nav className="flex-wrap items-start justify-center hidden py-1 pl-4 ml-4 text-base border-l border-gray-700 sm:flex">
          <a onClick={handleChangeSection} href="#" 
            className={
              active == '#'
              ? "mr-5 hover:text-white transition duration-1000 border-b-2 border-green-500"
              : "mr-5 hover:text-white transition hover:duration-1000 "
            }
          >
            Home
          </a> 
          <a onClick={handleChangeSection} href="#projects" 
            className={
              active == '#projects'
              ? "mr-5 hover:text-white transition duration-1000 border-b-2 border-green-500"
              : "mr-5 hover:text-white transition hover:duration-1000 "
            }
          >
            Projects
          </a> 
          <a onClick={handleChangeSection} href="#experience" 
            className={
              active == '#experience'
              ? "mr-5 hover:text-white transition duration-1000 border-b-2 border-green-500"
              : "mr-5 hover:text-white transition hover:duration-1000 "
            }
          >
            Experience
          </a> 
          <a onClick={handleChangeSection} href="#technologies" 
            className={
              active == '#technologies'
              ? "mr-5 hover:text-white transition duration-1000 border-b-2 border-green-500"
              : "mr-5 hover:text-white transition hover:duration-1000 "
            }
          >
            Technologies
          </a> 
          <a onClick={handleChangeSection} href="#about" 
            className={
              active == '#about'
              ? "mr-5 hover:text-white transition duration-1000 border-b-2 border-green-500"
              : "mr-5 hover:text-white transition hover:duration-1000 "
            }
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}

        <div className="flex sm:hidden">
          <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>


      </div>
    </header>


  );
}






