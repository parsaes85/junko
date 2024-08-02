import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import AlertBox from "../../AlertBox/AlertBox";

function CheckoutProductsForms() {
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
        <div className="flex flex-col md:flex-row items-start gap-x-8 gap-y-16">
          <div className="flex-1 w-full">
            <div className="bg-zinc-900 py-2 px-4">
              <h1 className="text-white font-IRANSans text-lg">
                جزئیات پرداخت
              </h1>
            </div>
            <div className="space-y-6 mt-6">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 mb-6 lg:ml-8 lg:mb-0 space-y-2">
                  <label htmlFor="first-name" className="lg:text-lg">
                    نام *
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full  border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label htmlFor="last-name" className="lg:text-lg">
                    نام خانوادگی *
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                  />
                </div>
                <div></div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="lg:text-lg">
                  نام شرکت *
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="country" className="lg:text-lg">
                  کشور *
                </label>
                <select
                  id="country"
                  className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                >
                  <option value="iran">ایران</option>
                  <option value="iran">آمریکا</option>
                  <option value="iran">آلمان</option>
                  <option value="iran">ترکیه</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="city" className="lg:text-lg">
                  شهر / شهرستان *
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="state" className="lg:text-lg">
                  استان *
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 mb-6 lg:ml-8 lg:mb-0 space-y-2">
                  <label htmlFor="number" className="lg:text-lg">
                    تلفن *
                  </label>
                  <input
                    type="text"
                    id="number"
                    className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label htmlFor="email" className="lg:text-lg">
                    آدرس ایمیل *
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none"
                  />
                </div>
                <div></div>
              </div>
              <div className="space-y-2">
                <label htmlFor="desc" className="lg:text-lg">
                  توضیحات سفارش
                </label>
                <textarea
                  id="desc"
                  rows="3"
                  placeholder="یادداشت های مربوط به سفارش, مانند توضیح نحوه ارسال."
                  className="w-full border rounded-sm text-sm lg:text-base block px-4 py-2 outline-none resize-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-zinc-900 py-2 px-4">
              <h1 className="text-white font-IRANSans text-lg">سفارش شما</h1>
            </div>
            <div className="mt-6 w-full">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b">محصول</th>
                    <th className="p-4 border-b">جمع</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts?.products.map((product) => (
                    <tr>
                      <td className="border-b border-l p-4 px-0 text-sm lg:text-base text-center flex items-center justify-center gap-1">
                        <span>{product.product.name}</span>
                        <span className="font-IRANSans flex gap-1 items-center">
                          <CloseIcon fontSize="" className="text-sm" />{" "}
                          {product.count.toLocaleString("fa")}
                        </span>
                      </td>
                      <td className="border-b p-4 text-center text-sm lg:text-base">
                        {product.price.toLocaleString("fa")} تومان
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td className="border-b p-4 text-center text-sm lg:text-base">
                      جمع سبد
                    </td>
                    <td className="border-b p-4 text-center text-sm lg:text-base">
                      {calculateCartTotalPrice().toLocaleString("fa")} تومان
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-4 text-center text-sm lg:text-base">
                      حمل و نقل
                    </td>
                    <td className="border-b p-4 text-center text-sm lg:text-base">
                      ۱۵,۰۰۰ تومان
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b p-4 text-center text-sm lg:text-base">
                      مجموع سفارش
                    </td>
                    <td className="border-b p-4 text-center text-sm lg:text-base">
                      {(calculateCartTotalPrice() + 15000).toLocaleString("fa")}{" "}
                      تومان
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-10">
                <div className="flex gap-4 items-center text-sm xs:text-base">
                  <input type="radio" id="cash" name="payment" />
                  <label htmlFor="cash">پرداخت نقدی</label>
                </div>
                <div className="flex gap-4 items-center mt-2 mb-4 text-sm xs:text-base">
                  <input type="radio" id="online" name="payment" />
                  <label htmlFor="online">پرداخت آنلاین</label>
                  <img
                    src="/images/papyel.png"
                    alt=""
                    className="w-32 xs:w-40"
                  />
                </div>
                <button className="bg-primaryBlue text-white py-2 px-4 rounded-md xs:text-lg hover:bg-zinc-800 transition duration-300">
                  ادامه پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AlertBox text="سبدخرید شما خالی می باشد." />
      )}
    </section>
  );
}

export default CheckoutProductsForms;
