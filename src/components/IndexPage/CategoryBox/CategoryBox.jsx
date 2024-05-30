import React from "react";
import { Link } from "react-router-dom";

function CategoryBox(props) {
  return (
    <Link to={`/shop?category=${props.name}`} className="block text-center border-2 border-gray-100 rounded px-2 py-4 transition duration-300 hover:border-primaryBlue hover:border-2">
      <div>
        <img src={props.image} alt="" width="150px" className="mx-auto" />
      </div>
      <h1>{props.title}</h1>
    </Link>
  );
}

export default CategoryBox;
