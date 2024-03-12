import React, { useEffect, useState } from "react";
import { Link, useHref, useLocation, useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PinterestIcon from "@mui/icons-material/Pinterest";

import SidebarCartProduct from "./SidebarCartProduct/SidebarCartProduct";

function Sidebar({ isSidebarShow, setIsSidebarShow }) {
  const [isSidebarCartShow, setIsSidebarCartShow] = useState(false);

  const href = useHref();

  useEffect(() => {
    const closeSidebar = (e) => {
      if (e.target.id === "sidebar-parent") setIsSidebarShow(false);
    };

    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, []);
  useEffect(() => setIsSidebarShow(false), [href]);

  const sidebarCartClickHandler = () => {
    if (isSidebarCartShow) {
      setIsSidebarCartShow(false);
    } else {
      setIsSidebarCartShow(true);
    }
  };

  return (
    <div
      id="sidebar-parent"
      className={`fixed top-0 right-0 w-full h-[100vh] z-[60] bg-black bg-opacity-40 ${
        isSidebarShow ? "visible" : "invisible"
      }`}
    >
      <div
        id="sidebar"
        className={`absolute top-0 transition-all duration-500 ease-in-out bg-white w-72 h-[100vh] py-3 px-5 overflow-auto ${
          isSidebarShow ? "right-0" : "-right-[999px]"
        }`}
      >
        <div>
          <div className="flex justify-end -ml-2">
            <div
              className="border rounded-full px-1.5 py-0.5 transition duration-200 cursor-pointer hover:text-primaryBlue"
              onClick={() => {
                setIsSidebarShow(false);
              }}
            >
              <CloseIcon fontSize="" />
            </div>
          </div>
          <div className="my-5 space-y-4 text-center">
            <p className="text-xs">تلفن تماس: ۷۸۹ ۴۵۶ ۱۲۳(۹۸)+</p>

            <div className="flex justify-center items-center gap-4">
              <div className="transition hover:text-primaryBlue">
                <Link>حساب کاربری</Link>
              </div>
              <div className="w-[1px] h-3 bg-black"></div>
              <div className="transition hover:text-primaryBlue">
                <Link>پرداخت</Link>
              </div>
            </div>

            <div className="flex">
              <input
                type="text"
                className="w-full focus:outline-none rounded-r border pr-3 text-sm text-gray-500 placeholder:text-[13px] placeholder:text-gray-500"
                placeholder="جستجوی محصول ..."
              />
              <button className="text-white text-sm bg-primaryBlue rounded-l px-5 py-2 hover:bg-zinc-800 transition duration-300">
                جستجو
              </button>
            </div>

            <div className="relative w-40 mx-auto border rounded py-0.5 z-20">
              <select className="cursor-pointer text-[15px] w-full h-full text-center focus:outline-none appearance-none bg-transparent bg-opacity-0">
                <option value="all">همه دسته ها</option>
                <option value="">لوازم جانبی</option>
                <option value="">قطعات کامپیوتر</option>
              </select>
              <KeyboardArrowDownIcon
                fontSize=""
                className="absolute left-4 top-1.5 text-gray-500 -z-10"
              />
            </div>

            <div className="flex justify-center gap-8 pt-2">
              <div className="relative">
                <span className="absolute -top-2 -right-3 text-sm bg-primaryBlue text-white rounded-full w-5 flex justify-center">
                  ۳
                </span>
                <span className="text-gray-800 cursor-pointer hover:text-primaryBlue transition-all duration-200">
                  <FavoriteBorderIcon />
                </span>
              </div>
              <div className="relative">
                <div
                  className="relative group"
                  onClick={sidebarCartClickHandler}
                >
                  <span className="absolute -top-2 -right-3 text-sm bg-primaryBlue text-white rounded-full w-5 flex justify-center">
                    ۲
                  </span>
                  <span className="text-gray-800 cursor-pointer transition-all duration-200 group-hover:text-primaryBlue">
                    <ShoppingBagIcon />
                  </span>
                  <span className="text-gray-800 cursor-pointer group-hover:text-primaryBlue">
                    <KeyboardArrowDownIcon
                      fontSize=""
                      className={`${
                        isSidebarCartShow ? "-rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </div>
                <div
                  className={`absolute top-9 -right-[140px] w-[260px] border bg-white border-gray-300 px-3 py-4 space-y-6 text-start z-30 ${
                    isSidebarCartShow ? "block" : "hidden"
                  }`}
                >
                  <div>
                    <SidebarCartProduct />
                    <SidebarCartProduct />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <p>جمع اجزا:</p>
                      <h1 className="font-bold">۱۳۸,۰۰۰ تومان</h1>
                    </div>
                    <div className="flex items-center justify-between text-sm">
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
          <div>
            <ul className="flex flex-col transition [&>li]:border-b [&>li:hover]:text-primaryBlue">
              <li>
                <Link className="block py-2.5" to="/">
                  خانه
                </Link>
              </li>
              <li>
                <Link className="block py-2.5" to="/shop">
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link className="block py-2.5" to="/blog">
                  بلاگ
                </Link>
              </li>
              <li>
                <Link className="block py-2.5" to="/my-account">
                  حساب کاربری
                </Link>
              </li>
              <li>
                <Link className="block py-2.5" to="/about">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link className="block py-2.5" to="/contact">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-10 space-y-4">
            <p className="text-sm text-center">
              <MailOutlineIcon fontSize="" /> info@yourdomain.com
            </p>
            <div className="flex justify-center gap-2 text-white [&>a]:rounded-full [&>a]:py-0.5 [&>a]:px-1.5 [&_a:hover]:text-white">
              <a href="" className=" bg-[#00aced] hover:bg-[#31BBEF]">
                <TwitterIcon fontSize="" />
              </a>
              <a href="" className="bg-[#bc2a8d] hover:bg-[#C753A2]">
                <InstagramIcon fontSize="" />
              </a>
              <a href="" className="bg-[#bd081b] hover:bg-[#bd3232]">
                <PinterestIcon fontSize="" />
              </a>
              <a href="" className="bg-[#419fd9] hover:bg-[#65B0DF]">
                <TelegramIcon fontSize="" />
              </a>
              <a href="" className="bg-[#f26522] hover:bg-[#F3824C]">
                <RssFeedIcon fontSize="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
