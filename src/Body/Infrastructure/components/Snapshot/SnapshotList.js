import React from "react";
import SnapshotItem from "./SnapshotItem";
import "./SnapshotList.css";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const SnapshotList = (props) => {
  const [snapshot] = useState(props.snapshot);
  const [pageNumber, setPageNumber] = useState(0);

  const snapshotsPerPage = 10;
  const pagesVisited = pageNumber * snapshotsPerPage;

  const displaySnapshot = snapshot
    .slice(pagesVisited, pagesVisited + snapshotsPerPage)
    .map((snapshot) => {
      return (
        <SnapshotItem
          showModal={props.showModal}
          chainName = {props.chainName}
          key={snapshot.id}
          ping={snapshot.ping}
          id={snapshot.id}
          image={snapshot.image}
          name={snapshot.name}
          api={snapshot.api}
          daenom={snapshot.daenom}
        />
      );
    });
  const pageCount = Math.ceil(snapshot.length / snapshotsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="snapshot-list-container">
      <ul className="snapshot-list">{displaySnapshot}</ul>
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
