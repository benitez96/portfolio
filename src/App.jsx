import { NavbarComponent } from './components/shared/Navbar';
import { HomeScreen } from './components/home/HomeScreen';
import { ExperienceScreen } from './components/experience/ExperienceScreen';
import { AboutScreen } from './components/about/AboutScreen';
import { TechnologiesScreen } from './components/technologies/TechnologiesScreen';
import {ProjectScreen} from './components/projects/ProjectScreen';



export const App = () => {


  return (
    <>
      <NavbarComponent/>
      <HomeScreen />
      <ProjectScreen />
      <ExperienceScreen />
      <TechnologiesScreen />
      <AboutScreen />
    </>
  );
}

