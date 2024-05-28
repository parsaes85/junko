import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetSpecialProducts() {
  return useQuery({
    queryKey: ["specialProducts"],
    queryFn: () =>
      fetch(`${baseURL}/products?isSpecialProduct=1`).then((res) => res.json()),
  });
}

export default useGetSpecialProducts;
