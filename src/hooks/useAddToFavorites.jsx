import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";
import useGetFavoriteProducts from "./useGetFavoriteProducts";

function useAddToFavorites() {
  const queryClient = useQueryClient();
  const { mutate } = useGetFavoriteProducts();

  return useMutation({
    mutationKey: ["addToFavorites"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userFavoriteProducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      mutate();
    },
  });
}

export default useAddToFavorites;
