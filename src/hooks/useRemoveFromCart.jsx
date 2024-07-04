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
    onSuccess: (res, productId) => {
      const cartProducts = queryClient.getQueriesData({
        queryKey: ["cartProducts"],
      })[0][1]
      const filteredCartProduct = cartProducts.filter(product => product.id !== productId)
      console.log(cartProducts);
      console.log(filteredCartProduct)
      queryClient.setQueriesData(['cartProducts'], filteredCartProduct)
    },
  });
}

export default useRemoveFromCart;
