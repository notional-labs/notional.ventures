import "./Navbar.css";
import NotionalLogo from "../media/logo/notional.png";
import SideDrawer from "./SideDrawer";
import React, { useState } from "react";
import NavBtn from "../media/button/nav-btn.png";
import { Image } from "antd";
import { HashLink } from "react-router-hash-link";

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
      <SideDrawer show={drawerHandler} onCancel={closeDrawerHandler}>
        <nav className="main-nav-drawer">
          <ul className="main-nav-list-drawer">
            <li>
              <HashLink smooth to={"/#Contribution"}>
                Contribution
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Delegate"}>
                Delegate
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Project"}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Team"}>
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Contact"}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </SideDrawer>

      <div className="nav">
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

        <div href="#" className="logo" style={{ cursor: "pointer" }}>
          <Image
            style={{ width: "200px" }}
            className="logo-img"
            src={NotionalLogo}
            alt="Logo"
            preview={false}
          />
        </div>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <HashLink className="test" smooth to={"/#Contribution"}>
                Contribution
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Delegate"}>
                Delegate
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Project"}>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Team"}>
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={"/#Contact"}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
