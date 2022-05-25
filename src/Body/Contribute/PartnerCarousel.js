import React from "react";
import Osmosis from "../../media/logo/osmosis.png";
import Juno from "../../media/logo/juno.png";
import Cosmos from "../../media/logo/cosmos.png";
import Stargaze from "../../media/logo/stargaze.png";
import Cheq from "../../media/logo/cheqd.png";
import Omniflix from "../../media/logo/omniflix.png";
import "./PartnerCarousel.css";

const AutoSlide = () => {
  return (
    <React.Fragment>
      <div className= "slider">
        <div className="slide-track">
          <div className="slide">
            <img src={Osmosis} alt="" />
          </div>
          <div className="slide">
            <img src={Cosmos} alt="" />
          </div>
          <div className="slide">
            <img src={Juno} alt="" />
          </div>
          <div className="slide">
            <img src={Stargaze} alt="" />
          </div>
          <div className="slide">
            <img src={Cheq} alt="" />
          </div>
          <div className="slide">
            <img src={Omniflix} alt="" />
          </div>
          <div className="slide">
            <img src={Osmosis} alt="" />
          </div>
          <div className="slide">
            <img src={Cosmos} alt="" />
          </div>
          <div className="slide">
            <img src={Juno} alt="" />
          </div>
          <div className="slide">
            <img src={Stargaze} alt="" />
          </div>
          <div className="slide">
            <img src={Cheq} alt="" />
          </div>
          <div className="slide">
            <img src={Omniflix} alt="" />
          </div>
          <div className="slide">
            <img src={Osmosis} alt="" />
          </div>
          <div className="slide">
            <img src={Cosmos} alt="" />
          </div>
          <div className="slide">
            <img src={Juno} alt="" />
          </div>
          <div className="slide">
            <img src={Stargaze} alt="" />
          </div>
          <div className="slide">
            <img src={Cheq} alt="" />
          </div>
          <div className="slide">
            <img src={Omniflix} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AutoSlide;
