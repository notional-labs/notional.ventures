import React from "react";
import SnapshotItem from "./SnapshotItem";
import "./SnapshotList.css";
import { useState } from "react";

const SnapshotList = (props) => {
  const [snapshot] = useState(props.snapshot);

  const displaySnapshot = snapshot
  
    .map((snapshot) => {
      return (
        <SnapshotItem
          showModal={props.showModal}
          chainName = {props.chainName}
          key={snapshot.id}
          ping={snapshot.ping}
          id={snapshot.id}
          image={snapshot.image}
          name={snapshot.name}
          api={snapshot.api}
          daenom={snapshot.daenom}
        />
      );
    });

  return (
    <div className="snapshot-list-container">
      <ul className="snapshot-list">{displaySnapshot}</ul>
    </div>
  );
};

export default SnapshotList;
