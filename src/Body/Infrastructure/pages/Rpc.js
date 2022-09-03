import React from "react";
import "./Rpc.css";
import { STAKES } from "../../Stake/chains-data";
import ServiceNav from "../components/ServiceNav";
import RpcList from "../components/RpcList";
import { useState, useEffect } from "react";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/background-decor/loading.gif";

const facts = ["Notional are happy to make our customer sastified",
"We use rate-limit endpoints to protect our service from attacks"];

const Rpc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
        <div className="rpc-section">
          <ServiceNav />
          <div className="rpc-container">
            <p className="rpc-title">
              Chain Endpoints
            </p>
            <p className="rpc-text">
            We provide public RPC, gRPC, and API services for all the chains we are validating. If you want to access non-rate-limited endpoints, please contact us through contact@notional.ventures or on Twitter @notionaldao.
            </p>
            <RpcList rpc={STAKES} />
          </div>
        </div>
      )}
    </>
  );
};

export default Rpc;