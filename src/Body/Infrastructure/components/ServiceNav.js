import React from "react";
import { Image } from "antd";
import NotionalLogo from "../../../media/logo/notional.png";
import "./ServiceNav.css";
import { Link } from "react-router-dom";

const ServiceNav = () => {
    return (
        <>
            <div className="nav-service">
                {/* <button className="main-navigation-btn" onClick={openDrawerHandler}>
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
        </button> */}

                <div href="#" className="logo" style={{ cursor: "pointer" }}>
                    <Image
                        style={{ width: "200px" }}
                        className="logo-img"
                        src={NotionalLogo}
                        alt="Logo"
                        preview={false}
                    />
                </div>

                <nav className="main-nav-service">
                    <ul className="main-nav-service-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link onFocus={true} to="/rpc">RPC</Link>
                        </li>
                        <li>
                            <Link to="/snapshot">Snapshot</Link>
                        </li>
                        <li>
                            <a href="#">Uptime</a>
                        </li>
                        <li>
                            <a href="#">Chais upgrade</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default ServiceNav;
