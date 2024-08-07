import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RightSideProductBox from "../RightSideProductBox/RightSideProductBox";
import useGetAllMenus from "../../../hooks/useGetAllMenus";
import useGetProducts from "../../../hooks/useGetProducts";

import "./RightSide.css";

function RightSide({ filteredProductsState, setShownProducts, products }) {
  const { data: menus } = useGetAllMenus();

  const [rangeInputMinValue, setRangeInputMinValue] = useState("0");
  const [rangeInputMaxValue, setRangeInputMaxValue] = useState("50000000");
  const [recentProducts, setRecentProducts] = useState([])

  let priceGap = 5000000;

  const filterProductsByPrice = () => {
    const filteredProducts = filteredProductsState.filter(
      (product) =>
        product.price > rangeInputMinValue && product.price < rangeInputMaxValue
    );
    setShownProducts(filteredProducts);
  };

  useEffect(() => {
    let recentProductsArr = products?.slice(products.length - 3, products.length);
    setRecentProducts(recentProductsArr);
  }, [products])

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
    <div className="bg-[#f8f8f8] flex-1 py-12 px-5 space-y-14 h-fit">
      {/* products categories */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          دسته های محصولات
        </h1>

        <div>
          <ul className="flex flex-col text-[15px] [&>li]:transition [&>li:hover]:text-primaryBlue">
            <li>
              <Link to="/shop" className="block py-3 border-b">
                تمام محصولات
              </Link>
            </li>
            {menus?.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={`/shop?category=${menu.name}`}
                  className="block py-3 border-b"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* price filter */}
      <div>
        <h1 className="text-xl font-IRANSans mb-8 tracking-tighter">
          فیلتر با قیمت
        </h1>

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
          <button
            className="text-white bg-zinc-800 rounded-full py-1 px-5 transition duration-300 hover:bg-primaryBlue"
            onClick={filterProductsByPrice}
          >
            فیلتر
          </button>
        </div>
      </div>

      {/* products comparison */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          محصولات اخیر
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 md:gap-6 lg:gap-0">
          {
            recentProducts?.map(product => <RightSideProductBox key={product.id} {...product} />)
          }
        </div>
      </div>

      {/* products lables */}
      {/* <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          برچسب های محصولات
        </h1>
        <div className="flex flex-wrap gap-2">
          <Link className="bg-white border py-2 px-4 rounded text-sm transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            بلوز
          </Link>
          <Link className="bg-white border py-2 px-4 rounded text-sm transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            لورم ایپسوم
          </Link>
          <Link className="bg-white border py-2 px-4 rounded text-sm transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            مد و زیبایی
          </Link>
          <Link className="bg-white border py-2 px-4 rounded text-sm transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            لورم ایپسوم
          </Link>
          <Link className="bg-white border py-2 px-4 rounded text-sm transition duration-300 hover:text-white hover:bg-primaryBlue tr">
            لپتاپ
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default RightSide;
