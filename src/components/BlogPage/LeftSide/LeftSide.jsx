import React from "react";
import { Link } from "react-router-dom";
import LeftSideCommentBox from "../LeftSideCommentBox/LeftSideCommentBox";
import LeftSideRecentBlogBox from "../LeftSideRecentBlogBox/LeftSideRecentBlogBox";

function LeftSide() {
  return (
    <div className="bg-[#f8f8f8] flex-1 py-12 px-5 space-y-14 h-fit border">
      {/* search */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">جستجو</h1>
        <div>
          <input
            type="text"
            placeholder="جستجو ..."
            className="block border w-full pr-4 py-2 text-sm focus:outline-none mb-4"
          />
          <button className="bg-zinc-800 text-sm text-white py-1.5 px-5 rounded">
            جستجو
          </button>
        </div>
      </div>

      {/* new comments */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          دیدگاه‌های جدید
        </h1>
        <div>
          <LeftSideCommentBox />
          <LeftSideCommentBox />
          <LeftSideCommentBox />
          <LeftSideCommentBox />
        </div>
      </div>

      {/* recent blogs */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          مطالب اخیر
        </h1>
        <div>
          <LeftSideRecentBlogBox />
          <LeftSideRecentBlogBox />
          <LeftSideRecentBlogBox />
          <LeftSideRecentBlogBox />
        </div>
      </div>

      {/* products lables */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          برچسب های محصولات
        </h1>
        <div className="flex flex-wrap gap-2">
          <Link className="bg-white border py-1 px-3 rounded text-[14px] transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            آسیایی
          </Link>
          <Link className="bg-white border py-1 px-3 rounded text-[14px] transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            قهوه ای
          </Link>
          <Link className="bg-white border py-1 px-3 rounded text-[14px] transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            یورو
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
