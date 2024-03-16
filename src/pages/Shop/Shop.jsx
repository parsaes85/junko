import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RightSide from "../../components/ShopPage/RightSide/RightSide";
import LeftSide from "../../components/ShopPage/LeftSide/LeftSide";

function Shop() {
  return (
    <>
      {/* Breedcrumb */}
      <section>
        <Breadcrumb page="فروشگاه" />
      </section>

      <main className="flex px-4 xs:px-24 my-16">
        <RightSide />
        <LeftSide />
      </main>
    </>
  );
}

export default Shop;
