import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl md:text-[28px] pb-3 md:pb-5 font-IRANSans">ثبت نام</h1>
      <form className="border px-5 py-6 rounded space-y-5">
        <div>
          <label htmlFor="username" className="block mb-2">
            آدرس ایمیل *
          </label>
          <input
            type="text"
            id="username"
            className="border w-full py-1.5 px-4 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            رمز عبور *
          </label>
          <input
            type="text"
            id="password"
            className="border w-full py-1.5 px-4 focus:outline-none"
          />
        </div>

        <button className="text-white bg-primaryBlue text-[13px] rounded-full py-1.5 px-5 hover:bg-zinc-900 transition duration-300 block mr-auto">
          ثبت نام
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
