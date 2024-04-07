import React from "react";

import { Link } from "react-router-dom";

function RightSideBlogBox() {
  return (
    <div>
      <Link to="/blog-details/1">
        <img src="/images/blog1.jpg" alt="" />
      </Link>
      <div className="mt-6 space-y-4">
        <Link
          to="/blog-details/1"
          className="text-3xl transition duration-300 hover:text-primaryBlue"
        >
          مطلب بلاگ تصویری
        </Link>
        <div className="tracking-tight">
          ارسال توسط : <Link className="text-primaryBlue">مدیر</Link> / در :{" "}
          <Link className="text-primaryBlue">۱۰ آذر ۱۳۹۸</Link>
        </div>
        <p className="pb-2 leading-7">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی
        </p>
        <Link
          to="/blog-details/1"
          className="bg-primaryBlue text-white text-sm py-2 px-12 rounded block w-fit transition duration-300 hover:bg-zinc-800"
        >
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
}

export default RightSideBlogBox;
