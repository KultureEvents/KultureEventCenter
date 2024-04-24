import React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import Packages from "@/components/packages/Packages";
import CTA from "@/components/cta/CTA";
import Gallery from "@/appSections/gallerySection/Gallery";

const GalleryPage = () => {
  return (
    <>
      <PageBanner backgroundImage="/images/banner.png" title="KULTURE EVENTS" />
      <Gallery />
      <Packages />
      <CTA
        className={"cta__link_gallery"}
        title={"Book A Free Consultation With Us"}
        subText={
          "  Ready to get started on your next project? Book a free consultation with our experienced team today and take the first step towards achieving your goals. Don't wait, schedule your consultation now!"
        }
        linkText={"Contact Us"}
        link={"/contact-us"}
      />
    </>
  );
};

export default GalleryPage;
