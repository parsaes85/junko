import React from "react";
import WhyChooseUsBox from "../WhyChooseUsBox/WhyChooseUsBox";

function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 px-4 xs:px-24 mb-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <WhyChooseUsBox
          img="/images/About_icon1.png"
          title="تضمین بازگشت وجه"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها"
        />
        <WhyChooseUsBox
          img="/images/About_icon2.png"
          title="طراحی خلاقانه"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها"
        />
        <WhyChooseUsBox
          img="/images/About_icon3.png"
          title="کیفیت بالا"
          desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها"
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;
