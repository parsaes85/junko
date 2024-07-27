import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import LeftSideCommentBox from "../LeftSideCommentBox/LeftSideCommentBox";
import LeftSideRecentBlogBox from "../LeftSideRecentBlogBox/LeftSideRecentBlogBox";

import useGetBlogs from "../../../hooks/useGetBlogs";
import useGetAllMenus from "../../../hooks/useGetAllMenus";
import LeftSideCategoryBox from "../LeftSideCategoryBox/LeftSideCategoryBox";

function LeftSide() {
  const { data: blogs } = useGetBlogs("allBlogs", "");
  const { data: menus } = useGetAllMenus();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [searchBlogFormTitle, setSearchBlogFormTitle] = useState("");

  const searchBlogHandler = () => {
    if (searchBlogFormTitle) {
      navigate(`/blog?blogSearch=${searchBlogFormTitle}`);
    } else {
      navigate(`/blog`);
    }
  };

  useEffect(() => {
    let blogSearchParam = searchParams.get("blogSearch");
    setSearchBlogFormTitle(blogSearchParam);
    let recentBlogsArr = blogs?.slice(blogs.length - 4, blogs.length);
    setRecentBlogs(recentBlogsArr);
  }, [blogs]);

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
            value={searchBlogFormTitle}
            onChange={(e) => setSearchBlogFormTitle(e.target.value)}
          />
          <button
            className="bg-zinc-800 text-sm text-white py-1.5 px-5 rounded"
            onClick={searchBlogHandler}
          >
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
          {recentBlogs?.map((blog) => (
            <LeftSideRecentBlogBox key={blog.id} {...blog} />
          ))}
        </div>
      </div>

      {/* categories */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">دسته ها</h1>
        <div>
          <ul>
            <li className="block">
              <Link to="/blog" className="block py-3 border-b text-[15px]">
                تمام بلاگ ها
              </Link>
            </li>
            {menus?.map((menu) => (
              <LeftSideCategoryBox key={menu.id} {...menu} />
            ))}
          </ul>
        </div>
      </div>

      {/* products lables */}
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default LeftSide;
