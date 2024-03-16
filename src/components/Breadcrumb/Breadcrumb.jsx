import React from "react";

function Breadcrumb({ page }) {
  return (
    <div className="bg-[#f0f0f0] py-5 px-4 xs:px-24">
      <div className="flex gap-2">
        <span className="text-gray-500">خانه</span>
        <span>/</span>
        <span>{page}</span>
      </div>
    </div>
  );
}

export default Breadcrumb;
