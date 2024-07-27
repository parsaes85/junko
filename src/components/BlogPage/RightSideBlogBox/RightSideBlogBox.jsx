import React from "react";

import { Link } from "react-router-dom";

function RightSideBlogBox(props) {
  return (
    <div>
      <Link to={`/blog-details/${props.shortName}`}>
        <img src={`${props.cover}`} alt="" className="h-72 w-full" />
      </Link>
      <div className="mt-6 space-y-4">
        <Link
          to={`/blog-details/${props.shortName}`}
          className="text-3xl transition duration-300 hover:text-primaryBlue line-clamp-2"
        >
          {props.title}
        </Link>
        <div className="tracking-tight">
          ارسال توسط : <Link className="text-primaryBlue">مدیر</Link> / در :{" "}
          <Link className="text-primaryBlue">۱۰ آذر ۱۳۹۸</Link>
        </div>
        <p className="pb-2 leading-7">{props.desc}</p>
        <Link
          to={`/blog-details/${props.shortName}`}
          className="bg-primaryBlue text-white text-sm py-2 px-12 rounded block w-fit transition duration-300 hover:bg-zinc-800"
        >
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
}

export default RightSideBlogBox;
