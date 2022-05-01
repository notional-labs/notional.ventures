import React from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectList.css";
const ProjectList = (props) => {
  return (
    <ul className="project-list">
      {props.items.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          image={project.image}
          name={project.name}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
