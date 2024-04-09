import React from "react";
import { Link } from "react-router-dom";

function LeftSideCategoryBox({name}) {
  return (
    <div className="border-b py-3 text-[15px]">
      <Link className="transition duration-300 hover:text-primaryBlue">{name}</Link>
    </div>
  );
}

export default LeftSideCategoryBox;
