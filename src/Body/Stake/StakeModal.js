import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./StakeModal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>
      <div>
        <image className="modal-image"
          src={props.image}
          alt={props.name}
          style={{ width: "9rem", height: "9rem" }}
        />
        <div>{props.name}</div>
      </div>
      <div>
        <p>chain-id: {props.chainid}</p>
        <p>block-height: {props.blockheight}</p>
        <p>block-time: {props.blocktime}</p>
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
