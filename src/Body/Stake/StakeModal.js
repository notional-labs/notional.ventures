import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Image } from "antd";
import Backdrop from "./Backdrop";
import StakeUptime from "./StakeUptime";

import StakeCalculate from "./StakeCalculate";
import "./StakeModal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <div>
        <div className="chain-section">
          <div className="chain-info__image">
            <Image
              preview={false}
              className="chain-image"
              src={props.image}
              alt={props.name}
              style={{ width: "9rem", height: "9rem" }}
            />
            <div>{props.name}</div>
          </div>
          <div className="chain-info__text">
            <p>Chain ID: {props.chainid}</p>
            <p>Block Height: {props.blockheight}</p>
            <p>Block Time: {(props.blocktime).toFixed(2)}</p>
            <p>Price: {(props.price).toFixed(2)}</p>
          </div>
        </div>

        <div className="validator-section">
          <p>Validator: Notional</p>
          <p>Address: {props.address}</p>
          <p>Rank:</p>
          <p>Commission:</p>
          <p>Voting Power:</p>
        </div>
      </div>

      <div>
        <div className="profit-section">
          <StakeCalculate
            denom={props.name}
            pool={props.pool}
            supply={props.supply}
            inflation={props.inflation}
            price = {props.price}
          />
        </div>

        <div className="uptime-section">
          <StakeUptime height={props.height} uptime={props.uptime} />
        </div>
        <div className="button">
          <button className="delegate-btn keplr">
            <a href="#" className="link">Delegate with Keplr</a>
          </button>
          <button className="delegate-btn ping">
            <a href="#" className="link">Delegate with PingPub</a>
            </button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
