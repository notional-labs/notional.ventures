import "./Contributions.css";
import React, { useState, useEffect } from "react";
import AutoSlide from "./PartnerCarousel";
import Filter from "../../media/imgs/Contribution/filter-contribution.avif";
import axios from "axios";
import Abstract from "../../media/imgs/Contribution/abstract-contribution.avif";

const Contributions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
   
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://backend.notional.ventures`);
      setData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="contributions">
      <img src={Filter} alt="Just a filter" className="filter" />
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
      <img src={Abstract} alt="An abstract" className="abstract-contribution" />
      <AutoSlide />

      <div className="companyinfo">
        <div className="companyinfo-item companyinfo-item__1">
          <div className="infoStyle">
            <div className="info-number">{data.chains}</div>
            <div className="info-text">Chains operating</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__2">
          <div className="infoStyle">
            <div className="info-number">{data.uptime * 100}%</div>
            <div className="info-text">Uptime</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__3">
          <div className="infoStyle">
            <div className="info-number">{data.validatorsValue}</div>
            <div className="info-text">Validator's Value</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__4">
          <div className="infoStyle">
            <div className="info-number">{data.companyValue}</div>
            <div className="info-text">Company Value</div>
          </div>
        </div>
        <div className="companyinfo-item companyinfo-item__5">
          <div className="infoStyle">
            <div className="info-number">{data.annualReward}</div>
            <div className="info-text">Annual Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
