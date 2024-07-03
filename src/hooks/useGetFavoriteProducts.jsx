import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetFavoriteProducts() {
  return useQuery({
    queryKey: ["favoriteProducts"],
    queryFn: () =>
      fetch(`${baseURL}/userFavoriteProducts`).then((res) => res.json()),
  });
}

export default useGetFavoriteProducts;
