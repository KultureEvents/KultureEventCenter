import React from "react";
import HomeHero from "@/appSections/homeSections/homeHero/HomeHero";
import HomeIntro from "@/appSections/homeSections/homeIntro/HomeIntro";
import Testimonial from "@/components/testimonial/Testimonial";
import Team from "@/components/team/Team";
import { ImgPlaceholder } from "../../public/images";
import Message from "@/components/message/Message";
import HomeService from "@/appSections/homeSections/homeService/HomeService";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeService />
      <Testimonial />
      <Team />
      <Message imgSrc={ImgPlaceholder} />
    </>
  );
};

export default HomePage;
