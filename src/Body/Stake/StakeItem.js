import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";
import ErrorModal from "./ErrorModal";

const StakeItem = (props) => {
  const [showHandler, setShowHandler] = useState(false);
  const [error, setError] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const [validator, setValidator] = useState([]);

  useEffect(() => {
    fetchChainInfo();
    getValidatorData();
    // callApiContinously();
  }, [showHandler]);

  const closeModalHandler = () => {
    setShowHandler(false);

  };

  const showModalHandler = () => {
    setShowHandler(true);
  };

  const closeErrorHandler = () => {
    setError(false);
    setShowHandler(false);
  };


  const fetchChainInfo = async () => {
    try  { 
    const res = await axios.get(`${props.api}`);
    setLoadedChainInfo(res);
    
    } catch (err) {
      console.log(err.message);
      setError(true)
    }
  };

  const getValidatorData = async () => {
    try {
      const res = await axios.get(`${props.api}/validator`);
      setValidator(res)
    } catch (err) {
      console.log(err.message);
      setError(true)
    }
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
      {showHandler && error && (<ErrorModal
        show = {error}
        onCancel={closeErrorHandler}
      />)}
      {showHandler && !error && (
        <Modal
          key = {loadedChainInfo.data.chainID}
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
          rank={props.rank}
        ></Modal>
      )}
      <li className="stake-item">
        <div className="stake-item__content">
          <div className="stake-item__image">
            <img
              src={props.image}
              alt={props.name}
              className = "stake-item__image__detail"
            />
          </div>
          <div className="stake-item__info">
            <h2>{props.name}</h2>
          </div>
          <button
            onClick={() => {
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
