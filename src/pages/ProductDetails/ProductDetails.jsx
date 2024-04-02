import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductMainDetails from "../../components/ProductDetailsPage/ProductMainDetails/ProductMainDetails";
import ProductComments from "../../components/ProductDetailsPage/ProductComments/ProductComments";

function ProductDetails() {
  return (
    <>
      <Breadcrumb page="جزئیات محصول" />
      <ProductMainDetails />
      <ProductComments />
    </>
  );
}

export default ProductDetails;
