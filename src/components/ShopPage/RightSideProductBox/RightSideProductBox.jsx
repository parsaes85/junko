import React from "react";
import { Link } from "react-router-dom";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function RightSideProductBox(props) {
  return (
    <div className="flex gap-4 border-b md:border lg:border-b lg:border-0 py-4 md:pr-4 lg:pr-0">
      <Link to={`/product-details/${props.id}`}>
        <img src={props.images[0]} className="max-w-[70px]" alt="" />
      </Link>
      <div className="space-y-2">
        <Link
          to={`/product-details/${props.id}`}
          className="hover:text-primaryBlue transition line-clamp-2"
        >
          {props.name}
        </Link>
        <div className="text-primaryBlue">
        {props.score &&
            Array(5 - props.score)
              .fill(1)
              .map((start, index) => (
                <StarBorderIcon key={index} fontSize="" />
              ))}
          {Array(props.score)
            .fill(1)
            .map((start, index) => (
              <StarIcon key={index} fontSize="" />
            ))}
        </div>
        <div>
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
      </div>
    </div>
  );
}

export default RightSideProductBox;
