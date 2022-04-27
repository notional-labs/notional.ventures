import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";
import someone from "../../media/members/vuong.png";

const StakeItem = (props) => {
  const [showHandler, setShowHandler] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const closeModalHandler = () => {
    setShowHandler(false);
  };
  useEffect(() => {
    fetchChainInfo();
  }, [showHandler]);
  const fetchChainInfo = () => {
    return axios
      .get(`${props.chainUrl}`)
      .then((response) => setLoadedChainInfo(response));
  };

  const showModalHandler = () => {
    setShowHandler(true);
  };

  return (
    <React.Fragment>
      {showHandler && (
        <Modal
          chainid={loadedChainInfo.data.chain_id}
          blockheight={loadedChainInfo.data.block_height}
          blocktime={loadedChainInfo.data.block_time}
          image={someone}
          name={props.name}
          show={showHandler}
          onCancel={closeModalHandler}
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
            // onClick={showModalHandler}
            onClick={() => {
              fetchChainInfo();
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
