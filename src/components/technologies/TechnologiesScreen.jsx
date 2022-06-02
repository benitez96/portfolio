
import { TechnologyCard } from './TechnologyCard';
import { technologies } from '../../data/technologies';

export const TechnologiesScreen = () => {

  
  return (
    <section className="flex flex-col justify-center w-auto py-8 bg-black text-white align-center" id='technologies'>
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
}
