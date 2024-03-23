import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductMainDetails from "../../components/ProductDetailsComponents/ProductMainDetails/ProductMainDetails";

function ProductDetails() {
  return (
    <>
      <Breadcrumb page="جزئیات محصول" />
      <ProductMainDetails />
    </>
  );
}

export default ProductDetails;
