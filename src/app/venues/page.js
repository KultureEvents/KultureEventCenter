import React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import Packages from "@/components/packages/Packages";
import CTA from "@/components/cta/CTA";
import HomeService from "@/appSections/homeSections/homeService/HomeService";
import EventHero from "@/appSections/eventSection/EventHero";
import { client } from "@/sanityClient/sanity";

export const getHomeImage = async () => {
  const groqQuery = `*[_type == "homePage"][0]{
      "homeServiceData": homeServiceData,
    }`;

  const data = client.fetch(groqQuery);

  return data;
};

export const getEventVenues = async () => {
  const groqQuery = `*[_type == "event"]`;

  const data = client.fetch(groqQuery);

  return data;
};

const EventHallPage = async () => {
  const homeImage = await getHomeImage();
  const venuesData = await getEventVenues();
  return (
    <>
      <PageBanner backgroundImage="/images/banner.png" title="KULTURE EVENTS" />
      <EventHero venuesData={venuesData} />
      <HomeService
        homeServiceData={homeImage?.homeServiceData}
        title={"Services We Offer"}
      />
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
