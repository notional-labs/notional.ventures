import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Body/Stake/Backdrop";
import "./SideDrawer.css";

const SideDrawer = (props) => {
    const content = (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                timeout={200}
                classNames="slide-in-left"
                mountOnEnter
                unmountOnExit
            >
                <aside className="side-drawer" onClick={props.onCancel}>
                    {props.children}
                </aside>
            </CSSTransition>
        </React.Fragment>
    );

    return ReactDOM.createPortal(
        content,
        document.getElementById("drawer-hook")
    );
};

export default SideDrawer;
