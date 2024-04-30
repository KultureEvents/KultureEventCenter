import React from "react";
import HomeHero from "@/appSections/homeSections/homeHero/HomeHero";
import HomeIntro from "@/appSections/homeSections/homeIntro/HomeIntro";
import Testimonial from "@/components/testimonial/Testimonial";
import Team from "@/components/team/Team";
import { ImgPlaceholder1 } from "../../public/images";
import Message from "@/components/message/Message";
import HomeService from "@/appSections/homeSections/homeService/HomeService";
import Packages from "@/components/packages/Packages";
import { client } from "@/sanityClient/sanity";

export const getHomeImage = async () => {
  const groqQuery = `*[_type == "homePage"][0]{
      "homeHeroImages": homeHeroImages[].asset->url,
       "homeIntroImages": homeIntroImages[].asset->url,
      "homeServiceData": homeServiceData,
      "teamImages": teamImages[].asset->url
    }`;

  const data = client.fetch(groqQuery);

  return data;
};

const HomePage = async () => {
  const homeImage = await getHomeImage();
  return (
    <>
      <HomeHero slides={homeImage?.homeHeroImages} />
      <HomeIntro homeIntroImages={homeImage?.homeIntroImages} />
      <HomeService
        homeServiceData={homeImage?.homeServiceData}
        title={"Our Event Services"}
      />
      <Packages />
      <Testimonial />
      <Team teamImages={homeImage?.teamImages} />
      <Message imgSrc={ImgPlaceholder1} />
    </>
  );
};

export default HomePage;
