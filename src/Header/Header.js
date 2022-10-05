import "./Header.css";
import Navbar from "./Navbar";
import React from "react";
import { ReactComponent as Group17 } from "../media/imgs/Header/abstract-2.svg";
import Abstract from "../media/imgs/Header/abstract-1.avif";
import { ReactComponent as Osmosis } from "../media/logo/Header/Osmosis.svg";
import { ReactComponent as Juno } from "../media/logo/Header/Juno.svg";
import { ReactComponent as Atom } from "../media/logo/Header/Atom.svg";
import { ReactComponent as Evmos } from "../media/logo/Header/Evmos.svg";
import { ReactComponent as Secret } from "../media/logo/Header/Secret.svg";
import { ReactComponent as Omniflix } from "../media/logo/Header/Omniflix.svg";
import { ReactComponent as Sif } from "../media/logo/Header/Sif.svg";
import { ReactComponent as Akash } from "../media/logo/Header/Akash.svg";
import { ReactComponent as Orange } from "../media/imgs/Header/orange.svg";
import { ReactComponent as Yellow } from "../media/imgs/Header/yellow.svg";
import { ReactComponent as Purple } from "../media/imgs/Header/purple.svg";
import { ReactComponent as Red } from "../media/imgs/Header/red.svg";
import { ReactComponent as Blue } from "../media/imgs/Header/blue.svg";
import { ReactComponent as Green } from "../media/imgs/Header/green.svg";

const Header = () => {
  return (
    <div id="Header" className="header">
      <Navbar />
      <Group17 className="lines" />
      <img src={Abstract} alt="An abstract" className="abstract" />
      <Akash className="akash" />
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

      <div className="description">
        <hr className="bar"></hr>
        <p className="greetings">
          Edge Validation, Relaying, and Open-Source Software Development
        </p>
      </div>
    </div>
  );
};

export default Header;
