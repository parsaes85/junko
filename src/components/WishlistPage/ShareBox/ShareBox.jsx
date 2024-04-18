import React from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function ShareBox() {
  return (
    <section className="px-4 xs:px-24 mb-16">
      <div className="border py-5 text-center space-y-2">
        <h1 className="font-IRANSans text-lg tracking-tight">اشتراک گذاری در:</h1>
        <div className="flex gap-4 justify-center">
          <span className="text-gray-900 hover:text-primaryBlue transition duration-300 cursor-pointer text-lg">
            <RssFeedIcon fontSize="" />
          </span>
          <span className="text-gray-900 hover:text-primaryBlue transition duration-300 cursor-pointer text-lg">
            <LinkedInIcon fontSize="" />
          </span>
          <span className="text-gray-900 hover:text-primaryBlue transition duration-300 cursor-pointer text-lg">
            <TelegramIcon fontSize="" />
          </span>
          <span className="text-gray-900 hover:text-primaryBlue transition duration-300 cursor-pointer text-lg">
            <InstagramIcon fontSize="" />
          </span>
          <span className="text-gray-900 hover:text-primaryBlue transition duration-300 cursor-pointer text-lg">
            <TwitterIcon fontSize="" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ShareBox;
