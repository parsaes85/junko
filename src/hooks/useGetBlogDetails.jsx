import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetBlogDetails(blogShortName) {
  return useQuery({
    queryKey: ["blogDetails", blogShortName],
    queryFn: () =>
      fetch(`${baseURL}/blogs?_embed=category&shortName=${blogShortName}`).then((res) =>
        res.json()
      ),
  });
}

export default useGetBlogDetails;
