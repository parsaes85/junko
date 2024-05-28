import React, { useEffect } from "react";

import ProductBox from "../../ProductBox/ProductBox";
import useGetSpecialProducts from "../../../hooks/useGetSpecialProducts";

function ProductsSwiper() {
  const { data } = useGetSpecialProducts();

  useEffect(() => {
    const swiperEl = document.querySelector(".productsSwiper");
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
    <swiper-container class="productsSwiper" init="false">
      {data?.map((product) => (
        <swiper-slide>
          <ProductBox key={product.id} {...product} />
        </swiper-slide>
      ))}


    </swiper-container>
  );
}

export default ProductsSwiper;
