import React from "react";
import { register } from "swiper/element/bundle";
import "./Banner.css";

register();
function Banner() {
  return (
    <section>
      <div className="w-full h-[470px]">
        <swiper-container class="mySwiper" pagination="true">
          <swiper-slide>
            <div className="swiper-slide-1"></div>
          </swiper-slide>
          <swiper-slide>
            <div className="swiper-slide-2"></div>
          </swiper-slide>
          <swiper-slide>
            <div className="swiper-slide-3"></div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
}

export default Banner;
