import React, { useState } from "react";

function DiscountCodeBox() {
  const [isDiscountCodeBoxOpen, setIsDiscountCodeBoxOpen] = useState(false);

  const openAndCloseBoxHandler = () => {
    if (isDiscountCodeBoxOpen) {
      setIsDiscountCodeBoxOpen(false);
    } else {
      setIsDiscountCodeBoxOpen(true);
    }
  };

  return (
    <section className="px-4 xs:px-24 mb-16">
      <div>
        <div className="px-3 py-4 border-t-4 border-t-primaryBlue bg-gray-100">
          <div>
            <span>کد تخفیف دارید؟</span>{" "}
            <span
              className="text-primaryBlue cursor-pointer"
              onClick={openAndCloseBoxHandler}
            >
              برای وارد کردن کد تخفیف کلیک کنید
            </span>
          </div>
        </div>

        <div
          className={`${
            isDiscountCodeBoxOpen
              ? "visible max-h-[100rem]"
              : "invisible max-h-0"
          } overflow-hidden border flex gap-3 mt-7 transition-all duration-1000`}
        >
          <div className="px-8 py-5">
            <input
              type="text"
              placeholder="کد تخفیف"
              className="border px-6 py-3 focus:outline-none"
            />
            <button className="bg-zinc-800 text-white rounded px-6 py-3 transition duration-300 hover:bg-primaryBlue">
              اعمال کد تخفیف
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountCodeBox;
