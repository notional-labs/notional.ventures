import React from "react";
import "./Infra.css";
import Graph from "./components/graph/Graph";

import { Link } from "react-router-dom";
import { Image } from "antd";
import Endpoint from "../../media/imgs/Infrastructure/Logo/Endpoint.svg";
import Snapshot from "../../media/imgs/Infrastructure/Logo/Snapshot.svg";
import Upgrade from "../../media/imgs/Infrastructure/Logo/Update.svg";
import Uptime from "../../media/imgs/Infrastructure/Logo/Uptime1.svg";
import Tenderduty from "../../media/imgs/Infrastructure/Logo/Tenderduty.svg";
import Abstract from "../../media/imgs/Infrastructure/abstract.avif";

const Infra = () => {
  return (
    <div id="Infra" className="infra-section">
      <img src={Abstract} alt="An abstract" className="infra-abstract" />
      <div className="title">
        <hr className="bar"></hr>
        <p className="name">Infrastructure</p>
        <p className="text">
          We provide services for various chains in Cosmos Ecosystem, from RPC,
          gRPC, WebSocket and API to snapshot services and our service uptime
          monitor status. Feel free to checkout all service.
        </p>
      </div>

      <div className="relayer">
        <div className="relayer-info">
          <p className="relayer-title">Our IBC Relayer</p>
          <p className="relayer-text">
            We provide IBC relayers to support the Cosmos ecosystem. If you want
            to support our works please delegate to our validators
          </p>
        </div>

        <Graph />
      </div>

      <div className="services">
        <Link to="/endpoint" className="link">
          <button className="service-item">
            <Image src={Endpoint} alt="An endpoint" preview={false} />
            <div className="service-item-name">ENDPOINTS</div>
          </button>
        </Link>
        <Link to="/snapshot"  className="link">
          <button className="service-item">
            <Image src={Snapshot} alt="An snapshot" preview={false} />
            <div className="service-item-name">SNAPSHOT</div>
          </button>
        </Link>
        <Link to="/upgrade" className="link">
          <button className="service-item">
            <Image src={Upgrade} alt="An upgrade" preview={false} />
            <div className="service-item-name">CHAINS UPGRADE</div>
          </button>
        </Link>
        <div
          onClick={() =>
            window.open(`https://status.notional.ventures`)
          }
          className="link"
        >
          <button className="service-item">
            <Image src={Uptime} alt="An uptime" preview={false} />
            <div className="service-item-name">UPTIME KUMA</div>
          </button>
        </div>
        <div
          onClick={() => window.open(`https://tenderduty.notional.ventures`)}
          className="link"
        >
          <button className="service-item">
            <Image src={Tenderduty} alt="An tenderduty" preview={false} />
            <div className="service-item-name">TENDERDUTY</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Infra;
