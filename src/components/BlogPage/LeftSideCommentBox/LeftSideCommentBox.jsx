import React from "react";
import { Link } from "react-router-dom";

function LeftSideCommentBox() {
  return (
    <div className="flex gap-2 items-center border-b py-4">
      <div>
        <img src="/images/comment2.png" alt="" className="rounded-full" />
      </div>
      <div>
        <p className="text-sm">
          <Link to="" className="text-primaryBlue">
            مدیر
          </Link>{" "}
          میگوید: <Link to="" className="text-base hover:text-primaryBlue transition duration-300">لورم ایپسوم متن ساختگی</Link>
        </p>
      </div>
    </div>
  );
}

export default LeftSideCommentBox;
