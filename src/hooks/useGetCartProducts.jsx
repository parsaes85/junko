import React from 'react'
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetCartProducts() {
  return useQuery({
    queryKey: ["cartProducts"],
    queryFn: () =>
      fetch(`${baseURL}/userCartProducts?_embed=product`).then((res) => res.json()),
  });
}

export default useGetCartProducts