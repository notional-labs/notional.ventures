import React from "react";
import RpcItem from "./RpcItem";
import "./RpcList.css"

const RpcList = (props) => {
        return (
            <ul className="rpc-list">
                {props.rpc.map((stake) => (
                    <RpcItem
                        key={stake.id}
                        id={stake.id}
                        image={stake.image}
                        name={stake.name}
                        rpc_service={stake.rpc_service}
                        api_service={stake.api_service}
                        grpc_service={stake.grpc_service}
                    />
                ))}
            </ul>
        );
}

export default RpcList;