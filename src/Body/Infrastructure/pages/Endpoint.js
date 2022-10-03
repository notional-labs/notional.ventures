import React from "react";
import "./Endpoint.css";
import { STAKES } from "../../Stake/chains-data";
import ServiceNav from "../components/nav/ServiceNav";
import EndpointList from "../components/Endpoint/EndpointList";
import { useState, useEffect } from "react";
import Loading from "../../../media/imgs/loading.webm";

const facts = ["Notional strives to satisfy our customers",
"We use rate-limit endpoints to protect our service from attacks",
"We are changing our Endpoint services, and the old ones will only work for few days left."
];

const Endpoint = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <video autoPlay loop muted playsInline>
            <source src={Loading} type="video/webm" />
          </video>
          <p className="loading-title">DID YOU KNOW</p>
          <p className="loading-text">{randomText}</p>
        </div>
      )}
      {!isLoading && (
        <div className="endpoint-section">
          <ServiceNav />
          <div className="endpoint-container">
            <p className="endpoint-title">
              Chain Endpoints
            </p>
            <p className="endpoint-text">
            We provide public RPC, gRPC, and API services for all the chains we are validating. If you want to access non-rate-limited endpoints, please contact us through contact@notional.ventures or on Twitter @notionaldao.
            </p>
            <EndpointList rpc={STAKES} />
          </div>
        </div>
      )}
    </>
  );
};

export default Endpoint;