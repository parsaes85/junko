import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetBlogComments(blogId) {
  return useQuery({
    queryKey: ["blogComments", blogId],
    queryFn: () =>
      fetch(
        `${baseURL}/blogComments?blogId=${blogId}`
      ).then((res) => res.json()),
  });
}

export default useGetBlogComments;
