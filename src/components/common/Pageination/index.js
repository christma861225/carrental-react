import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./index.scss";

const Pageination = ({ count }) => {
  const itemsPerPage = 10;
  const items = Array.from(Array(count));
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  return (
    <div className="pagination-container">
      <ReactPaginate
        containerClassName="pagination"
        marginPagesDisplayed={3}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        breakClassName="break"
        pageClassName="pageLink"
        activeClassName="activePageLink"
        previousClassName="prevLink"
        nextClassName="nextLink"
        disabledClassName="disabledLink"
      />
      <span className="jump-container">
        Go to page
        <input />
        <a>Go</a>
      </span>
    </div>
  );
};

export default Pageination;
