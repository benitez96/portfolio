import React, {memo} from 'react';
import Typical from 'react-typical';

import coverVideo from '../../assets/cover.mp4';
import {useSection} from '../../hooks/useSection';
import './styles.css'


export const HomeScreen = memo(( { setSection } ) => {

  const { ref } = useSection('', setSection)

  return (
    <div ref={ ref } className="w-auto h-screen" id='#'>
      <div className="video-container">
        <video autoPlay loop muted src={coverVideo} className="video" />
      </div>
      <section className="bg-black bg-opacity-60 text-white-400 body-font">
        <div className="container flex flex-col items-center justify-center h-screen px-5 py-24 mx-auto opacity-100">
          <div className="w-full max-w-md lg:w-2/3">
            <h1 className="mb-0 text-5xl font-bold md:text-6xl">
                  Daniel Benitez
            </h1>
            <div className="px-1 mb-5 font-bold text-left">
              <Typical 
                steps={[
                'Backend', 500, 
                'Frontend', 500, 
                'Fullstack Developer 💻', 1000
                ]}
                wrapper="p"
              />
            </div>
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-green-600">DOWNLOAD RESUME</button>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
})
