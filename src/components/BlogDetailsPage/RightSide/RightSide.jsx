import React from "react";
import RightSideMainDetails from "../RightSideMainDetails/RightSideMainDetails";
import RightSideRelatedBlogs from "../RightSideRelatedBlogs/RightSideRelatedBlogs";

function RightSide() {
  return (
    <div className="flex-[3.7]">
        <RightSideMainDetails />
        <RightSideRelatedBlogs />
    </div>
  );
}

export default RightSide;
