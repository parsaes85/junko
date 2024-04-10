import React from "react";
import RightSideCommentBox from "../RightSideCommentBox/RightSideCommentBox";

function RightSideComments() {
  return (
    <div className="mb-16">
      <div className="mb-4">
        <h1 className="text-xl font-IRANSans">۳ دیدگاه</h1>
      </div>
      <div className="space-y-8">
        <div>
          <RightSideCommentBox />
          <div className="w-[95%] mr-auto space-y-6 mt-6">
            <RightSideCommentBox />
          </div>
        </div>
        <div>
          <RightSideCommentBox />
          <div className="w-[95%] mr-auto space-y-6 mt-6">
            <RightSideCommentBox />
            <RightSideCommentBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideComments;
