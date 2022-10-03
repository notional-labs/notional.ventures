import React from "react";
import NotionalLogo from "../media/logo/notional.png";
import { Image } from "antd";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../Body/Stake/Backdrop";
import "./SideDrawer.css";

const ModalOverlay = (props) => {
  const content = (
    <div className="nav-mobile">
      <div href="#" className="logo" style={{ cursor: "pointer" }}>
        <Image
          style={{ width: "250px" }}
          className="logo-img"
          src={NotionalLogo}
          alt="Logo"
          preview={false}
        />
      </div>
      <ol className="nav-menu">
        {Object.keys(props).map((key, index) => (
          <li style={{ listStyle: "none" }}>
            <a className="nav-menu-option">{props[key]}</a>
          </li>
        ))}
      </ol>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

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
        <ModalOverlay {...props.children.props.children.props.children} />
      </CSSTransition>
    </React.Fragment>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
