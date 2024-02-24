import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

import NavbarCategoriesItem from "./NavbarCategoriesItem/NavbarCategoriesItem";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="bg-primaryBlue px-24">
        <div className="flex items-center gap-12">
          <div className="relative">
            <div className="backdrop-brightness-[0.8] flex items-center justify-between text-white w-72 py-4 px-5 cursor-pointer">
              <p>دسته‌بندی ها</p>

              <span>
                <MenuIcon />
              </span>
            </div>
            <div className="hidden absolute w-72 bg-white py-4 top-14 right-0 border">
              <ul className="flex flex-col [&>li]:px-4">
                <NavbarCategoriesItem hasSubmenu={true}/>
                <NavbarCategoriesItem hasSubmenu={false}/>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex gap-12 text-white">
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
