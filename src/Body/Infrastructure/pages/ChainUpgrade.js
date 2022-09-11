import React from "react";
import "./ChainUpgrade.css";
import ServiceNav from "../components/nav/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import { useState, useEffect } from "react";
import ChainUpgradeList from "../components/Upgrade/ChainUpgradeList";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/imgs/loading.gif";

const facts = ["Notional strives to satisfy our customers"];

const ChainUpgrade = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <GifLoader
            className="loading-logo"
            loading={true}
            imageSrc={Loading}
          />
          <p className="loading-title">DID YOU KNOW</p>
          <p className="loading-text">{randomText}</p>
        </div>
      )}
      {!isLoading && (
        <div className="chain-upgrade-section">
          <ServiceNav />
          <div className="chain-upgrade-container">
            <p className="chain-upgrade-title">Chain Upgrade</p>
            <p className="chain-upgrade-text">
              Automatically query upgrade info for chain that we validate
            </p>
            <div className="upgrades">
              <ChainUpgradeList upgrade={STAKES} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChainUpgrade;
