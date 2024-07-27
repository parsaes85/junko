import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RightSide from "../../components/BlogPage/RightSide/RightSide";
import LeftSide from "../../components/BlogPage/LeftSide/LeftSide";
import LeftSidePagination from "../../components/ShopPage/LeftSidePagination/LeftSidePagination";
import useGetBlogs from "../../hooks/useGetBlogs";
import { useSearchParams } from "react-router-dom";

function Blog() {
  const { data: blogs } = useGetBlogs("allBlogs", "");

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentItems, setCurrentItems] = useState([]);
  const [shownBlogs, setShownBlogs] = useState([]);
  const [filteredBlogsState, setFilteredBlogsState] = useState([]);

  useEffect(() => {
    setFilteredBlogsState(blogs);
    let blogSearchParam = searchParams.get("blogSearch");

    if (blogSearchParam) {
      let filteredBlogs = blogs?.filter((blog) =>
        blog.title.includes(blogSearchParam)
      );
      setShownBlogs(filteredBlogs)
      setFilteredBlogsState(filteredBlogs)
    } else {
      setShownBlogs(blogs)
      setFilteredBlogsState(blogs)
    }
  }, [searchParams, blogs]);

  return (
    <>
      <Breadcrumb page="بلاگ" />

      <main className="flex flex-col lg:flex-row gap-8 px-4 xs:px-24 mb-16">
        <RightSide currentItems={currentItems} />
        <LeftSide />
      </main>

      <div className="px-4 xs:px-24">
        <LeftSidePagination
          shownProducts={shownBlogs}
          setCurrentItems={setCurrentItems}
          itemsPerPage={6}
        />
      </div>
    </>
  );
}

export default Blog;
