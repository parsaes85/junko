import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";
import useGetFavoriteProducts from "./useGetFavoriteProducts";

function useRemoveFromFavorites() {
  const queryClient = useQueryClient();
  const { mutate } = useGetFavoriteProducts();

  return useMutation({
    mutationKey: ["removeFromFavorites"],
    mutationFn: (productId) =>
      fetch(`${baseURL}/userFavoriteProducts/${productId}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      mutate()
    },
  });
}

export default useRemoveFromFavorites;
