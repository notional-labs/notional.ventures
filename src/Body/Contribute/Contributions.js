import "./Contributions.css";
import React from "react";
import AutoSlide from "./Slider";
// import AutoSlide from "./Slider";
// import ContributionsBg from "../media/Group18.png";

const infoStyle = {
  "text-align": "center",
  margin: "2rem 2rem 2rem 2rem",
  height: "12rem",
};

const infoStyle_number = {
  height: "6rem",
  "font-weight": "600",
  "font-size": "6rem",
};

const infoStyle_text = {
  "margin-top": "20px",
  // "margin-left": "50px",
  "text-align": "center",
  "font-weight": "300",
  "font-size": "2rem",
};

const Contributions = () => {
  return (
    <div className="contributions">
      <div className="background">
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
          <AutoSlide />
        </div>
        <div className="companyinfo">
          <div className="companyinfo-item companyinfo-item__1">
            <div style={infoStyle}>
              <div style={infoStyle_number}>40</div>
              <div style={infoStyle_text}>Chains operating</div>
            </div>
          </div>
          <div className="companyinfo-item companyinfo-item__2">
            <div style={infoStyle}>
              <div style={infoStyle_number}>97,2%</div>
              <div style={infoStyle_text}>Uptime</div>
            </div>
          </div>
          <div className="companyinfo-item companyinfo-item__3">
            <div style={infoStyle}>
              <div style={infoStyle_number}>4183</div>
              <div style={infoStyle_text}>Unique Users</div>
            </div>
          </div>
          <div className="companyinfo-item companyinfo-item__4">
            <div style={infoStyle}>
              <div style={infoStyle_number}>$12M</div>
              <div style={infoStyle_text}>Company Value</div>
            </div>
          </div>
          <div className="companyinfo-item companyinfo-item__5">
            <div style={infoStyle}>
              <div style={infoStyle_number}>$345K</div>
              <div style={infoStyle_text}>Anual Rewards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
