import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";

function LoginFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex-1">
      <h1 className="text-2xl md:text-[28px] pb-3 md:pb-5 font-IRANSans">
        ورود
      </h1>
      <form
        className="border px-5 py-6 rounded space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="username" className="block mb-2">
            نام کاربری یا ایمیل *
          </label>
          <Input
            type="text"
            id="username"
            register={{
              ...register("username", { required: true, minLength: 8 }),
            }}
            validations={[
              errors.username?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  نام کاربری یا ایمیل اجباری است
                </p>
              ),
              errors.username?.type === "minLength" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  نام کاربری یا ایمیل میبایست بیشتر از ۸ کاراکتر باشد.
                </p>
              ),
            ]}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            رمز عبور *
          </label>
          <Input
            type="text"
            id="password"
            register={{
              ...register("password", { required: true, minLength: 8 }),
            }}
            validations={[
              errors.password?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  رمز عبور اجباری است
                </p>
              ),
              errors.password?.type === "minLength" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  رمز عبور میبایست بیشتر از ۸ کاراکتر باشد.
                </p>
              ),
            ]}
          />
        </div>
        <div className="flex flex-col justify-between items-end gap-y-4 md:flex-row md:items-center">
          <Link className="hover:text-primaryBlue transition duration-300 text-[13px] md:text-sm">
            رمز عبور خود را فراموش کرده اید؟
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">به خاطر سپاری</label>
            </div>
            <button className="text-white bg-primaryBlue text-[13px] rounded-full py-1.5 px-5 hover:bg-zinc-900 transition duration-300">
              ورود
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFrom;
