import React from "react";
import "./Infra.css";
import Graph from "../components/Graph";
import { Link } from "react-router-dom";
import { Image } from "antd";
import RPC from "../../../media/background-logo/RPC.svg"
import Snapshots from "../../../media/background-logo/Snapshot.svg"
import Upgrade from "../../../media/background-logo/Update.svg"
import Uptime from "../../../media/background-logo/Uptime1.svg"
// import Background from "../../media/background-decor/infrastructe-background.png"

const Infra = () => {
    return (
        <div id="Infra" className="infra-section">
            {/* <img src = {Background} className = "infra-background"/> */}

            <div className="title">
                <hr className="bar"></hr>
                <p className="name">Infrastructure</p>
                <p className="text">
                    We provide services for various chains in Cosmos Ecosystem,
                    from RPC, gRPC, WebSocket and API to snapshot services and
                    our service uptime monitor status. Feel free to checkout all
                    service.
                </p>
            </div>

            <div className="relayer">
                <div className="relayer-info">
                    <p className="relayer-title">Our IBC Relayer</p>
                    <p className="relayer-text">
                        We provide services for various chains in Cosmos
                        Ecosystem, from RPC, gRPC, WebSocket and API to snapshot
                        services and our service uptime monitor status. Feel
                        free to checkout all service.
                    </p>
                </div>

                <Graph className="relayer-graph" />
            </div>

            <div className="services">
                <Link to="/rpc" className="link">
                    <button className="service-item">
                        <Image src={RPC} preview = {false} ></Image>
                        <div className="service-item-name">ENDPOINTS</div>
                    </button>
                </Link>
                <Link
                    to="/snapshot"
                    className="link"
                >
                    <button className="service-item">
                        <Image src={Snapshots} preview = {false} >26</Image>
                        <div className="service-item-name">SNAPSHOTS</div>
                    </button>
                </Link>
                <Link to="/chain-upgrade" className="link">
                    <button className="service-item">
                        <Image src={Upgrade} preview = {false} >26</Image>
                        <div className="service-item-name">
                            CHAINS UPGRADE
                        </div>
                    </button>
                </Link>
                <a href="https://status.notional.ventures/status/cosmosia" className="link">
                    <button className="service-item">
                        <Image src={Uptime} preview = {false} >26</Image>
                        <div className="service-item-name">UPTIME KUMA</div>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Infra;


