import jacob from "../../media/members/jacob1.jpeg";
import khanh from "../../media/members/khanh1.jpg";
import ricardo from "../../media/members/ricardo1.jpeg";
import billy from "../../media/members/billy1.png";
import long from "../../media/members/long.jpg";
import son from "../../media/members/son.jpg";
import vuong from "../../media/members/vuong.png";
import minh from "../../media/members/Minh-web.jpg";
import vinh from "../../media/members/vinh1.jpg";
import du from "../../media/members/du1.jpg";
import hieu from "../../media/members/Hieu1.jpg";
import huy from "../../media/members/Huy1.jpg";
import chinh from "../../media/members/chinh.jpg";
import brenhill from "../../media/members/Brenhill.jpeg";
import "./Member.css";
import { Image } from "antd";
export const members = [
  <div>
    <div className="member">
      <Image src={jacob} className="member-img" preview={false} />
      <p className="member-name">Jacob Gadikian</p>
      <p className="member-position">Founder and Principal Engineer</p>
      <p className="member-description">
        Jacob has been active in Cosmos since working as Jae Kwon’s research
        assistant at Tendermint. He owns a share in a bitcoin mine, and
        contributes to several projects in Cosmos.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={khanh} className="member-img" preview={false} />
      <p className="member-name">Khanh Nguyen</p>
      <p className="member-position">Lead Engineer</p>
      <p className="member-description">
        Khanh is an exceptionally talented engineer and helped to build out
        Notional’s engineering team. He is a frequent contributor to several
        major Cosmos projects.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={ricardo} className="member-img" preview={false} />
      <p className="member-name">Ricardo Ferreira</p>
      <p className="member-position">Operations Manager</p>
      <p className="member-description">
        Ricardo is a co-founder of Notional and is responsible for overseeing
        operations and assisting in client outreach.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={billy} className="member-img" preview={false} />
      <p className="member-name">William Gray</p>
      <p className="member-position">Marketing Director</p>
      <p className="member-description">
        William is responsible for marketing and communications efforts to
        increase Notional’s brand position and delegations. He also assists with
        client outreach.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={long} className="member-img" preview={false} />
      <p className="member-name">Long Mai Gia</p>
      <p className="member-position">Infrastructure Lead</p>
      <p className="member-description">
        Long oversees Notional’s relaying and validation infrastructure.
        He is also the front-of-house person for all relaying issues from
        clients.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={son} className="member-img" preview={false} />
      <p className="member-name">Son Trinh</p>
      <p className="member-position">Blockchain Engineer</p>
      <p className="member-description">
        Son is dedicated to building out projects in Cosmos to solidify it as
        the go-to hub in the crypto world. He is a talented and eager blockchain
        engineer.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={vuong} className="member-img" preview={false} />
      <p className="member-name">Vuong Nguyen</p>
      <p className="member-position">Blockchain Engineer</p>
      <p className="member-description">
        Vuong is a capable and diligent engineer who has increasingly shown
        excellence in developing projects in Cosmos.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={minh} className="member-img" preview={false} />
      <p className="member-name">Minh Vu Le Nhat</p>
      <p className="member-position">
        Service Technician and Customer Engineer
      </p>
      <p className="member-description">
        Minh is responsible for Notional's server configurations with deep insight
        in Linux and creating all useful open-sourced tools to improve the Cosmos ecosystem.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={vinh} className="member-img" preview={false} />
      <p className="member-name">Vinh Nguyen</p>
      <p className="member-position">Project Manager</p>
      <p className="member-description">
        Vinh is very talented in business development and management. He has
        made great progress in optimizing organization and efficiency within
        Notional.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={du} className="member-img" preview={false} />
      <p className="member-name">Du Nguyen</p>
      <p className="member-position">Infrastructure</p>
      <p className="member-description">
        Du assists Long with relaying and validator infrastructure and is
        rapidly learning how to manage Notional’s systems to a high-degree of
        efficiency.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={brenhill} className="member-img" preview={false} />
      <p className="member-name">Brenn Hill</p>
      <p className="member-position">Mentor Advisor</p>
      <p className="member-description"></p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={huy} className="member-img" preview={false} />
      <p className="member-name">Huy Nguyen</p>
      <p className="member-position">Designer</p>
      <p className="member-description"></p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={hieu} className="member-img" preview={false} />
      <p className="member-name">Hieu Vu</p>
      <p className="member-position">CosmWasm Developer</p>
      <p className="member-description"></p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={chinh} className="member-img" preview={false} />
      <p className="member-name">Nguyen Duc Chinh</p>
      <p className="member-position">CosmWasm Developer</p>
      <p className="member-description"></p>
    </div>
  </div>,
];
