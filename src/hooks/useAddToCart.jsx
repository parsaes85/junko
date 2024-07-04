import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useAddToCart() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userCartProducts`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(data),
      }),
    onSuccess: (res) => {
      queryClient.invalidateQueries()
    },
  });
}

export default useAddToCart;
