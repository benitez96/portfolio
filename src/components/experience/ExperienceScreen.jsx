import React from 'react';

export const ExperienceScreen = () => {


  return (
    <div className="text-white bg-zinc-900">
      <h3 className="py-4 ml-8 text-2xl font-bold">Experience</h3>
      <div className="flex w-auto py-20 pt-12 h-100 align-center" id='experience'>
        <section className="flex content-center w-full h-full text-gray-400 body-font">
          <div className="container flex flex-wrap content-center px-5 mx-auto">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex items-center justify-center w-10">
                    <div className="w-1 h-full bg-gray-800 pointer-events-none"></div>
                  </div>
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-teal-500 rounded-full">
                    +
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 font-bold tracking-wider text-white title-font text-md">Software Developer</h2>
                    <p className="text-xs">IncluIT (AGO 2021 - ACT)</p>
                    <p className="leading-relaxed">Mainly programming in Python(DRF) and React.</p>
                  </div>
                </div>
                <div className="relative flex">
                  <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-teal-500 rounded-full">
                    +
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="mb-1 font-bold tracking-wider text-white title-font text-md">Python Developer</h2>
                    <p className="text-xs">Eynes SRL (FEB 2021 - SEP 2021)</p>
                    <p className="leading-relaxed">I've learnt a lot about python, linux and servers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
