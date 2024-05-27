import React from "react";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function useLogin(emptyInputsValue) {
  return useMutation({
    mutationFn: (data) =>
      fetch(`http://localhost:3000/users?email=${data.email}`).then((res) =>
        res.json()
      ),
    onSuccess: (res, data) => {
      if (res[0].password === data.password) {
        //   emptyInputsValue();
        //   navigate("/");
        Toast.fire({
          icon: "success",
          title: "ورود با موفقیت انجام شد",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "ایمیل یا رمز عبور اشتباه است!",
        });
      }
    },
  });
}

export default useLogin;
