import "./Navbar.css";
import NotionalLogo from "../media/logo/notional.png";
import SideDrawer from "./SideDrawer";
import React, { useState } from "react";
import Backdrop from "../Body/Stake/Backdrop";

const Navbar = () => {
  const [drawerHandler, setDrawerHandler] = useState(false);
  const openDrawerHandler = () => {
    setDrawerHandler(true);
  };
  const closeDrawerHandler = () => {
    setDrawerHandler(false);
  };
  return (
    <div className="nav-container">
      {drawerHandler && <Backdrop onClick = {closeDrawerHandler}/>}
      <SideDrawer show={drawerHandler} onClick={closeDrawerHandler}>
        <nav className="main-nav-drawer">
          <ul className="main-nav-list-drawer">
            <li>
              <a href="#Contribution">Contribution</a>
            </li>
            <li>
              <a href="#Delegate">Delegate</a>
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
      <div className="nav">
        <button className="main-navigation-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>

        <div href="#" className="logo" style={{ cursor: "pointer" }}>
          <img src={NotionalLogo} alt="Logo" />
        </div>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#Contribution">Contribution</a>
            </li>
            <li>
              <a href="#Delegate">Delegate</a>
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
