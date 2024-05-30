import React from "react";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

function ProductBox(props) {
  return (
    <div className="p-4 rounded border border-transparent transition hover:border-gray-300 group/item">
      <div className="relative">
        <span className="absolute top-3 left-4 text-gray-100 bg-[#5fa403] px-1.5 py-[11px] rounded-full text-xs">
          فروش
        </span>
        <Link to={`/product-details/${props.shortName}`}>
          <img src={props.images[0]} alt="" />
        </Link>
        <div className="absolute top-4 right-4 space-y-4 transition duration-300 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100">
          <div className="group/icon">
            <span className="bg-primaryBlue text-white py-1 px-1.5 rounded-full hover:brightness-90">
              <FavoriteBorderIcon fontSize="small" />
            </span>
            <div className="absolute -top-9 -right-11 text-xs bg-black text-white w-32 py-1 rounded transition duration-300 text-center opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible after:absolute after:-bottom-1 after:right-14 after:w-2 after:h-2 after:rotate-45 after:bg-black">
              <p>افزودن به علاقه‌مندی‌ها</p>
            </div>
          </div>
          <div className="relative group/icon">
            <span className="bg-primaryBlue text-white py-1 px-1.5 rounded-full hover:brightness-90">
              <SearchIcon fontSize="small" />
            </span>
            <div className="absolute -top-9 -right-6 text-xs bg-black text-white w-20 py-1 rounded transition duration-300 text-center opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible after:absolute after:-bottom-1 after:right-9 after:w-2 after:h-2 after:rotate-45 after:bg-black">
              <p>مشاهده سریع</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 bg-primaryBlue flex justify-between w-full text-center rounded px-3 pb-1 text-white">
          <div>
            <p>۲۰</p>
            <p className="text-xs">ثانیه</p>
          </div>
          <div>
            <p>۱۸</p>
            <p className="text-xs">دقیقه</p>
          </div>
          <div>
            <p>۱۲</p>
            <p className="text-xs">ساعت</p>
          </div>
          <div>
            <p>۶۸</p>
            <p className="text-xs">روز</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 space-y-3">
        <div>
          <p className="text-gray-500 line-through text-[15px]">۸۶,۰۰۰ تومان</p>
          <p className="text-primaryBlue text-[17px]">۷۹,۰۰۰ تومان</p>
        </div>
        <Link to="/product-details/1" className="text-[15px] hover:text-primaryBlue transition">
          {props.name}
        </Link>
      </div>
    </div>
  );
}

export default ProductBox;
