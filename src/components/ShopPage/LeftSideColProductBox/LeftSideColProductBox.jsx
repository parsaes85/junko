import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";

import useAddToFavorites from "../../../hooks/useAddToFavorites";
import useRemoveFromFavorites from "../../../hooks/useRemoveFromFavorites";
import useAddToCart from "../../../hooks/useAddToCart";

function LeftSideColProductBox(props) {
  const { userInfos } = useSelector((state) => state.auth);
  const cartProducts = useSelector((state) => state.cartProducts);
  const favoriteProducts = useSelector((state) => state.favoriteProducts);

  const { mutate: addToFavorites } = useAddToFavorites();
  const { mutate: removeFromFavorites } = useRemoveFromFavorites();
  const { mutate: addToCart } = useAddToCart();

  const isInCart = () =>
    cartProducts.products.some(
      (product) =>
        product.productId == props.id && product.userId == userInfos.id
    );
  const isInFavorite = () =>
    favoriteProducts.products.find(
      (product) =>
        product.productId == props.id && product.userId == userInfos.id
    );

  const addOrRemoveFromFavorites = () => {
    if (!isInFavorite()) {
      addToFavorites({ productId: props.id, userId: userInfos.id, product: props });
    } else {
      removeFromFavorites(isInFavorite().id);
    }
  };

  const addToCartHandler = () => {
    addToCart({
      productId: props.id,
      userId: userInfos.id,
      count: 1,
      price: props.price,
      product: props
    });
  };

  return (
    <div className="p-4 rounded border border-transparent transition hover:border-gray-300 group/item">
      <div className="relative">
        {/* <span className="absolute top-3 left-4 text-gray-100 bg-[#5fa403] px-1.5 py-[9px] xs:py-[11px] rounded-full text-[10px] xs:text-xs">
          فروش
        </span> */}
        <Link to={`/product-details/${props.id}`}>
          <img src={props?.images[0]} alt="" />
        </Link>
        <div className="absolute top-4 right-4 space-y-4 transition duration-300 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100">
          <div className="group/icon">
            <span
              className="bg-primaryBlue text-white py-1 px-1.5 rounded-full hover:brightness-90 cursor-pointer"
              onClick={addOrRemoveFromFavorites}
            >
              {isInFavorite() ? (
                <FavoriteIcon fontSize="small" />
              ) : (
                <FavoriteBorderIcon fontSize="small" />
              )}
            </span>
            <div className="absolute -top-9 -right-11 text-xs bg-black text-white w-32 py-1 rounded transition duration-300 text-center opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible after:absolute after:-bottom-1 after:right-14 after:w-2 after:h-2 after:rotate-45 after:bg-black">
              <p>افزودن به علاقه‌مندی‌ها</p>
            </div>
          </div>
          {/* <div className="relative group/icon">
            <span className="bg-primaryBlue text-white py-1 px-1.5 rounded-full hover:brightness-90">
              <SearchIcon fontSize="small" />
            </span>
            <div className="absolute -top-9 -right-6 text-xs bg-black text-white w-20 py-1 rounded transition duration-300 text-center opacity-0 invisible group-hover/icon:opacity-100 group-hover/icon:visible after:absolute after:-bottom-1 after:right-9 after:w-2 after:h-2 after:rotate-45 after:bg-black">
              <p>مشاهده سریع</p>
            </div>
          </div> */}
        </div>
        <button
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-white bg-primaryBlue text-sm tracking-tighter py-2.5 w-[60%] rounded-md duration-300 invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 hover:bg-[#1953b4] hidden xs:block ${
            isInCart() && "bg-zinc-800 hover:bg-zinc-800"
          }`}
          onClick={addToCartHandler}
          disabled={isInCart()}
        >
          {isInCart() ? "موجود در سبد" : "افزودن به سبد"}
        </button>
      </div>
      <div className="text-center mt-4">
        <div>
          {props.discount ? (
            <p className="text-gray-500 line-through text-[15px]">
              {Number(
                props.price + props.price * (props.discount / 100)
              ).toLocaleString("fa")}{" "}
              تومان
            </p>
          ) : (
            ""
          )}
          <p className="text-primaryBlue text-[17px]">
            {Number(props.price).toLocaleString("fa")} تومان
          </p>
        </div>
        <div className="text-primaryBlue py-2.5">
          {props.score &&
            Array(5 - props.score)
              .fill(1)
              .map((start, index) => (
                <StarBorderIcon key={index} fontSize="" />
              ))}
          {Array(props.score)
            .fill(1)
            .map((start, index) => (
              <StarIcon key={index} fontSize="" />
            ))}
        </div>
        <Link
          to={`/product-details/${props.id}`}
          className="text-[15px] hover:text-primaryBlue transition line-clamp-2"
        >
          {props.name}
        </Link>
      </div>
    </div>
  );
}

export default LeftSideColProductBox;
