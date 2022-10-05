import "./App.css";
import Header from "./Header/Header";
import Contributions from "./Body/Contribute/Contributions";
import Stake from "./Body/Stake/Stake";
import Infrastructure from "./Body/Infrastructure/Infra";
import Project from "./Body/Project/Project";
import Team from "./Body/Team/Team";
import Contact from "./Body/Contact/Contact";
import Footer from "./Footer/Footer";
import { useState, useEffect } from "react";
import Loading from "./media/imgs/loading.webm";
import { useParams } from "react-router-dom";
import React from "react";

const facts = [
  "Notional strives to satisfy our customers",
  "We are changing our Endpoint services, please go to Endpoints section to see the new endpoints",
];

const Home = (props) => {
  return (
    <>
      <Header />
      <Contributions />
      <Stake showModal={props.showModal} id={props.id} />
      <Infrastructure />
      <Project />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

function App(props) {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const randomText = facts[Math.floor(Math.random() * facts.length)];
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <React.Fragment>
      {isLoading && (
        <div className="loader-container">
          <div className="loader-container">
            <video autoPlay loop muted playsInline>
              <source src={Loading} type="video/webm" />
            </video>
            <p className="loading-title">DID YOU KNOW</p>
            <p className="loading-text">{randomText}</p>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="root">
          <Home showModal={props.showModal} id={id} />
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
