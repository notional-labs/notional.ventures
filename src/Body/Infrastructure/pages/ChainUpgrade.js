import React from "react";
import "./ChainUpgrade.css";
import ServiceNav from "../components/ServiceNav";
// import RpcList from "../components/RpcList";
// import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";
import ChainUpgradeList from "../components/ChainUpgradeList";

const ChainUpgrade = () => {
  const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);
  return (
    <>
    {/* {isLoading && (
                <div className="loader-container">
                    <RingLoader color="#eaebed" size={130} />
                </div>
            )} */}
      <div className="chain-upgrade-section">
        <ServiceNav />
        <div className="chain-upgrade-container">
          <div className="title">Chain Upgrade</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            ante in nisi ultricies pharetra sed at metus.{" "}
          </p>
          <div className="upgrades">
            <ChainUpgradeList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChainUpgrade;