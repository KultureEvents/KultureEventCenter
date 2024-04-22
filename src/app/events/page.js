import React from "react";
import styles from "./page.module.css";
import PageBanner from "@/components/pageBanner/PageBanner";
import Packages from "@/components/packages/Packages";
import CTA from "@/components/cta/CTA";
import HomeService from "@/appSections/homeSections/homeService/HomeService";

const EventHallPage = () => {
  return (
    <>
      <PageBanner />
      <HomeService title={"Services We Offer"} />
      <Packages />
      <CTA
        className={"cta__link_events"}
        title={"Let's Plan Your Event"}
        subText={
          "We are experts in flawless event planning, providing impeccable service and warm hospitality to all of our guests. We work with you every step of the way to ensure that your event is executed seamlessly, creating unforgettable experiences for you and your guests. Our team is here to help you achieve your vision and make your event a success."
        }
        linkText={"Schedule For Facility Inspection"}
        link={"/contact"}
      />
    </>
  );
};

export default EventHallPage;
