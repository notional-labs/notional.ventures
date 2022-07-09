import React, { useState } from "react";
import "./SnapshotItem.css";
import "./SnapshotModal";
import SnapshotModal from "./SnapshotModal";
const SnapshotItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const showHandler = () => {
    setShowModal(true);
  };
  const closeHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <SnapshotModal
        image={props.image}
        name={props.name}
        onCancel={closeHandler}
        show={showModal}
      />
      <button onClick={showHandler} className="snapshot-items-btn">
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
      </button>
    </>
  );
};

export default SnapshotItem;
