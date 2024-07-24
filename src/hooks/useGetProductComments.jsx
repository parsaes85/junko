import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetProductComments(productId) {
  return useQuery({
    queryKey: ["productComments", productId],
    queryFn: () =>
      fetch(`${baseURL}/productComments?_embed=user&productId=${productId}`).then((res) =>
        res.json()
      ),
  });
}

export default useGetProductComments;
