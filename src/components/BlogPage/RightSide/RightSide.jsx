import React from "react";
import RightSideBlogBox from "../RightSideBlogBox/RightSideBlogBox";

function RightSide() {
  return (
    <div className="flex-[3.7]">
      <div className="pb-12 pt-4">
        <h1 className="text-center text-4xl font-IRANSans">بلاگ</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-16">
        <RightSideBlogBox />
        <RightSideBlogBox />
        <RightSideBlogBox />
        <RightSideBlogBox />
        <RightSideBlogBox />
        <RightSideBlogBox />
      </div>
    </div>
  );
}

export default RightSide;
