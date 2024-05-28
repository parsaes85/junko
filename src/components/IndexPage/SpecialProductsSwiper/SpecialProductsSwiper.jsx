import React, { useEffect } from "react";

import SpecialProductBox from "../SpecialProductBox/SpecialProductBox";
import useGetSpecialProducts from "../../../hooks/useGetSpecialProducts";

import "./SpecialProductsSwiper.css";

function SpecialProductsSwiper() {
  const { data: specialProducts } = useGetSpecialProducts();

  useEffect(() => {
    const swiperEl = document.querySelector(".specialProductsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        960: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
          spaceBetween: 30,
        },
      },
    });
    swiperEl.initialize();
  }, []);
  return (
    <swiper-container
      class="specialProductsSwiper"
      grid-rows="2"
      space-between="30"
      loop="true"
    >
      {/* {specialProducts?.map((product) => (
        <swiper-slide>
          <SpecialProductBox key={product.id} {...product} />
        </swiper-slide>
      ))} */}

      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
      <swiper-slide>
        <SpecialProductBox />
      </swiper-slide>
    </swiper-container>
  );
}

export default SpecialProductsSwiper;
