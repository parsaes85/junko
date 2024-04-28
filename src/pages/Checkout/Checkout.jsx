import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import DiscountCodeBox from "../../components/CheckoutPage/DiscountCodeBox/DiscountCodeBox";
import CheckoutProductsForms from "../../components/CheckoutPage/CheckoutProductsForms/CheckoutProductsForms";

function Checkout() {
  return (
    <>
      <Breadcrumb page="پرداخت" />
      <DiscountCodeBox />
      <CheckoutProductsForms />
    </>
  );
}

export default Checkout;
