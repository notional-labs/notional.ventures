import { Image, Tooltip } from "antd";
import Zoom from "@mui/material/Zoom";
import React from "react";
import "./RpcItem.css";
import Dropdown from "../../../media/button/Vector.png";

const RpcItem = (props) => {
  const [copyFeedback, setCopyFeedback] = React.useState("Click to copy");
  const copyToClipboard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopyFeedback("Copied!");
    } catch (err) {
      setCopyFeedback("Failed to copy!");
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
          {/* {display === false ? (
            <Image src={Dropdown} preview={false} />
          ) : ( */}
          <Image
            className="dropdown-btn_active"
            src={Dropdown}
            preview={false}
          />
          {/* )} */}
        </div>
      </a>

      <ol class="sub-menu">
        <li class="menu-item-1">
          <a
            href="#0"
            className="menu-item-text"
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

export default RpcItem;
