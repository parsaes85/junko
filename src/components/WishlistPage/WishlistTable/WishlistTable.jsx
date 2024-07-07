import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

import useRemoveFromFavorites from "../../../hooks/useRemoveFromFavorites";
import useAddToCart from "../../../hooks/useAddToCart";

function WishlistTable() {
  const { userInfos, isLoggedIn } = useSelector((state) => state.auth);
  const favoriteProducts = useSelector((state) => state.favoriteProducts);
  const cartProducts = useSelector((state) => state.cartProducts);

  const { mutate: removeFromFavorites } = useRemoveFromFavorites();
  const { mutate: addToCart } = useAddToCart();

  const addToCartHandler = (productInfos) => {
    addToCart({
      productId: productInfos.productId,
      userId: productInfos.userId,
      count: 1,
      price: productInfos.product.price,
    });
  };

  const isInCart = (productInfos) =>
    cartProducts.products.some(
      (product) =>
        product.productId == productInfos.productId &&
        product.userId == productInfos.userId
    );

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
              <th>وضعیت انبار</th>
              <th>افزودن به سبد</th>
            </tr>
          </thead>
          <tbody>
            {favoriteProducts?.products.map((product) => (
              <tr>
                <td>
                  <span
                    className="cursor-pointer hover:text-primaryBlue transition duration-300"
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    <CloseIcon fontSize="" />
                  </span>
                </td>
                <td>
                  <Link to={`/product-details/${product.productId}`}>
                    <img
                      src={product.product.images[0]}
                      alt=""
                      className="w-28 mx-auto"
                    />
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/product-details/${product.productId}`}
                    className="text-[15px] hover:text-primaryBlue transition duration-300"
                  >
                    {product.product.name}
                  </Link>
                </td>
                <td>{product.product.price.toLocaleString("fa")} تومان</td>
                <td>
                  {product.product.isAvailable
                    ? "موجود در انبار"
                    : "ناموجود در انبار"}
                </td>
                <td>
                  <button
                    className={`${
                      isInCart(product) ? "bg-zinc-800" : "bg-primaryBlue"
                    } text-white py-3 px-5 text-[13px] rounded`}
                    disabled={isInCart(product)}
                    onClick={() => addToCartHandler(product)}
                  >
                    {isInCart(product) ? "موجود در سبد" : "افزودن به سبد"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default WishlistTable;
