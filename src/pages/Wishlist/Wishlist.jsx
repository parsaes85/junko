import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import WishlistTable from "../../components/WishlistPage/WishlistTable/WishlistTable";
import ShareBox from "../../components/WishlistPage/ShareBox/ShareBox";

function Wishlist() {
  return (
    <>
      <Breadcrumb page="لیست علاقه مندی‌ها" />
      <WishlistTable />
      <ShareBox />
    </>
  );
}

export default Wishlist;