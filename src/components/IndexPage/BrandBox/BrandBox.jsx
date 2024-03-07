import React from "react";

function BrandBox({ firstImgSrc, secondImgSrc }) {
  return (
    <div className="border-l">
      <div className="border-b p-4">
        <img src={firstImgSrc} alt="" className="mx-auto"/>
      </div>
      <div className="p-4">
        <img src={secondImgSrc} alt="" className="mx-auto"/>
      </div>
    </div>
  );
}

export default BrandBox;
