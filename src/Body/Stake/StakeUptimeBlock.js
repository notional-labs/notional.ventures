import React, { useEffect, useState } from "react";
import "./StakeUptimeBlock.css";
import axios from "axios";

const UptimeBlock = (props) => {

  const [loadedBlockHeight, setBlockHeight] = useState([]);
    useEffect(() => {
      getBlockInfo()
    },[loadedBlockHeight])
    const getBlockInfo = () => {
        return axios
          .get(`${props.api}/v1/staking/validator/uptime/cosmosvaloper1083svrca4t350mphfv9x45wq9asrs60cdmrflj`)
          .then((response) => setBlockHeight(response)).then(console.log(loadedBlockHeight));
      };


  return (
    <button oneClick={getBlockInfo}>
      log
    </button>
  );
};

export default UptimeBlock;
