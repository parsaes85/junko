import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

import "./Banner.css";

function Banner() {
  const swiperElRef = useRef(null);
  const bannerContentRef = useRef(null);

  useEffect(() => {
    bannerContentRef.current.classList.add("banner-content-active");

    const slideChangeHandler = (e) => {
      Array.from(e.target.children).forEach((child) => {
        const targetChild =
          child.firstElementChild.firstElementChild.firstElementChild;
        if (child.className === "swiper-slide-next") {
          if (targetChild.classList.contains("banner-content-active")) {
            targetChild.classList.remove("banner-content-active");
          } else {
            targetChild.classList.add("banner-content-active");
          }
        } else if (child.className === "swiper-slide-prev") {
          targetChild.classList.add("banner-content-active");
        } else {
          targetChild.classList.remove("banner-content-active");
        }
      });
    };
    swiperElRef.current.addEventListener(
      "swiperslidechange",
      slideChangeHandler
    );
  }, []);

  return (
      <div className="w-full h-[340px] lg:h-[490px] font-IRANSans">
        <swiper-container
          ref={swiperElRef}
          class="bannerSwiper"
          pagination="true"
          loop="true"
          autoplay-delay="6000"
        >
          <swiper-slide>
            <div className="swiper-slide-1">
              <div className="flex items-center h-full text-center justify-center xs:justify-start xs:text-right">
                <div className="banner-content" ref={bannerContentRef}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">طراحی زیبا</h2>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4 md:pb-6 lg:pb-8 pt-3 md:pt-4 lg:pt-6">تلویزیون ۸۵ اینچ</h1>
                  <p className="text-base md:text-lg">
                    پشنهاد ویژه{" "}
                    <span className="text-primaryBlue">۲۰% تخفیف</span> این هفته
                  </p>
                  <button className="text-white bg-primaryBlue text-sm py-2.5 lg:py-3 xl:py-4 px-4 lg:px-6 xl:px-9 rounded-md mt-8 md:mt-10 lg:mt-16">
                    اکنون بخرید
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="swiper-slide-2">
              <div className="flex items-center h-full text-center justify-center xs:justify-start xs:text-right">
                <div className="banner-content z-50">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">دوربین دوگانه</h2>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4 md:pb-6 lg:pb-8 pt-3 md:pt-4 lg:pt-6">کیفیت ۲۰MP</h1>
                  <p className="text-base md:text-lg">
                    پشنهاد ویژه{" "}
                    <span className="text-primaryBlue">۲۰% تخفیف</span> این هفته
                  </p>
                  <button className="text-white bg-primaryBlue text-sm py-2.5 lg:py-3 xl:py-4 px-4 lg:px-6 xl:px-9 rounded-md mt-8 md:mt-10 lg:mt-16">
                    اکنون بخرید
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="swiper-slide-3">
              <div className="flex items-center h-full text-center justify-center xs:justify-start xs:text-right">
                <div className="banner-content">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">عجله کنید!</h2>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4 md:pb-6 lg:pb-8 pt-3 md:pt-4 lg:pt-6">محصولات برتر سال</h1>
                  <p className="text-base md:text-lg">
                    پشنهاد ویژه{" "}
                    <span className="text-primaryBlue">۲۰% تخفیف</span> این هفته
                  </p>
                  <button className="text-white bg-primaryBlue text-sm py-2.5 lg:py-3 xl:py-4 px-4 lg:px-6 xl:px-9 rounded-md mt-8 md:mt-10 lg:mt-16">
                    اکنون بخرید
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
  );
}

export default Banner;
