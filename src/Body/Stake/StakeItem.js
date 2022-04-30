import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";

const StakeItem = (props) => {
  const [showHandler, setShowHandler] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const [loadedBlockHeight, setBlockHeight] = useState([]);
  const [price, setPrice] = useState([]);
  const [pool, setPool] = useState([]);
  const [supply, setSupply] = useState([]);
  const [inflation, setInflation] = useState([]);
  const poolApi = "https://lcd-cosmoshub.keplr.app/cosmos/staking/v1beta1/pool";
  const supplyApi =
    "https://lcd-cosmoshub.keplr.app/cosmos/bank/v1beta1/supply/uatom";
  const inflationApi =
    "https://lcd-cosmoshub.keplr.app/cosmos/mint/v1beta1/inflation";

  const closeModalHandler = () => {
    setShowHandler(false);
  };
  useEffect(() => {
    fetchReward();
    fetchChainInfo();
    getBlockInfo();
    getPriceInfo();
    callApiContinuosly();
  }, []);

  const showModalHandler = () => {
    setShowHandler(true);
  };

  const fetchChainInfo = () => {
    axios
      .get(`${props.api}/v1/status`)
      .then((response) => setLoadedChainInfo(response))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getBlockInfo = () => {
    axios
      .get(`${props.api}/v1/staking/validator/uptime/${props.address}`)
      .then((response) => setBlockHeight(response))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getPriceInfo = () => {
    axios
      .get(`${props.price}`)
      .then((response) => {
        setPrice(response);
      })
      .then(console.log(price))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const callApiContinuosly = () => {
    setInterval(getBlockInfo, 12000);
  };
  if (!showHandler) {
    clearInterval(callApiContinuosly);
  }

  const poolRequest = axios.get(poolApi, { timeout: 16000 });
  const supplyRequest = axios.get(supplyApi, { timeout: 16000 });
  const inflationRequest = axios.get(inflationApi, { timeout: 16000 });
  const fetchReward = () => {
    axios
      .all([poolRequest, supplyRequest, inflationRequest], { timeout: 16000 })
      .then(
        axios.spread((...response) => {
          setPool(response[0]);
          setSupply(response[1]);
          setInflation(response[2]);
        })
      )
      .then(console.log(pool, supply, inflation))
      .catch((errors) => {
        console.error(errors);
      });
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
          address={props.address}
          height={loadedBlockHeight.data.latest_height}
          uptime={loadedBlockHeight.data.uptime}
          pool={pool.data.pool.bonded_tokens}
          supply={supply.data.amount.amount}
          inflation={inflation.data.inflation}
          price={price.data.cosmos.usd}
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
            {/* <h1>{price.data.cosmos.usd}</h1> */}
          </div>
          <button
            // onClick={fetchChainInfo}
            onClick={() => {
              fetchChainInfo();
              getBlockInfo();
              getPriceInfo();
              fetchReward();
              showModalHandler();
            }}
            className="stake-btn"
          >
            Stake
          </button>
          {/* <button onClick={() => {fetchReward()}}>
            Test
          </button> */}
        </div>
      </li>
    </React.Fragment>
  );
};

export default StakeItem;
