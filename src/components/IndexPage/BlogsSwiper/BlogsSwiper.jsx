import React, { useEffect } from "react";

import BlogBox from "../../BlogBox/BlogBox";

function BlogsSwiper() {
  useEffect(() => {
    const swiperEl = document.querySelector(".blogsSwiper");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        660: {
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
      class="blogsSwiper"
    >
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
      <swiper-slide>
        <BlogBox />
      </swiper-slide>
    </swiper-container>
  );
}

export default BlogsSwiper;
