import "./Header.css";
import Navbar from "./Navbar";
import React from "react";
import {ReactComponent as Group17} from '../media/Group17.svg'
import {ReactComponent as Group171} from '../media/group17-1.svg'

const Header = () => {
  return (
    <div className="header">
        <Navbar />
        <Group17 className="background1"/>
        <Group171 className="background2"/>
    </div>
  );
};

export default Header;
