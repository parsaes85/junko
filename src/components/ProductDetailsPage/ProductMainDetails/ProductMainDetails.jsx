import React, { useEffect, useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useAddToFavorites from "../../../hooks/useAddToFavorites";
import useRemoveFromFavorites from "../../../hooks/useRemoveFromFavorites";
import useAddToCart from "../../../hooks/useAddToCart";

function ProductMainDetails(props) {
  const { userInfos } = useSelector((state) => state.auth);
  const cartProducts = useSelector((state) => state.cartProducts);
  const favoriteProducts = useSelector((state) => state.favoriteProducts);

  const { mutate: addToFavorites } = useAddToFavorites();
  const { mutate: removeFromFavorites } = useRemoveFromFavorites();
  const { mutate: addToCart } = useAddToCart();

  const [productNumber, setProductNumber] = useState(1);
  const [productMainImage, setProductMainImage] = useState("");

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
      addToFavorites({ productId: props.id, userId: userInfos.id });
    } else {
      removeFromFavorites(isInFavorite().id);
    }
  };

  const addToCartHandler = () => {
    addToCart({
      productId: props.id,
      userId: userInfos.id,
      count: Number(productNumber),
      price: productNumber * props.price,
      product: props
    });
  };

  useEffect(() => {
    setProductMainImage(props.images && props.images[0]);
  }, [props]);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 xs:px-24 mb-16">
        <div>
          <div className="border">
            <img
              src={productMainImage}
              width="90%"
              className="mx-auto"
              alt=""
            />
          </div>
          <div className="flex justify-center gap-4 mt-5 px-14">
            {props?.images?.map((image, index) => (
              <div key={index} className="border cursor-pointer">
                <img
                  src={image}
                  className="max-h-32"
                  alt=""
                  onClick={() => setProductMainImage(image)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-5 border-b pb-5">
            <h1 className="text-xl sm:text-[22px] lg:text-2xl">{props.name}</h1>
            <div className="flex gap-2 items-center">
              <div className="text-primaryBlue sm:text-xl">
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
              <p className="text-gray-600">(امتیاز مشتریان)</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-primaryBlue tracking-tighter text-[20px] sm:text-[24px]">
                {Number(props.price).toLocaleString("fa")} تومان
              </p>
              {props.discount ? (
                <p className="text-gray-500 tracking-tighter line-through text-[18px] sm:text-[22px]">
                  {Number(
                    props.price + props.price * (props.discount / 100)
                  ).toLocaleString("fa")}{" "}
                  تومان
                </p>
              ): ("")}
            </div>
            <p className="text-[15px] leading-7">{props.shortDesc}</p>
          </div>
          <div className="space-y-6">
            <h1 className="text-xl tracking-tighter">گزینه های در دسترس</h1>
            <div>
              <h2>رنگ</h2>
              <div className="flex gap-2 mt-2">
                {props?.colors?.map((color, index) => (
                  <div key={index} className="border border-gray-300 p-0.5">
                    <div
                      className={`w-[29px] h-[30px]`}
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            {!isInCart() ? (
              <div className="py-2">
                <label htmlFor="product-number">تعداد:</label>
                <input
                  type="number"
                  id="product-number"
                  className="outline-none border w-1/4 px-2 py-2 mx-4 rounded text-sm"
                  min={1}
                  max={props.count}
                  value={productNumber}
                  onChange={(e) => {
                    setProductNumber(e.target.value);
                  }}
                />
                <button
                  className="bg-primaryBlue text-white py-2 w-2/4 rounded hover:bg-gray-700 transition"
                  onClick={addToCartHandler}
                >
                  افزودن به سبد
                </button>
              </div>
            ) : (
              <div className="py-2 flex items-center gap-2">
                <button className="bg-gray-700 text-white py-2 w-2/4 rounded transition cursor-default">
                  این محصول در سبد خرید شما وجود دارد
                </button>
                <Link to="/cart" className="underline hover:text-primaryBlue">
                  رفتن به صفحه سبد خرید
                </Link>
              </div>
            )}
            <div
              className={`text-[15px] transition cursor-pointer hover:text-primaryBlue flex gap-2 ${
                isInFavorite() && "text-primaryBlue"
              }`}
              onClick={addOrRemoveFromFavorites}
            >
              <span>
                {isInFavorite() ? (
                  <FavoriteIcon fontSize="small" />
                ) : (
                  <FavoriteBorderIcon fontSize="small" />
                )}
              </span>
              افزودن به علاقه‌مندی‌ها
            </div>
            <div>
              <div className="flex gap-2">
                <span>تعداد موجودی:</span>
                <p>{Number(props?.count).toLocaleString("fa")}</p>
              </div>
              <div className="flex gap-2">
                <span>دسته:</span>
                <p>{props?.category?.title}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-[13px] text-white [&>a]:rounded [&>a]:py-0.5 [&>a]:px-1 sm:[&>a]:px-2 [&>a]:flex [&>a]:gap-1 [&>a]:items-center [&>a]:opacity-90">
              <a href="" className="bg-[#bc2a8d] hover:bg-[#C753A2]">
                <InstagramIcon fontSize="" />
                لایک
              </a>
              <a href="" className=" bg-[#00aced] hover:bg-[#31BBEF]">
                <TwitterIcon fontSize="" />
                توییت
              </a>
              <a href="" className="bg-[#bd081b] hover:bg-[#bd3232]">
                <PinterestIcon fontSize="" />
                ذخیره
              </a>
              <a href="" className="bg-[#f26522] hover:bg-[#F3824C]">
                <GoogleIcon fontSize="" />
                اشتراک گذاری
              </a>
              <a href="" className="bg-[#419fd9] hover:bg-[#65B0DF]">
                <TelegramIcon fontSize="" />
                تلگرام
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductMainDetails;
