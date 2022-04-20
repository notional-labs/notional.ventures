import React from "react";
import { ReactComponent as Akash } from "../media/Akash.svg";
import { ReactComponent as Desmos } from "../media/Desmos.svg";
import { ReactComponent as Dig } from "../media/Dig.svg";
import { ReactComponent as Emoney } from "../media/E-money.svg";
import { ReactComponent as Atom } from "../media/Atom.svg";
import { ReactComponent as Lum } from "../media/Lum.svg";
import { ReactComponent as Juno } from "../media/Juno.svg";
import { ReactComponent as Orange } from "../media/Rectangle13.svg";
import { ReactComponent as Yellow } from "../media/Rectangle14.svg";
import { ReactComponent as Purple } from "../media/Rectangle15.svg";
import { ReactComponent as Red } from "../media/Rectangle16.svg";
import { ReactComponent as Blue } from "../media/Rectangle17.svg";
import { ReactComponent as Green } from "../media/Rectangle18.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">

      <div className="description">
        <p>At Notional we belive that khanh is gay</p>
      </div>
      <div>
        <Akash className="akash" />
        <Atom className="atom" />
        <Desmos className="desmos" />
        <Dig className="dig" />
        <Emoney className="emoney" />
        <Lum className="lum" />
        <Juno className="juno" />
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
