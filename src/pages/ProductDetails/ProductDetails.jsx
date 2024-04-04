import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductMainDetails from "../../components/ProductDetailsPage/ProductMainDetails/ProductMainDetails";
import ProductComments from "../../components/ProductDetailsPage/ProductComments/ProductComments";
import RelatedProducts from "../../components/ProductDetailsPage/RelatedProducts/RelatedProducts";
import BestSellingProducts from "../../components/ProductDetailsPage/BestSellingProducts/BestSellingProducts";

function ProductDetails() {
  return (
    <>
      <Breadcrumb page="جزئیات محصول" />
      <ProductMainDetails />
      <ProductComments />
      <RelatedProducts />
      <BestSellingProducts />
    </>
  );
}

export default ProductDetails;
