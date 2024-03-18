import React from "react";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";

function LeftSideRowProductBox() {
  return (
    <div className="grid grid-cols-11 gap-5 p-4 rounded border border-transparent transition hover:border-gray-300 group/item">
      <div className="col-span-4 relative">
        <span className="absolute top-3 left-4 text-gray-100 bg-[#5fa403] px-1.5 py-[11px] rounded-full text-xs">
          فروش
        </span>
        <Link>
          <img src="/images/product2.jpg" alt="" className="w-72" />
        </Link>
      </div>
      <div className="col-span-4 border-l pl-5 flex flex-col space-y-4">
        <div className="flex items-end gap-1">
          <p className="text-primaryBlue text-[17px]">۷۹,۰۰۰ تومان</p>
          <p className="text-gray-500 line-through text-[15px]">۸۶,۰۰۰ تومان</p>
        </div>
        <Link className="text-[15px] hover:text-primaryBlue transition">
          گوشی موبایل شیائومی مدل MI ۹ Lite
        </Link>
        <div className="text-primaryBlue">
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
          <StarBorderIcon fontSize="small" />
        </div>
        <p className="text-justify text-[15px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div className="col-span-3 my-auto">
        <button className="text-primaryBlue border-2 border-primaryBlue text-sm tracking-tighter py-2.5 w-full rounded-md duration-300 hover:bg-primaryBlue hover:text-white">
          افزودن به سبد
        </button>
        <div className="text-[15px] mt-5 space-y-2 [&>div]:transition [&>div]:cursor-pointer [&>div:hover]:text-primaryBlue [&>div]:flex [&>div]:gap-2">
          <div>
            <span>
              <FavoriteBorderIcon fontSize="small"/>
            </span>
            افزودن به علاقه‌مندی‌ها
          </div>
          <div>
            <span>
              <SearchIcon fontSize="small"/>
            </span>
            نمایش سریع
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideRowProductBox;
