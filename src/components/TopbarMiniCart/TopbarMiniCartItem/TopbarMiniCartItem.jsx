import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import useRemoveFromCart from "../../../hooks/useRemoveFromCart";

function TopbarMiniCartItem(props) {
  const { mutate: removeFromCart } = useRemoveFromCart();

  return (
    <div className="flex gap-2 border-b py-2">
      <div className="border border-transparent hover:border-primaryBlue">
        <Link to={`/product-details/${props?.product?.id}`}>
          <img src={props?.product?.images[0]} alt="" className="w-28" />
        </Link>
      </div>
      <div className="space-y-2">
        <Link
          to={`/product-details/${props?.product?.id}`}
          className="hover:text-primaryBlue transition duration-300 line-clamp-2"
        >
          {props?.product?.name}
        </Link>
        <p className="text-sm">
          تعداد:{" "}
          <span className="font-bold">
            <span>{props?.count?.toLocaleString("fa")}</span>{" "}
            <CloseIcon fontSize="" className="text-xs" />{" "}
            <span>{props?.price?.toLocaleString("fa")}</span> تومان
          </span>
        </p>
      </div>
      <div>
        <span
          className="border rounded-full text-gray-600 px-1 text-sm transition duration-300 cursor-pointer hover:bg-primaryBlue hover:text-white hover:border-primaryBlue"
          onClick={() => removeFromCart(props?.id)}
        >
          <CloseIcon fontSize="" />
        </span>
      </div>
    </div>
  );
}

export default TopbarMiniCartItem;
