import React, { useEffect } from "react";

import ProductBox from "../../ProductBox/ProductBox";
import useGetProducts from "../../../hooks/useGetProducts";

function ProductsSwiper() {
  const { data: specialOffers } = useGetProducts("specialOffers", "isSpecialOffer=1");

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
      {specialOffers?.map((product) => (
        <swiper-slide key={product.id}>
          <ProductBox {...product} />
        </swiper-slide>
      ))}


    </swiper-container>
  );
}

export default ProductsSwiper;
