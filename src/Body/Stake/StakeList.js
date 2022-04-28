import React from "react";
import StakeItem from "./StakeItem";
import "./StakeList.css";

const StakeList = (props) => {
  return (
    <ul className="stake-list">
      {props.stakes.map((stake) => (
        <StakeItem
          id={stake.id}
          image={stake.image}
          name={stake.name}
          api={stake.api}
        />
      ))}
    </ul>
  );
};

export default StakeList;
