import React from "react";
import { Link } from "react-router-dom";

function SpecialProductBox() {
  return (
    <div className="border border-transparent flex bg-white w-fit group hover:border-gray-200">
      <div className="relative">
        <span className="absolute top-3 left-0 text-gray-100 bg-[#5fa403] px-1.5 py-[11px] rounded-full text-xs">
          فروش
        </span>
        <Link to="">
          <img src="/images/product13.jpg" className="w-40" alt="" />
        </Link>
      </div>
      <div className="space-y-4 p-4">
        <div className="cursor-default">
          <p className="text-gray-500 line-through text-[15px]">۸۶,۰۰۰ تومان</p>
          <p className="text-primaryBlue text-[17px]">۷۹,۰۰۰ تومان</p>
        </div>
        <Link className="block text-[15px] hover:text-primaryBlue transition">
          ساعت هوشمند سامسونگ Gear
        </Link>
        <button className="text-sm bg-primaryBlue px-4 xs:py-2 w-full rounded-md text-white transition duration-300 opacity-0 group-hover:opacity-100">
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}

export default SpecialProductBox;
