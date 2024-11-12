import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 m-14"  data-aos = "fade-left">
         <ProjectCard
          title="Myntra Clone"
          main=""
        
         />
         <ProjectCard
           title="Todo App"
         main=""
         />
       <ProjectCard
          title="Portfolio"
        main=""
        />

        <ProjectCard 
          title="Cricket Score Game"
           main=""
        />
      
        < ProjectCard
          title="Portfolio Web With Cursor Ai"
          main="" 
          />
      </div>
    </div>
  );
};

export default Projects;
