import React, { memo } from "react";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ProductCommentBox = memo(function ProductCommentBox(props) {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <img src="/images/comment2.jpg" alt="" />
        </div>
        <div className="w-full border p-3 xs:p-4 space-y-4 relative after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-t after:border-r after:-right-1.5 after:top-2 after:rotate-45">
          <div className="flex items-center justify-between">
            <div className="tracking-tighter flex gap-1.5">
              <span>{props.user.username}</span> <span>- ۱۸ آذر ۱۴۰۲</span>
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
      {props.answers.length
        ? props.answers.map((answer) => (
            <div className="flex gap-4 mt-2 mr-10">
              <div>
                <img src="/images/comment2.jpg" alt="" />
              </div>
              <div className="w-full border p-3 xs:p-4 space-y-4 relative after:absolute after:w-2.5 after:h-2.5 after:bg-white after:border-t after:border-r after:-right-1.5 after:top-2 after:rotate-45">
                <div className="flex items-center justify-between">
                  <div className="tracking-tighter flex gap-1.5">
                    <span>{answer.username}</span> <span>- ۱۸ آذر ۱۴۰۲</span>
                  </div>
                  <div className="text-primaryBlue text-sm flex">
                    {answer.score &&
                      Array(5 - answer.score)
                        .fill(1)
                        .map((start, index) => (
                          <StarBorderIcon key={index} fontSize="" />
                        ))}
                    {Array(answer.score)
                      .fill(1)
                      .map((start, index) => (
                        <StarIcon key={index} fontSize="" />
                      ))}
                  </div>
                </div>
                <p className="text-[15px]">{answer.body}</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
});

export default ProductCommentBox;
