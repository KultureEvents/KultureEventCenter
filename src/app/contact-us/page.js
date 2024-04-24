import React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import { ImgPlaceholder3 } from "../../../public/images";
import Message from "@/components/message/Message";
import ContactHero from "@/appSections/contactSection/ContactHero";

const ContactPage = () => {
  return (
    <>
      <PageBanner backgroundImage="/images/banner.png" title="KULTURE EVENTS" />
      <ContactHero />
      <Message imgSrc={ImgPlaceholder3} />
    </>
  );
};

export default ContactPage;
