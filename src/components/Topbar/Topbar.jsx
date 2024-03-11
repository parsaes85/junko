import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TopbarCartProduct from "./TopbarCartProduct/TopbarCartProduct";
import MenuIcon from "@mui/icons-material/Menu";

function Topbar() {
  return (
    <div>
      <div className="hidden py-3 lg:flex justify-between text-sm bg-gray-100 px-4 xs:px-24">
        <p>تلفن تماس: ۷۸۹ ۴۵۶ ۱۲۳(۹۸)+</p>

        <div className="flex items-center gap-5">
          <div className="transition hover:text-primaryBlue">
            <Link>حساب کاربری</Link>
          </div>
          <div className="w-[1px] h-3 bg-black"></div>
          <div className="transition hover:text-primaryBlue">
            <Link>پرداخت</Link>
          </div>
        </div>
      </div>

      <div className="px-4 xs:px-24 py-7 flex justify-between items-center">
        <div>
          <img src="images/logo.png" alt="junko logo" className="max-w-40" />
        </div>
        <div className="lg:hidden border p-2 transition duration-200 cursor-pointer hover:text-primaryBlue">
          <MenuIcon />
        </div>
        <div className="hidden lg:flex justify-end items-center w-full gap-12">
          <div className="flex flex-1">
            <div className="flex w-2/3 xl:w-1/2 mr-auto items-center border p-2 border-gray-300 rounded-r-md">
              <div className="relative">
                <select className="cursor-pointer w-32 text-[15px] h-full focus:outline-none appearance-none bg-transparent">
                  <option value="all">همه دسته ها</option>
                  <option value="">لوازم جانبی</option>
                  <option value="">قطعات کامپیوتر</option>
                </select>
                <KeyboardArrowDownIcon
                  fontSize=""
                  className="absolute left-0 top-1 text-gray-500 -z-10"
                />
              </div>
              <div className="w-[1px] h-4 bg-gray-400 mr-2 ml-5"></div>
              <input
                type="text"
                placeholder="جستجوی محصول ..."
                className="text-gray-500 placeholder:text-sm placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            <button className="bg-primaryBlue text-white rounded-l-md py-3 px-10 hover:bg-gray-800 transition duration-300">
              جستجو
            </button>
          </div>

          <div className="flex gap-8">
            <div className="relative">
              <span className="absolute -top-2 -right-3 text-sm bg-primaryBlue text-white rounded-full w-5 flex justify-center">
                ۳
              </span>
              <span className="text-gray-800 cursor-pointer hover:text-primaryBlue transition-all duration-200">
                <FavoriteBorderIcon />
              </span>
            </div>
            <div className="relative">
              <div className="relative group">
                <span className="absolute -top-2 -right-3 text-sm bg-primaryBlue text-white rounded-full w-5 flex justify-center">
                  ۲
                </span>
                <span className="text-gray-800 cursor-pointer transition-all duration-200 group-hover:text-primaryBlue">
                  <ShoppingBagIcon />
                </span>
                <span className="text-gray-800 cursor-pointer transition-all duration-200 group-hover:text-primaryBlue">
                  <KeyboardArrowDownIcon fontSize="" />
                </span>
              </div>
              <div className="absolute hidden top-9 -right-[300px] w-[340px] border bg-white border-gray-300 p-6 space-y-6">
                <div>
                  <TopbarCartProduct />
                  <TopbarCartProduct />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
