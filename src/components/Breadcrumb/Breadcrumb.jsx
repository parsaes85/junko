import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ page }) {
  return (
    <section>
      <div className="bg-[#f0f0f0] mb-16 py-3 md:py-5 px-4 xs:px-24">
        <div className="flex gap-2">
          <Link to="/" className="text-gray-500">خانه</Link>
          <span>/</span>
          <span>{page}</span>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
