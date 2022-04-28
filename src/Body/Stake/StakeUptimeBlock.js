import React, { useEffect, useState } from "react";
import "./StakeUptimeBlock.css";
import axios from "axios";

const UptimeBlock = (props) => {

  const [loadedChainInfo, setLoadedChainInfo] = useState([]);
    const getBlockInfo = () => {
        return axios
          .get(`${props.api}`)
          .then((response) => setLoadedChainInfo(response)).then(console.log(loadedChainInfo));
      };

  return (
    <div class="d-flex justify-content-between align-self-stretch flex-wrap">
           
          </div>
  );
};

export default UptimeBlock;
