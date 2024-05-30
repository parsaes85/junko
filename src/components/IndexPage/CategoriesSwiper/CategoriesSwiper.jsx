import React, { useEffect } from "react";

import CategoryBox from "../CategoryBox/CategoryBox";
import useGetAllCategories from "../../../hooks/useGetAllCategories";

function CategoriesSwiper() {
  const { data: categories } = useGetAllCategories();

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
  }, []);

  return (
    <swiper-container class="categoriesSwiper" init="false">
      {categories?.map((category) => (
        <swiper-slide>
          <CategoryBox {...category}/>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default CategoriesSwiper;
