import React from "react";
import "./Team.css";
import { Carousel } from "3d-react-carousal";
import { members } from "./Member";
const Team = () => {
  return (
    <div className="team">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Our Team</p>
      </div>
      <div className="member">
        <Carousel
          slides={members}
          autoplay={true}
          interval={5000}
          arrows={false}
        />
      </div>
    </div>
  );
};

export default Team;
