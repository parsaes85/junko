import React from "react";

function LeftSide() {
  return (
    <div className="bg-[#f8f8f8] flex-1 py-12 px-5 space-y-14 h-fit border">
      {/* search */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          جستجو
        </h1>
        <div>
          <input type="text" placeholder="جستجو ..." className="block border w-full pr-4 py-2 text-sm focus:outline-none mb-4" />
          <button className="bg-zinc-800 text-sm text-white py-1.5 px-5 rounded">جستجو</button>
        </div>
      </div>

      {/* new comments */}
      <div>
        <h1 className="text-xl font-IRANSans mb-4 tracking-tighter">
          دیدگاه‌های جدید
        </h1>
        <div>

        </div>
      </div>
    </div>
  );
}

export default LeftSide;
