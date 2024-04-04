import React, { useEffect } from "react";

import ProductBox from "../../ProductBox/ProductBox";

function MobileProductsSwiper() {
  useEffect(() => {
    const swiperEl = document.querySelector(".mobileProductsSwiper");
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
        1280: {
          slidesPerView: 4,
        },
      },
    });
    swiperEl.initialize();
  }, []);
  
  return (
    <swiper-container
      class="mobileProductsSwiper"
    >
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
      <swiper-slide>
        <ProductBox />
      </swiper-slide>
    </swiper-container>
  );
}

export default MobileProductsSwiper;
