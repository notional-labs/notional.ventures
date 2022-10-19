import React, { useEffect, useState } from "react";
import "./StakeItem.css";
import Modal from "./StakeModal";
import axios from "axios";
import ErrorModal from "./ErrorModal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingModal from "./LoadingModal";

const StakeItem = (props) => {
  let history = useNavigate();
  const [showHandler, setShowHandler] = useState(false);
  const [error, setError] = useState(false);
  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
  const [validator, setValidator] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [showHandler]);

  const closeModalHandler = () => {
    setShowHandler(false);
    history("/");
  };

  const showModalHandler = () => {
    setShowHandler(true);
  };

  const closeErrorHandler = () => {
    setError(false);
    setShowHandler(false);
    history("/");
  };

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(`${props.api}/information`);
      setLoadedChainInfo(res);
      const res1 = await axios.get(`${props.api}/validator`);
      setValidator(res1);
      if (props.showModal === true && props.ping === props.chainName) {
        setShowHandler(true);
      } else {
        setShowHandler(false);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
  };

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
      {showHandler && error && !isLoading && (
        <ErrorModal show={error} onCancel={closeErrorHandler} />
      )}
      {showHandler && !error && !isLoading && (
        <Modal
          key={loadedChainInfo.data.chainID}
          chainid={loadedChainInfo.data.chainID}
          blockheight={loadedChainInfo.data.height}
          blocktime={loadedChainInfo.data.blockTime}
          image={props.image}
          name={props.name}
          show={showHandler}
          onCancel={closeModalHandler}
          api={props.api}
          denom={loadedChainInfo.data.denom}
          ping={props.ping}
          keplr={props.keplr}
          address={props.address}
          height={loadedChainInfo.data.height}
          uptime={loadedChainInfo.data.uptime}
          commission={validator.data.commission * 100}
          apr={loadedChainInfo.data.apr}
          price={loadedChainInfo.data.prices}
          votingPower={validator.data.power}
          rank={props.rank}
        ></Modal>
      )}
      {showHandler && !error && isLoading && (
        <LoadingModal 
        onCancel={closeModalHandler}
        show={showHandler}/>
      )}
      <li className="stake-item">
        <div className="stake-item__image">
          <img src={props.image} alt={props.name} />
        </div>

        <h2 className="stake-item__info">{props.name}</h2>

        <Link
          to={`stake/${props.ping}`}
          onClick={showModalHandler}
          className="stake-btn"
        >
          Stake
        </Link>
      </li>
    </React.Fragment>
  );
};

export default StakeItem;
