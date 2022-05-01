import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { Image, Tooltip } from "antd";
import Backdrop from "./Backdrop";
import Zoom from "@mui/material/Zoom";
import StakeUptime from "./StakeUptime";
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
  const [open, setOpen] = React.useState(true);
  const [copyFeedback, setCopyFeedback] = React.useState("Click to copy");
  const handleClose = () => {
    setOpen(false);
  };
  const copyToClipboard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopyFeedback("Copied!");
      setOpen(true);
    } catch (err) {
      setCopyFeedback("Failed to copy!");
      setOpen(true);
    }
  };

  const content = (
    <div className={`modal ${props.className}`}>
      <div>
        <div className="chain-section">
          <div className="chain-info__image">
            <Image
              preview={false}
              className="chain-image"
              src={props.image}
              alt={props.name}
              style={{
                width: "12rem",
                height: "12rem",
                marginLeft: "-20px",
                marginRight: "-20px",
              }}
            />
            <div>{props.name}</div>
          </div>

          <img src={Info_divisor} className="info-divisor" />

          <table className="chain-info__text">
            <tr>
              <td className="info-label">Chain ID:</td>
              <td className="info-value">{props.chainid}</td>
            </tr>
            <tr>
              <td className="info-label">Block Height:</td>
              <td className="info-value">
                {props.blockheight.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="info-label">Block Time:</td>
              <td className="info-value">{props.blocktime.toFixed(2)}s</td>
            </tr>
            <tr>
              <td className="info-label">Price:</td>
              <td className="info-value">$ {props.price.toFixed(2)}</td>
            </tr>
          </table>
        </div>
        <table className="validator-section">
          <tr>
            <td className="validator-label">Validator:</td>
            <td className="validator-value">Notional</td>
          </tr>
          <tr>
            <td className="validator-label">Address:</td>
            <td
              className="validator-value"
              style={{ cursor: "pointer" }}
              onClick={() => copyToClipboard(props.address)}
            >
              <Tooltip
                open={open}
                TransitionComponent={Zoom}
                title={copyFeedback}
              >
                {smartTrim(props.address, 20)}
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td className="validator-label">Rank:</td>
            <td className="validator-value"></td>
          </tr>
          <tr>
            <td className="validator-label">Commission:</td>
            <td className="validator-value"></td>
          </tr>
          <tr>
            <td className="validator-label">Voting Power:</td>
            <td className="validator-value"></td>
          </tr>
        </table>
      </div>

      <img src={Modal_divisor} className="modal-divisor" />

      <div>
        <div className="profit-section">
          <StakeCalculate
            denom={props.denom}
            pool={props.pool}
            supply={props.supply}
            inflation={props.inflation}
            price={props.price}
          />
        </div>

        <div className="uptime-section">
          <StakeUptime height={props.height} uptime={props.uptime} />
        </div>

        <div className="button">
          <button className="delegate-btn keplr">
            <a
              href={`https://wallet.keplr.app/#/${props.keplr}/stake?modal=stake&validator=${props.address}`}
              className="link"
            >
              Delegate with Keplr
            </a>
          </button>
          <button className="delegate-btn ping">
            <a
              href={`https://ping.pub/${props.ping}/staking/${props.address}`}
              className="link"
            >
              Delegate with PingPub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
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
