import React from "react";
import BlogBox from "../../BlogBox/BlogBox";

function RightSideRelatedBlogs() {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h1 className="text-[22px] tracking-tighter font-IRANSans">
          مطالب مرتبط
        </h1>
      </div>
      <div className="flex gap-7">
        <BlogBox/>
        <BlogBox/>
        <BlogBox/>
      </div>
    </div>
  );
}

export default RightSideRelatedBlogs;
