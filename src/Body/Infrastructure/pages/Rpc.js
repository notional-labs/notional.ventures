import React from "react";
import "./Rpc.css";
import { STAKES } from "../../Stake/chains-data";
import ServiceNav from "../components/ServiceNav";
import RpcList from "../components/RpcList";
import { useState, useEffect } from "react";
import GifLoader from "react-gif-loader";
import Loading from "../../../media/background-decor/loading.gif";

const facts = ["Notional are happy to make our customer sastified"];

const Rpc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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
          <div>RPC list</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            ante in nisi ultricies pharetra sed at metus.{" "}
          </p>
          <div>
            <RpcList rpc={STAKES} />
          </div>
        </div>
      )}
    </>
  );
};

export default Rpc;
