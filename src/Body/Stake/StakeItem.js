import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";

const StakeItem = (props) => {
  const [showHandler, setShowHandler] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const [loadedBlockHeight, setBlockHeight] = useState([]);
  
  const closeModalHandler = () => {
    setShowHandler(false);
  };
  useEffect(() => {
    fetchChainInfo();
    getBlockInfo();
  }, [showHandler]);
  
  const showModalHandler = () => {
    setShowHandler(true);
  };
  
  const fetchChainInfo = () => {
    return axios
      .get(`${props.api}/v1/status`)
      .then((response) => setLoadedChainInfo(response));
  };

  const getBlockInfo = () => {
      return axios
        .get(`${props.api}/v1/staking/validator/uptime/${props.address}`)
        .then((response) => setBlockHeight(response));
    };

  return (
    <React.Fragment>
      {showHandler && (
        <Modal
          chainid={loadedChainInfo.data.chain_id}
          blockheight={loadedChainInfo.data.block_height}
          blocktime={loadedChainInfo.data.block_time}
          image={props.image}
          name={props.name}
          show={showHandler}
          onCancel={closeModalHandler}
          api={props.api}
          address = {props.address}
          height = {loadedBlockHeight.data.latest_height}
          uptime = {loadedBlockHeight.data.uptime}
        ></Modal>
      )}
      <li className="stake-item">
        <div className="stake-item__content">
          <div className="stake-item__image">
            <img
              src={props.image}
              alt={props.name}
              style={{ width: "7rem", height: "7rem", marginTop: "35px" }}
            />
          </div>
          <div className="stake-item__info">
            <h2>{props.name}</h2>
          </div>
          <button
            // onClick={fetchChainInfo}
            onClick={() => {
              fetchChainInfo();
              getBlockInfo();
              showModalHandler();
            }}
            className="stake-btn"
          >
            Stake
          </button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default StakeItem;
