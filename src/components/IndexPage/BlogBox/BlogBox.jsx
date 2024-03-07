import React from "react";
import { Link } from "react-router-dom";

function BlogBox() {
  return (
    <div>
      <div>
        <img src="/images/blog1.jpg" alt="" />
      </div>
      <div className="text-center mt-4 space-y-3">
        <p className="text-sm">توسط <Link className="text-primaryBlue">مدیر</Link> ۶ آذر ۱۳۹۸</p>
        <Link className="block text-lg hover:text-primaryBlue transition duration-300">لورم ایپسوم متن ساختگی</Link>
      </div>
    </div>
  );
}

export default BlogBox;
