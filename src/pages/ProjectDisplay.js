import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">

        <h1> {project.name}</h1>
        <div className="aboutproj">
          <div className="proj-image">
            <img src={project.displayimage} />
          </div>
          <div className="desc">
            <b className="name">{project.name}</b>
            <a>{project.about}</a> 
            <p className="projlink"
            onClick={() => window.open(project.link)}>
            Check it out on Github!    
            <a className ="icon"><GitHubIcon /></a> 
          </p>
          </div>
          </div>  
    </div>
  );
}

export default ProjectDisplay;