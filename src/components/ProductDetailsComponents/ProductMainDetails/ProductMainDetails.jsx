import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from "@mui/icons-material/Pinterest";

function ProductMainDetails() {
  const [productNumber, setProductNumber] = useState(1);
  return (
    <main>
      <div className="grid grid-cols-2 gap-8 px-4 xs:px-24 mb-16">
        <div>
          <div className="border">
            <img src="/images/productbig5.jpg" className="w-full" alt="" />
          </div>
          <div className="flex justify-center gap-4 mt-5 px-14">
            <div className="border w-fit cursor-pointer">
              <img src="/images/product2.jpg" className="w-24" alt="" />
            </div>
            <div className="border w-fit cursor-pointer">
              <img src="/images/product2.jpg" className="w-24" alt="" />
            </div>
            <div className="border w-fit cursor-pointer">
              <img src="/images/product2.jpg" className="w-24" alt="" />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-5 border-b pb-5">
            <h1 className="text-2xl">ماشین ظرف شویی سامسونگ DM2019</h1>
            <div className="flex gap-2 items-center">
              <div className="text-primaryBlue ">
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
                <StarIcon fontSize="small" />
              </div>
              <p className="text-gray-600">(امتیاز مشتریان)</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-primaryBlue tracking-tighter text-[24px]">
                ۷۰,۰۰۰ تومان
              </p>
              <p className="text-gray-500 tracking-tighter line-through text-[22px]">
                ۸۰,۰۰۰ تومان
              </p>
            </div>
            <p className="text-[15px] leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
            </p>
          </div>
          <div className="space-y-6">
            <h1 className="text-xl tracking-tighter">گزینه های در دسترس</h1>
            <div>
              <h2>رنگ</h2>
              <div className="flex gap-2 mt-2">
                <div className="border border-gray-300 p-0.5">
                  <div className="w-[29px] h-[30px] bg-black"></div>
                </div>
                <div className="border border-gray-300 p-0.5">
                  <div className="w-[29px] h-[30px] bg-[#bebebe]"></div>
                </div>
                <div className="border border-gray-300 p-0.5">
                  <div className="w-[29px] h-[30px] bg-[#fe0000]"></div>
                </div>
                <div className="border border-gray-300 p-0.5">
                  <div className="w-[29px] h-[30px] bg-[#ffff01]"></div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <label htmlFor="product-number">تعداد:</label>
              <input
                type="number"
                id="product-number"
                className="outline-none border w-32 px-2 py-2 mx-4 rounded text-sm"
                value={productNumber}
                onChange={(e) => {
                  setProductNumber(e.target.value);
                }}
              />
              <button className="bg-primaryBlue text-white py-2 px-20 rounded hover:bg-gray-700 transition">
                افزودن به سبد
              </button>
            </div>
            <div className="text-[15px] transition cursor-pointer hover:text-primaryBlue flex gap-2">
              <span>
                <FavoriteBorderIcon fontSize="small" />
              </span>
              افزودن به علاقه‌مندی‌ها
            </div>
            <div className="flex gap-2">
                <span>دسته:</span>
                <p>پوشاک</p>
            </div>
            <div className="flex gap-2 text-[13px] text-white [&>a]:rounded [&>a]:py-0.5 [&>a]:px-2 [&>a]:flex [&>a]:gap-1 [&>a]:items-center [&>a]:opacity-90">
              <a href="" className="bg-[#bc2a8d] hover:bg-[#C753A2]">
                <InstagramIcon fontSize="" />
                لایک
              </a>
              <a href="" className=" bg-[#00aced] hover:bg-[#31BBEF]">
                <TwitterIcon fontSize="" />
                توییت
              </a>
              <a href="" className="bg-[#bd081b] hover:bg-[#bd3232]">
                <PinterestIcon fontSize="" />
                ذخیره
              </a>
              <a href="" className="bg-[#f26522] hover:bg-[#F3824C]">
                <GoogleIcon fontSize="" />
                اشتراک گذاری
              </a>
              <a href="" className="bg-[#419fd9] hover:bg-[#65B0DF]">
                <TelegramIcon fontSize="" />
                تلگرام
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductMainDetails;
