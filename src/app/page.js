import React from "react";
import HomeHero from "@/appSections/homeSections/homeHero/HomeHero";
import HomeIntro from "@/appSections/homeSections/homeIntro/HomeIntro";
import Testimonial from "@/components/testimonial/Testimonial";
import Team from "@/components/team/Team";
import { ImgPlaceholder1 } from "../../public/images";
import Message from "@/components/message/Message";
import HomeService from "@/appSections/homeSections/homeService/HomeService";
import Packages from "@/components/packages/Packages";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeService title={"Our Event Services"} />
      <Packages />
      <Testimonial />
      <Team />
      <Message imgSrc={ImgPlaceholder1} />
    </>
  );
};

export default HomePage;
