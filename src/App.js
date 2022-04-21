import React from "react";
import "../src/App.css";
import Header from "./Header/Header";
import Contributions from "./Body/Contribute/Contributions";
import Stake from "./Body/Stake/Stake";
import Project from "./Body/Project/Project";

function App() {
  return (
    <React.Fragment>
      <div className="root">
        <Header/>
        <Contributions/>
        <Stake/>
        <Project/>
      </div>
    </React.Fragment>
  );
}

export default App;
