import React from "react";
import { Link } from "react-router-dom";

function LeftSideRecentBlogBox(props) {
  return (
    <div className="flex gap-2 items-center border-b py-4">
      <Link to={`/blog-details/${props.shortName}`}>
        <img src={props.cover} alt="" className="max-w-[60px]" />
      </Link>
      <div className="space-y-2">
        <Link
          to={`/blog-details/${props.shortName}`}
          className="w-full hover:text-primaryBlue transition duration-300 line-clamp-2 "
        >
          {props.title}
        </Link>
        <p className="tracking-tighter text-[13px]">۱۸ آذر ۱۳۹۸</p>
      </div>
    </div>
  );
}

export default LeftSideRecentBlogBox;
