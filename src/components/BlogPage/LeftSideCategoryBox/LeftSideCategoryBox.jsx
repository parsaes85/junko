import React from "react";
import { Link } from "react-router-dom";

function LeftSideCategoryBox(props) {
  return (
    <li className="block border-b py-3 text-[15px]">
      <Link
        className="transition duration-300 hover:text-primaryBlue"
        to={`/blog?blogCategory=${props.name}`}
      >
        {props.title}
      </Link>
    </li>
  );
}

export default LeftSideCategoryBox;
