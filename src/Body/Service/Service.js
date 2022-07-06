import React from "react";
import "./Service.css";
import Background from "../../media/background-decor/infrastructe-background.png"

const Service = () => {
  return (
    <div id="Service" className="infra-section">
      <img src = {Background} className = "infra-background"/>
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Infrastructure</p>
        <p className="text">
          We provide services for various chains in Cosmos
          Ecosystem, from RPC, gRPC, WebSocket and API to snapshot services and our service
          uptime monitor status. Feel free to checkout all service.
        </p>
      </div>

      <div className="service">
        
      </div>
    </div>
  );
};

export default Service;