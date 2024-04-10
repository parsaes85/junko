import React from "react";
import { Link } from "react-router-dom";

function LeftSideRecentBlogBox() {
  return (
    <div className="flex gap-2 items-center border-b py-4">
      <Link to="/blog-details/1">
        <img src="/images/blog12.jpg" alt="" className="w-10" />
      </Link>
      <div className="space-y-2">
        <Link to="/blog-details/1" className="hover:text-primaryBlue transition duration-300">مطلب بلاگ تصویری</Link>
        <p className="tracking-tighter text-[13px]">۱۸ آذر ۱۳۹۸</p>
      </div>
    </div>
  );
}

export default LeftSideRecentBlogBox;
