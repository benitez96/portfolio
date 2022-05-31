import React, { memo } from 'react';
import { TechnologyCard } from './TechnologyCard';

import { technologies } from '../../data/technologies';
import {useSection} from '../../hooks/useSection';

export const TechnologiesScreen = memo(({ setSection }) => {

  const { ref } = useSection('technologies', setSection)
  
  return (
    <section ref={ref} className="flex flex-col justify-center w-auto py-8 bg-black align-center" id='technologies'>
      <h3 className="my-4 ml-8 text-2xl font-bold bg-black">Technologies</h3>
      <div className="flex flex-wrap justify-center align-center">
        {
        technologies.map( t => 
          <TechnologyCard
            key={t.key} 
            title={t.title}
            image={t.image}
            date={t.started_at} 
          />
        )
        }   
      </div>
    </section>


  );
})
