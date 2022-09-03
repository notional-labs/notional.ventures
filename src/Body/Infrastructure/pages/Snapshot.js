import React from "react";
import "./Snapshot.css";
import ServiceNav from "../components/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import SnapshotList from "../components/SnapshotList";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/background-decor/loading.gif";
import { useState, useEffect } from "react";
const facts = ["Notional are happy to make our customer sastified"];

const Snapshot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
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
            <div className="test">Snapshots</div>
            <p className="text">
              We are providing snapshot for all the chain that we validate
            </p>
            <div className="snapshot-instruction">
              Which included: <br />
              Addressbook.json <br />
              This will be used for <br />
              3. data_YYYYMMDD.json <br />
              This is default pruned data of the chain which is generated at the
              specific time in filename. The <br />
              data will be pruned within 14-day period <br />
            </div>
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
