import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "react-router-dom";

function ContactForm() {
  return (
    <section className="px-4 xs:px-24 mb-16">
      <div className="flex flex-col md:flex-row items-start gap-x-8 gap-y-16">
        <div className="flex-1">
          <h1 className="text-2xl font-IRANSans tracking-tighter">
            تماس با ما
          </h1>
          <div className="mt-4">
            <div className="border-b py-4">
              <p className="text-justify text-[17px] leading-7">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی
              </p>
            </div>
            <div className="border-b py-4 flex gap-4">
              <span>
                <LocationOnIcon fontSize="small" />
              </span>
              <p>
                تبریز، چهارراه آبرسان، فلکه دانشگاه، برج بلور، طبقه ۶۷۸، واحد ۸۵
              </p>
            </div>
            <div className="border-b py-4 flex gap-4">
              <span>
                <LocalPhoneIcon fontSize="small" />
              </span>
              <p>۷۸۹ ۴۵۶ ۱۲۳(۹۸)+ , ۷۸۹ ۴۵۶ ۱۲۳(۹۸)+</p>
            </div>
            <div className="py-4 flex gap-4">
              <span>
                <MailOutlineIcon fontSize="small" />
              </span>
              <Link className="hover:text-primaryBlue transition duration-300">
                info@sample.com
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-IRANSans tracking-tighter">
            با ما در میان بگذارید
          </h1>
          <form className="mt-8 space-y-7">
            <div>
              <label htmlFor="name" className="text-[17px]">نام شما (الزامی)</label>
              <input type="text" id="name" placeholder="نام" className="w-full rounded-sm mt-2 outline-none border block py-2 px-6" />
            </div>
            <div>
              <label htmlFor="email" className="text-[17px]">ایمیل شما (الزامی)</label>
              <input type="text" id="email" placeholder="ایمیل" className="w-full rounded-sm mt-2 outline-none border block py-2 px-6" />
            </div>
            <div>
              <label htmlFor="category" className="text-[17px]">موضوع</label>
              <input type="text" id="category" placeholder="موضوع" className="w-full rounded-sm mt-2 outline-none border block py-2 px-6" />
            </div>
            <div>
              <label htmlFor="category" className="text-[17px]">پیام شما</label>
              <textarea type="text" rows="8" id="category" placeholder="پیام" className="w-full rounded-sm mt-2 outline-none border block py-2 px-6 resize-none" />
            </div>
            <button className="text-white bg-zinc-800 text-lg py-2 px-7 rounded hover:bg-primaryBlue transition duration-300">ارسال</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
