import React from "react";
import { useSelector } from "react-redux";

import CartTableProductBox from "../CartTableProductBox/CartTableProductBox";

function CartTable() {
  const cartProducts = useSelector((state) => state.cartProducts);

  return (
    <section className="px-4 xs:px-24 mb-16">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[840px] [&_th]:text-center [&_th]:bg-gray-100 [&_th]:border-b-[3px] [&_th]:border-b-primaryBlue [&_th]:py-3 [&_th]:px-6 [&_td]:text-center [&_td]:border">
          <thead>
            <tr>
              <th>حذف</th>
              <th>تصویر</th>
              <th>محصول</th>
              <th>قیمت</th>
              <th>تعداد</th>
              <th>جمع کل</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.products.map((product) => (
              <CartTableProductBox key={product.id} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CartTable;
