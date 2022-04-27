import React from "react";
import Osmosis from "../../media/logo/osmosis.png";
import Juno from "../../media/logo/juno.png";
import Cosmos from "../../media/logo/cosmos.png";
import Stargaze from "../../media/logo/stargaze.png";
import Cheq from "../../media/logo/cheqd.png";
import Omniflix from "../../media/logo/omniflix.png";
import "./Slider.css";

const AutoSlide = () => {
  return (
    <React.Fragment>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={Osmosis} alt="" />
          </div>
          <div class="slide">
            <img src={Cosmos} alt="" />
          </div>
          <div class="slide">
            <img src={Juno} alt="" />
          </div>
          <div class="slide">
            <img src={Stargaze} alt="" />
          </div>
          <div class="slide">
            <img src={Cheq} alt="" />
          </div>
          <div class="slide">
            <img src={Omniflix} alt="" />
          </div>
          <div class="slide">
            <img src={Osmosis} alt="" />
          </div>
          <div class="slide">
            <img src={Cosmos} alt="" />
          </div>
          <div class="slide">
            <img src={Juno} alt="" />
          </div>
          <div class="slide">
            <img src={Stargaze} alt="" />
          </div>
          <div class="slide">
            <img src={Cheq} alt="" />
          </div>
          <div class="slide">
            <img src={Omniflix} alt="" />
          </div>
          <div class="slide">
            <img src={Osmosis} alt="" />
          </div>
          <div class="slide">
            <img src={Cosmos} alt="" />
          </div>
          <div class="slide">
            <img src={Juno} alt="" />
          </div>
          <div class="slide">
            <img src={Stargaze} alt="" />
          </div>
          <div class="slide">
            <img src={Cheq} alt="" />
          </div>
          <div class="slide">
            <img src={Omniflix} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AutoSlide;
