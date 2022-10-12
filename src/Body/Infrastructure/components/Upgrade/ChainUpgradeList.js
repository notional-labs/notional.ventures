import React from "react";
import ChainUpgradeItem from "./ChainUpgradeItem";
import "./ChainUpgradeList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import EstimateTime from "./EstimateTime";
import "react-loading-skeleton/dist/skeleton.css";

const ChainUpgradeList = (props) => {
  const upgrade = props.upgrade;
  const [loadedUpgrade] = useState([]);
  const [newState, setNewState] = useState([]);
  // const [newStates, setNewStates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUpgradeInfo();
  }, [loadedUpgrade]);

  const fetchUpgradeInfo = async () => {
    try {
      for (let index = 0; index < upgrade.length; index++) {
        const res = await axios.get(`${upgrade[index].api}/upgrade`);
        if (res.data.version !== "NaN") {
          let obj = { ...res.data };
          const info = await axios.get(`${upgrade[index].api}/information`);
          obj["currentHeight"] = info.data.height;
          obj["ping"] = upgrade[index].ping;
          obj["blockTime"] = info.data.blockTime;
          obj["name"] = upgrade[index].name;
          loadedUpgrade.push(obj);
        }
      }
      console.log(loadedUpgrade);
      const seen = new Set();
      const filteredUpgrades = loadedUpgrade.filter((el) => {
        const duplicate = seen.has(el.name);
        seen.add(el.name);
        return !duplicate;
      });
      setNewState([...filteredUpgrades]);
      console.log(newState);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
    // try {
    //   const res = await axios.get(`https://backend.notional.ventures/upgrade`);
    //   setNewState(res.data);
    //   for (let i = 0; i < newState.length; i++) {
    //     // console.log(newState[i].key);
    //     for (let j = 0; j < upgrade.length; j++) {
    //         if (newState[i].key === upgrade[j].daenom && newState[i].version !== "NaN") {
    //         let obj = { ...newState };
    //         const info = await axios.get(`${upgrade[j].api}/information`);
    //         obj[i]["currentHeight"] = info.data.height;
    //         obj[i]["blockTime"] = info.data.blockTime;
    //         loadedUpgrade.push(obj);
    //       }
    //     }
    //   }
    //   console.log(loadedUpgrade);
    //   console.log(loadedUpgrade.length);
    //   const seen = new Set();
    //   const filteredUpgrades = loadedUpgrade.filter((el) => {
    //     const duplicate = seen.has(el.name);
    //     seen.add(el.name);
    //     return !duplicate;
    //   });
    //   setNewStates([...filteredUpgrades]);
    //   console.log(newStates);
    //   setIsLoading(false);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="chain-upgrades">
      <table className="chain-upgrade-table">
        <thead className="chain-upgrades-title">
          <tr>
            <th>NETWORK</th>
            <th>CURRENT BLOCK</th>
            <th>UPDATE BLOCK</th>
            <th>VERSION</th>
            <th>ESTIMATED TIME LEFT</th>
          </tr>
        </thead>
        {!isLoading ? (
          newState.map(
            (data) =>
              parseInt(data.currentHeight) <= data.height && (
                <ChainUpgradeItem
                  key={data.id}
                  name={
                    data.votingPeriod === "True"
                      ? data.name + " (Voting Period)"
                      : data.name
                  }
                  currentHeight={data.currentHeight}
                  ping={data.ping}
                  version={data.version}
                  updateHeight={data.height}
                  estimateTime={
                    <EstimateTime
                      estimatedTime={(
                        (data.height - data.currentHeight) *
                        data.blockTime
                      ).toFixed(0)}
                    />
                  }
                />
              )
          )
        ) : (
          <ChainUpgradeItem
            name={<Skeleton enableAnimation={true} />}
            currentHeight={<Skeleton enableAnimation={true} />}
            version={<Skeleton enableAnimation={true} />}
            updateHeight={<Skeleton enableAnimation={true} />}
            estimateTime={<Skeleton enableAnimation={true} />}
          />
        )}
      </table>
    </div>
  );
};

export default ChainUpgradeList;
