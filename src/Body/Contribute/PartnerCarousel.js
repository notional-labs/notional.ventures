import React from "react";
import Osmosis from "../../media/imgs/Contribution/Carousel/osmosis.avif";
import Juno from "../../media/imgs/Contribution/Carousel/juno.avif";
import Cosmos from "../../media/imgs/Contribution/Carousel/cosmos.avif";
import Omniflix from "../../media/imgs/Contribution/Carousel/omniflix.avif";
import Injective from "../../media/imgs/Contribution/Carousel/injective.avif";
import Evmos from "../../media/imgs/Contribution/Carousel/evmos.avif";
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
                        <img src={Injective} alt="" />
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
