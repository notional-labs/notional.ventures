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
  const [pool, setPool] = useState([]);
  const [supply, setSupply] = useState([]);
  const [inflation, setInflation] = useState([]);
  // const poolApi = `${props.api}/cosmos/staking/v1beta1/pool`;
  // const supplyApi = `${props.api}/cosmos/bank/v1beta1/supply/uatom`;
  // const inflationApi = `${props.api}/cosmos/mint/v1beta1/inflation`;

  const poolApi =
    "https://api.cosmoshub.notional.ventures/cosmos/staking/v1beta1/pool";
  const supplyApi =
    "https://api.cosmoshub.notional.ventures/cosmos/bank/v1beta1/supply/uatom";
  const inflationApi =
    "https://api.cosmoshub.notional.ventures/cosmos/mint/v1beta1/inflation";

  const closeModalHandler = () => {
    setShowHandler(false);
  };
  useEffect(() => {
    fetchReward();
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
      .get(`${props.api}/v1/status`)
      .then((response) => setLoadedChainInfo(response))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getBlockInfo = async () => {
    await axios
      .get(`${props.api}/v1/staking/validator/uptime/${props.address}`)
      .then((response) => setBlockHeight(response)).then(console.log(loadedBlockHeight))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getPriceInfo = async () => {
    await axios
      .get(`${props.price}`)
      .then((response) => {
        setPrice(response);
      })
      .then(console.log(price))
      .catch((errors) => {
        console.error(errors);
      });
  };

  const getCommission = async () => {
    await axios.get(`https://api-cosmoshub-ia.notional.ventures/cosmos/staking/v1beta1/validators/${props.address}`)
    .then((response) => {
      setCommnission(response)
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

  const poolRequest = axios.get(poolApi);
  const supplyRequest = axios.get(supplyApi);
  const inflationRequest = axios.get(inflationApi);
  const fetchReward = async () => {
    await axios
      .all([poolRequest, supplyRequest, inflationRequest])
      .then(
        axios.spread((...response) => {
          setPool(response[0]);
          setSupply(response[1]);
          setInflation(response[2]);
        })
      )
      // .then(console.log(pool, supply, inflation))
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
          denom={props.denom}
          ping={props.ping}
          keplr={props.keplr}
          address={props.address}
          height={loadedBlockHeight.data.latest_height}
          uptime={loadedBlockHeight.data.uptime}
          commission={commission.data.validator.commission.commission_rates.rate}
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
