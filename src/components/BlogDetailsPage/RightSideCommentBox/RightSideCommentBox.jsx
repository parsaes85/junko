import React from "react";

function RightSideCommentBox(props) {
  return (
    <div className="flex gap-4">
      <div>
        <img src="/images/comment2.jpg" alt="" />
      </div>
      <div className="border w-full p-3 xs:p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-[15px]">{props.user.username}</h3>
            <p className="text-gray-500 tracking-tighter text-[13px]">
              ۱۶ آبان ۱۴۰۲ ساعت ۱:۳۸ صبح
            </p>
          </div>
          <button className="bg-zinc-800 text-white px-3 py-0.5 rounded text-[15px]">
            پاسخ
          </button>
        </div>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default RightSideCommentBox;
