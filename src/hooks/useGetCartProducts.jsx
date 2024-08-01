import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from "../data/variables";
import { setCartProducts } from "../Redux/store/cartProductsSlice";

function useGetCartProducts() {
  const { userInfos } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["cartProducts"],
    mutationFn: () =>
      fetch(`${baseURL}/userCartProducts?userId=${userInfos.id}&_embed=product`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCartProducts(data));
          return data;
        }),
  });
}

export default useGetCartProducts;
