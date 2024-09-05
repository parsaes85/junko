import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

import TopbarMiniCart from "../TopbarMiniCart/TopbarMiniCart";

import "./StickyNavbar.css";

function StickyNavbar() {
  const favoriteProducts = useSelector((state) => state.favoriteProducts)
  const cartProducts = useSelector((state) => state.cartProducts)

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        scrollPosition > 100
          ? "top-0 visible opacity-100 transition-all duration-[400ms]"
          : "-top-8 opacity-0 invisible"
      } left-0 z-[98] w-full bg-white bg-opacity-95 shadow hidden lg:flex items-center justify-between  px-4 py-3 xs:px-24`}
    >
      <Link to="/">
        <img src="/images/logo.png" alt="" className="max-w-32 md:max-w-40" />
      </Link>

      <div className="flex items-center gap-12">
        <ul id="sticky-navbar" className="flex gap-12 text-[15px] xl:text-base">
          <li>
            <NavLink to="/" className="link hover:text-primaryBlue transition">
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="link hover:text-primaryBlue transition"
            >
              فروشگاه
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="link hover:text-primaryBlue transition"
            >
              بلاگ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="link hover:text-primaryBlue transition"
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="link hover:text-primaryBlue transition"
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>

        <div className="flex gap-8">
          <Link to="/wishlist">
          <div className="relative">
            <span className="absolute -top-2 -right-3 text-sm bg-primaryBlue text-white rounded-full w-5 flex justify-center">
              {favoriteProducts?.products?.length.toLocaleString("fa")}
            </span>
            <span className="text-gray-800 cursor-pointer hover:text-primaryBlue transition-all duration-200">
              <FavoriteBorderIcon />
            </span>
          </div>
          </Link>
          <div className="relative group">
            <div className="relative">
              <span className="absolute -top-2 -right-3 text-sm bg-primaryBlue text-white rounded-full w-5 flex justify-center">
                {cartProducts?.products?.length.toLocaleString("fa")}
              </span>
              <span className="text-gray-800 cursor-pointer transition-all duration-200 group-hover:text-primaryBlue">
                <ShoppingBagIcon />
              </span>
              <span className="text-gray-800 cursor-pointer transition-all duration-200 group-hover:text-primaryBlue">
                <KeyboardArrowDownIcon fontSize="" />
              </span>
            </div>
            <TopbarMiniCart cartProducts={cartProducts?.products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyNavbar;
