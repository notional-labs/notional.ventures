import React from "react";
import "./Endpoint.css";
import { STAKES } from "../../Stake/chains-data";
import ServiceNav from "../components/nav/ServiceNav";
import EndpointList from "../components/Endpoint/EndpointList";
import { useState, useEffect } from "react";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/imgs/loading.gif";

const facts = ["Notional are happy to make our customer sastified",
"We use rate-limit endpoints to protect our service from attacks"];

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
          <GifLoader
            className="loading-logo"
            loading={true}
            imageSrc={Loading}
          />
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