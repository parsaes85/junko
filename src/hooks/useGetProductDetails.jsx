import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { baseURL } from "../data/variables";

function useGetProductDetails(productID) {
  return useQuery({
    queryKey: ["productDetails", productID],
    queryFn: () => fetch(`${baseURL}/products/${productID}?_embed=category`).then(res => res.json())
  })
}

export default useGetProductDetails