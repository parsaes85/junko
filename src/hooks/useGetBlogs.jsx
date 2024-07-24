import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetBlogs(queryKey, condition) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      fetch(`${baseURL}/blogs?${condition}&_embed=category`).then((res) =>
        res.json()
      ),
  });
}

export default useGetBlogs;
