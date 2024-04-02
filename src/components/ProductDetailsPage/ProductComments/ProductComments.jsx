import React, { useState } from "react";

function ProductComments() {
  const [sectionTitle, setSectionTitle] = useState("desc");

  return (
    <section>
      <div className="px-4 xs:px-24 mb-16">
        <div className="border py-6 px-8">
          <div className="border-b pb-5 flex gap-8 text-xl text-gray-700 [&>*]:cursor-pointer [&>*:hover]:text-gray-900 [&>*:hover]:transition">
            <h1 className={`${sectionTitle === "desc" && "text-gray-950"}`} onClick={() => setSectionTitle("desc")}>توضیحات</h1>
            <h1 className={`${sectionTitle === "infos" && "text-gray-950"}`} onClick={() => setSectionTitle("infos")}>مشخصات فنی</h1>
            <h1 className={`${sectionTitle === "comments" && "text-gray-950"}`} onClick={() => setSectionTitle("comments")}>نقد و بررسی (۱)</h1>
          </div>
          <div className="py-6">
            <p className="text-[15px] leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductComments;
