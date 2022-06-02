import React from 'react';
import {EmailBox} from './EmailBox';
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai';

export const AboutScreen = () => {

  return (
    <section className="w-auto p-8 pb-1 text-white bg-zinc-900" id="about">
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
}

