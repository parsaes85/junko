import React from 'react'
import { Link } from 'react-router-dom'
import SidebarMiniCartItem from './SidebarMiniCartItem/SidebarMiniCartItem'

function SidebarMiniCart({ isSidebarMiniCartShow }) {
  return (
    <div
    className={`transition-all duration-1000 ease-in absolute top-9 -right-[140px] w-[260px] border bg-white border-gray-300 text-start z-30 overflow-hidden ${
      isSidebarMiniCartShow
        ? "visible max-h-[100rem]"
        : "invisible max-h-0"
    }`}
  >
    <div className="px-3 py-4 space-y-6">
      <div>
        <SidebarMiniCartItem />
        <SidebarMiniCartItem />
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
  )
}

export default SidebarMiniCart