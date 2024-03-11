import React from "react";

import TestimonialBox from "../TestimonialBox/TestimonialBox";

import "./TestimonialsSwiper.css"

function TestimonialsSwiper() {
  return (
    <swiper-container class="testimonialsSwiper" pagination="true" loop="true">
      <swiper-slide>
        <TestimonialBox />
      </swiper-slide>
      <swiper-slide>
        <TestimonialBox />
      </swiper-slide>
      <swiper-slide>
        <TestimonialBox />
      </swiper-slide>
    </swiper-container>
  );
}

export default TestimonialsSwiper;
