import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

function LeftSideRowProductBox(props) {
  return (
    <div className="grid md:grid-cols-11 gap-5 p-4 rounded border border-transparent transition hover:border-gray-300 group/item">
      <div className="md:col-span-4 relative">
        <span className="absolute top-3 left-4 text-gray-100 bg-[#5fa403] px-1.5 py-[11px] rounded-full text-xs">
          فروش
        </span>
        <Link to={`/product-details/${props.id}`}>
          <img src={props?.images[0]} alt="" className="mx-auto w-72" />
        </Link>
      </div>
      <div className="md:col-span-4 md:border-l md:pl-5 flex flex-col space-y-4">
        <div className="flex items-end gap-1">
          <p className="text-primaryBlue text-[17px]">
            {Number(props.price).toLocaleString("fa")} تومان
          </p>
          <p className="text-gray-500 line-through text-[15px]">
            {Number(
              props.price + props.price * (props.discount / 100)
            ).toLocaleString("fa")}{" "}
            تومان
          </p>
        </div>
        <Link
          to={`/product-details/${props.id}`}
          className="text-[15px] hover:text-primaryBlue transition"
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
        <p className="sm:text-justify text-[15px]">{props.shortDesc}</p>
      </div>
      <div className="md:col-span-3 my-auto">
        <button className="text-primaryBlue border-2 border-primaryBlue text-sm tracking-tighter py-2 sm:py-2.5 px-8 sm:px-0 sm:w-full rounded-md duration-300 hover:bg-primaryBlue hover:text-white">
          افزودن به سبد
        </button>
        <div className="text-[15px] mt-5 space-y-2 [&>div]:transition [&>div]:cursor-pointer [&>div:hover]:text-primaryBlue [&>div]:flex [&>div]:gap-2">
          <div>
            <span>
              <FavoriteBorderIcon fontSize="small" />
            </span>
            افزودن به علاقه‌مندی‌ها
          </div>
          {/* <div>
            <span>
              <SearchIcon fontSize="small"/>
            </span>
            نمایش سریع
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default LeftSideRowProductBox;
