import React from "react";
import MemberBox from "../MemberBox/MemberBox";

function Members() {
  return (
    <section className="px-4 xs:px-24 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <MemberBox
          img="/images/about-us-person1.png"
          name="جان"
          role="کارگردان"
          phone="۷۸۹ ۴۵۶ ۱۲۳(۹۸)+"
          email="john@example.com"
        />
        <MemberBox
          img="/images/about-us-person2.png"
          name="مریم"
          role="کارگردان"
          phone="۷۸۹ ۴۵۶ ۱۲۳(۹۸)+"
          email="john@example.com"
        />
        <MemberBox
          img="/images/about-us-person3.png"
          name="محسن"
          role="کارگردان"
          phone="۷۸۹ ۴۵۶ ۱۲۳(۹۸)+"
          email="john@example.com"
        />
        <MemberBox
          img="/images/about-us-person4.png"
          name="جیمز"
          role="کارگردان"
          phone="۷۸۹ ۴۵۶ ۱۲۳(۹۸)+"
          email="john@example.com"
        />
      </div>
    </section>
  );
}

export default Members;
