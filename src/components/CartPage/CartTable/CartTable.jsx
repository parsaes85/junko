import React from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartTable() {
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
            <tr>
              <td>
                <span className="cursor-pointer hover:text-primaryBlue transition duration-300">
                  <DeleteOutlineIcon  />
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
              <td>
                <div className="flex justify-center items-center gap-2">
                    <p>تعداد: </p>
                    <input type="number" className="focus:outline-none border w-14 px-1.5 py-2 text-sm" value={1}/>
                </div>
              </td>
              <td>۳۵۰,۰۰۰ تومان</td>
            </tr>
            <tr>
              <td>
                <span className="cursor-pointer hover:text-primaryBlue transition duration-300">
                  <DeleteOutlineIcon  />
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
              <td>
                <div className="flex justify-center items-center gap-2">
                    <p>تعداد: </p>
                    <input type="number" className="focus:outline-none border w-14 px-1.5 py-2 text-sm" value={1}/>
                </div>
              </td>
              <td>۳۵۰,۰۰۰ تومان</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CartTable;
