import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MapLocation from "../../components/ContactPage/MapLocation/MapLocation";
import ContactForm from "../../components/ContactPage/ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <Breadcrumb page="تماس با ما" />
      <MapLocation />
      <ContactForm />
    </>
  );
}

export default Contact;
