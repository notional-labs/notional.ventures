import React from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import line_divisor from "../../media/imgs/Stake/line-divide.png";
import { Image } from "antd";

const ModalOverlay = (props) => {
  const content = (
    <div className="errormodal">
      <label>404</label>
      <Image src={line_divisor} alt="An image" preview={false} />
      <h1>It looks like you’re lost in space. Sorry, we’re either.</h1>
      <p>
        While we are calling aliens for help, why don’t you return to home and
        reload the page?{" "}
      </p>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("error-hook"));
};

const ErrorModal = (props) => {
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

export default ErrorModal;
