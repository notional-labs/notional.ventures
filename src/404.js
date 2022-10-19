import React from "react";
import "./404.css";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import NotFound from "./media/imgs/404/icon.avif"
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <Navbar />
      <div className="error-content">
        <img src={NotFound}/>
        <p className="error-text">Page not found, can you return home and check the url?</p>
        <button className="notfound-btn">
          <Link className="notfound-link" to={"/"}> Back to Home </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
