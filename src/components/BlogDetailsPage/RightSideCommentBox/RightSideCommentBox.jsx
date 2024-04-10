import React from "react";

function RightSideCommentBox() {
  return (
    <div className="flex gap-4">
      <div>
        <img src="/images/comment2.jpg" alt="" />
      </div>
      <div className="border w-full flex items-start justify-between p-3 xs:p-4">
        <div className="space-y-2">
            <h3 className="text-[15px]">دمو</h3>
            <p className="text-gray-500 tracking-tighter text-[13px]">۱۶ آذر ۱۳۹۸ ساعت ۱:۳۸ صبح</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان</p>
        </div>
        <button className="bg-zinc-800 text-white px-3 py-0.5 rounded text-[15px]">پاسخ</button>
      </div>
    </div>
  );
}

export default RightSideCommentBox;
