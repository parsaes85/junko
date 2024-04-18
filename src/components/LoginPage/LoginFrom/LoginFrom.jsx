import React from "react";
import { Link } from "react-router-dom";

function LoginFrom() {
  return (
    <div className="flex-1">
      <h1 className="text-2xl md:text-[28px] pb-3 md:pb-5 font-IRANSans">ورود</h1>
      <form className="border px-5 py-6 rounded space-y-5">
        <div>
          <label htmlFor="username" className="block mb-2">
            نام کاربری یا ایمیل *
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
        <div className="flex flex-col justify-between items-end gap-y-4 md:flex-row md:items-center">
            <Link className="hover:text-primaryBlue transition duration-300 text-[13px] md:text-sm">رمز عبور خود را فراموش کرده اید؟</Link>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">به خاطر سپاری</label>
                </div>
                <button className="text-white bg-primaryBlue text-[13px] rounded-full py-1.5 px-5 hover:bg-zinc-900 transition duration-300">ورود</button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFrom;
