import "./Contributions.css";
import React from "react";
import AutoSlide from "./Slider";
// import AutoSlide from "./Slider";
// import ContributionsBg from "../media/Group18.png";

const Contributions = () => {
  return (
    <div className="contributions">
      <div className="background" >
        <div className="title">
          <hr className="bar"></hr>
          <p className="name">Contributions</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            ante in nisi ultricies pharetra sed at metus. Integer sem nisi,
            blandit egestas pellentesque eget, facilisis et ipsum. Quisque
            sodales quam eu rhoncus pellentesque.{" "}
          </p>
        </div>
        <div className="ecosystem">
          <AutoSlide/>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
