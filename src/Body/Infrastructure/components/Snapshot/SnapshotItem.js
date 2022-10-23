import React, { useState, useEffect } from "react";
import "./SnapshotItem.css";
import "./SnapshotModal";
import SnapshotModal from "./SnapshotModal";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoadingModal from "../../../Stake/LoadingModal";

const SnapshotItem = (props) => {
  let history = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [loadedPebbleSnapshotInfo, setLoadedPebbleSnapshotInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // RocksDB
  // const [error, setError] = useState(false);
  // const [loadedRockSnapshotInfo, setLoadedRockSnapshotInfo] = useState([]);
  useEffect(() => {
    (async () => {
      await fetchSnapshotInfo();
      if (props.showModal === true && props.ping === props.chainName) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    })();
  }, [showModal]);
  const showHandler = () => {
    setShowModal(true);
  };
  const closeHandler = () => {
    setShowModal(false);
    history("/snapshot");
  };
  const fetchSnapshotInfo = async (event) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${props.api}/snapshot`);
      setLoadedPebbleSnapshotInfo(res.data.goleveldb);
      // setLoadedRockSnapshotInfo(res.data.rocksdb);
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  };
  return (
    <>
      {showModal && isLoading && <LoadingModal show={showModal} />}
      {showModal && !isLoading && (
        <SnapshotModal
          image={props.image}
          name={props.name}
          daenom={props.daenom}
          onCancel={closeHandler}
          show={showModal}
          pebbleSnapshotInfo={loadedPebbleSnapshotInfo}
          // rockSnapshotInfo={loadedRockSnapshotInfo}
        />
      )}

      <Link
        to={`/snapshot/${props.ping}`}
        onClick={showHandler}
        className="snapshot-items"
      >
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
      </Link>
    </>
  );
};

export default SnapshotItem;
