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
      const res = await axios.get(`https://backend.notional.ventures/upgrade`);
      
      for (let i = 0; i < res.data.length; i++) {
        for (let j = 0; j < upgrade.length; j++) {
            if (res.data[i].key === upgrade[j].daenom && res.data[i].version !== "NaN") {
            let obj = { ...res.data };
            const info = await axios.get(`${upgrade[j].api}/information`);
            obj[i]["currentHeight"] = info.data.height;
            obj[i]["ping"] = upgrade[j].ping;
            obj[i]["blockTime"] = info.data.blockTime;
            loadedUpgrade.push(obj);
          }
        }
      }
      console.log(loadedUpgrade);
      var myData = Object.keys(loadedUpgrade[0]).map(key => {
        return loadedUpgrade[0][key];
      })
      setNewState(myData);
      console.log(newState);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
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
                  key = {data.id}
                  proposalID={data.id.toLocaleString()}
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
