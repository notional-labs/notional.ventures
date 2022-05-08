import React from "react";
import { Card } from "antd";
import ReactDOM from "react-dom";
import Backdrop from "../Stake/Backdrop";
import { CSSTransition } from "react-transition-group";
const ModalOverlay = () => {
    const content = <div style={{width : "auto"}}>
        <Card className="card" title= "Card Title" bordered = {true} style={{width: "80%"}}>
            <p>No Info found</p>
        </Card>
    </div>
    return ReactDOM.create(content, document.getElementById("error-hook"))
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