import React from "react";
import EndpointItem from "./EndpointItem";
import "./EndpointList.css";

const EndpointList = (props) => {
  return (
    <ol className="endpoint-list">
      {props.rpc.map((stake) => (
        <dd key={stake.id} className="endpoint-item">
          <EndpointItem
            id={stake.id}
            image={stake.image}
            name={stake.name}
            rpc_service={stake.rpc_service}
            api_service={stake.api_service}
            grpc_service={stake.grpc_service}
          />
        </dd>
      ))}
    </ol>
  );
};

export default EndpointList;
