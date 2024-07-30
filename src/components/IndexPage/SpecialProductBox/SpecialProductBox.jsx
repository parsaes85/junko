import React from "react";
import { Link } from "react-router-dom";

function SpecialProductBox(props) {
  return (
    <div className="border border-transparent flex bg-white w-fit group hover:border-gray-200 h-[185px]">
      <div className="relative p-2">
        <span className="absolute top-3 left-0 text-gray-100 bg-[#5fa403] px-1.5 py-[11px] rounded-full text-xs">
          فروش
        </span>
        <Link to={`/product-details/${props.id}`}>
          <img src={props?.images[0]} className="max-w-40" alt="" />
        </Link>
      </div>
      <div className="space-y-4 p-4">
        <div className="cursor-default">
          {props.discount ? (
            <p className="text-gray-500 line-through text-[15px]">
              {Number(
                props.price + props.price * (props.discount / 100)
              ).toLocaleString("fa")}{" "}
              تومان
            </p>
          ) : (
            ""
          )}

          <p className="text-primaryBlue text-[17px]">
            {Number(props.price).toLocaleString("fa")} تومان
          </p>
        </div>
        <Link
          to={`/product-details/${props.id}`}
          className="text-[15px] hover:text-primaryBlue transition line-clamp-2"
        >
          {props.name}
        </Link>
        <button className="text-sm bg-primaryBlue px-4 xs:py-2 w-full rounded-md text-white transition duration-300 opacity-0 group-hover:opacity-100">
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}

export default SpecialProductBox;
