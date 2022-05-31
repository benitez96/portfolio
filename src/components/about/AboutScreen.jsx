import React, {memo} from 'react';
import {useSection} from '../../hooks/useSection';
import {EmailBox} from './EmailBox';
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai';

export const AboutScreen = memo(({ setSection }) => {

  const { ref } = useSection('about', setSection)
  return (
    <section ref={ ref } className="w-auto p-4 m-4 mb-1" id="about">
      <h3 className="mb-4 text-2xl font-bold">Contact</h3>
      <EmailBox />
      <section className="flex items-center justify-center p-8">


        <a href="https://www.linkedin.com/in/danielandresbenitez" target="_blank">
          <AiFillLinkedin className="text-6xl" />
        </a>
        <a href="https://github.com/benitez96" target="_blank">
          <AiFillGithub className="ml-6 text-5xl" />
        </a>

      </section>
    </section>
  );
})

