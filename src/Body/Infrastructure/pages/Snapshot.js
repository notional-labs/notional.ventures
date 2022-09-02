import React from "react";
import "./Snapshot.css";
import ServiceNav from "../components/ServiceNav";
import { STAKES } from "../../Stake/chains-data";
import SnapshotList from "../components/SnapshotList";
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";

const Snapshot = () => {
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
