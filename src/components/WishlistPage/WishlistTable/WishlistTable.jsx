import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function WishlistTable() {
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
            <tr>
              <td>
                <span className="cursor-pointer hover:text-primaryBlue transition duration-300">
                  <CloseIcon fontSize="" />
                </span>
              </td>
              <td>
                <Link>
                  <img
                    src="/images/product2.jpg"
                    alt=""
                    className="w-28 mx-auto"
                  />
                </Link>
              </td>
              <td>
                <Link className="text-[15px] hover:text-primaryBlue transition duration-300">
                  گوشی موبایل Xiaomi Mi 9
                </Link>
              </td>
              <td>۵۵,۰۰۰ تومان</td>
              <td>موجود در انبار</td>
              <td>
                <button className="bg-primaryBlue text-white py-3 px-5 text-[13px] rounded">
                  افزودن به سبد
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="cursor-pointer hover:text-primaryBlue transition duration-300">
                  <CloseIcon fontSize="" />
                </span>
              </td>
              <td>
                <Link>
                  <img
                    src="/images/product2.jpg"
                    alt=""
                    className="w-28 mx-auto"
                  />
                </Link>
              </td>
              <td>
                <Link className="text-[15px] hover:text-primaryBlue transition duration-300">
                  گوشی موبایل Xiaomi Mi 9
                </Link>
              </td>
              <td>۵۵,۰۰۰ تومان</td>
              <td>موجود در انبار</td>
              <td>
                <button className="bg-primaryBlue text-white py-3 px-5 text-[13px] rounded">
                  افزودن به سبد
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default WishlistTable;
