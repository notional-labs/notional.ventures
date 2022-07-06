import React from "react";
import "./Stake.css";
import { STAKES } from "./chains-data";
import Background from "../../media/background-decor/group19.svg";
import StakeList from "./StakeList";

const Stake = () => {
  return (
    <div id="Delegate" className="stake-section">
      <img src={Background} className = "stake-background" />
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Stake With Us</p>
        <p className="text">
        Notional uses in-house hardware and has developers in the office 24/7 on shifts to quickly respond to issues as they arise. Validating outside of the cloud increases decentralization and dramatically improves epoch time, meaning we miss less blocks, and you get better rewards.{" "}
        </p>
      </div>
      <div className="stake">
        <StakeList stakes={STAKES} />
      </div>
    </div>
  );
};

export default Stake;
