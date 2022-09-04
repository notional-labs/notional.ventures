import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../../../Stake/Backdrop";
import "./SnapshotModal.css";
import Modal_divisor from "../../../../media/imgs/Stake/modal-divisor.png";
import Info_divisor from "../../../../media/imgs/Stake/info-divisor.png";

const ModalOverlay = (props) => {
  const [pebbledb, setPebbledb] = useState(false);
  // const [rocklvdb, setRocklvdb] = useState(false);
  const [instruction, setInstruction] = useState(true);
  const fileName = props.pebbleSnapshotInfo.data.substr(
    props.pebbleSnapshotInfo.data.length - 27
  );

  let pebbledb_content = (
    <div>
      <h1 className="h1">Addrbook.json</h1>
      <p className="p-content">
        You download the file or automatically save by running the command
        below:
      </p>
      <p className="code">
        wget -O ~/.{props.daenom}/config/addrbook.json{" "}
        {props.pebbleSnapshotInfo.addrbook}
      </p>
      <button
        className="download-btn"
        onClick={() => {
          window.open(props.pebbleSnapshotInfo.addrbook, "_blank");
        }}
      >
        <p className="download-btn-text">Download</p>
      </button>
      <br />
      <br />
      <br />
      <br />
      <h1 className="h1">Snapshot</h1>
      <p className="code">
        cd ~/.{props.daenom} <br />
        aria2c -x8 {props.pebbleSnapshotInfo.data} <br />
        tar -xvf {fileName} <br />
      </p>
      <button
        className="download-btn"
        onClick={() => {
          window.open(props.pebbleSnapshotInfo.data, "_blank");
        }}
      >
        <p className="download-btn-text">
          Download |{" "}
          {(props.pebbleSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)}GB
        </p>
      </button>
    </div>
  );

  // let rocksdb_content = (
  //   <div>
  //     <h1 className="h1">Addrbook.json</h1>
  //     <p className="p-content">
  //       You download the file or automatically save by running the command
  //       below:
  //     </p>
  //     <p className="code">
  //       wget -O ~/.{props.daenom}/config/addrbook.json{" "}
  //       {props.pebbleSnapshotInfo.addrbook}
  //     </p>
  //     <button className="download-btn">
  //       <a href={props.pebbleSnapshotInfo.addrbook}>Download</a>
  //     </button>
  //     <br />
  //     <br />
  //     <br />
  //     <br />
  //     <h1 className="h1">Snapshot</h1>
  //     <p className="code">
  //       cd ~/.{props.daenom} <br />
  //       aria2c -x8 URL <br />
  //       tar -xvf file_name <br />
  //     </p>
  //     <button className="download-btn">
  //       <a href={props.pebbleSnapshotInfo.data}>
  //         Download |{" "}
  //         {(props.pebbleSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)}{" "}
  //         GB
  //       </a>
  //     </button>
  //   </div>
  // );

  // let rocklvdb_unavl = <h1>unavailable at the moment</h1>;
  // const rocklvdb_content =
  //   props.rockSnapshotInfo.addrbook === "NaN" ? rocklvdb_unavl : rocklvdb_avl;

  let instruction_content = (
    <div>
      <h1 className="h1">Which included</h1>
      <h2 className="h2">Addrbook.json</h2>
      <p className="p-content">
        This file is used for saving persistent peers to sync the node.
      </p>
      <h2 className="h2">Snapshot file</h2>
      <p className="p-content">
        Date: {props.pebbleSnapshotInfo.data_date} <br />
        Size:{" "}
        {(props.pebbleSnapshotInfo.data_size * (1 / 1000000000)).toFixed(
          2
        )} GB <br />
        This is default pruned data of the chain which is generated at the
        specific time in filename. The data will be pruned within 14-day period.
      </p>
      <h1 className="h1">How to compile PebbleDB? </h1>
      <p className="p-content">
        To get PebbleDB snapshot work with your node, you must compile PebbleDb
        first. This is an example code with Sifchain:
        <p className="code">
          git reset --hard <br />
          git checkout v0.14.0 <br />
          go mod edit -replace
          github.com/tendermint/tm-db=github.com/baabeetaa/tm-db@pebble <br />
          go mod tidy <br />
          go install -tags pebbledb -ldflags "-w -s -X
          github.com/cosmos/cosmos-sdk/types.DBBackend=pebbledb -X
          github.com/tendermint/tm-db.ForceSync=1" ./cmd/sifnoded <br />
          $HOME/go/bin/sifnoded start --db_backend=pebbledb <br />
        </p>
      </p>
      {/* <h2>RockDB</h2>
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
      )} */}
    </div>
  );

  const changeToPebble = () => {
    setPebbledb(true);
    // setRocklvdb(false);
    setInstruction(false);
  };
  // const changeToRock = () => {
  //   setPebbledb(false);
  //   setRocklvdb(true);
  //   setInstruction(false);
  // };
  const changeToIns = () => {
    setPebbledb(false);
    // setRocklvdb(false);
    setInstruction(true);
  };

  let content = (
    <div className="snapshot-modal">
      <div className="modal-top">
        <img src={props.image} />
        <p>{props.name}</p>
      </div>
      <div className="modal-bottom">
        <div className="modal-left">
          <ul className="modal-navbar">
            <li>
              <a
                href="#0"
                onClick={changeToIns}
                className= {
                  instruction
                  ? "modal-navbar-option-focus"
                  : "modal-navbar-option"
                }
              >
                Instruction
              </a>
            </li>
            <li>
              <a
                href="#0"
                onClick={changeToPebble}
                className= {
                  pebbledb
                  ? "modal-navbar-option-focus"
                  : "modal-navbar-option"
                }
              >
                PebbleDB
              </a>
            </li>
            {/* <li>
              <button
                onClick={changeToRock}
                className={
                  rocklvdb
                    ? "modal-navbar-btn-focus"
                    : "modal-navbar-btn"
                }
              >
                Rocksdb
              </button>
            </li> */}
          </ul>
        </div>

        <div className="modal-right">
          {(pebbledb && pebbledb_content) ||
            // (rocklvdb && rocklvdb_content) ||
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
