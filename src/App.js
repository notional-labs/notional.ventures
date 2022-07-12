import React from "react";
import "../src/App.css";
import Header from "./Header/Header";
import Contributions from "./Body/Contribute/Contributions";
import Stake from "./Body/Stake/Stake";
import Project from "./Body/Project/Project";
import Team from "./Body/Team/Team";
import ScrollButton from "./Components/ScrollTopButton";
import Contact from "./Body/Contact/Contact";
import Footer from "./Footer/Footer";
import RingLoader from "react-spinners/RingLoader";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // useEffect (() => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 4000)
  // },[])
  return (
    <React.Fragment>
      {isLoading && (
        <div className="loader-container">
          <RingLoader color="#eaebed" size={130} />
        </div>
      )}
      {!isLoading && (
        <div className="root">
          <Router>
            <Header />
            <Contributions />
            <Stake />
            <Project />
            <Team />
            <Contact />
            <ScrollButton />
            <Footer />
          </Router>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
