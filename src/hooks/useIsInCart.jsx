import React from 'react'
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useIsInCart(productId, userInfos) {
    return useQuery({
        queryKey: ["IsInCart"],
        queryFn: () =>
          fetch(`${baseURL}/userCartProducts?productId=${productId}`).then(
            (res) =>
              res.json().then((data) => {
                if (data[0].userId === userInfos) {
                  return data[0];
                } else {
                  return false;
                }
              })
          ),
      });
}

export default useIsInCart