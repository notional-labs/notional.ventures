import React from "react";
import "./Rpc.css";
import { STAKES } from "../../Stake/chains-data";
import ServiceNav from "../components/ServiceNav";
import RpcList from "../components/RpcList";
import RingLoader from "react-spinners/RingLoader";
import { useState, useEffect } from "react";

const Rpc = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    {isLoading && (
                <div className="loader-container">
                    <RingLoader color="#eaebed" size={130} />
                </div>
            )}
      {!isLoading && <div className="rpc-section">
        <ServiceNav />
        <div className="rpc-container">
          <div className="endpoints-title">Endpoints list</div>
          <p className="text">
            We provide public rpc, api and grpc, if you want to icrease the access to unlimited please contact us through contact@notional.ventures or on twitter @notionaldao
          </p>
          <div>
            <RpcList rpc={STAKES} />
          </div>
        </div>
      </div>}
    </>
  );
};

export default Rpc;
