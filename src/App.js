import React from "react";
import "../src/App.css";
import Header from "./Header/Header";
import Contributions from "./Body/Contributions";

function App() {
  return (
    <React.Fragment>
      <div className="root">
        <Header/>
        <Contributions/>
      </div>
    </React.Fragment>
  );
}

export default App;
