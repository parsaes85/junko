import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import "./LeftSidePagination.css";

function LeftSidePagination({ setCurrentItems, shownProducts }) {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(shownProducts?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % shownProducts?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setCurrentItems(shownProducts?.slice(itemOffset, endOffset));
  });

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<KeyboardDoubleArrowLeftIcon fontSize="" />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={<KeyboardDoubleArrowRightIcon fontSize="" />}
      renderOnZeroPageCount={null}
      containerClassName="mb-16 border p-3 flex items-center justify-center gap-2"
      pageLinkClassName="text-black bg-[#f0f0f0] py-[3px] px-2.5 rounded hover:bg-primaryBlue hover:text-white transition duration-300"
      previousLinkClassName="text-black bg-[#f0f0f0] flex items-center justify-center px-2 py-[7.5px] rounded hover:bg-primaryBlue hover:text-white transition duration-300"
      nextLinkClassName="text-black bg-[#f0f0f0] flex items-center justify-center px-2 py-[7.5px] rounded hover:bg-primaryBlue hover:text-white transition duration-300"
      activeLinkClassName="pagination-active"
    />
  );
}

export default LeftSidePagination;
