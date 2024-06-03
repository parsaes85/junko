import React from "react";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ProductCommentBox(props) {
  console.log(props);
  return (
    <div className="flex gap-4">
      <div>
        <img src="/images/comment2.jpg" alt="" />
      </div>
      <div className="w-full border p-3 xs:p-4 space-y-4 relative after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-t after:border-r after:-right-1.5 after:top-2 after:rotate-45">
        <div className="flex items-center justify-between">
          <div className="tracking-tighter">
            {props.user.username} - ۱۲ آذر ۱۳۹۸
          </div>
          <div className="text-primaryBlue text-sm flex">
            {props.score &&
              Array(5 - props.score)
                .fill(1)
                .map((start, index) => (
                  <StarBorderIcon key={index} fontSize="" />
                ))}
            {Array(props.score)
              .fill(1)
              .map((start, index) => (
                <StarIcon key={index} fontSize="" />
              ))}
          </div>
        </div>
        <p className="text-[15px]">{props.body}</p>
      </div>
    </div>
  );
}

export default ProductCommentBox;
