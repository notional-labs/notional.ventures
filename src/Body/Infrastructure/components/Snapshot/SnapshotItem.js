import React, { useState, useEffect } from "react";
import "./SnapshotItem.css";
import "./SnapshotModal";
import SnapshotModal from "./SnapshotModal";
import axios from "axios";

const SnapshotItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [loadedPebbleSnapshotInfo, setLoadedPebbleSnapshotInfo] = useState([]);
  // RocksDB
  // const [error, setError] = useState(false);
  // const [loadedRockSnapshotInfo, setLoadedRockSnapshotInfo] = useState([]);
  const showHandler = () => {
    setShowModal(true);
  };
  const closeHandler = () => {
    setShowModal(false);
  };
  useEffect(() => {
    fetchSnapshotInfo();
  }, [showModal]);
  const fetchSnapshotInfo = async () => {
    try {
      const res = await axios.get(`${props.api}/snapshot`);
      setLoadedPebbleSnapshotInfo(res.data.goleveldb);
      // setLoadedRockSnapshotInfo(res.data.rocksdb);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <SnapshotModal
        image={props.image}
        name={props.name}
        daenom={props.daenom}
        onCancel={closeHandler}
        show={showModal}
        pebbleSnapshotInfo={loadedPebbleSnapshotInfo}
        // rockSnapshotInfo={loadedRockSnapshotInfo}
      />

      <li onClick={showHandler} key={props.id} className="snapshot-items">
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