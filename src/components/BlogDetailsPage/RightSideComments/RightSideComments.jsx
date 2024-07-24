import React from "react";
import RightSideCommentBox from "../RightSideCommentBox/RightSideCommentBox";
import useGetBlogComments from "../../../hooks/useGetBlogComments";

function RightSideComments(props) {
  const { data: blogComments } = useGetBlogComments(props.id);
  console.log(blogComments);
  return (
    <div className="mb-14">
      {!blogComments?.length ? (
        <h1 className="text-[17px] md:text-xl font-IRANSans tracking-tighter mb-6">
          هیچ نقد و بررسی برای این بلاگ ثبت نشده است
        </h1>
      ) : (
        <div>
          <div className="mb-4">
            <h1 className="text-xl font-IRANSans">
              {blogComments?.length.toLocaleString("fa")} دیدگاه
            </h1>
          </div>
          <div className="space-y-8">
            {blogComments?.map((comment) => (
              <RightSideCommentBox key={comment.id} {...comment} />
            ))}
            {/* <div className="w-[95%] mr-auto space-y-6 mt-6">
                        <RightSideCommentBox />
                      </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default RightSideComments;
