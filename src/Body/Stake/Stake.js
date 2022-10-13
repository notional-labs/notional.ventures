import React from "react";
import "./Stake.css";
import { STAKES } from "./chains-data";
import StakeList from "./StakeList";

const Stake = (props) => {
  return (
    <div id="Delegate" className="stake-section">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Stake With Us</p>
        <p className="text">
          Notional uses in-house hardware and has developers in the office 24/7
          on shifts to quickly respond to issues as they arise. Validating
          outside of the cloud increases decentralization and dramatically
          improves epoch time, meaning we miss less blocks, and you get better
          rewards.
        </p>
      </div>
      <div className="stake">
        <StakeList 
          stakes={STAKES} 
          showModal = {props.showModal}
          chainName = {props.id}
        />
      </div>
    </div>
  );
};

export default Stake;
