import React from "react";
import ChainUpgradeItem from "./ChainUpgradeItem";
import "./ChainUpgradeList.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ChainUpgradeList = (props) => {
  const upgrade = props.upgrade;
  // console.log(upgrade[0].api);
  const [loadedUpgrade, setLoadedUpgrade] = useState([]);
  const [newState, setNewState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUpgradeInfo();
  }, []);

  const fetchUpgradeInfo = async () => {
    try {
      // setIsLoading(true)
      for (let index = 0; index < upgrade.length; index++) {
        if (upgrade[index].name === "Kava") {
          continue;
        }
        const res = await axios.get(`${upgrade[index].api}/upgrade`);
        if (res.data.name !== "NaN") {
          let obj = { ...res.data };
          const info = await axios.get(`${upgrade[index].api}/information`);
          obj["currentHeight"] = info.data.height;
          obj["blockTime"] = info.data.blockTime;
          obj["name"] = info.data.name;
          loadedUpgrade.push(obj);
          // console.log(index);
        }
      }
      const seen = new Set();
      const filteredUpgrades = loadedUpgrade.filter((el) => {
        const duplicate = seen.has(el.name);
        // console.log(seen)
        seen.add(el.name);
        return !duplicate;
      });
      setNewState([...filteredUpgrades]);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      // setError(true);
    }
  };

  const ConvertHourToDay = (numberOfHours) => {
    var Days = Math.floor(numberOfHours / 24);
    var Remainder = numberOfHours % 24;
    var Hours = Math.floor(Remainder);
    var Minutes = Math.floor(60 * (Remainder - Hours));
    return `${Days} Days ${Hours} Hours ${Minutes} Minutes`;
  };

  return (
    <div className="chain-upgrades">
      <table className="chain-upgrade-table">
        <tr className="chain-upgrades-title">
          <th>NETWORK</th>
          <th>CURRENT BLOCK</th>
          <th>UPDATE BLOCK</th>
          <th>VERSION</th>
          <th>ESTIMATED TIME LEFT</th>
        </tr>
        {!isLoading ? (
          newState.map(
            (data) =>
              parseInt(data.currentHeight) < data.height && (
                <ChainUpgradeItem
                  name={data.name}
                  currentHeight={data.currentHeight}
                  version={data.version}
                  updateHeight={data.height}
                  blockTime={data.blockTime}
                  estimateTime={ConvertHourToDay(
                    (
                      ((data.height - parseInt(data.currentHeight)) *
                        data.blockTime) /
                      3600
                    ).toFixed(2)
                  )}
                />
              )
          )
        ) : (
          <ChainUpgradeItem
            name={<Skeleton enableAnimation={true} />}
            currentHeight={<Skeleton enableAnimation={true} />}
            version={<Skeleton enableAnimation={true} />}
            updateHeight={<Skeleton enableAnimation={true} />}
            blockTime={<Skeleton enableAnimation={true} />}
            estimateTime={<Skeleton enableAnimation={true} />}
          />
        )}
      </table>
    </div>
  );
};

export default ChainUpgradeList;
