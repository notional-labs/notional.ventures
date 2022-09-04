import React from "react";
import "./Project.css";
import Diglogo from "../../media/imgs/Projects/dig-logo.png";
import Craft from "../../media/imgs/Projects/economy-logo.png";
import ProjectList from "./ProjectList";

const Project = () => {
  const PROJECTS = [
    {
      id: "p1",
      image: `${Diglogo}`,
      name: "Digchain",
      url: "https://digchain.org"
    },
    {
      id: "p2",
      image: `${Craft}`,
      name: "Craft Economy",
      url: "https://github.com/notional-labs/craft"
    },
  ];
  return (
    <div id="Project" className="project">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Our Projects</p>
      </div>
      <ProjectList items={PROJECTS} />
    </div>
  );
};

export default Project;
