import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import WishlistTable from "../../components/WishlistPage/WishlistTable/WishlistTable";
import ShareBox from "../../components/WishlistPage/ShareBox/ShareBox";

import { useSelector } from "react-redux";

function Wishlist() {
  const userInfos = useSelector((state) => state.auth.userInfos)

  console.log(userInfos)
  return (
    <>
      <Breadcrumb page="لیست علاقه مندی‌ها" />
      <WishlistTable />
      <ShareBox />
    </>
  );
}

export default Wishlist;