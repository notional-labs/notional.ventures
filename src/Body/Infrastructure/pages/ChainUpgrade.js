import React from "react";
import "./ChainUpgrade.css";
import ServiceNav from "../components/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import { useState, useEffect } from "react";
import ChainUpgradeList from "../components/ChainUpgradeList";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/imgs/loading.gif";

const facts = ["Notional are happy to make our customer sastified"];

const ChainUpgrade = () => {

  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
     {!isLoading && <div className="chain-upgrade-section">
        <ServiceNav />
        <div className="chain-upgrade-container">
          <div className="title">Chain Upgrade</div>
          <p className="text">
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