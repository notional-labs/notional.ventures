import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Image } from "antd";
import Backdrop from "./Backdrop";
import StakeUptime from "./StakeUptime";

import "./StakeModal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <div className="chain-section" >
        <div className="chain-info__image">
          <Image
            preview= {false}
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
          <p>Block Time: {props.blocktime}</p>
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
