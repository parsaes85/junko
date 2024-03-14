import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

import NavbarCategoriesItem from "./NavbarCategoriesItem/NavbarCategoriesItem";
import "./Navbar.css";

function Navbar() {
  const [isShowCategoriesDropdown, setIsShowCategoriesDropdown] = useState(false)

  const categoriesDropdownClickHandler = () => {
    if(isShowCategoriesDropdown) {
      setIsShowCategoriesDropdown(false)
    } else {
      setIsShowCategoriesDropdown(true)
    }
  }

  return (
    <div>
      <div className="lg:bg-primaryBlue px-4 xs:px-24">
        <div className="lg:flex items-center gap-12">
          <div className="relative">
            <div className="bg-[#1953b4] flex items-center justify-between text-white w-full py-3 px-5 mb-8 cursor-pointer lg:w-52 lg:mb-0 lg:py-4 xl:w-72" onClick={categoriesDropdownClickHandler}>
              <p>دسته‌بندی ها</p>

              <span>
                <MenuIcon />
              </span>
            </div>
            <div className={`transition-all duration-1000 overflow-hidden ${isShowCategoriesDropdown ? "max-h-[100rem] z-50" : "max-h-0 z-0"} absolute  w-full lg:w-72 bg-white top-12 lg:top-14 right-0 border`}>
              <ul className="flex flex-col  py-4 [&>li]:px-4">
                <NavbarCategoriesItem hasSubmenu={true} />
                <NavbarCategoriesItem hasSubmenu={false} />
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-12 text-white text-[15px] xl:text-base">
              <li>
                <NavLink to="/" className="link">
                  خانه
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="link">
                  فروشگاه
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="link">
                  بلاگ
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="link">
                  درباره ما
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  تماس با ما
                </NavLink>
              </li>
              <li>
                <NavLink></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
