import React from "react";
import "./ChainUpgradeItem.css";

const ChainUpgradeItem = (props) => {
  return (
    <>
      <tr className="chain-upgrade-items">
        <td>{props.name}</td>
        <td>{props.currentHeight}</td>
        <td>{props.updateHeight}</td>
        <td>{props.version}</td>
        <td>{props.estimateTime}</td>
      </tr>
    </>
  );
};

export default ChainUpgradeItem;
