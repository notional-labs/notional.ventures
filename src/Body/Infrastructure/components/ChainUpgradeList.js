import React from "react";
import ChainUpgradeItem from "./ChainUpgradeItem";
import "./ChainUpgradeList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading"
import { purple } from "@mui/material/colors";
import { margin } from "@mui/system";
import { Content } from "antd/lib/layout/layout";
import { withTheme } from "@emotion/react";

const ChainUpgradeList = (props) => {
  const upgrade = props.upgrade
  // console.log(upgrade[0].api);
  const [loadedUpgrade, setLoadedUpgrade] = useState([]);
  const [newState, setNewState] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetchUpgradeInfo();
  }, []);

  const fetchUpgradeInfo = async () => {
    try {
      // setIsLoading(true)
      for (let index = 0; index < upgrade.length; index++) {
        setIsLoading(true)
          const res = await axios.get(`${upgrade[index].api}/upgrade`);
          if (res.data.name !== "NaN") {
            let obj = {...res.data}
            const info = await axios.get(`${upgrade[index].api}/information`); 
            obj["currentHeight"] = info.data.height
            obj["blockTime"] = info.data.blockTime
            obj["name"] = info.data.name
            loadedUpgrade.push(obj)
            // console.log(index);
          }
        }
        const seen = new Set();
        const filteredUpgrades = loadedUpgrade.filter(el => {
          const duplicate = seen.has(el.name);
          // console.log(seen)
          seen.add(el.name);
          return !duplicate;
        });
        setNewState([...filteredUpgrades])
        setIsLoading(false)
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
          {isLoading && <ReactLoading type="spin" color="#F0FFFF" style = {{margin : "0 auto", position:"relative", left: "490px" }}  />}
           {!isLoading && newState.map((data) => (
             (parseInt(data.currentHeight) < data.height) && <ChainUpgradeItem 
              name = {data.name}
              currentHeight = {data.currentHeight}
              version = {data.version}
              updateHeight = {data.height}
              blockTime = {data.blockTime}
            />
          ))}
      </table>
    </div>
  );
};

export default ChainUpgradeList;
