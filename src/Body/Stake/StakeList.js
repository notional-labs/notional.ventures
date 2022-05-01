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
          ping={stake.ping}
          keplr={stake.keplr}
          price={stake.price}
          denom={stake.denom}
          address={stake.address}
        />
      ))}
    </ul>
  );
};

export default StakeList;
