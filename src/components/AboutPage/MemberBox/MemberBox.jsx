import React from "react";

function MemberBox({ img, name, role, phone, email }) {
  return (
    <div className="text-center">
      <div>
        <img src={img} alt="" className="mx-auto" />
      </div>
      <div className="space-y-4 mt-6">
        <div className="space-y-2">
          <h3 className="text-xl">{name}</h3>
          <p className="text-sm">{role}</p>
        </div>
        <div className="bg-primaryBlue h-0.5 w-10 mx-auto"></div>
        <div className="space-y-2 text-sm">
          <div>تلفن: {phone}</div>
          <div>ایمیل: {email}</div>
        </div>
      </div>
    </div>
  );
}

export default MemberBox;
