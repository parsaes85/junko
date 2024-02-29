import React from "react";
import Banner from "../../components/IndexPage/Banner/Banner";
import FeatureBox from "../../components/IndexPage/FeatureBox/FeatureBox";

import ProductBox from "../../components/IndexPage/ProductBox/ProductBox";

function Index() {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section className="mx-24 mt-16">
        <div className="flex justify-between items-start gap-4">
          <FeatureBox
            img={"/images/shipping1.png"}
            title="ارسال رایگان"
            desc="ارسال رایگان به تمام نقاط کشور"
          />
          <FeatureBox
            img={"/images/shipping2.png"}
            title="پشتیبانی ۲۴ ساعته"
            desc="هر ساعت از شبانه روز تماس بگیرید"
          />
          <FeatureBox
            img={"/images/shipping3.png"}
            title="۱۰۰% بازگشت وجه"
            desc="۳۰ روز مهلت بازگشت وجه"
          />
          <FeatureBox
            img={"/images/shipping4.png"}
            title="پرداخت ایمن"
            desc="امنیت پرداخت تضمین شده"
          />
        </div>
      </section>

      <section className="mx-24 mt-16">
        <div className="flex justify-between gap-4">
          <div>
            <img src="/images/banner1.jpg" alt="" />
          </div>
          <div>
            <img src="/images/banner2.jpg" alt="" />
          </div>
          <div>
            <img src="/images/banner3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="mx-24 my-16">
        <div>
          <div className="border-b pb-4 mb-6">
            <h1 className="text-2xl tracking-tight">پیشنهاد های ویژه</h1>
          </div>
          <div>
            <ProductBox />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
