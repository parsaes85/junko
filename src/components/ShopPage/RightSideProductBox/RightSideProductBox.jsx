import React from "react";
import { Link } from "react-router-dom";

import StarBorderIcon from "@mui/icons-material/StarBorder";

function RightSideProductBox() {
  return (
    <div className="flex gap-4 border-b py-4">
      <Link>
        <img src="/images/product2.jpg" className="w-[70px]" alt="" />
      </Link>
      <div className="space-y-2">
        <Link className="hover:text-primaryBlue transition">
          گوشی موبایل شیائومی
        </Link>
        <div className="text-primaryBlue">
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
        </div>
        <div>
          <p className="text-gray-500 line-through text-[15px]">۸۶,۰۰۰ تومان</p>
          <p className="text-primaryBlue text-[17px]">۷۹,۰۰۰ تومان</p>
        </div>
      </div>
    </div>
  );
}

export default RightSideProductBox;
