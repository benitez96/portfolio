import { NavbarComponent } from './components/shared/Navbar';
import { HomeScreen } from './components/home/HomeScreen';
import { ExperienceScreen } from './components/experience/ExperienceScreen';
import { AboutScreen } from './components/about/AboutScreen';
import { TechnologiesScreen } from './components/technologies/TechnologiesScreen';
import {useCallback, useEffect, useState} from 'react';
import {ProjectScreen} from './components/projects/ProjectScreen';



export const App = () => {

  const [section, setSection] = useState('#')


  return (
    <>
      <NavbarComponent setSection={ setSection } section={ section } />
      <HomeScreen setSection={ setSection } />
      <ProjectScreen setSection={ setSection } />
      <ExperienceScreen setSection={ setSection } />
      <TechnologiesScreen setSection={ setSection } />
      <AboutScreen setSection={ setSection } />
    </>
  );
}

