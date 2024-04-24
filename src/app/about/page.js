import React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import Team from "@/components/team/Team";
import { ImgPlaceholder2 } from "../../../public/images";
import Message from "@/components/message/Message";
import AboutHero from "@/appSections/aboutSections/aboutHero/AboutHero";
import AboutInfo from "@/appSections/aboutSections/aboutInfo/AboutInfo";

const AboutPage = () => {
  return (
    <>
      <PageBanner
        backgroundImage="/images/banner.png"
        title="KULTURE EVENTS"
      />

      <AboutHero />
      <Team />
      <AboutInfo />
      <Message imgSrc={ImgPlaceholder2} />
    </>
  );
};

export default AboutPage;
