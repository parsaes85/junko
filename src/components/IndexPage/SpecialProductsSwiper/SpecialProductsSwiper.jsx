import React, { useEffect } from "react";

import SpecialProductBox from "../SpecialProductBox/SpecialProductBox";
import useGetProducts from "../../../hooks/useGetProducts";

function SpecialProductsSwiper() {
  const { data: specialProducts } = useGetProducts("specialProducts", "isSpecialProduct=1");

  useEffect(() => {
    const swiperEl = document.querySelector(".specialProductsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        864: {
          slidesPerView: 2,
        },
        1224: {
          slidesPerView: 3
        }
      },
    });
    swiperEl.initialize();
  }, []);
  
  return (
    <swiper-container
      class="specialProductsSwiper"
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
