import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";
import useGetFavoriteProducts from "./useGetFavoriteProducts";

function useAddToFavorites() {
  const queryClient = useQueryClient()
  const { data } = useGetFavoriteProducts();
  
  return useMutation({
    mutationKey: ["addToFavorites"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userFavoriteProducts`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  });
}

export default useAddToFavorites;
