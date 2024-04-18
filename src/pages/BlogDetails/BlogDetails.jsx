import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import LeftSide from "../../components/BlogPage/LeftSide/LeftSide";
import RightSide from "../../components/BlogDetailsPage/RightSide/RightSide";

function BlogDetails() {
  return (
    <>
      <Breadcrumb page="جزئیات بلاگ" />

      <main className="flex flex-col lg:flex-row gap-8 px-4 xs:px-24 mb-16">
        <RightSide />
        <LeftSide />
      </main>
    </>
  );
}

export default BlogDetails;