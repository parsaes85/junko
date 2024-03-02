import React from "react";
import { Link } from "react-router-dom";

import Banner from "../../components/IndexPage/Banner/Banner";
import FeatureBox from "../../components/IndexPage/FeatureBox/FeatureBox";
import ProductBox from "../../components/IndexPage/ProductBox/ProductBox";
import CategoryBox from "../../components/IndexPage/CategoryBox/CategoryBox";
import SpecialProductBox from "../../components/IndexPage/SpecialProductBox/SpecialProductBox";

import "./Index.css";

function Index() {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section className="px-24 mt-16">
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

      <section className="px-24 mt-16">
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

      <section className="px-24 mt-16">
        <div>
          <div className="border-b pb-4 mb-6">
            <h1 className="text-2xl tracking-tight">پیشنهاد های ویژه</h1>
          </div>
          <div>
            <swiper-container
              class="productSwiper"
              space-between="30"
              slides-per-view="5"
              loop="true"
            >
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
              </swiper-slide>
              <swiper-slide>
                <ProductBox />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>

      <section className="px-24 mt-16">
        <div className="flex gap-4 justify-between">
          <div className="overflow-hidden">
            <img
              src="/images/banner4.jpg"
              alt=""
              className="transition duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/banner5.jpg"
              alt=""
              className="transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="px-24 mt-16">
        <div className="grid grid-cols-5 gap-11">
          <div className="space-y-4">
            <h1 className="text-2xl">محبوب ترین دسته های این هفته</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
            <Link className="block">
              <button className="bg-primaryBlue px-4 py-2 rounded text-white">
                نمایش همه دسته ها
              </button>
            </Link>
          </div>
          <div className="col-span-4">
            <swiper-container
              className="categorySwiper"
              space-between="30"
              slides-per-view="5"
              loop="true"
            >
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
              <swiper-slide>
                <CategoryBox />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>

      <section className="px-24 mt-16 py-16 bg-gray-50">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl tracking-tight">محصولات ویژه</h1>
        </div>
        <div>
          <SpecialProductBox />
        </div>
      </section>
    </div>
  );
}

export default Index;
