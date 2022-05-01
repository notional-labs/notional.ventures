import "./Header.css";
import Navbar from "./Navbar";
import React from "react";
import { ReactComponent as Group17 } from "../media/background-decor/abstract.svg";
import { ReactComponent as Group171 } from "../media/background-decor/group17-1.svg";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className = "header">
      <Navbar />
      <Group17 className = "background1" />
      <Group171 className = "background2" />
      <Hero />
    </div>
  );
};

export default Header;
