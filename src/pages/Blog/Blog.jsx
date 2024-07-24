import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RightSide from "../../components/BlogPage/RightSide/RightSide";
import LeftSide from "../../components/BlogPage/LeftSide/LeftSide";
import LeftSidePagination from "../../components/ShopPage/LeftSidePagination/LeftSidePagination";
import useGetBlogs from "../../hooks/useGetBlogs";

function Blog() {
  const [currentItems, setCurrentItems] = useState([])
  const { data: blogs } = useGetBlogs();

  return (
    <>
      <Breadcrumb page="بلاگ" />

      <main className="flex flex-col lg:flex-row gap-8 px-4 xs:px-24 mb-16">
        <RightSide currentItems={currentItems} />
        <LeftSide />
      </main>

      <div className="px-4 xs:px-24">
        <LeftSidePagination shownProducts={blogs} setCurrentItems={setCurrentItems} itemsPerPage={6}/>
      </div>
    </>
  );
}

export default Blog;
