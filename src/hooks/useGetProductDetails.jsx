import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { baseURL } from "../data/variables";

function useGetProductDetails(productID) {
  return useQuery({
    queryKey: ["productDetails", productID],
    queryFn: () => fetch(`${baseURL}/products/${productID}`).then(res => res.json())
  })
}

export default useGetProductDetails