import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { baseURL } from "../data/variables";
import { setFavoriteProducts } from "../Redux/store/favoriteProductsSlice";

function useGetFavoriteProducts() {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["favoriteProducts"],
    queryFn: () =>
      fetch(`${baseURL}/userFavoriteProducts?_embed=product`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setFavoriteProducts(data))
          return data
        }),
  });
}

export default useGetFavoriteProducts;
