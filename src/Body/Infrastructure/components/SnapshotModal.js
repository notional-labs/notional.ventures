import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../../Stake/Backdrop";
import "./SnapshotModal.css";
import Modal_divisor from "../../media/stake/modal-divisor.png";
import Info_divisor from "../../media/stake/info-divisor.png";

const ModalOverlay = (props) => {
  const [pebbledb, setPebbledb] = useState(false);
  // const [rocklvdb, setRocklvdb] = useState(false);
  const [instruction, setInstruction] = useState(true);

  let pebbledb_content = (
    <div>
      <div>
        <h3>Addrbook.json</h3>
        <p>wget -O ~/.{props.daenom}/config/addrbook.json URL</p>
        <button className="download-btn">
          <a href={props.pebbleSnapshotInfo.addrbook}>Download</a>
        </button>
      </div>{" "}
      <br />
      <div>
        <h3>Snapshot</h3>
        <p>
          cd ~/.{props.daenom} <br />
          aria2c -x8 URL <br />
          tar -xvf file_name <br />
        </p>
        <button className="download-btn">
          <a href={props.pebbleSnapshotInfo.data}>
            Download |{" "}
            {(props.pebbleSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)}{" "}
            GB
          </a>
        </button>
      </div>
    </div>
  );

  // let rocklvdb_avl = (
  //   <div>
  //     <div>
  //       <h3>Addrbook.json</h3>
  //       <p>wget -O ~/.osmosisd/config/addrbook.json URL</p>
  //       <button className = "download-btn">
  //         <a href={props.rockSnapshotInfo.addrbook}>Download</a>
  //       </button>
  //     </div> <br />
  //     <div>
  //       <h3>Snapshot</h3>
  //       <p>
  //         cd ~/.osmosisd <br />
  //         aria2c -x8 URL <br />
  //         tar -xvf file_name <br />
  //       </p>
  //       <button className = "download-btn">
  //         <a href={props.rockSnapshotInfo.data}>
  //           Download |{" "}
  //           {(props.rockSnapshotInfo.data_size * (1 / 1000000000)).toFixed(2)}{" "}
  //           GB
  //         </a>
  //       </button>
  //     </div>
  //   </div>
  // );

  // let rocklvdb_unavl = <h1>unavailable at the moment</h1>;
  // const rocklvdb_content =
  //   props.rockSnapshotInfo.addrbook === "NaN" ? rocklvdb_unavl : rocklvdb_avl;

  let instruction_content = (
    <div>
      <h2>pebbleDB</h2>
      Date: {props.pebbleSnapshotInfo.data_date} <br />
      Size: {(props.pebbleSnapshotInfo.data_size * (1 / 1000000000)).toFixed(
        2
      )}{" "}
      GB
      <br />
      <br />
      <h2>How to compile pebbledb? </h2>
      Example with sifchain : <br />
      "git reset --hard" <br />
      "git checkout v0.14.0 go mod edit -replace
      github.com/tendermint/tm-db=github.com/baabeetaa/tm-db@pebble" <br />
      "go mod tidy"<br />
      "go install -tags pebbledb -ldflags "-w -s -X
      github.com/cosmos/cosmos-sdk/types.DBBackend=pebbledb -X
      github.com/tendermint/tm-db.ForceSync=1" ./cmd/sifnoded" <br />
      "$HOME/go/bin/sifnoded start --db_backend=pebbledb" <br />
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
    <div className={`snapshot-modal ${props.className}`}>
      <div className="content">
        <div className="snapshot-type-modal-container">
          <div className="snapshot-name">
            <img src={props.image} />
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
                onClick={changeToPebble}
                className={
                  pebbledb
                    ? "snapshot-modal-navbar-btn-focus"
                    : "snapshot-modal-navbar-btn"
                }
              >
                PebbleDB
              </button>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </div>
        <div className="snapshot-modal-data">
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
