import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function LeftSideHeader() {
  return (
    <div className="flex justify-between items-center border px-3 py-2">
      <div className="flex gap-4">
        <div className="cursor-pointer">
          <img src="/images/bkg_grid.png" alt="" className="brightness-[0.1]" />
        </div>
        <div className="cursor-pointer">
          <img src="/images/bkg_grid4.png" alt="" />
        </div>
        <div className="cursor-pointer">
          <img src="/images/bkg_list.png" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p>ترتیب:</p>
        <div className="relative">
          <select className="cursor-pointer pr-4 pl-6 py-2 text-[15px] border rounded h-full appearance-none bg-transparent transition focus:outline-none focus:border-gray-400 peer">
            <option value="all">امتیاز متوسط</option>
            <option value="">لوازم جانبی</option>
            <option value="">قطعات کامپیوتر</option>
          </select>
          <KeyboardArrowDownIcon
            fontSize=""
            className="absolute left-2 top-[11px] text-gray-500 -z-10 peer-focus:duration-300 peer-focus:transition-all peer-focus:rotate-180"
          />
        </div>
      </div>
      <div>
        <p className="tracking-tighter">نمایش ۱ـ۱۲ از ۲۴ محصول</p>
      </div>
    </div>
  );
}

export default LeftSideHeader;
