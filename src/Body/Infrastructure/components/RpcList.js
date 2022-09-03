import React from "react";
import RpcItem from "./RpcItem";
import "./RpcList.css";

const RpcList = (props) => {
  return (
    <ol className="rpc-list">
      {props.rpc.map((stake) => (
        <li class="rpc-item">
          <RpcItem
            key={stake.id}
            id={stake.id}
            image={stake.image}
            name={stake.name}
            rpc_service={stake.rpc_service}
            api_service={stake.api_service}
            grpc_service={stake.grpc_service}
          />
        </li>
      ))}
    </ol>
  );
};

export default RpcList;
