import React from "react";
import RightSideMainDetails from "../RightSideMainDetails/RightSideMainDetails";
import RightSideRelatedBlogs from "../RightSideRelatedBlogs/RightSideRelatedBlogs";
import RightSideComments from "../RightSideComments/RightSideComments";

function RightSide() {
  return (
    <div className="flex-[3.7]">
        <RightSideMainDetails />
        <RightSideRelatedBlogs />
        <RightSideComments />
    </div>
  );
}

export default RightSide;
