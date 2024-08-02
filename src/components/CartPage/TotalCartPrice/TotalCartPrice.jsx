import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TotalCartPrice() {
  const cartProducts = useSelector((state) => state.cartProducts);

  const calculateCartTotalPrice = () => {
    let cartTotalPrice = 0;
    cartProducts?.products.forEach(
      (product) => (cartTotalPrice += product.price)
    );
    return cartTotalPrice;
  };

  return (
    <section className="px-4 xs:px-24 mb-16">
      {cartProducts?.products?.length ? (
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="border flex-1 w-full">
            <div className="bg-zinc-900 py-2 px-4">
              <h1 className="text-white font-IRANSans text-lg">کد تخفیف</h1>
            </div>
            <div className="pb-6 pt-5 px-5 space-y-6">
              <p className="text-sm">
                کد تخفیف خود را در صورت وجود وارد نمایید
              </p>
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <input
                  type="text"
                  placeholder="کد تخفیف"
                  className="focus:outline-none border rounded px-4 py-2 text-sm w-full lg:w-auto"
                />
                <button className="bg-zinc-900 py-2 px-4 text-[13px] text-white rounded hover:bg-primaryBlue transition duration-300">
                  اعمال کد تخفیف
                </button>
              </div>
            </div>
          </div>
          <div className="border flex-1 w-full">
            <div className="bg-zinc-900 py-2 px-4">
              <h1 className="text-white font-IRANSans text-lg">مجموع سبد</h1>
            </div>
            <div className="pb-6 pt-5 px-5 space-y-6 ">
              <div className="border-b space-y-5 pb-6">
                <div className="flex items-center justify-between">
                  <p>جمع اجزا</p>
                  <p className="text-xl">
                    {calculateCartTotalPrice().toLocaleString("fa")} تومان
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p>حمل و نقل</p>
                  <p className="text-xl">۱۵,۰۰۰ تومان</p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <p>جمع کل</p>
                  <p className="text-xl">
                    {(calculateCartTotalPrice() + 15000).toLocaleString("fa")}{" "}
                    تومان
                  </p>
                </div>
                <Link to="/checkout" className="block">
                  <button className="bg-primaryBlue text-white py-1.5 px-5 rounded block mr-auto hover:bg-zinc-900 transition duration-300">
                    پرداخت
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ):("")}
    </section>
  );
}

export default TotalCartPrice;
