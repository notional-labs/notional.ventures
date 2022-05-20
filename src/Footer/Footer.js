import "./Footer.css";
import React from "react";
import NotionalLogo from "../media/logo/notional.png";
import { Image } from "antd";
import Discord from "../media/icon/discord.png";
import Github from "../media/icon/github.png";
import Twitter from "../media/icon/twitter.png";
import Telegram from "../media/icon/telegram.png";

const Footer = () => {
  return (
    <div className = "footer">
      <Image style={{width:"11rem", height:"3rem"}} src={NotionalLogo}/>
      <div className="media-link">
        <a><Image preview ={false} src={Discord}/></a>
        <a><Image preview ={false} src={Github}/></a>
        <a href="https://twitter.com/notionaldao"><Image preview ={false} src={Twitter}/></a>
        <a><Image preview ={false} src={Telegram}/></a>
      </div>
    </div>
  );
};

export default Footer;
