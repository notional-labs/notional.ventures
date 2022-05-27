import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Image, Tooltip } from "antd";
import Backdrop from "./Backdrop";
import Zoom from "@mui/material/Zoom";
import StakeUptime from "./StakeUptime";
import Ping from "../../media/stake/ping.png";
import Keplr from "../../media/stake/keplr.png";
import Modal_divisor from "../../media/stake/modal-divisor.png";
import Info_divisor from "../../media/stake/info-divisor.png";
import StakeCalculate from "./StakeCalculate";
import "./StakeModal.css";

const ModalOverlay = (props) => {
  const smartTrim = (string, maxLength) => {
    if (!string) return string;
    if (string.length <= maxLength) return string;
    let midpoint = Math.ceil(string.length / 2);
    let toremove = string.length - maxLength;
    let lstrip = Math.ceil(toremove / 2);
    let rstrip = toremove - lstrip;
    return (
      string.substring(0, midpoint - lstrip) +
      "..." +
      string.substring(midpoint + rstrip)
    );
  };

  const [copyFeedback, setCopyFeedback] = React.useState("Click to copy");
  const copyToClipboard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopyFeedback("Copied!");
    } catch (err) {
      setCopyFeedback("Failed to copy!");
    }
  };

  const content = (
    <div className={`modal ${props.className}`}>
      <div className="leftModule">
        <div className="chain-section">
          <div className="chainInfo">
            <Image
              preview={false}
              className="chainLogo"
              src={props.image}
            />
            <div className="chainLabel">{props.name}</div>
          </div>

          <img src={Info_divisor} className="info-divisor" />

          <table className="chainDetail">
            <tr>
              <td className="detailLabel">Chain ID:</td>
              <td className="detailValue">{props.chainid}</td>
            </tr>
            <tr>
              <td className="detailLabel">Block Height:</td>
              <td className="detailValue">
                {props.blockheight.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="detailLabel">Block Time:</td>
              <td className="detailValue">{props.blocktime.toFixed(2)}s</td>
            </tr>
            <tr>
              <td className="detailLabel">Price:</td>
              <td className="detailValue">$ {props.price.toFixed(2)}</td>
            </tr>
          </table>
        </div>

        <table className="validator-section">
          <tr>
            <td className="validatorLabel">Validator:</td>
            <td className="validatorValue">Notional</td>
          </tr>
          <tr>
            <td className="validatorLabel">Address:</td>
            <td
              className="validatorValue"
              style={{ cursor: "pointer" }}
              onClick={() => copyToClipboard(props.address)}
            >
              <Tooltip TransitionComponent={Zoom} title={copyFeedback}>
                {smartTrim(props.address, 25)}
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td className="validatorLabel">Rank:</td>
            <td className="validatorValue">{props.rank}</td>
          </tr>
          <tr>
            <td className="validatorLabel">Commission:</td>
            <td className="validatorValue">{props.commission*100}%</td>
          </tr>
          <tr>
            <td className="validatorLabel">Voting Power:</td>
            <td className="validatorValue">{props.votingPower}</td>
          </tr>
        </table>
      </div>

      <img src={Modal_divisor} className="modal-divisor" />

      <div>
        <div className="profit-section">
          <StakeCalculate
            denom={props.denom}
            apr={props.apr}
            price={props.price}
          />
        </div>

        <div className="uptime-section">
          <StakeUptime height={props.height} uptime={props.uptime} />
        </div>

        <div className="button">
          <button className="delegate-btn keplr">
            <a
              onClick = {() => window.open(`https://wallet.keplr.app/#/${props.keplr}/stake?modal=stake&validator=${props.address}`)}
              className="link"
            >
              Delegate with Keplr
            </a>

            <img src={Keplr} className="iconsasd" />
          </button>
          <button className="delegate-btn ping">
            <a
              onClick = {() => window.open(`https://ping.pub/${props.ping}/staking/${props.address}`)}
              className="link"
            >
              Delegate with Ping.pub
            </a>
            <img src={Ping} className="iconsasd" />
          </button>
        </div>
      </div>
    </div>
  );
  return (ReactDOM.createPortal(content, document.getElementById("modal-hook")));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
