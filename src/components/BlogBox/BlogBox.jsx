import React from "react";
import { Link } from "react-router-dom";

function BlogBox(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt="" />
      </div>
      <div className="text-center mt-4 space-y-3">
        <p className="text-sm">
          توسط <Link className="text-primaryBlue">مدیر</Link> ۶ آذر ۱۳۹۸
        </p>
        <Link
          to={`/blog-details/${props.shortName}`}
          className="block text-lg hover:text-primaryBlue transition duration-300 line-clamp-2"
        >
          {props.title}
        </Link>
      </div>
    </div>
  );
}

export default BlogBox;
