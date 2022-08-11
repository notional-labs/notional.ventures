import React from "react";
import "./Rpc.css"
import { STAKES } from "../../Stake/chains-data";
import ServiceNav from "../components/ServiceNav";
import RpcList from "../components/RpcList";

const Rpc = () => {
    return (
        <div className="rpc-section">
            <ServiceNav/>
            <div className="rpc-container">
                <div>RPC list</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ante in nisi ultricies pharetra sed at metus. </p>
                <div>
                    <RpcList rpc = {STAKES}/>
                </div>
            </div>
        </div>
    )
}

export default Rpc;