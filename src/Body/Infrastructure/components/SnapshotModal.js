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

  let golvdb_content = <div>golvdb</div>;
  let rocklvdb_content = <div>rocklvdb</div>;
  let instruction_content = <div>
        instruction <br />
        Date: 12/34/5961 13:12:20 CEST Time<br/>
        Size: 120Gb
    </div>;
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
        <div className="snapshot-name">
          <p>{props.name}</p>
        </div>
        <div className="snapshot-type-modal-container">
          <ul className="snapshot-modal-navbar">
            <li>
              <button
                onClick={changeToIns}
                className="snapshot-modal-navbar-btn"
              >
                Instruction
              </button>
            </li>
            <li>
              <button
                onClick={changeToGo}
                className="snapshot-modal-navbar-btn"
              >
                GoLevelDB
              </button>
            </li>
            <li>
              <button
                onClick={changeToRock}
                className="snapshot-modal-navbar-btn"
              >
                Rocksdb
              </button>
            </li>
          </ul>
          <div className="snapshot-modal-data">
            {(golvdb && golvdb_content) ||
              (rocklvdb && rocklvdb_content) ||
              (instruction && instruction_content)}
          </div>
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
