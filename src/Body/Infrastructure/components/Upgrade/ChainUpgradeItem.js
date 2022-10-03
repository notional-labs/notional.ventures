import React from "react";
import "./ChainUpgradeItem.css";

const ChainUpgradeItem = (props) => {
  return props !== "undefined" ? (
    <tbody>
      <tr className="chain-upgrade-items">
        <td
          onClick={() =>
            window.open(
              `https://explorer.notional.ventures/${props.ping}/gov/${props.id}`
            )
          }
          style={{ cursor: "pointer" }}
        >
          {props.name}
        </td>
        <td>{props.currentHeight}</td>
        <td>{props.updateHeight}</td>
        <td>{props.version}</td>
        <td>{props.estimateTime}</td>
      </tr>
    </tbody>
  ) : (
    <tbody>
      <tr className="chain-upgrade-items">
        <td className="not-found" colSpan={5}>
          We didn't find any chain-upgrades available right now.
        </td>
      </tr>
    </tbody>
  );
};

export default ChainUpgradeItem;
