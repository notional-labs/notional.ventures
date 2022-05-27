import "./Footer.css";
import React from "react";
import NotionalLogo from "../media/logo/notional.png";
import { Image } from "antd";
// import Discord from "../media/icon/discord.png";
import Github from "../media/icon/github.png";
import Twitter from "../media/icon/twitter.png";
import Telegram from "../media/icon/telegram.png";

const Footer = () => {
  return (
    <div className = "footer">
      <Image className="footer-img" src={NotionalLogo} preview={false}/>
      <p className="footer-text" >Meet the global social commnuity:</p>
      <div className="media-link">
        {/* <a><Image className="icon-footer__img" preview ={false} src={Discord}/></a> */}
        <a href="https://github.com/notional-labs"><Image className="icon-footer__img" preview ={false} src={Github}/></a>
        <a href="https://twitter.com/notionaldao"><Image className="icon-footer__img" preview ={false} src={Twitter}/></a>
        <a href="https://web.telegram.org/z/#-542022627"><Image className="icon-footer__img" preview ={false} src={Telegram}/></a>
      </div>
    </div>
  );
};

export default Footer;
