import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetch(`${baseURL}/blogs`).then((res) => res.json()),
  });
}

export default useGetBlogs;
