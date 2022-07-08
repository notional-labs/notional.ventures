import React from "react";
import SnapshotItem from "./SnapshotItem";
import "./SnapshotList.css";

const SnapshotList = (props) => {
    return (
        <ul className="snapshot-list">
            {props.snapshots.map((snapshot) => (
                <SnapshotItem
                    key={snapshot.id}
                    id={snapshot.id}
                    image={snapshot.image}
                    name={snapshot.name}
                    api={snapshot.api}
                />
            ))}
        </ul>
    );
};

export default SnapshotList;
