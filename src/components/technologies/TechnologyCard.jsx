import React, { memo } from 'react';
import './styles.css'
import moment from 'moment';

export const TechnologyCard = memo( ({ title, image, date, children }) => {
  const dateFormated = moment(date).fromNow(true);

  console.log(children)
  
  return (

    <>
      <article className="w-64 p-3 px-5 m-3 h-80 rounded-md bg-neutral">
        <header>
          <img className="object-cover h-full" src={ image } alt={ title }/>
        </header>
        <footer className="py-5 text-center">
          <p className="block text-2xl font-bold text-gray-400 dark:text-white">{ title }</p>
          <span className="text-sm text-gray-500 dark:text-gray-200">Experience: { dateFormated }</span>
        </footer>

      </article>
    </>

  );
} )
