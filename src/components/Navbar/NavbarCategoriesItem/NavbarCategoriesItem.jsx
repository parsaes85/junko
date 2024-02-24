import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function NavbarCategoriesItem({ hasSubmenu }) {
  return (
    <li className="relative hover:text-primaryBlue transition duration-300 group">
      <div>
        {hasSubmenu && (
          <KeyboardArrowLeftIcon
            fontSize=""
            className="absolute left-4 top-3 text-gray-500 group-hover:text-primaryBlue"
          />
        )}

        <Link className="block p-2">لباس و پوشاک</Link>
      </div>
      {hasSubmenu && (
        <div className="hidden absolute bg-white py-6 px-8 top-0 right-[285px] border group-hover:block text-black">
          <ul className="flex flex-col text-gray-800 gap-2">
            <li className="text-black mb-2">
              <Link className="block hover:text-primaryBlue">لباس ها</Link>
            </li>
            <li>
              <Link className="block hover:text-primaryBlue">زیرپیراهن</Link>
            </li>
            <li>
              <Link className="block hover:text-primaryBlue">عصرانه</Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavbarCategoriesItem;
