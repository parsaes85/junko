import React, { useEffect } from "react";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function ScrollToTopBtn() {
  const scrollToTopHandler = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed bottom-3 left-3 cursor-pointer"
      onClick={scrollToTopHandler}
    >
      <div className="bg-primaryBlue px-2 py-[7px] rounded-full text-white">
        <KeyboardDoubleArrowUpIcon />
      </div>
    </div>
  );
}

export default ScrollToTopBtn;
