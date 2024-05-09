import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AboutMainDetails from "../../components/AboutPage/AboutMainDetails/AboutMainDetails";
import WhyChooseUs from "../../components/AboutPage/WhyChooseUs/WhyChooseUs";
import Members from "../../components/AboutPage/Members/Members";

function About() {
  return (
    <>
      <Breadcrumb page="درباره ما" />
      <AboutMainDetails />
      <WhyChooseUs />
      <Members />
    </>
  );
}

export default About;
