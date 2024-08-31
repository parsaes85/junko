import React from "react";
import { Link } from "react-router-dom";

import Banner from "../../components/IndexPage/Banner/Banner";
import FeatureBox from "../../components/IndexPage/FeatureBox/FeatureBox";

import ProductsSwiper from "../../components/IndexPage/ProductsSwiper/ProductsSwiper";
import CategoriesSwiper from "../../components/IndexPage/CategoriesSwiper/CategoriesSwiper";
import SpecialProductsSwiper from "../../components/IndexPage/SpecialProductsSwiper/SpecialProductsSwiper";
import TestimonialsSwiper from "../../components/IndexPage/TestimonialsSwiper/TestimonialsSwiper";
import BlogsSwiper from "../../components/IndexPage/BlogsSwiper/BlogsSwiper";
import BrandsSwiper from "../../components/IndexPage/BrandsSwiper/BrandsSwiper";
import ComputerProductsSwiper from "../../components/IndexPage/ComputerProductsSwiper/ComputerProductsSwiper";
import MobileProductsSwiper from "../../components/IndexPage/MobileProductsSwiper/MobileProductsSwiper";

function Index() {
  return (
    <>
      {/* header banner */}
      <section>
        <Banner />
      </section>

      {/* features */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
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

      {/* news images */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="overflow-hidden">
            <img
              src="/images/banner1.jpg"
              className="w-full transition duration-500 hover:scale-105 h-56 sm:h-60 md:h-auto"
              alt=""
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/banner2.jpg"
              className="w-full transition duration-500 hover:scale-105 "
              alt=""
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/banner3.jpg"
              className="w-full transition duration-500 hover:scale-105 h-56 sm:h-60 md:h-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* // special offers */}
      <section className="px-4 xs:px-24 mt-16">
        <div>
          <div className="border-b pb-4 mb-6">
            <h1 className="text-2xl tracking-tight">پیشنهاد های ویژه</h1>
          </div>
          <div>
            <ProductsSwiper />
          </div>
        </div>
      </section>

      {/* news images */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="overflow-hidden">
            <img
              src="/images/banner4.jpg"
              alt=""
              className="w-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/banner5.jpg"
              alt=""
              className="w-full transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* popular categories */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-11">
          <div className="space-y-4 text-center md:text-start">
            <h1 className="text-xl xl:text-2xl">
              محبوب ترین دسته های این هفته
            </h1>
            <p className="text-sm lg:text-base">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </p>
            <Link to="/shop" className="block">
              <button className="bg-primaryBlue px-3 py-2 rounded text-white">
                رفتن به فروشگاه
              </button>
            </Link>
          </div>
          <div className="md:col-span-4">
            <CategoriesSwiper />
          </div>
        </div>
      </section>

      {/* special products */}
      <section className="px-4 xs:px-24 mt-16 py-16 bg-gray-50">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl tracking-tight">محصولات ویژه</h1>
        </div>
        <div>
          <SpecialProductsSwiper />
        </div>
      </section>

      {/* computer and laptop products */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl tracking-tight">کامپیوتر و لپتاپ</h1>
        </div>
        <div>
          <ComputerProductsSwiper />
        </div>
      </section>

      {/* news images */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="overflow-hidden">
            <img
              src="/images/banner6.jpg"
              alt=""
              className="w-full transition duration-500 h-32 sm:h-auto hover:scale-105"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="/images/banner7.jpg"
              alt=""
              className="w-full transition duration-500 h-64 sm:h-80 md:h-auto hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* phone and tablet products */}
      <section className="px-4 xs:px-24 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="border-b pb-4 mb-6">
              <h1 className="text-2xl tracking-tight">موبایل و تبلت</h1>
            </div>
            <div>
              <MobileProductsSwiper />
            </div>
          </div>

          <div>
            <div className="border-b pb-4 mb-6">
              <h1 className="text-2xl tracking-tight">دیدگاه مشتریان</h1>
            </div>
            <div>
              <TestimonialsSwiper />
            </div>
          </div>
        </div>
      </section>

      {/* blogs */}
      <section className="px-4 xs:px-24 mt-16 py-16 bg-gray-50">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl tracking-tight">بلاگ</h1>
        </div>
        <div>
          <BlogsSwiper />
        </div>
      </section>

      {/* brands */}
      <section className="px-4 xs:px-24 my-16">
        <div>
          <BrandsSwiper />
        </div>
      </section>
    </>
  );
}

export default Index;
