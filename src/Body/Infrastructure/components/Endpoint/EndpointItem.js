import { Image, Tooltip } from "antd";
import Zoom from "@mui/material/Zoom";
import React from "react";
import { useState } from "react";
import "./EndpointItem.css";
import Dropdown from "../../../../media/button/Vector.png";

const EndpointItem = (props) => {
  const [copyFeedback, setCopyFeedback] = useState("Click to copy");
  const [copyState, setCopyState] = useState(false);
  const copyToClipboard = async (copyMe) => {
    try {
      navigator.clipboard.writeText(copyMe);
      setCopyFeedback("Copied!");
      setCopyState(true);
    } catch (err) {
      setCopyFeedback("Failed to copy!");
      setCopyState(false);
    }
  };
  const setCopyMessage = () => {
    if (copyState === true) {
      setTimeout(() => {
        setCopyFeedback("Click to copy");
        setCopyState(false);
      }, 200);
    }
  };

  return (
    <li className="dropdown-container">
      <a className="dropdown-btn" href="#0">
        <img
          className="dropdown-chain-icon"
          src={props.image}
          alt={props.name}
        />

        <p className="dropdown-chain-name">{props.name}</p>

        <div className="dropdown-icon">
          <Image
            className="dropdown-btn_active"
            src={Dropdown}
            preview={false}
          />
        </div>
      </a>

      <ol class="sub-menu">
        <li class="menu-item-1">
          <a
            href="#0"
            className="menu-item-text"
            onMouseOver={() => setCopyMessage()}
            onClick={() => copyToClipboard(props.rpc_service)}
          >
            <Tooltip TransitionComponent={Zoom} title={copyFeedback}>
              {props.rpc_service}
            </Tooltip>
          </a>
        </li>
        <li class="menu-item-2">
          <a
            href="#0"
            className="menu-item-text"
            onMouseOver={() => setCopyMessage()}
            onClick={() => copyToClipboard(props.api_service)}
          >
            <Tooltip TransitionComponent={Zoom} title={copyFeedback}>
              {props.api_service}
            </Tooltip>
          </a>
        </li>
        <li class="menu-item-3">
          <a
            href="#0"
            className="menu-item-text"
            onMouseOver={() => setCopyMessage()}
            onClick={() => copyToClipboard(props.grpc_service)}
          >
            <Tooltip TransitionComponent={Zoom} title={copyFeedback}>
              {props.grpc_service}
            </Tooltip>
          </a>
        </li>
      </ol>
    </li>
  );
};

export default EndpointItem;
