import React from "react";
import { useParams } from "react-router-dom";

import RightSideMainDetails from "../RightSideMainDetails/RightSideMainDetails";
import RightSideRelatedBlogs from "../RightSideRelatedBlogs/RightSideRelatedBlogs";
import RightSideComments from "../RightSideComments/RightSideComments";
import RightSideCreateComment from "../RightSideCreateComment/RightSideCreateComment";
import useGetBlogDetails from "../../../hooks/useGetBlogDetails";

function RightSide() {
  const { blogShortName } = useParams();
  const { data: blogDetails } = useGetBlogDetails(blogShortName);

  return (
    <div className="flex-[3.7]">
      {blogDetails && <RightSideMainDetails {...blogDetails[0]} />}
      {blogDetails && <RightSideRelatedBlogs {...blogDetails[0]} />}
      {blogDetails && <RightSideComments {...blogDetails[0]} />}
      {blogDetails && <RightSideCreateComment {...blogDetails[0]} />}
    </div>
  );
}

export default RightSide;
