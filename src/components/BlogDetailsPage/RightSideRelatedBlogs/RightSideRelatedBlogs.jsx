import React, { useEffect } from "react";

import BlogBox from "../../BlogBox/BlogBox";
import useGetBlogs from "../../../hooks/useGetBlogs";

function RightSideRelatedBlogs(props) {
  const { data: relatedBlogs } = useGetBlogs(
    `relatedBlogs, ${props.categoryId}`,
    `categoryId=${props.categoryId}`
  );

  useEffect(() => {
    const swiperEl = document.querySelector(".relatedBlogs");
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
    <div className="mb-12 w-[98%]">
      <div className="mb-6">
        <h1 className="text-[22px] tracking-tighter font-IRANSans">
          مطالب مرتبط
        </h1>
      </div>
      <div>
        <swiper-container class="relatedBlogs">
          {relatedBlogs?.map((blog) => (
            <swiper-slide key={blog.id}>
              <BlogBox {...blog} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 md:grid-cols-3">
        {relatedBlogs?.map((blog) => (
          <BlogBox {...blog} />
        ))}
      </div> */}
    </div>
  );
}

export default RightSideRelatedBlogs;
