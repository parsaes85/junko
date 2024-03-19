import React from "react";
import LeftSideHeader from "../LeftSideHeader/LeftSideHeader";
import LeftSideColProductBox from "../LeftSideColProductBox/LeftSideColProductBox";
import LeftSideRowProductBox from "../LeftSideRowProductBox/LeftSideRowProductBox";
import LeftSidePagination from "../LeftSidePagination/LeftSidePagination";

function LeftSide() {
  return (
    <div className="flex-[4]">
      <LeftSideHeader />

      <div className="grid grid-cols-1 gap-4 my-4">
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
        <LeftSideRowProductBox />
      </div>

      <LeftSidePagination />
    </div>
  );
}

export default LeftSide;
