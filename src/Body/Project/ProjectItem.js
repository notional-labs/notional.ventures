import React from "react";
import "./ProjectItem.css";
const ProjectItem = (props) => {
  return (
    <li className="project-item">
      <div className="project-item__content">
        <div className="user-item__image">
          <img
            src={props.image}
            alt={props.name}
            className = "project-img"
          />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
