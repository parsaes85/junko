import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { baseURL } from "../data/variables";
import { login } from "../Redux/store/authSlice";

function useGetMe() {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["getMe"],
    mutationFn: (userToken) =>
      fetch(`${baseURL}/users?token=${userToken}`).then((res) => res.json()),
    onSuccess: (res, data) => {
      if (res.length) {
        dispatch(
          login({
            userInfos: res[0],
            isLoggedIn: true,
          })
        );
      } else {
        dispatch(
          login({
            userInfos: {},
            isLoggedIn: false,
          })
        );
      }
    },
  });
}

export default useGetMe;
