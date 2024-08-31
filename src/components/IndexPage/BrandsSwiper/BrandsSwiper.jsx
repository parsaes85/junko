import React, { useEffect } from "react";

import BrandBox from "../BrandBox/BrandBox";

function BrandsSwiper() {
  useEffect(() => {
    const swiperEl = document.querySelector(".brandsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        350: {
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
    <swiper-container class="brandsSwiper">
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand1.jpg"
          secondImgSrc="/images/brand2.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand3.jpg"
          secondImgSrc="/images/brand4.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand5.jpg"
          secondImgSrc="/images/brand6.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand7.jpg"
          secondImgSrc="/images/brand8.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand1.jpg"
          secondImgSrc="/images/brand2.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand3.jpg"
          secondImgSrc="/images/brand4.jpg"
        />
      </swiper-slide>
      <swiper-slide>
        <BrandBox
          firstImgSrc="/images/brand5.jpg"
          secondImgSrc="/images/brand6.jpg"
        />
      </swiper-slide>
    </swiper-container>
  );
}

export default BrandsSwiper;
