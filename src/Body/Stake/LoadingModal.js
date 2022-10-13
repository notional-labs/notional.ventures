import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import "./LoadingModal.css";

const ModalOverlay = (props) => {
  let content = (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("loading-modal-hook")
  );
};

const LoadingModal = (props) => {
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

export default LoadingModal;
