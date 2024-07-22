import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

function RightSideMainDetails(props) {
  console.log(props)
  return (
    <div className="border-b pb-6 mb-14">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl xl:text-[40px]">{props.title}</h1>
        <div className="mt-4 mb-7">
          ارسال توسط :{" "}
          <Link to="" className="text-primaryBlue text-sm tracking-tight">
            مدیر
          </Link>{" "}
          / در :‌{" "}
          <Link to="" className="text-primaryBlue text-sm tracking-tight">
            ۱۰ آذر ۱۳۹۸
          </Link>{" "}
          / در :{" "}
          <Link to="" className="text-primaryBlue text-sm tracking-tight">
            شرکت, عکس, مسافرت
          </Link>
        </div>
        <img src={props.cover} alt="" />
      </div>
      <div className="space-y-8 [&_p]:leading-7">
        <div dangerouslySetInnerHTML={{__html: props.body}}></div>
        <div className="bg-gray-100 px-10 py-9 border-r-4 border-r-primaryBlue md:mr-8 text-[17px]">
          <p className="italic">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
          </p>
        </div>
        <div dangerouslySetInnerHTML={{__html: props.body}}></div>
        <div className="flex flex-col gap-y-2 md:flex-row md:items-center justify-between">
          <div className="flex gap-1 items-center">
            <p>دسته بندی: </p>
            <div>
              <Link className="hover:text-primaryBlue transition">{props.category.title}</Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <p>اشتراک گذاری این مطالب: </p>
            <div className="flex gap-2 text-sm [&>div]:bg-gray-100 [&>div]:px-2 [&>div]:py-1 [&>div]:rounded-full [&>div]:cursor-pointer [&>div]:transition [&>div]:duration-300 [&>div:hover]:bg-primaryBlue [&>div:hover]:text-white ">
                <div><FacebookIcon fontSize="" /></div>
                <div><TwitterIcon fontSize="" /></div>
                <div><PinterestIcon fontSize="" /></div>
                <div><LinkedInIcon fontSize="" /></div>
                <div><GoogleIcon fontSize="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideMainDetails;
