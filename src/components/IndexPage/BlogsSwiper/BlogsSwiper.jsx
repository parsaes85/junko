import React, { useEffect } from "react";

import BlogBox from "../../BlogBox/BlogBox";
import useGetBlogs from "../../../hooks/useGetBlogs";

function BlogsSwiper() {
  const { data: blogs } = useGetBlogs();

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
    <swiper-container class="blogsSwiper">
      {blogs?.map((blog) => (
        blog.publish && (
          <swiper-slide key={blog.id}>
            <BlogBox {...blog} />
          </swiper-slide>
        )
      ))}
    </swiper-container>
  );
}

export default BlogsSwiper;
