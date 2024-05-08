import React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import Packages from "@/components/packages/Packages";
import CTA from "@/components/cta/CTA";
import Gallery from "@/appSections/gallerySection/Gallery";
import { client } from "@/sanityClient/sanity";

export const revalidate = 10; // revalidate at most 10 seconds

export const getGalleryImages = async () => {
  try {
    const groqQuery = `*[_type == "gallery"]{
      "galleryImages": galleryImages[].asset->url
    }`;

    const data = await client.fetch(groqQuery);


    return data;
  } catch (error) {
    console.error("Error fetching gallery images:", error.message);
    return null;
  }
};

const GalleryPage = async () => {
  const galleryImages = await getGalleryImages();
  return (
    <>
      <PageBanner backgroundImage="/images/banner.png" title="KULTURE EVENTS" />
      <Gallery galleryImages={galleryImages} />
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
