import { Image } from "antd";
import React, { useState } from "react";
import "./RpcItem.css";

const RpcItem = (props) => {
  const [display, setDisplay] = useState(false);
  const dropdownHandler = () => {
    setDisplay(!display);
  };
  return (
    <div className="dropdown-container">
      <div onClick={dropdownHandler} className="dropdown-btn">
        <div className="dropdown-chain">
          <img
            className="dropdown-chain-icon"
            src={props.image}
            alt={props.name}
          />
          <div>{props.name}</div>
        </div>
        <div className="dropdown-icon">Down</div>
      </div>
      <div
        className={
          display
            ? "dropdown-content dropdown-content_active"
            : "dropdown-content dropdown-content_inactive"
        }
      >
        {display && (
          <>
            <p>{props.rpc_service}</p>
            <p>{props.api_service}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RpcItem;
