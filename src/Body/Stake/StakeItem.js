import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";

const StakeItem = (props) => {
  const [showHandler, setShowHandler] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const [loadedBlockHeight, setBlockHeight] = useState([]);
  const [price, setPrice] = useState([]);
  const [commission, setCommnission] = useState([]);
  const [apr, setApr] = useState([]);




  const closeModalHandler = () => {
    setShowHandler(false);
  };
  useEffect(() => {
    getApr();
    fetchChainInfo();
    getBlockInfo();
    getPriceInfo();
    getCommission();
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

  const getBlockInfo = async () => {
    await axios
      .get(`${props.api}`)
      .then((response) => setBlockHeight(response)).then(console.log(loadedBlockHeight))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getPriceInfo = async () => {
    await axios
      .get(`${props.api}`)
      .then((response) => {
        setPrice(response);
        console.log(response);
      })
      .then(console.log("ahihi"))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getCommission = async () => {
    await axios.get(`${props.api}/validator`)
    .then((response) => {
      setCommnission(response)
    })
  }

  const getApr = async () => {
    await axios.get(`${props.api}`)
    .then((response) => {
      setApr(response)
    })
  }

  // const callApiContinously = () => {
  //   setInterval(getBlockInfo, 12000);
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
          name={props.name}
          show={showHandler}
          onCancel={closeModalHandler}
          api={props.api}
          denom={props.denom}
          ping={props.ping}
          keplr={props.keplr}
          address={props.address}
          height={loadedBlockHeight.data.height}
          uptime={loadedBlockHeight.data.uptime}
          commission={commission.data.commission}
          apr = {apr.data.apr}
          price={price.data.prices}
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
