import React from "react";
import { useMutation } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useAddToCart() {
  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userCartProducts`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(data),
      }),
    onSuccess: (res) => {
      console.log(res);
    },
  });
}

export default useAddToCart;
