import "./Navbar.css";
import NotionalLogo from "../media/logo/notional.png";
import SideDrawer from "./SideDrawer";
import React, { useState } from "react";
import NavBtn from "../media/button/nav-btn.png";
import { Image } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerHandler, setDrawerHandler] = useState(false);
  const [color, setColor] = useState(false);
  const openDrawerHandler = () => {
    setDrawerHandler(true);
  };
  const closeDrawerHandler = () => {
    setDrawerHandler(false);
  };
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="nav-container">
      <SideDrawer show={drawerHandler} onCancel={closeDrawerHandler}>
        <nav className="main-nav-drawer">
          <ul className="main-nav-list-drawer">
            <li>
              <a href="#Contribution">Contribution</a>
            </li>
            <li>
              <a href="#Delegate">Delegate</a>
            </li>
            <li className="dropdown-menu">
              <a href="#Infra">Infrastructure</a>
              <div className="navigation-content">
                <Link to="/endpoint" style={{ fontSize: "20px" }}>
                  Endpoints
                </Link>
                <Link to="/snapshot" style={{ fontSize: "20px" }}>
                  Snapshot
                </Link>
                <Link to="/upgrade" style={{ fontSize: "20px" }}>
                  Upgrade
                </Link>
              </div>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </SideDrawer>

      <div className={color ? "nav nav-bg" : "nav"}>
        <a href="#Header" className="logo" style={{ cursor: "pointer" }}>
          <Image
            style={{ width: "200px" }}
            className="logo-img"
            src={NotionalLogo}
            alt="Logo"
            preview={false}
          />
        </a>
        <button className="main-navigation-btn" onClick={openDrawerHandler}>
          <Image
            className="btn-img"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              margin: "1rem",
              marginLeft: "0",
            }}
            alt="An"
            src={NavBtn}
            preview={false}
          />
        </button>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#Contribution">Contribution</a>
            </li>
            <li>
              <a href="#Delegate">Delegate</a>
            </li>
            <li className="dropdown-menu">
              <a href="#Infra">Infrastructure</a>
              <div className="navigation-content">
                <Link to="/endpoint" style={{ fontSize: "20px", textAlign: "center" }}>
                  Endpoints
                </Link>
                <Link to="/snapshot" style={{ fontSize: "20px", textAlign: "center" }}>
                  Snapshot
                </Link>
                <Link to="/upgrade" style={{ fontSize: "20px", textAlign: "center" }}>
                  Upgrade
                </Link>
              </div>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
