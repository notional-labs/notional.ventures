import "./Footer.css";
import React from "react";
import { Image } from "antd";
import Github from "../media/icon/github.png";
import Twitter from "../media/icon/twitter.png";
import Telegram from "../media/icon/telegram.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="policy">
                <div>2022 © Notional</div>
                <a href="https://forest-couch-240.notion.site/Terms-of-Service-1db7fb3fe55448d6838b1ad1900d353b" className="policy-links">Terms of Service</a>
                <a href="https://www.notion.so/Privacy-Policy-Notional-e360313466d5407584e446a502d546db" className="policy-links">Privacy Policy</a>
            </div>
            <div className="media-link">
            <p className="footer-text">Meet the global social commnuity:</p>
                <a href="https://github.com/notional-labs">
                    <Image
                        className="icon-footer__img"
                        preview={false}
                        alt="An github image"
                        src={Github}
                    />
                </a>
                <a href="https://twitter.com/notionaldao">
                    <Image
                        className="icon-footer__img"
                        alt="An twitter image"
                        preview={false}
                        src={Twitter}
                    />
                </a>
                <a href="https://web.telegram.org/z/#-542022627">
                    <Image
                        className="icon-footer__img"
                        alt="An telegram image"
                        preview={false}
                        src={Telegram}
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
