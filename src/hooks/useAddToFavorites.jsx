import React from "react";
import { useMutation } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useAddToFavorites() {
  return useMutation({
    mutationKey: ["addToFavorites"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userFavoriteProducts`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(data),
      }),
    onSuccess: (res) => {
      console.log(res);
    },
  });
}

export default useAddToFavorites;
