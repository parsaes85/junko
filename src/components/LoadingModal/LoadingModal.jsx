import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingModal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "scroll"
    };
  }, []);
  
  return (
    <div className="h-[100vh] w-full fixed flex justify-center items-center right-0 top-0 bg-black bg-opacity-60 z-[99]">
      <div className="absolute px-12 py-4 rounded-md bg-white flex flex-col justify-center items-center gap-4">
        <CircularProgress size={30}/>
        <p className="sm:text-lg text-sm">لطفا منتظر بمانید ...</p>
      </div>
    </div>
  );
}

export default LoadingModal;
