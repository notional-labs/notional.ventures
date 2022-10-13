import React, { useState, useEffect } from "react";
import "./ChainUpgrade.css";
import ServiceNav from "../components/nav/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import ChainUpgradeList from "../components/Upgrade/ChainUpgradeList";
import Loading from "../../../media/imgs/loading.webm";
import Footer from "../../../Footer/Footer";

const facts = ["Notional strives to satisfy our customers"];

const ChainUpgrade = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];

  useEffect(() => {
    document.title = "Upgrade | Notional";
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <video autoPlay loop muted playsInline>
            <source src={Loading} type="video/webm" />
          </video>
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
              Automatically query upgrade information for chains that we validate
            </p>
            <div className="upgrades">
              <ChainUpgradeList upgrade={STAKES} />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default ChainUpgrade;
