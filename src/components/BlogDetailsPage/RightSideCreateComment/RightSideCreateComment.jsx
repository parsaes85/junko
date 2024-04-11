import React from "react";

function RightSideCreateComment() {
  return (
    <div>
      <div className="space-y-4 mb-4">
        <h1 className="text-xl font-IRANSans">یک پاسخ ارسال کنید</h1>
        <p className="text-[15px] md:text-base">ایمیل شما منتشر نخواهد شد. فیلد های الزامی با * مشخص شده اند</p>
      </div>
      <form className="[&_label]:mb-2">
        <div>
          <label htmlFor="comment" className="block">
            دیدگاه
          </label>
          <textarea
            name=""
            id="comment"
            rows="6"
            className="border w-full text-sm p-2 resize-none focus:outline-none"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2 md:mt-4">
          <div>
            <label htmlFor="name" className="block">
              نام
            </label>
            <input
              type="text"
              id="name"
              className="border w-full text-sm p-2 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              ایمیل
            </label>
            <input
              type="text"
              id="email"
              className="border w-full text-sm p-2 focus:outline-none"
            />
          </div>
        </div>
        <input
          type="submit"
          value="ارسال دیدگاه"
          className="text-white bg-zinc-800 px-5 py-3 rounded text-sm mt-4 cursor-pointer transition duration-300 hover:bg-primaryBlue"
        />
      </form>
    </div>
  );
}

export default RightSideCreateComment;
