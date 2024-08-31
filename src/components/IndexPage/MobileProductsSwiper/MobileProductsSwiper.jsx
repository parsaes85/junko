import React, { useEffect } from "react";

import ProductBox from "../../ProductBox/ProductBox";
import useGetProducts from "../../../hooks/useGetProducts";

function MobileProductsSwiper() {
  const { data: mobileProducts } = useGetProducts(
    "mobileProducts",
    "categoryId=3"
  );

  useEffect(() => {
    const swiperEl = document.querySelector(".mobileProductsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        350: {
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
      {mobileProducts?.map((product) => (
        <swiper-slide key={product.id}>
          <ProductBox {...product}/>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default MobileProductsSwiper;
