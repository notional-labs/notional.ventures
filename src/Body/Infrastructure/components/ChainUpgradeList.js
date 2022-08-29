import React from "react";
import ChainUpgradeItem from "./ChainUpgradeItem";
import "./ChainUpgradeList.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ChainUpgradeList = (props) => {
  const upgrade = props.upgrade
  // console.log(upgrade[0].api);
  const [loadedUpgrade, setLoadedUpgrade] = useState([]);
  // const [error, setError] = useState([]);
  useEffect(() => {
    fetchUpgradeInfo();
  }, []);

  const fetchUpgradeInfo = async () => {
    try {
      for (let index = 0; index < upgrade.length; index++) {

          const res = await axios.get(`${upgrade[index].api}/upgrade`);
          // const element = upgrade[index];
          if (res.data.name !== "NaN") {
            loadedUpgrade.push(res.data)
            console.log(index);
          }
        }
        const seen = new Set();
        const filteredUpgrades = loadedUpgrade.filter(el => {
          const duplicate = seen.has(el.name);
          seen.add(el.name);
          return !duplicate;
        });
        console.log(filteredUpgrades);
    } catch (err) {
        console.log(err.message);
        // setError(true);
    }
};


  return (
    <div className="chain-upgrades">
      <table className="chain-upgrade-table">
        <tr className="chain-upgrades-title">
          <th >NETWORK</th>
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
