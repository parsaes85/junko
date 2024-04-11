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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:grid-cols-3">
        <BlogBox/>
        <BlogBox/>
        <BlogBox/>
      </div>
    </div>
  );
}

export default RightSideRelatedBlogs;
