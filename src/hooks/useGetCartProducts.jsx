import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { baseURL } from "../data/variables";
import { setCartProducts } from "../Redux/store/cartProductsSlice";

function useGetCartProducts() {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["cartProducts"],
    queryFn: () =>
      fetch(`${baseURL}/userCartProducts?_embed=product`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCartProducts(data));
          return data;
        }),
  });
}

export default useGetCartProducts;
