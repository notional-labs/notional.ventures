import React from "react";
import ChainUpgradeItem from "./ChainUpgradeItem";
import "./ChainUpgradeList.css";
const ChainUpgradeList = () => {
  return (
    <div className="chain-upgrades">
      <table className="chain-upgrade-table">
        <tr>
          <th>NETWORK</th>
          <th>CURRENT BLOCK</th>
          <th>UPDATE BLOCK</th>
          <th>VERSION</th>
          <th>ESTIMATED UPGRADE TIME</th>
        </tr>
        <ChainUpgradeItem />
      </table>
    </div>
  );
};

export default ChainUpgradeList;
