import React from "react";
import Osmosis from "../../media/imgs/Contribution/Carousel/osmosis.png";
import Juno from "../../media/imgs/Contribution/Carousel/juno.png";
import Cosmos from "../../media/imgs/Contribution/Carousel/cosmos.png";
// import Stargaze from "../../media/imgs/Contribution/Carousel/stargaze.png";
// import Cheq from "../../media/imgs/Contribution/Carousel/cheqd.png";
import Omniflix from "../../media/imgs/Contribution/Carousel/omniflix.png";
import Sifchain from "../../media/imgs/Contribution/Carousel/sifchain.png";
import Evmos from "../../media/imgs/Contribution/Carousel/evmos.png";
import "./PartnerCarousel.css";

const AutoSlide = () => {
    return (
        <React.Fragment>
            <div className="slider">
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
                        <img src={Sifchain} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Evmos} alt="" />
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
                        <img src={Sifchain} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Evmos} alt="" />
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
                        <img src={Sifchain} alt="" />
                    </div>
                    <div className="slide">
                        <img src={Evmos} alt="" />
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
