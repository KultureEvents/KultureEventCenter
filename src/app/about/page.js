import React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import Team from "@/components/team/Team";
import { ImgPlaceholder2 } from "../../../public/images";
import Message from "@/components/message/Message";
import AboutHero from "@/appSections/aboutSections/aboutHero/AboutHero";
import AboutInfo from "@/appSections/aboutSections/aboutInfo/AboutInfo";
import { client } from "@/sanityClient/sanity";

export const revalidate = 30; // revalidate at most 30 seconds

export const getHomeImage = async () => {
  const groqQuery = `*[_type == "homePage"][0]{
      "teamImages": teamImages[].asset->url
    }`;

  const data = client.fetch(groqQuery);

  return data;
};
export const getAboutData = async () => {
  const groqQuery = `*[_type == "about"]`;

  const data = client.fetch(groqQuery);

  return data;
};

const AboutPage = async () => {
  const homeImage = await getHomeImage();
  const aboutData = await getAboutData();
  return (
    <>
      <PageBanner backgroundImage="/images/banner.png" title="KULTURE EVENTS" />

      <AboutHero aboutData={aboutData} />
      <Team teamImages={homeImage?.teamImages} />
      <AboutInfo />
      <Message imgSrc={ImgPlaceholder2} />
    </>
  );
};

export default AboutPage;
