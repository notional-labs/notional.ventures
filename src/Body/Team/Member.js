import jacob from "../../media/imgs/Members/Jacob.jpeg";
import khanh from "../../media/imgs/Members/Khanh.jpg";
import ricardo from "../../media/imgs/Members/Ricardo.jpeg";
import billy from "../../media/imgs/Members/Billy.png";
import long from "../../media/imgs/Members/Long.jpg";
import son from "../../media/imgs/Members/Son.jpg";
import vuong from "../../media/imgs/Members/Vuong.png";
import minh from "../../media/imgs/Members/Minh.jpg";
import vinh from "../../media/imgs/Members/Vinh.jpg";
import du from "../../media/imgs/Members/Du.jpg";
import hieu from "../../media/imgs/Members/Hieu.jpg";
import huy from "../../media/imgs/Members/Huy.jpg";
import brenhill from "../../media/imgs/Members/Brenhill.jpeg";
import "./Member.css";
import { Image } from "antd";
export const members = [
  <div>
    <div className="member">
      <Image
        src={jacob}
        alt="An image"
        className="member-img"
        preview={false}
      />
      <p className="member-name">Jacob Gadikian</p>
      <p className="member-position">Founder and Principal Engineer</p>
      <p className="member-description">
        Jacob has been active in Cosmos since working as Jae Kwon's research
        assistant at Tendermint. He owns a share in a bitcoin mine, and
        contributes to several projects in Cosmos.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image
        src={khanh}
        alt="An image"
        className="member-img"
        preview={false}
      />
      <p className="member-name">Khanh Nguyen</p>
      <p className="member-position">Lead Engineer</p>
      <p className="member-description">
        Khanh is an exceptionally talented engineer and helped to build out
        Notional's engineering team. He is a frequent contributor to several
        major Cosmos projects.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image
        src={ricardo}
        alt="An image"
        className="member-img"
        preview={false}
      />
      <p className="member-name">Ricardo Ferreira</p>
      <p className="member-position">Business Development</p>
      <p className="member-description">
        Having vast commercial and contracts experience, Ricardo heads up
        Notional's client engagement and ongoing success management of the B2B
        relationship lifecycle.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image
        src={billy}
        alt="An image"
        className="member-img"
        preview={false}
      />
      <p className="member-name">William Gray</p>
      <p className="member-position">Marketing Director</p>
      <p className="member-description">
        William is responsible for marketing and communications efforts to
        increase Notional's brand position and delegations. He also assists with
        client outreach.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={long} alt="An image" className="member-img" preview={false} />
      <p className="member-name">Long Mai Gia</p>
      <p className="member-position">Infrastructure Lead</p>
      <p className="member-description">
        Long oversees Notional's relaying and validation infrastructure. He is
        also the front-of-house person for all relaying issues from clients.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={son} alt="An image" className="member-img" preview={false} />
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
      <Image
        src={vuong}
        alt="An image"
        className="member-img"
        preview={false}
      />
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
      <Image src={minh} alt="An image" className="member-img" preview={false} />
      <p className="member-name">Minh Vu Le Nhat</p>
      <p className="member-position">
        Service Technician and Customer Engineer
      </p>
      <p className="member-description">
        Minh is responsible for Notional's server configurations with deep
        insight in Linux and creating all useful open-sourced tools to improve
        the Cosmos ecosystem.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={vinh} alt="An image" className="member-img" preview={false} />
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
      <Image src={du} alt="An image" className="member-img" preview={false} />
      <p className="member-name">Du Nguyen</p>
      <p className="member-position">Infrastructure</p>
      <p className="member-description">
        Du assists Long with relaying and validator infrastructure and is
        rapidly learning how to manage Notional's systems to a high-degree of
        efficiency.
      </p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image
        src={brenhill}
        alt="An image"
        className="member-img"
        preview={false}
      />
      <p className="member-name">Brenn Hill</p>
      <p className="member-position">Mentor Advisor</p>
      <p className="member-description"></p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={huy} alt="An image" className="member-img" preview={false} />
      <p className="member-name">Huy Nguyen</p>
      <p className="member-position">Designer</p>
      <p className="member-description"></p>
    </div>
  </div>,
  <div>
    <div className="member">
      <Image src={hieu} alt="An image" className="member-img" preview={false} />
      <p className="member-name">Hieu Vu</p>
      <p className="member-position">CosmWasm Developer</p>
      <p className="member-description"></p>
    </div>
  </div>,
];
