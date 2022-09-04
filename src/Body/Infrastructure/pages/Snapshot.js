import React from "react";
import "./Snapshot.css";
import ServiceNav from "../components/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import SnapshotList from "../components/SnapshotList";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/background-decor/loading.gif";
import { useState, useEffect } from "react";
const facts = [
  "We currently support PebbleDB snapshot",
  "Tired of waiting the node to catch up? Snapshot will boost your ass!",
  "State-sync is only supported in some specific chains",
];

const Snapshot = () => {
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
      {!isLoading && (
        <div className="snapshot-section">
          <ServiceNav />
          <div className="snapshot-container">
            <p className="snapshot-title">Snapshots</p>
            <p className="snapshot-text">
            Notional considerably improves the time it takes to re-sync nodes to the current block. We achieve this by creating various compressed archives that we deliver from high-performance services. The service is crucial for validators and other service providers who require fast deployments or quick recovery of existing services.
            </p>
            {/* <div className="snapshot-instruction">
              <p className="snapshot-header">Which included:</p>
              Addressbook.json <br />
              This will be used for <br />
              3. data_YYYYMMDD.json <br />
              This is default pruned data of the chain which is generated at the
              specific time in filename. The <br />
              data will be pruned within 14-day period <br />
            </div> */}
            <div className="snapshots">
              <SnapshotList snapshots={STAKES} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Snapshot;
