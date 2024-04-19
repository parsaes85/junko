import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CartTable from "../../components/CartPage/CartTable/CartTable";
import TotalCartPrice from "../../components/CartPage/TotalCartPrice/TotalCartPrice";

function Cart() {
  return (
    <>
      <Breadcrumb page="سبد خرید" />
      <CartTable />
      <TotalCartPrice />
    </>
  );
}

export default Cart;