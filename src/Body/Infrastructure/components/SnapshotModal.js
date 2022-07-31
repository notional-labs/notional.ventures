import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
// import { Image, Tooltip } from "antd";
import Backdrop from "../../Stake/Backdrop";
import "./SnapshotModal.css";

const ModalOverlay = (props) => {
  const [golvdb, setGolvdb] = useState(false);
  const [rocklvdb, setRocklvdb] = useState(false);
  const [instruction, setInstruction] = useState(true);

  let golvdb_content = (
    <div>
      <div>
        <h3>Addrbook.json</h3>
        <p>wget -O ~/.osmosisd/config/addrbook.json URL</p>
        <button>
          <a href={props.goSnapshotInfo.addrbook}>Download</a>
        </button>
      </div>
      <div>
        <h3>Snapshot</h3>
        <p>
          cd ~/.osmosisd <br />
          aria2c -x8 URL <br />
          tar -xvf file_name <br />
        </p>
        <button>
          <a href={props.goSnapshotInfo.data}>
            Download |{" "}
            {(props.goSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)} GB
          </a>
        </button>
      </div>
    </div>
  );
  let rocklvdb_avl = (
    <div>
      <div>
        <h3>Addrbook.json</h3>
        <p>wget -O ~/.osmosisd/config/addrbook.json URL</p>
        <button>
          <a href={props.rockSnapshotInfo.addrbook}>Download</a>
        </button>
      </div>
      <div>
        <h3>Snapshot</h3>
        <p>
          cd ~/.osmosisd <br />
          aria2c -x8 URL <br />
          tar -xvf file_name <br />
        </p>
        <button>
          <a href={props.rockSnapshotInfo.data}>
            Download |{" "}
            {(props.rockSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)}{" "}
            GB
          </a>
        </button>
      </div>
    </div>
  );
  let rocklvdb_unavl = <h1>unavailable at the moment</h1>;
  const rocklvdb_content =
    props.rockSnapshotInfo.addrbook === "NaN" ? rocklvdb_unavl : rocklvdb_avl;
  let instruction_content = (
    <div>
      Chain ID <br />
      GoLevelDB <br />
      Date: {props.goSnapshotInfo.data_date} <br />
      Size: {(props.goSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)} GB
      <br />
      RockLevelDB <br />
      {props.rockSnapshotInfo.addrbook === "NaN" ? (
        <div>Not available</div>
      ) : (
        <div>
          Date: {props.rockSnapshotInfo.data_date} <br />
          Size:{" "}
          {(props.rockSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)}
          GB
          <br />
        </div>
      )}
    </div>
  );
  const changeToGo = () => {
    setGolvdb(true);
    setRocklvdb(false);
    setInstruction(false);
  };
  const changeToRock = () => {
    setGolvdb(false);
    setRocklvdb(true);
    setInstruction(false);
  };
  const changeToIns = () => {
    setGolvdb(false);
    setRocklvdb(false);
    setInstruction(true);
  };
  let content = (
    <div className={`modal ${props.className}`}>
      <div className="content">
        <div className="snapshot-type-modal-container">
          <div className="snapshot-name">
            <p>{props.name}</p>
          </div>
          <ul className="snapshot-modal-navbar">
            <li>
              <button
                onClick={changeToIns}
                className={
                  instruction
                    ? "snapshot-modal-navbar-btn-focus"
                    : "snapshot-modal-navbar-btn"
                }
              >
                Instruction
              </button>
            </li>
            <li>
              <button
                onClick={changeToGo}
                className={
                  golvdb
                    ? "snapshot-modal-navbar-btn-focus"
                    : "snapshot-modal-navbar-btn"
                }
              >
                GoLevelDB
              </button>
            </li>
            <li>
              <button
                onClick={changeToRock}
                className={
                  rocklvdb
                    ? "snapshot-modal-navbar-btn-focus"
                    : "snapshot-modal-navbar-btn"
                }
              >
                Rocksdb
              </button>
            </li>
          </ul>
        </div>
        <div className="snapshot-modal-data">
          {(golvdb && golvdb_content) ||
            (rocklvdb && rocklvdb_content) ||
            (instruction && instruction_content)}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("snapshot-modal-hook")
  );
};

const SnapshotModal = (props) => {
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

export default SnapshotModal;
