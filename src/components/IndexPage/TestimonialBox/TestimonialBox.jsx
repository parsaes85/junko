import React from "react";
import { Link } from "react-router-dom";

function TestimonialBox() {
  return (
    <div>
      <Link className="block relative mb-6 mx-auto w-fit border-8 border-[#edf4fc] rounded-full before:absolute before:-left-4 before:-top-4 before:border-8 before:border-[#fafcfe] before:rounded-full before:h-24 before:w-24">
        <img
          src="/images/testimonial1.jpg"
          className="rounded-full w-16"
          alt=""
        />
      </Link>
      <div className="text-center space-y-4">
        <p className="leading-7">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم
        </p>
        <p>
          <Link className="text-primaryBlue">بیل گیتس</Link> - بنیان گذار
          مایکروسافت
        </p>
      </div>
    </div>
  );
}

export default TestimonialBox;
