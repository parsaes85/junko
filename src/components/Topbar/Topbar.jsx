import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import Sidebar from "../Sidebar/Sidebar";
import TopbarMiniCart from "../TopbarMiniCart/TopbarMiniCart";

function Topbar() {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      />
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

        <div className="px-4 xs:px-24 py-5 lg:py-7 flex justify-between items-center">
          <div>
            <img
              src="images/logo.png"
              alt="junko logo"
              className="max-w-32 md:max-w-40"
            />
          </div>
          <div
            className="lg:hidden border p-1 md:p-2 transition duration-200 cursor-pointer hover:text-primaryBlue"
            onClick={() => {
              setIsSidebarShow(true);
            }}
          >
            <MenuIcon />
          </div>
          <div className="hidden lg:flex justify-end items-center w-full gap-12">
            <div className="flex flex-1">
              <div className="flex w-2/3 xl:w-1/2 mr-auto items-center border p-2 border-gray-300 rounded-r-md">
                <div className="relative">
                  <select className="cursor-pointer w-32 text-[15px] h-full focus:outline-none appearance-none bg-transparent peer">
                    <option value="all">همه دسته ها</option>
                    <option value="">لوازم جانبی</option>
                    <option value="">قطعات کامپیوتر</option>
                  </select>
                  <KeyboardArrowDownIcon
                    fontSize=""
                    className="absolute left-0 top-1 text-gray-500 -z-10 peer-focus:duration-300 peer-focus:transition-all peer-focus:rotate-180"
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
              <div className="relative group">
                <div className="relative">
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
                <TopbarMiniCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
