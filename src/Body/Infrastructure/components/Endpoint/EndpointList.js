import React from "react";
import EndpointItem from "./EndpointItem";
import "./EndpointList.css";

const EndpointList = (props) => {
  console.log(props)
  return (
    <ol className="endpoint-list">
      {props.rpc.map((stake) => (
        <li className="endpoint-item">
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
