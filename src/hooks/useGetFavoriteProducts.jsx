import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../data/variables";
import { setFavoriteProducts } from "../Redux/store/favoriteProductsSlice";

function useGetFavoriteProducts() {
  const { userInfos } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["favoriteProducts"],
    queryFn: () =>
      fetch(`${baseURL}/userFavoriteProducts?userId=${userInfos.id}&_embed=product`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setFavoriteProducts(data))
          return data
        }),
  });
}

export default useGetFavoriteProducts;
