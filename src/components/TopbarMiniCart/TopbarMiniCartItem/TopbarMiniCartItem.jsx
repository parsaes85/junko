import React from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from "@mui/icons-material/Close";

function TopbarMiniCartItem() {
  return (
    <div className="flex gap-2 border-b py-2">
    <div className="border border-transparent hover:border-primaryBlue">
      <Link>
        <img src="images/product.jpg" alt="" className="w-28" />
      </Link>
    </div>
    <div className="space-y-2">
      <Link className="hover:text-primaryBlue transition duration-300">
        لورم ایپسوم متن ساختگی با تولید سادگی
      </Link>
      <p className="text-sm">
        تعداد:{" "}
        <span className="font-bold">
          <span>۱</span> <CloseIcon fontSize="" className="text-xs" />{" "}
          <span>۶۰,۰۰۰</span> تومان
        </span>
      </p>
    </div>
    <div>
      <span className="border rounded-full text-gray-600 px-1 text-sm transition duration-300 cursor-pointer hover:bg-primaryBlue hover:text-white hover:border-primaryBlue">
        <CloseIcon fontSize="" />
      </span>
    </div>
  </div>
  )
}

export default TopbarMiniCartItem