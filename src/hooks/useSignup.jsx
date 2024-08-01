import React from "react";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { baseURL } from "../data/variables";
import { login } from "../Redux/store/authSlice";

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

function useSignup(emptyInputsValue) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data) =>
      fetch(`${baseURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          role: "USER",
          profile: "",
          token: crypto.randomUUID(),
        }),
      }).then((res) => res.json()),
    onSuccess: (res) => {
      localStorage.setItem("userToken", JSON.stringify(res.token));
      dispatch(
        login({
          userInfos: res,
          isLoggedIn: true,
        })
      );
      // emptyInputsValue();
      Toast.fire({
        icon: "success",
        title: "ثبت نام با موفقیت انجام شد",
      });
      navigate("/");
    },
  });
}

export default useSignup;
