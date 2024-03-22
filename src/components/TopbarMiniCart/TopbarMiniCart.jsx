import React from "react";
import { Link } from "react-router-dom";

import TopbarMiniCartItem from "./TopbarMiniCartItem/TopbarMiniCartItem";

function TopbarMiniCart() {
  return (
    <div className="transition-all overflow-hidden duration-1000 invisible absolute z-50 max-h-0 top-9 -right-[300px] w-[340px] border bg-white border-gray-300 group-hover:visible group-hover:max-h-[100rem]">
      <div className="p-6 space-y-6">
        <div>
            <TopbarMiniCartItem />
            <TopbarMiniCartItem />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p>جمع اجزا:</p>
            <h1 className="font-bold">۱۳۸,۰۰۰ تومان</h1>
          </div>
          <div className="flex items-center justify-between">
            <p>جمع کل:</p>
            <h1 className="font-bold">۱۳۸,۰۰۰ تومان</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/cart"
            className="bg-gray-100 py-3 text-center text-sm rounded hover:bg-primaryBlue hover:text-white transition duration-300"
          >
            مشاهده سبد
          </Link>
          <Link
            to="/checkout"
            className="bg-gray-100 py-3 text-center text-sm rounded hover:bg-primaryBlue hover:text-white transition duration-300"
          >
            پرداخت
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopbarMiniCart;
