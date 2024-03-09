import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import RssFeedIcon from "@mui/icons-material/RssFeed";

function Footer() {
  return (
    <>
      <footer className="px-24 py-16 bg-gray-50">
        <div className="flex items-end gap-16 [&_a:hover]:text-primaryBlue text-[15px]">
          <div className="w-[350px] space-y-5 [&_span]:text-primaryBlue">
            <div>
              <img src="/images/logo.png" alt="" className="w-40" />
            </div>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
            <div>
              <span>آدرس: </span>
              <p className="inline">
                تبریز، چهارراه آبرسان، فلکه دانشگاه، برج بلور، طبقه ۶۷۸، واحد ۸۵
              </p>
            </div>
            <div>
              <span>موبایل: </span>
              <a href="">۷۸۹ ۴۵۶ ۱۲۳(۹۸)+</a> ، <a href="">۷۸۹ ۴۵۶ ۱۲۳(۹۸)+</a>
            </div>
            <div>
              <span>پشتیبانی: </span>
              <a href="">support@sample.com</a>
            </div>
          </div>
          <div>
            <h1 className="font-IRANSans text-xl mb-4">اطلاعات</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="">درباره ما</a>
              </li>
              <li>
                <a href="">نحوه ارسال</a>
              </li>
              <li>
                <a href="">سیاست حریم خصوصی</a>
              </li>
              <li>
                <a href="">قوانین و مقررات</a>
              </li>
              <li>
                <a href="">مرجوعی ها</a>
              </li>
              <li>
                <a href="">کارت های هدیه</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-IRANSans text-xl mb-4">حساب کاربری</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="">حساب کاربری</a>
              </li>
              <li>
                <a href="">سابقه خرید</a>
              </li>
              <li>
                <a href="">علاقه‌مندی‌ها</a>
              </li>
              <li>
                <a href="">خبرنامه</a>
              </li>
              <li>
                <a href="">نمایندگی ها</a>
              </li>
              <li>
                <a href="">سفارشات بین المللی</a>
              </li>
            </ul>
          </div>
          <div className="space-y-12 flex-1">
            <div>
              <h1 className="font-IRANSans text-xl mb-4">ما را دنبال کنید</h1>
              <div className="flex gap-3 text-white [&_a:hover]:text-white">
                <a
                  href=""
                  className=" bg-[#00aced] hover:bg-[#31BBEF] py-2 px-2.5 rounded"
                >
                  <TwitterIcon fontSize="small" />
                </a>
                <a
                  href=""
                  className="bg-[#bc2a8d] hover:bg-[#C753A2] py-2 px-2.5 rounded"
                >
                  <InstagramIcon fontSize="small" />
                </a>
                <a
                  href=""
                  className="bg-[#419fd9] hover:bg-[#65B0DF] py-2 px-2.5 rounded"
                >
                  <TelegramIcon fontSize="small" />
                </a>
                <a
                  href=""
                  className="bg-[#f26522] hover:bg-[#F3824C] py-2 px-2.5 rounded"
                >
                  <RssFeedIcon fontSize="small" />
                </a>
              </div>
            </div>
            <div>
              <h1 className="font-IRANSans text-xl mb-4">
                هم اکنون عضو خبرنامه ما شوید
              </h1>
              <div className="flex">
                <input
                  type="text"
                  className="w-full focus:outline-none rounded-r-md border pr-4 placeholder:text-sm"
                  placeholder="آدرس ایمیل شما ..."
                />
                <button className="text-white text-sm bg-primaryBlue rounded-l-md px-4 py-3 hover:bg-zinc-800 transition duration-300">
                  اشتراک!
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="px-24 py-8">
        <div className="flex justify-between items-center">
          <p>
            ارائه شده در وبسایت <a href="">راست‌چین</a>
          </p>
          <a href="">
            <img src="/images/payment.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
