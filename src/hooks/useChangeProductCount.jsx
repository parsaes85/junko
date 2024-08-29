import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";
import useGetCartProducts from "./useGetCartProducts";

function useChangeProductCount() {
  const queryClient = useQueryClient();
  const { mutate } = useGetCartProducts();

  return useMutation({
    mutationKey: ["changeProductCount"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userCartProducts/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.newInfos),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
      mutate()
    },
  });
}

export default useChangeProductCount;
