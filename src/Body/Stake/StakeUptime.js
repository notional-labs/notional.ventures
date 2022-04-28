import React from "react";
import "./StakeUptime.css";
import StakeUptimeBlock from "./StakeUptimeBlock";


const Uptime = (props) => {
  return (
  <div class="container-md px-0">
      <StakeUptimeBlock api = {props.api} />
  </div>
  );
};

export default Uptime;
