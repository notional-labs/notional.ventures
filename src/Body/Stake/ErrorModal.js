import React from "react";
import ReactDOM from "react-dom";
import './ErrorModal.css';
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";


const ModalOverlay = (props) => {
    const content = (
        <div className="errormodal">
            <label>Error</label>
            <hr/>
            <p>Resource is not available at the moment</p>
            <button className="error-btn" onClick={props.onCancel}>Ok</button>
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