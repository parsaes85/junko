import React from "react";
import { useQuery } from "@tanstack/react-query";

import { baseURL } from "../data/variables";

function useGetAllMenus() {
  return useQuery({
    queryKey: ["menus"],
    queryFn: () => fetch(`${baseURL}/menus`).then((res) => res.json()),
  });
}

export default useGetAllMenus;
