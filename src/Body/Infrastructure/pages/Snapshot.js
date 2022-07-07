import React from "react";
import "./Snapshot.css";
import ServiceNav from "../components/ServiceNav";
import {STAKES} from "../../Stake/chains-data"
import SnapshotList from "../components/SnapshotList";
const Snapshot = () => {
  return (
    <div className="snapshot-section">
      <ServiceNav />
      <div className="snapshot-container">
        <div className="test">Snapshots</div>
        <p className="text">ovinsdonvoisdnvios v siodj vdiosjv sdov soijvds voisd</p>
        <div className="snapshot-instruction">
          Which included: <br />
          Addressbook.json <br />
          This will be used for <br />
          2. Statesync <br />
          This contains data files for statesync-supported chains. Use this for <br />
          faster catching up. <br />
          3. data_YYYYMMDD.json <br />
          This is default pruned data of the chain which is generated at the specific time in filename. The <br />
          data will be pruned within 14-day period <br />
        </div>
        <div className="snapshots">
            <SnapshotList snapshots = {STAKES} />
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
