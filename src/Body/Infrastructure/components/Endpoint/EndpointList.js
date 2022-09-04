import React from "react";
import EndpointItem from "./EndpointItem";
import "./EndpointItem.css";

const EndpointList = (props) => {
  return (
    <ol className="endpoint-list">
      {props.rpc.map((stake) => (
        <li class="endpoint-item">
          <EndpointItem
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

export default EndpointList;
