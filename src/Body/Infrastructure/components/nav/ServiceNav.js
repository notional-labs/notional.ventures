import "./ServiceNav.css";
import NotionalLogo from "../../../../media/logo/notional.png";
import SideDrawer from "../../../../Header/SideDrawer";
import React, { useState } from "react";
import NavBtn from "../../../../media/button/nav-btn.png";
import { Image } from "antd";
import { Link } from "react-router-dom";

const ServiceNav = () => {
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link onFocus={true} to="/endpoint">
                Endpoint
              </Link>
            </li>
            <li>
              <Link to="/snapshot">Snapshot</Link>
            </li>
            <li>
              <a
                onClick={() => window.open("https://status.notional.ventures")}
              >
                Kuma
              </a>
            </li>
            <li>
              <a href="/upgrade">Chains Upgrade</a>
            </li>
          </ul>
        </nav>
      </SideDrawer>

      <div className={color ? "nav nav-bg" : "nav"}>
        <button className="main-navigation-btn" onClick={openDrawerHandler}>
          <Image
            className="btn-img"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              margin: "1rem",
              "margin-left": "0",
            }}
            src={NavBtn}
            preview={false}
          />
        </button>

        <div className="logo" style={{ cursor: "pointer" }}>
          <Link to="/">
            <Image
              style={{ width: "200px" }}
              className="logo-img"
              src={NotionalLogo}
              alt="Logo"
              preview={false}
            />
          </Link>
        </div>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/endpoint">Endpoint</Link>
            </li>
            <li>
              <Link to="/snapshot">Snapshot</Link>
            </li>
            <li>
              <a
                onClick={() => window.open("https://status.notional.ventures")}
              >
                Kuma
              </a>
            </li>
            <li>
              <Link to="/upgrade">Chains Upgrade</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ServiceNav;