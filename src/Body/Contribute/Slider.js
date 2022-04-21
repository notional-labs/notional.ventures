import React from "react";
import Osmosis from '../../media/image4.png'
import Juno from '../../media/image7.png'
import Atom from '../../media/image9.png'
import './Slider.css'

const AutoSlide = () => {

  return (
    <React.Fragment>
      <img className="osmo-ctb" src={Osmosis} alt='osmosis'/>
      <img className="juno-ctb" src={Juno} alt='juno'/>
      <img className="gaia-ctb" src={Atom} alt='gaia'/>
    </React.Fragment>
  );
}

export default AutoSlide;