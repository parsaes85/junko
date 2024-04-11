import React from "react";
import RightSideMainDetails from "../RightSideMainDetails/RightSideMainDetails";
import RightSideRelatedBlogs from "../RightSideRelatedBlogs/RightSideRelatedBlogs";
import RightSideComments from "../RightSideComments/RightSideComments";
import RightSideCreateComment from "../RightSideCreateComment/RightSideCreateComment";

function RightSide() {
  return (
    <div className="flex-[3.7]">
        <RightSideMainDetails />
        <RightSideRelatedBlogs />
        <RightSideComments />
        <RightSideCreateComment />
    </div>
  );
}

export default RightSide;
