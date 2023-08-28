import React from "react";
import { ChevronLeft, ChevronRight } from "./icons";
import ReactPaginate from "react-paginate";

const Paginate = ({totalPages, handlePageChange}) => {
  return (
    <div className="product-pagination">
      <ReactPaginate
        previousLabel={<ChevronLeft width={18} height={18} />}
        nextLabel={<ChevronRight width={18} height={18} />}
        breakLabel="..."
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={totalPages}
        // forcePage={data.pageNumber - 1}
        onPageChange={(page) => handlePageChange(page)}
        disableInitialCallback={true}
        activeClassName="active"
        pageClassName="page-item"
        breakClassName="page-item"
        nextLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextClassName="page-item next-item"
        previousClassName="page-item prev-item "
        containerClassName={"pagination"}
      />
    </div>
  );
};

export default Paginate;
