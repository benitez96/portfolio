import { projects } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"

export const ProjectScreen = () => {


  return (
    <section className="flex flex-col bg-black text-white" id='projects'>
      <h3 className="my-4 ml-8 text-2xl font-bold bg-black">Projects</h3>
      <div className="flex flex-wrap justify-center w-auto py-16 bg-black minH-screen align-center">
        {
          projects.map(project => (
            <ProjectCard key={project.id} {...project}/>

          ))
        }
      </div> 
    </section>
  )
}
