import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
// import { Image, Tooltip } from "antd";
import Backdrop from "../../Stake/Backdrop";
import "./SnapshotModal.css";

const ModalOverlay = (props) => {
    let content = (
        <div className={`modal ${props.className}`}>
            <h1>{props.name}</h1>
        </div>
    );
    
    return ReactDOM.createPortal(
        content,
        document.getElementById("snapshot-modal-hook")
    );
};

const SnapshotModal = (props) => {
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

export default SnapshotModal;