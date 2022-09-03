import React from "react";
import "./ChainUpgrade.css";
import ServiceNav from "../components/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";
import ChainUpgradeList from "../components/ChainUpgradeList";


const ChainUpgrade = () => {

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    {isLoading && (
                <div className="loader-container">
                    <RingLoader color="#eaebed" size={130} />
                </div>
            )}
     {!isLoading && <div className="chain-upgrade-section">
        <ServiceNav />
        <div className="chain-upgrade-container">
          <div className="title">Chain Upgrade</div>
          <p className="text no idea">
            Automatically query upgrade info for chain that we validate
          </p>
          <div className="upgrades">
            <ChainUpgradeList upgrade = {STAKES}/>
          </div>
        </div>
      </div>}
    </>
  );
};

export default ChainUpgrade;