import React from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductMainDetails from "../../components/ProductDetailsPage/ProductMainDetails/ProductMainDetails";
import ProductComments from "../../components/ProductDetailsPage/ProductComments/ProductComments";
import RelatedProducts from "../../components/ProductDetailsPage/RelatedProducts/RelatedProducts";
import BestSellingProducts from "../../components/ProductDetailsPage/BestSellingProducts/BestSellingProducts";
import useGetProductDetails from "../../hooks/useGetProductDetails";

function ProductDetails() {
  const {productID} = useParams()
  const {data: productDetails} = useGetProductDetails(productID)
  
  return (
    <>
      <Breadcrumb page="جزئیات محصول" />
      <ProductMainDetails {...productDetails}/>
      <ProductComments />
      {/* <RelatedProducts />
      <BestSellingProducts /> */}
    </>
  );
}

export default ProductDetails;
