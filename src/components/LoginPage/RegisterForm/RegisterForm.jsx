import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Input from "../../Input/Input";
import usePostUser from "../../../hooks/usePostUser";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      fullname: "asfdasdfadf",
      username: "asdfasdfasdf",
      email: "asdfasfsaf@gmail.com",
      password: "343423423424",
      phone: "2342342342342",
    },
  });
  const { mutate: addNewUser } = usePostUser(emptyInputsValue);

  function emptyInputsValue() {
    setValue("fullname", "");
    setValue("username", "");
    setValue("email", "");
    setValue("password", "");
    setValue("phone", "");
  }

  const onSubmit = (data) => addNewUser(data);

  return (
    <div className="flex-1">
      <h1 className="text-2xl md:text-[28px] pb-3 md:pb-5 font-IRANSans">
        ثبت نام
      </h1>
      <form
        className="border px-5 py-6 rounded space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="fullname" className="block mb-2">
            نام و نام خانوادگی *
          </label>
          <Input
            type="text"
            id="fullname"
            register={{
              ...register("fullname", { required: true, minLength: 6 }),
            }}
            validations={[
              errors.fullname?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  نام و نام خانوادگی اجباری است
                </p>
              ),
              errors.fullname?.type === "minLength" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  نام و نام خانوادگی میبایست بیشتر از ۶ کاراکتر باشد.
                </p>
              ),
            ]}
          />
        </div>
        <div>
          <label htmlFor="username" className="block mb-2">
            نام کاربری *
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
                  نام کاربری اجباری است
                </p>
              ),
              errors.username?.type === "minLength" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  نام کاربری میبایست بیشتر از ۸ کاراکتر باشد.
                </p>
              ),
            ]}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            آدرس ایمیل *
          </label>
          <Input
            type="email"
            id="email"
            register={{
              ...register("email", { required: true }),
            }}
            validations={[
              errors.email?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  ایمیل اجباری است
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
            type="password"
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
        <div>
          <label htmlFor="phone" className="block mb-2">
            شماره تلفن *
          </label>
          <Input
            type="text"
            id="phone"
            register={{
              ...register("phone", { required: true, minLength: 10 }),
            }}
            validations={[
              errors.phone?.type === "required" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  شماره تلفن اجباری است
                </p>
              ),
              errors.phone?.type === "minLength" && (
                <p role="alert" className="text-xs text-red-600 mt-1">
                  شماره تلفن میبایست بیشتر از ۱۰ کاراکتر باشد.
                </p>
              ),
            ]}
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
