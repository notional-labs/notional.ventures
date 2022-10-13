import React from "react";
import "./404.css";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

function Error() {
  return (
    <div className="error">
      <Navbar />
      <div className="error-content">
        <h1 className="error-title">It looks like you're lost in space. Sorry, we're either.</h1>
        <p className="error-text">While we are calling aliens for help, why don't you return to home or check the link?</p>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
