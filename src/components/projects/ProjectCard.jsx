import React, { memo } from 'react';
import {
  AiOutlineLink,
  AiFillGithub
} from 'react-icons/ai';

export const ProjectCard = memo( ({ title, description, image, url, github }) => {

  
  return (

    <article onClick={() => window.open(url)} className="relative flex justify-center w-64 p-3 px-5 m-3 h-80 rounded-md bg-zinc-900">
      <header>
        <img className="object-cover h-full" src={ image } alt={ title }/>
      </header>
      <footer className="absolute bottom-0 flex flex-col justify-between w-full px-1 text-center bg-gradient-to-t from-black hover:via-black hover:bg-opacity-60 h-3/5  transition-all duration-500">
        <div className="w-full mt-16 shrink">
          <p className="block text-2xl font-bold text-gray-100">{ title }</p>
          <span className="text-sm text-gray-200 w-100">{ description }</span>
        </div>
        <div className="flex items-center justify-center p-1 pb-3">
          <a href={url} target="_blank">
            <AiOutlineLink className="text-xl" />
          </a>
          <a href={github} target="_blank">
            <AiFillGithub className="ml-2 text-xl" />
          </a>
        </div>
      </footer>
    </article>

  );
} )
