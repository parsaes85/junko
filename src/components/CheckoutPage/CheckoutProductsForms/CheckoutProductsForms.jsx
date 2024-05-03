import React from "react";

import CloseIcon from "@mui/icons-material/Close";

function CheckoutProductsForms() {
  return (
    <section className="px-4 xs:px-24 mb-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 w-full">
          <div className="bg-zinc-900 py-2 px-4">
            <h1 className="text-white font-IRANSans text-lg">جزئیات پرداخت</h1>
          </div>
          <div className="space-y-6 mt-6">
            <div className="flex">
              <div className="flex-1 ml-8 space-y-2">
                <label htmlFor="first-name" className="text-lg">
                  نام *
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full  border rounded-sm block px-4 py-2 outline-none"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="last-name" className="text-lg">
                  نام خانوادگی *
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full text-lg border rounded-sm block px-4 py-2 outline-none"
                />
              </div>
              <div></div>
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-lg">
                نام شرکت *
              </label>
              <input
                type="text"
                id="company"
                className="w-full border rounded-sm block px-4 py-2 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="text-lg">
                کشور *
              </label>
              <select
                id="country"
                className="w-full border rounded-s block px-4 py-2 outline-none"
              >
                <option value="iran">ایران</option>
                <option value="iran">آمریکا</option>
                <option value="iran">آلمان</option>
                <option value="iran">ترکیه</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="text-lg">
                شهر / شهرستان *
              </label>
              <input
                type="text"
                id="city"
                className="w-full border rounded-sm block px-4 py-2 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="state" className="text-lg">
                استان *
              </label>
              <input
                type="text"
                id="state"
                className="w-full border rounded-sm block px-4 py-2 outline-none"
              />
            </div>
            <div className="flex">
              <div className="flex-1 ml-8 space-y-2">
                <label htmlFor="number" className="text-lg">
                  تلفن *
                </label>
                <input
                  type="text"
                  id="number"
                  className="w-full border rounded-sm block px-4 py-2 outline-none"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="email" className="text-lg">
                  آدرس ایمیل *
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full text-lg border rounded-sm block px-4 py-2 outline-none"
                />
              </div>
              <div></div>
            </div>
            <div className="space-y-2">
              <label htmlFor="desc" className="text-lg">
                توضیحات سفارش
              </label>
              <textarea id="desc" rows="3" placeholder="یادداشت های مربوط به سفارش, مانند توضیح نحوه ارسال." className="w-full border rounded-sm block px-4 py-2 outline-none resize-none"></textarea>
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
                <tr>
                  <td className="border-b border-l p-4 text-center flex items-center justify-center gap-1">
                    <span>گوشی موبایل Xiaomi Mi ۹</span>
                    <span className="font-IRANSans flex gap-1 items-center">
                      <CloseIcon fontSize="" className="text-sm" /> ۲
                    </span>
                  </td>
                  <td className="border-b p-4 text-center">۱۶۵,۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td className="border-b border-l p-4 text-center flex items-center justify-center gap-1">
                    <span>گوشی موبایل Xiaomi Mi ۹</span>
                    <span className="font-IRANSans flex gap-1 items-center">
                      <CloseIcon fontSize="" className="text-sm" /> ۲
                    </span>
                  </td>
                  <td className="border-b p-4 text-center">۱۶۵,۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td className="border-b border-l p-4 text-center flex items-center justify-center gap-1">
                    <span>گوشی موبایل Xiaomi Mi ۹</span>
                    <span className="font-IRANSans flex gap-1 items-center">
                      <CloseIcon fontSize="" className="text-sm" /> ۲
                    </span>
                  </td>
                  <td className="border-b p-4 text-center">۱۶۵,۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td className="border-b border-l p-4 text-center flex items-center justify-center gap-1">
                    <span>گوشی موبایل Xiaomi Mi ۹</span>
                    <span className="font-IRANSans flex gap-1 items-center">
                      <CloseIcon fontSize="" className="text-sm" /> ۲
                    </span>
                  </td>
                  <td className="border-b p-4 text-center">۱۶۵,۰۰۰ تومان</td>
                </tr>

                <tr>
                  <td className="border-b p-4 text-center">جمع سبد</td>
                  <td className="border-b p-4 text-center">۲۱۵,۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td className="border-b p-4 text-center">حمل و نقل</td>
                  <td className="border-b p-4 text-center">۵,۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td className="border-b p-4 text-center">مجموع سفارش</td>
                  <td className="border-b p-4 text-center">۲۲۰,۰۰۰ تومان</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-10">
              <div className="flex gap-4 items-center">
                <input type="radio" id="cash" name="payment" />
                <label htmlFor="cash">پرداخت نقدی</label>
              </div>
              <div className="flex gap-4 items-center mt-2 mb-4">
                <input type="radio" id="online" name="payment" />
                <label htmlFor="online">پرداخت آنلاین</label>
                <img src="/images/papyel.png" alt="" className="w-40" />
              </div>
              <button className="bg-primaryBlue text-white py-2 px-4 rounded-md text-lg hover:bg-zinc-800 transition duration-300">
                ادامه پرداخت
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutProductsForms;
