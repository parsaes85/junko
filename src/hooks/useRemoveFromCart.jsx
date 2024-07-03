import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["removeFromCart"],
    mutationFn: (productId) =>
      fetch(`${baseURL}/userCartProducts/${productId}`, {
        method: "DELETE",
      }),
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries();
    },
  });
}

export default useRemoveFromCart;
