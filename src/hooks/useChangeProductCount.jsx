import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useChangeProductCount() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ["changeProductCount"],
    mutationFn: (data) =>
      fetch(`${baseURL}/userCartProducts/${data.id}`, {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify(data.newInfos),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export default useChangeProductCount;
