import React from "react";
import "../src/App.css";
import Header from "./Header/Header";
import Contributions from "./Body/Contribute/Contributions";
import Stake from "./Body/Stake/Stake";
import Infrastructure from "./Body/Infrastructure//components/Infra";
import Project from "./Body/Project/Project";
import Team from "./Body/Team/Team";
import Contact from "./Body/Contact/Contact";
import Footer from "./Footer/Footer";
import GifLoader from "react-gif-loader";
import { useState, useEffect } from "react";
import Loading from "./media/background-decor/loading.gif";

const facts = [
    "Notional are happy to make our customer sastified", 
];

const Home = () => {
    return (
        <>
            <Header />
            <Contributions />
            <Stake />
            <Infrastructure />
            <Project />
            <Team />
            <Contact />
            <Footer />
        </>
    );
};

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const randomText = facts[Math.floor(Math.random() * facts.length)];
    useEffect (() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 4000)
    },[])
    return (
        <React.Fragment>
            {isLoading && (
                <div className="loader-container">
                    <GifLoader 
                        className="loading-logo"
                        loading={true}
                        imageSrc={Loading}
                    />
                    <p className="loading-title">DID YOU KNOW</p>
                    <p className="loading-text">{randomText}</p>
                </div>
            )}
            {!isLoading && (
                <div className="root">
                    <Home />
                </div>
            )}
        </React.Fragment>
    );
}

export default App;
