import React, { useEffect } from "react";

import ProductBox from "../../ProductBox/ProductBox";

function BestSellingProducts() {
  useEffect(() => {
    const swiperEl = document.querySelector(".bestSellingProducts");
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
    <section>
      <div className="px-4 xs:px-24 mb-12">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-[22px] tracking-tighter font-IRANSans">
            محصولات پرفروش
          </h1>
        </div>
        <div>
          <swiper-container class="bestSellingProducts">
            {/* <swiper-slide>
              <ProductBox />
            </swiper-slide>
            <swiper-slide>
              <ProductBox />
            </swiper-slide>
            <swiper-slide>
              <ProductBox />
            </swiper-slide>
            <swiper-slide>
              <ProductBox />
            </swiper-slide>
            <swiper-slide>
              <ProductBox />
            </swiper-slide>
            <swiper-slide>
              <ProductBox />
            </swiper-slide>
            <swiper-slide>
              <ProductBox />
            </swiper-slide> */}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}

export default BestSellingProducts;
