import React from "react";
import "./Snapshot.css";
import ServiceNav from "../components/nav/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import SnapshotList from "../components//Snapshot/SnapshotList";
import Loading from "../../../media/imgs/loading.webm";
import { useState, useEffect } from "react";
const facts = [
  "We currently support PebbleDB snapshot",
  "Tired of waiting the node to catch up? Snapshot will boost your work!",
  "State-sync is only supported in some specific chains",
];

const Snapshot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];

  useEffect(() => {
    document.title = "Snapshot | Notional";
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
        <div className="snapshot-section">
          <ServiceNav />
          <div className="snapshot-container">
            <p className="snapshot-title">Snapshot</p>
            <p className="snapshot-text">
            Notional considerably improves the time it takes to re-sync nodes to the current block. We achieve this by creating various compressed archives that we deliver from high-performance services. The service is crucial for validators and other service providers who require fast deployments or quick recovery of existing services.
            </p>
            <div className="snapshot">
              <SnapshotList snapshot={STAKES} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Snapshot;
