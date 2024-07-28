import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RightSide from "../../components/ShopPage/RightSide/RightSide";
import LeftSide from "../../components/ShopPage/LeftSide/LeftSide";
import useGetProducts from "../../hooks/useGetProducts";

function Shop() {
  const { data: products } = useGetProducts("allProducts", "");
  const [searchParams, setSearchParams] = useSearchParams();

  const [filteredProductsState, setFilteredProductsState] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);

  useEffect(() => {
    setFilteredProductsState(products);
    let categorySearchParam = searchParams.get("category");
    let searchSearchParam = searchParams.get("search");

    if (categorySearchParam || categorySearchParam == "") {
      if (searchSearchParam) {
        if (categorySearchParam) {
          let filteredProducts = products
            ?.filter((product) => product.name.includes(searchSearchParam))
            ?.filter((product) => product.category.name == categorySearchParam);

          setShownProducts(filteredProducts);
          setFilteredProductsState(filteredProducts);
        } else {
          let filteredProducts = products?.filter((product) =>
            product.name.includes(searchSearchParam)
          );

          setShownProducts(filteredProducts);
          setFilteredProductsState(filteredProducts);
        }
      } else {
        let filteredProducts = products?.filter(
          (product) => product.category.name == categorySearchParam
        );
        setShownProducts(filteredProducts);
        setFilteredProductsState(filteredProducts);
      }
    } else {
      setShownProducts(products);
    }
  }, [products, searchParams]);

  return (
    <>
      <Breadcrumb page="فروشگاه" />

      <main className="flex flex-col-reverse lg:flex-row gap-8 px-4 xs:px-24 mb-16">
        <RightSide
          filteredProductsState={filteredProductsState}
          setShownProducts={setShownProducts}
          products={products}
        />
        <LeftSide
          shownProducts={shownProducts}
        />
      </main>
    </>
  );
}

export default Shop;
