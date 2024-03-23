import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RightSide from "../../components/ShopPage/RightSide/RightSide";
import LeftSide from "../../components/ShopPage/LeftSide/LeftSide";

function Shop() {
  return (
    <>
      <Breadcrumb page="فروشگاه" />

      <main className="flex flex-col-reverse lg:flex-row gap-8 px-4 xs:px-24 mb-16">
        <RightSide />
        <LeftSide />
      </main>
    </>
  );
}

export default Shop;
