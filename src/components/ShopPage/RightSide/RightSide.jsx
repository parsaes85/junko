import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./RightSide.css";

function RightSide() {
  const [rangeInputMinValue, setRangeInputMinValue] = useState("0");
  const [rangeInputMaxValue, setRangeInputMaxValue] = useState("50000000");

  let priceGap = 5000000;

  useEffect(() => {
    const priceFilterRangeInputs =
      document.querySelectorAll(".range-input input");
    const priceFilterPriceInputs = document.querySelectorAll(".price-input");
    const priceFilterProgress = document.querySelector(".slider .progress");

    priceFilterRangeInputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(priceFilterRangeInputs[0].value);
        let maxVal = parseInt(priceFilterRangeInputs[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.classList.contains("range-min")) {
            priceFilterRangeInputs[0].value = maxVal - priceGap;
          } else {
            priceFilterRangeInputs[1].value = minVal + priceGap;
          }
        } else {
          priceFilterPriceInputs[0].innerHTML = `${minVal.toLocaleString()} تومان`;
          priceFilterPriceInputs[1].innerHTML = `${maxVal.toLocaleString()} تومان`;
          priceFilterProgress.style.right =
            (minVal / priceFilterRangeInputs[0].max) * 100 + "%";
          priceFilterProgress.style.left =
            100 - (maxVal / priceFilterRangeInputs[1].max) * 100 + "%";
        }
      });
    });
  }, []);

  return (
    <div className="bg-[#f8f8f8] flex-1 py-12 px-5 space-y-14">
      {/* product categories */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4">دسته های محصولات</h1>

        <div>
          <ul className="flex flex-col text-[15px] [&>li]:transition [&>li:hover]:text-primaryBlue">
            <li>
              <Link className="block py-3 border-b">
                دوربین عکاسی و فیلمبرداری
              </Link>
            </li>
            <li>
              <Link className="block py-3 border-b">کامپیوتر و شبکه</Link>
            </li>
            <li>
              <Link className="block py-3 border-b">بازی و کنسول</Link>
            </li>
            <li>
              <Link className="block py-3 border-b">هدفون و اسپیکر</Link>
            </li>
            <li>
              <Link className="block py-3 border-b">فیلم و بازی ویدئویی</Link>
            </li>
            <li>
              <Link className="block py-3 border-b">گوشی هوشمند</Link>
            </li>
            <li>
              <Link className="block py-3 border-b">بدون دسته</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* price filter */}
      <div>
        <h1 className="text-xl font-IRANSans mb-8">فیلتر با قیمت</h1>

        <div>
          <div>
            <div class="slider h-1 rounded bg-gray-100 relative">
              <div class="progress h-1 rounded bg-primaryBlue absolute right-0 left-0"></div>
            </div>
            <div class="range-input relative">
              <input
                type="range"
                class="range-min absolute -top-1 h-1 w-full appearance-none pointer-events-none bg-inherit"
                min="0"
                max="50000000"
                value={rangeInputMinValue}
                onInput={(e) => {
                  setRangeInputMinValue(e.target.value);
                }}
              />
              <input
                type="range"
                class="range-max absolute -top-1 h-1 w-full appearance-none pointer-events-none bg-inherit"
                min="0"
                max="50000000"
                value={rangeInputMaxValue}
                onInput={(e) => {
                  setRangeInputMaxValue(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="text-xs flex gap-1 mt-7 mb-5 font-semibold">
            <span class="price-input"> 0 تومان </span> -
            <span class="price-input"> 50,000,000 تومان </span>
          </div>
          <Link>
            <button className="text-white bg-zinc-800 rounded-full py-1 px-5 transition duration-300 hover:bg-primaryBlue">
              فیلتر
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
