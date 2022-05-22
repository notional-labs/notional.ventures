import "./Contributions.css";
import React from "react";
import AutoSlide from "./PartnerCarousel";

const Contributions = () => {
  return (
    <div className="contributions">
      <div id="Contribution" className="title">
        <hr className="bar"></hr>
        <p className="name">Contributions</p>
        <p className="text">
          Notional Labs is committed to engaging in governance and community
          matters on every chain we validate. A team member is delegated to each
          chain to ensure dependable, genuine communication with project
          stakeholders. We also commit code to every chain we validate and have
          members on the core teams of several major projects, including
          Osmosis, Juno, and Sifchain.{" "}
        </p>
      </div>

      <AutoSlide />
      
      <div className="companyinfo">
        <div className="companyinfo-item companyinfo-item__1">
          <div className="infoStyle">
            <div className="info-number">40</div>
            <div className="info-text">Chains operating</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__2">
          <div className="infoStyle">
            <div className="info-number">99,3%</div>
            <div className="info-text">Uptime</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__3">
          <div className="infoStyle">
            <div className="info-number">4183</div>
            <div className="info-text">Unique Users</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__4">
          <div className="infoStyle">
            <div className="info-number">$12M</div>
            <div className="info-text">Company Value</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__5">
          <div className="infoStyle">
            <div className="info-number">$345K</div>
            <div className="info-text">Anual Rewards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
