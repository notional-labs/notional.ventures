import React from "react";
import "./SnapshotItem.css";

const SnapshotItem = (props) => {
  return (
    <>
      <li key={props.id} className="snapshot-items">
        <div className="snapshot-item__content">
          <div className="snapshot-item__image">
            <img
              src={props.image}
              alt={props.name}
              className="snapshot-item__image__detail"
            />
          </div>
          <div className="snapshot-item__info">
            <h2>{props.name}</h2>
          </div>
        </div>
      </li>
    </>
  );
};

export default SnapshotItem;
