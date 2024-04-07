import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import "./LeftSidePagination.css"

function LeftSidePagination() {
  return (
    <div className="mb-16 border p-3 flex justify-center gap-2 [&>*]:transition [&>*]:duration-300 [&>*]:rounded [&>*:hover]:text-white [&>*:hover]:bg-primaryBlue">
      <Link className="text-black bg-[#f0f0f0] flex items-center justify-center px-2">
        <KeyboardDoubleArrowRightIcon fontSize="" />
      </Link>
      <Link className="text-black bg-[#f0f0f0] py-[3px] px-2.5 pagination-active">۱</Link>
      <Link className="text-black bg-[#f0f0f0] py-[3px] px-2.5">۲</Link>
      <Link className="text-black bg-[#f0f0f0] py-[3px] px-2.5">۳</Link>
      <Link className="text-black bg-[#f0f0f0] flex items-center justify-center px-2">
        <KeyboardDoubleArrowLeftIcon fontSize="" />
      </Link>
    </div>
  );
}

export default LeftSidePagination;
