import React from "react";
import SnapshotItem from "./SnapshotItem";
import "./SnapshotList.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const SnapshotList = (props) => {
  const [snapshots, setSnapshots] = useState(props.snapshots);
  const [pageNumber, setPageNumber] = useState(0);

  const snapshotsPerPage = 10;
  const pagesVisited = pageNumber * snapshotsPerPage;

  const displaySnapshots = snapshots
    .slice(pagesVisited, pagesVisited + snapshotsPerPage)
    .map((snapshot) => {
      return (
        <SnapshotItem
          key={snapshot.id}
          id={snapshot.id}
          image={snapshot.image}
          name={snapshot.name}
          api={snapshot.api}
          daenom={snapshot.daenom}
        />
      );
    });
  const pageCount = Math.ceil(snapshots.length / snapshotsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="snapshot-list-container">
      <ul className="snapshot-list">{displaySnapshots}</ul>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        pageClassName={"pageBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default SnapshotList;
