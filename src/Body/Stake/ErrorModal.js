import React from "react";
import ReactDOM from "react-dom";
import './ErrorModal.css';
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import line_divisor from "../../media/stake/line-divide.png";
import { Image } from "antd";



const ModalOverlay = (props) => {
    const content = (
        <div className="errormodal">
            <label>404</label>
            <Image src={line_divisor} preview = {false} />
            <h1>It seem like we have some problem with the server</h1>
            <p>While we are fixing it, why dont you have a cup of coffee and wait till this feature work again ❤️</p>
        </div>
    )
    return (ReactDOM.createPortal(content, document.getElementById("error-hook")));
}

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