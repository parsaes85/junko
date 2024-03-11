import React, { useEffect } from "react";

import CategoryBox from "../CategoryBox/CategoryBox";

function CategoriesSwiper() {

  useEffect(() => {
    const swiperEl = document.querySelector(".categoriesSwiper");
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
  }, [])

  return (
    <swiper-container
      class="categoriesSwiper"
      init="false"
    >
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
      <swiper-slide>
        <CategoryBox />
      </swiper-slide>
    </swiper-container>
  );
}

export default CategoriesSwiper;
