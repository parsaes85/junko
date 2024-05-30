import React, { useEffect } from "react";

import ProductBox from "../../ProductBox/ProductBox";
import useGetProducts from "../../../hooks/useGetProducts";

function ComputerProductsSwiper() {
  const { data: computerProducts } = useGetProducts(
    "computerProducts",
    "categoryId=4"
  );

  useEffect(() => {
    const swiperEl = document.querySelector(".computerProductsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        460: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      },
    });
    swiperEl.initialize();
  }, []);

  return (
    <swiper-container class="computerProductsSwiper" init="false">
      {computerProducts?.map((product) => (
        <swiper-slide>
          <ProductBox {...product}/>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default ComputerProductsSwiper;
