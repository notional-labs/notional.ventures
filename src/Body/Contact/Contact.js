import React from "react";
import "./Contact.css";
import ContactBackground from "../../media/background-decor/Contact.svg";
import Email from "../../media/icon/mail.png";
import Discord from "../../media/icon/discord.png";
import Github from "../../media/icon/github.png";
import Twitter from "../../media/icon/twitter.png";
import Telegram from "../../media/icon/telegram.png";
import { Image } from "antd";
const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Contacts</p>
      </div>
      <div className="contact">
        <Image style={{width:"1000px", height:"600px"}} src={ContactBackground} preview={false} />
        <div className="contact-items_container">
          <div>
            <h1>Contacts</h1>
            <div className="contact-items">
              <Image src={Email} preview={false} />
              <p>example@gmail.com</p>
            </div>
            <div className="contact-items">
              <Image src={Github} preview={false} />
              <p>example@gmail.com</p>
            </div>
            <div className="contact-items">
              <Image src={Discord} preview={false} />
              <p>example@gmail.com</p>
            </div>
          </div>
          <div>
            <h1>Social networks</h1>
            <div className="contact-items">
              <Image src={Twitter} preview={false} />
              <p>example@gmail.com</p>
            </div>
            <div className="contact-items">
              <Image src={Telegram} preview={false} />
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
