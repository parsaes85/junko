import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import WishlistTable from "../../components/WishlistPage/WishlistTable/WishlistTable";

import { useSelector } from "react-redux";

function Wishlist() {
  return (
    <>
      <Breadcrumb page="لیست علاقه مندی‌ها" />
      <WishlistTable />
    </>
  );
}

export default Wishlist;