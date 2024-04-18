import React, { useEffect, useState } from "react";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function ScrollToTopBtn() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(scrollY);
  };

  const scrollToTopHandler = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${scrollPosition > 250 ? "bottom-3" : "-bottom-96"} transition-all duration-300 left-3 cursor-pointer z-[99]`}
      onClick={scrollToTopHandler}
    >
      <div className="bg-primaryBlue px-2 py-[7px] rounded-full text-white">
        <KeyboardDoubleArrowUpIcon />
      </div>
    </div>
  );
}

export default ScrollToTopBtn;
