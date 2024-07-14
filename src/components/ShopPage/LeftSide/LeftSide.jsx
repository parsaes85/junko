import React, { useEffect, useState } from "react";
import LeftSideHeader from "../LeftSideHeader/LeftSideHeader";
import LeftSideColProductBox from "../LeftSideColProductBox/LeftSideColProductBox";
import LeftSideRowProductBox from "../LeftSideRowProductBox/LeftSideRowProductBox";
import LeftSidePagination from "../LeftSidePagination/LeftSidePagination";
import useGetProducts from "../../../hooks/useGetProducts";

function LeftSide() {
  const { data: products } = useGetProducts("allProducts", "");

  const [productsShownType, setProductsShownType] = useState("col-4");

  return (
    <div className="flex-[4]">
      <LeftSideHeader
        setProductsShownType={setProductsShownType}
        productsShownType={productsShownType}
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
            {products?.map((product) => (
              <LeftSideRowProductBox key={product.id} {...product} />
            ))}
          </>
        ) : productsShownType === "col-3" ? (
          <>
            {products?.map((product) => (
              <LeftSideColProductBox key={product.id} {...product} />
            ))}
          </>
        ) : (
          <>
            {products?.map((product) => (
              <LeftSideColProductBox key={product.id} {...product} />
            ))}
          </>
        )}
      </div>

      <LeftSidePagination />
    </div>
  );
}

export default LeftSide;
