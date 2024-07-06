import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";
import useGetCartProducts from "./useGetCartProducts";

function useRemoveFromCart() {
  const queryClient = useQueryClient();
  const { data } = useGetCartProducts();

  return useMutation({
    mutationKey: ["removeFromCart"],
    mutationFn: (productId) =>
      fetch(`${baseURL}/userCartProducts/${productId}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export default useRemoveFromCart;
