import React from "react";

function WhyChooseUsBox({ img, title, desc }) {
  return (
    <div className="text-center space-y-6">
      <div>
        <img src={img} alt="" className="mx-auto rotate" />
      </div>
      <h2 className="font-IRANSans text-lg">{title}</h2>
      <p className="leading-7">{desc}</p>
    </div>
  );
}

export default WhyChooseUsBox;
