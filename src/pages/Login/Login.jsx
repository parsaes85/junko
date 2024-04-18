import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import LoginFrom from "../../components/LoginPage/LoginFrom/LoginFrom";
import RegisterForm from "../../components/LoginPage/RegisterForm/RegisterForm";

function Login() {
  return (
    <>
      <Breadcrumb page="ورود" />

      <main className="flex flex-col md:flex-row gap-8 gap-y-12 px-4 xs:px-24 mb-16">
        <LoginFrom />
        <RegisterForm />
      </main>
    </>
  );
}

export default Login;
