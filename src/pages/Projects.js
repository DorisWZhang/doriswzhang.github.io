import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className='title'> My Personal Projects</h1>
      <div className="projectList">
      {ProjectList.map((project, idx) => (
        <div key={idx} className="projectItem">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="projectLink"
          >
            {project.name}
          </a>
          {" "}– {project.tech}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;