import React from "react";
import Osmosis from "../../media/image4.png";
import Juno from "../../media/image7.png";
import Atom from "../../media/image9.png";
import "./Slider.css";

const AutoSlide = () => {
  return (
    <React.Fragment>
      <figure className="ecosystem-item ecosystem-item__1">
        <img className="ecosystem-image__1" src={Osmosis} alt="osmosis" />
      </figure>
      <figure className="ecosystem-item ecosystem-item__2">
        <img className="ecosystem-image__2" src={Juno} alt="juno" />
      </figure>
      <figure className="ecosystem-item ecosystem-item__3">
        <img className="ecosystem-image__3" src={Atom} alt="gaia" />
      </figure>
    </React.Fragment>
  );
};

export default AutoSlide;
