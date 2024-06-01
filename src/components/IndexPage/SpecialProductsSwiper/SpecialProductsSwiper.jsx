import React, { useEffect } from "react";

import SpecialProductBox from "../SpecialProductBox/SpecialProductBox";
import useGetProducts from "../../../hooks/useGetProducts";

import "./SpecialProductsSwiper.css";

function SpecialProductsSwiper() {
  const { data: specialProducts } = useGetProducts("specialProducts", "isSpecialProduct=1");

  useEffect(() => {
    const swiperEl = document.querySelector(".specialProductsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
        960: {
          slidesPerView: 3,

          spaceBetween: 30,
        },
      },
    });
    swiperEl.initialize();
  }, []);
  return (
    <swiper-container
      class="specialProductsSwiper"
      space-between="30"
      loop="true"
    >
      {specialProducts?.map((product) => (
        <swiper-slide key={product.id}>
          <SpecialProductBox {...product} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default SpecialProductsSwiper;
