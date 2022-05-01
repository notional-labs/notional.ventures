import React from "react";
import { ReactComponent as Akash } from "../media/background-decor/Akash.svg";
import { ReactComponent as Osmosis } from "../media/background-decor/Osmosis.svg";
import { ReactComponent as Dig } from "../media/background-decor/Dig.svg";
import { ReactComponent as Emoney } from "../media/background-decor/E-money.svg";
import { ReactComponent as Atom } from "../media/background-decor/Atom.svg";
import { ReactComponent as Sifchain } from "../media/background-decor/Sifchain.svg";
import { ReactComponent as Juno } from "../media/background-decor/Juno.svg";
import { ReactComponent as Orange } from "../media/background-decor/Rectangle13.svg";
import { ReactComponent as Yellow } from "../media/background-decor/Rectangle14.svg";
import { ReactComponent as Purple } from "../media/background-decor/Rectangle15.svg";
import { ReactComponent as Red } from "../media/background-decor/Rectangle16.svg";
import { ReactComponent as Blue } from "../media/background-decor/Rectangle17.svg";
import { ReactComponent as Green } from "../media/background-decor/Rectangle18.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className = "hero">
      <div className = "description">
        <hr className = "bar"></hr>
        <p className = "greetings">
          At Notional, we all believe that Khanh is gay
        </p>
        <p className = "label"></p>
      </div>
      <div>
        <Akash className = "akash" />
        <Atom className = "atom" />
        <Osmosis className = "osmosis" />
        <Dig className = "dig" />
        <Emoney className = "emoney" />
        <Sifchain className = "sifchain" />
        <Juno className = "juno" />
        <Orange className = "orange" />
        <Yellow className = "yellow" />
        <Purple className = "purple" />
        <Red className = "red" />
        <Blue className = "blue" />
        <Green className = "green" />
      </div>
    </div>
  );
};

export default Hero;
