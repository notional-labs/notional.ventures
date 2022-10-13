import React from "react";
import "./Team.css";
import { Carousel } from "3d-react-carousal";
import { members } from "./Member";
const Team = () => {
    return (
        <div id="Team" className="team">
            <div className="title">
                <hr className="bar"></hr>
                <p className="name">Our Team</p>
                <p className="text">
                    The Notional Labs team is led by Jacob Gadakian and has 15+
                    highly capable and dedicated members split across
                    infrastructure and relaying, software development, marketing
                    and comms, and administration.
                </p>
            </div>
            <div className="member-container">
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
