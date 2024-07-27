import React, { useState } from "react";
import { useSelector } from "react-redux";

import useRegisterCommentForBlog from "../../../hooks/useRegisterCommentForBlog";

function RightSideCreateComment(props) {
  const [blogCommentBody, setBlogCommentBody] = useState("");
  const { userInfos, isLoggedIn } = useSelector((state) => state.auth);

  const { mutate: registerCommentForBlog } = useRegisterCommentForBlog();

  const registerCommentHandler = (event) => {
    event.preventDefault();
    if (blogCommentBody) {
      registerCommentForBlog({
        blogId: props.id,
        userId: userInfos.id,
        body: blogCommentBody,
        answers: [],
      });
    }

    setBlogCommentBody("");
  };

  return isLoggedIn ? (
    <div>
      <div className="space-y-4 mb-4">
        <h1 className="text-xl font-IRANSans">یک پاسخ ارسال کنید</h1>
        <p className="text-[15px] md:text-base">
          ایمیل شما منتشر نخواهد شد. فیلد های الزامی با * مشخص شده اند
        </p>
      </div>
      <form className="[&_label]:mb-2">
        <div>
          <label htmlFor="comment" className="block">
            دیدگاه
          </label>
          <textarea
            name=""
            id="comment"
            rows="6"
            className="border w-full text-sm p-2 resize-none focus:outline-none"
            onChange={(e) =>
              setBlogCommentBody(e.target.value)
            }
            value={blogCommentBody}
          ></textarea>
        </div>
        <input
          type="submit"
          value="ارسال دیدگاه"
          className="text-white bg-zinc-800 px-5 py-3 rounded text-sm mt-4 cursor-pointer transition duration-300 hover:bg-primaryBlue"
          onClick={registerCommentHandler}
        />
      </form>
    </div>
  ) : (
    <div>
      <h1 className="text-[17px] md:text-xl font-IRANSans tracking-tighter mb-6">
        برای ثبت نظر ابتدا وارد شوید
      </h1>
    </div>
  );
}

export default RightSideCreateComment;
