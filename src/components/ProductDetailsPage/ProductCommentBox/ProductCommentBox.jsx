import React from "react";

import StarIcon from "@mui/icons-material/Star";

function ProductCommentBox() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="/images/comment2.jpg" alt="" />
      </div>
      <div className="w-full border p-4 space-y-4 relative after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-t after:border-r after:-right-1.5 after:top-2 after:rotate-45">
        <div className="flex items-center justify-between">
          <div className="tracking-tighter">مدیر - ۱۲ آذر ۱۳۹۸</div>
          <div className="text-primaryBlue text-sm">
            <StarIcon fontSize="" />
            <StarIcon fontSize="" />
            <StarIcon fontSize="" />
            <StarIcon fontSize="" />
            <StarIcon fontSize="" />
          </div>
        </div>
        <p className="text-[15px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
    </div>
  );
}

export default ProductCommentBox;
