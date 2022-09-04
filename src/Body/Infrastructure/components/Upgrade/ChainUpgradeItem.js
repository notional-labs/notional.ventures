import React from "react";
import "./ChainUpgradeItem.css";

const ChainUpgradeItem = (props) => {
  const estimatedHours = ((props.updateHeight - parseInt(props.currentHeight)) * props.blockTime) / 3600
  return (
    <>
      <tr className="chain-upgrade-items">
        <td>{props.name}</td>
        <td>{props.currentHeight}</td>
        <td>{props.updateHeight}</td>
        <td>{props.version}</td>
        <td>{estimatedHours.toFixed(1)}h</td>
      </tr>
    </>
  );
};

export default ChainUpgradeItem;