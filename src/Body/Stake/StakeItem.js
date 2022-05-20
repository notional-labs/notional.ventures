import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";

const StakeItem = (props) => {
  const [showHandler, setShowHandler] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const [validator, setValidator] = useState([]);

  const closeModalHandler = () => {
    setShowHandler(false);
  };
  useEffect(() => {
    fetchChainInfo();
    getValidatorData();
    // callApiContinously();
  }, []);

  const showModalHandler = () => {
    setShowHandler(true);
  };

  const fetchChainInfo = async () => {
    await axios
      .get(`${props.api}`)
      .then((response) => setLoadedChainInfo(response))
      .catch((errors) => {
        console.error(errors);
      });
  };


  const getValidatorData = async () => {
    await axios.get(`${props.api}/validator`)
    .then((response) => {
      setValidator(response)
    })
  }

  // const callApiContinously = () => {
  //   setInterval(fetchChainInfo, 12000);
  // };
  // if (showHandler) {
  //   callApiContinously()
  // }
  // else {
  //   clearInterval(callApiContinously);
  // }


  return (
    <React.Fragment>
      {showHandler && (
        <Modal
          chainid={loadedChainInfo.data.chainID}
          blockheight={loadedChainInfo.data.height}
          blocktime={loadedChainInfo.data.blockTime}
          image={props.image}
          name={loadedChainInfo.data.name}
          show={showHandler}
          onCancel={closeModalHandler}
          api={props.api}
          denom={loadedChainInfo.data.denom}
          ping={props.ping}
          keplr={props.keplr}
          address={props.address}
          height={loadedChainInfo.data.height}
          uptime={loadedChainInfo.data.uptime}
          commission={validator.data.commission}
          apr = {loadedChainInfo.data.apr}
          price={loadedChainInfo.data.prices}
          votingPower={validator.data.power}
        ></Modal>
      )}
      <li className="stake-item">
        <div className="stake-item__content">
          <div className="stake-item__image">
            <img
              src={props.image}
              alt={props.name}
              style={{ maxHeight: "7rem", maxWidth: "7rem"}}
            />
          </div>
          <div className="stake-item__info">
            <h2>{props.name}</h2>
          </div>
          <button
            onClick={() => {
              // fetchChainInfo();
              // getBlockInfo();
              // getPriceInfo();
              // fetchReward();
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
