import React from "react";
import { ReactComponent as Osmosis } from "../media/background-logo/Osmosis.svg";
import { ReactComponent as Juno } from "../media/background-logo/Juno.svg";
import { ReactComponent as Atom } from "../media/background-logo/Atom.svg";
import { ReactComponent as Evmos } from "../media/background-logo/Evmos.svg";
import { ReactComponent as Secret } from "../media/background-logo/Secret.svg";
import { ReactComponent as Omniflix } from "../media/background-logo/Omniflix.svg";
import { ReactComponent as Sif } from "../media/background-logo/Sif.svg";
import { ReactComponent as Akash } from "../media/background-logo/Akash.svg";
import { ReactComponent as Orange } from "../media/background-decor/Rectangle13.svg";
import { ReactComponent as Yellow } from "../media/background-decor/Rectangle14.svg";
import { ReactComponent as Purple } from "../media/background-decor/Rectangle15.svg";
import { ReactComponent as Red } from "../media/background-decor/Rectangle16.svg";
import { ReactComponent as Blue } from "../media/background-decor/Rectangle17.svg";
import { ReactComponent as Green } from "../media/background-decor/Rectangle18.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="description">
        <hr className="bar"></hr>
        <p className="greetings">
        Edge Validation, Relaying, and Open-Source Software Development
        </p>
        <button className="info-btn"> Whitepaper </button>
      </div>
      <div>
        <Akash className="akash"></Akash>
        <Osmosis className="osmosis" />
        <Secret className="secret" />
        <Juno className="juno" />
        <Atom className="atom" />
        <Evmos className="evmos" />
        <Omniflix className="omniflix" />
        <Sif className="sifchain" />
        <Orange className="orange" />
        <Yellow className="yellow" />
        <Purple className="purple" />
        <Red className="red" />
        <Blue className="blue" />
        <Green className="green" />
      </div>
    </div>
  );
};

export default Hero;
