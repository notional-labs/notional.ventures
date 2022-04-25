import React from "react";
import "./StakeItem.css";

const StakeItem = (props) => {
  return (
    <li className="stake-item">
      <div className="stake-item__content">
        <div className="stake-item__image">
          <img
            src={props.image}
            alt={props.name}
            style={{ width: "9rem", height: "9rem" }}
          />
        </div>
        <div className="stake-item__info">
          <h2>{props.name}</h2>
        </div>
        <button className="stake-btn">
            Stake
        </button>
      </div>
    </li>
  );
};

export default StakeItem;
