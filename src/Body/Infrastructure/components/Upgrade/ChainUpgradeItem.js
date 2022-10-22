import React from "react";
import "./ChainUpgradeItem.css";

const ChainUpgradeItem = (props) => {
  return props !== "undefined" ? (
    <tbody>
      <tr className="chain-upgrade-items">
        <td className="link-upgrade"
          onClick={() =>
            window.open(
              `https://ping.pub/${props.ping}/gov/${props.proposalID}`
            )
          }
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          {props.name}
        </td>
        <td>{props.currentHeight}</td>
        <td className="link-upgrade"
          onClick={() =>
            window.open(
              `https://www.mintscan.io/${props.ping}/blocks/${props.updateHeight}`
            )
          }
          style={{ cursor: "pointer", textDecoration: "underline"}}
        >
          {props.updateHeight}
        </td>
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
