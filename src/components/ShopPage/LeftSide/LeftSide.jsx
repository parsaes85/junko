import React, { useState } from "react";

import LeftSideHeader from "../LeftSideHeader/LeftSideHeader";
import LeftSideColProductBox from "../LeftSideColProductBox/LeftSideColProductBox";
import LeftSideRowProductBox from "../LeftSideRowProductBox/LeftSideRowProductBox";
import LeftSidePagination from "../LeftSidePagination/LeftSidePagination";

function LeftSide({ shownProducts }) {
  const [productsShownType, setProductsShownType] = useState("col-4");
  const [currentItems, setCurrentItems] = useState([])

  return (
    <div className="flex-[4]">
      <LeftSideHeader
        setProductsShownType={setProductsShownType}
        productsShownType={productsShownType}
        shownProducts={shownProducts}
      />

      <div
        className={`grid ${
          productsShownType === "row"
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-1"
            : productsShownType === "col-3"
            ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
        }  gap-4 my-4`}
      >
        {productsShownType === "row" ? (
          <>
            {currentItems?.map((product) => (
              <LeftSideRowProductBox key={product.id} {...product} />
            ))}
          </>
        ) : productsShownType === "col-3" ? (
          <>
            {currentItems?.map((product) => (
              <LeftSideColProductBox key={product.id} {...product} />
            ))}
          </>
        ) : (
          <>
            {currentItems?.map((product) => (
              <LeftSideColProductBox key={product.id} {...product} />
            ))}
          </>
        )}
      </div>

      <LeftSidePagination shownProducts={shownProducts} setCurrentItems={setCurrentItems} />
    </div>
  );
}

export default LeftSide;
