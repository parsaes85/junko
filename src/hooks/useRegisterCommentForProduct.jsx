import React from "react";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

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

function useRegisterCommentForProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["registerCommentForProduct"],
    mutationFn: (data) =>
      fetch(`${baseURL}/commentss`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    onSuccess: (res, data) => {
      queryClient.invalidateQueries({
        queryKey: ["productComments", data.productId],
      });
      Toast.fire({
        icon: "success",
        title: "کامنت با موفقیت ثبت شد",
      });
    },
    onError: () => {
      Toast.fire({
        icon: "error",
        title: "کامنت با موفقیت ثبت نشد",
      });
    },
  });
}

export default useRegisterCommentForProduct;
