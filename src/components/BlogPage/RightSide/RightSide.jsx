import React from "react";
import RightSideBlogBox from "../RightSideBlogBox/RightSideBlogBox";
import AlertBox from "../../AlertBox/AlertBox";

function RightSide({ currentItems, shownBlogs, isBlogsPending }) {
  return (
    <div className="flex-[3.7]">
      <div className="pb-12 pt-4">
        <h1 className="text-center text-4xl font-IRANSans">بلاگ</h1>
      </div>
      {shownBlogs?.length || isBlogsPending ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {currentItems?.map((blog) => (
            <RightSideBlogBox key={blog.id} {...blog} />
          ))}
        </div>
      ) : (
        <AlertBox text={"هیچ بلاگی موجود نیست."} />
      )}
    </div>
  );
}

export default RightSide;
