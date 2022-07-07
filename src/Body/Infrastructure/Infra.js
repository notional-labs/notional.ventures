import React from "react";
import "./Infra.css";
import Background from "../../media/background-decor/infrastructe-background.png"

const Infra = () => {
  return (
    <div id="Infra" className="infra-section">
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

      <div className="relayer">
        
      </div>

      <div className="services">
        <button className="service-item">
          <div className="service-title">26</div>
          <div className="service-description">Chains operating</div>
        </button>

        <button className="service-item">
          <div className="service-title">26</div>
          <div className="service-description">Chains operating</div>
        </button>
        
        <button className="service-item">
          <div className="service-title">26</div>
          <div className="service-description">Chains operating</div>
        </button>
        
        <button className="service-item">
          <div className="service-title">26</div>
          <div className="service-description">Chains operating</div>
        </button>
        
      </div>
    </div>
  );
};

export default Infra;