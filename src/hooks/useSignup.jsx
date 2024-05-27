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

function useSignup(emptyInputsValue) {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data) =>
      fetch("http://localhost:3000/users", {
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
      }),
    onSuccess: () => {
      emptyInputsValue();
      navigate("/");
      Toast.fire({
        icon: "success",
        title: "ثبت نام با موفقیت انجام شد",
      });
    },
  });
}

export default useSignup;
