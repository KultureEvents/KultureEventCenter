// "use client";

import React from "react";
import styles from "./page.module.css";

import CTA from "@/components/cta/CTA";
import Image from "next/image";

import PageBanner from "@/components/pageBanner/PageBanner";
import { ArrowCircle } from "../../../../public/svg";
import { client } from "@/sanityClient/sanity";
import { urlForImage } from "@/sanityClient/sanityImageUrl";

export const revalidate = 10; // revalidate at most 10 seconds

export const getSingleVenueData = async (slug) => {
  const query = `*[_type =='event' && slug.current == "${slug}"]{
    "currentSlug": slug.current,
    _id,
    title,
    slug,
    subtitle,
    floorPlanInfo,
    floorPlanImage,
    youtubeVideo,
    images[]{
      asset->{
        url
      }
    }
  }[0]`;

  const data = await client.fetch(query);

  // Extracting URLs from the 'images' array
  const imageUrls = data.images.map((image) => image.asset.url);

  // Replace the 'images' array with the extracted URLs
  const updatedData = {
    ...data,
    images: imageUrls,
  };

  return updatedData;
};

const SingleEventHall = async ({ params }) => {
  const data = await getSingleVenueData(params.slug);

  // const scrollToSection = () => {
  //   const section = document.getElementById("floorPlan");
  //   const offsetTop = section.offsetTop;
  //   window.scrollTo({
  //     top: offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  const {
    title,
    subtitle,
    floorPlanInfo,
    floorPlanImage,
    images,
    youtubeVideo,
  } = data;
  const imageUrl = urlForImage(floorPlanImage).url();

  return (
    <>
      <PageBanner
        backgroundImage="/images/single-banner.png"
        title={`KULTURE EVENT ${
          params.slug === "kulture-event-hall-I" ? "I" : "II"
        }`}
      />

      <section className={`${styles.eventInfo} section`}>
        <div className={`${styles.eventInfo__container} container`}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.floor_plan}>{floorPlanInfo}</p>

          <div className={styles.info}>
            <p>View Our Floor Plans Below</p>
            <ArrowCircle />
          </div>
        </div>
      </section>

      <section className={`${styles.eventFloor} section`} id="floorPlan">
        <div className={`${styles.eventFloor__container} container`}>
          <h2>
            Kulture {`${params.slug === "kulture-event-hall-I" ? "I" : "II"}`}{" "}
            Floor Plan
          </h2>
          <Image src={imageUrl} alt="floor plan" width={1248} height={267} />
        </div>
      </section>

      <section className={`${styles.eventVideo} section`}>
        <div className={`${styles.eventVideo__container} container`}>
          <h2 className={styles.title}>
            Take A Virtual Tour Of Kulture Event Center{" "}
            {params.slug === "kulture-event-hall-I" ? "I" : "II"}
          </h2>

          <div className={styles.video}>
            <iframe
              width="1200"
              height="500"
              src={youtubeVideo}
              title="Take A Virtual Tour Of Kulture Event Center"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className={`${styles.eventGallery} section`}>
        <div className={`${styles.eventGallery__container} container`}>
          {images.slice(0, 8).map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`single event hall ${index + 1}`}
              width={680}
              height={488}
            />
          ))}

          <div className={styles.galleryColumn}>
            {images.slice(8).map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`single event hall ${index + 9}`}
                width={448}
                height={488}
              />
            ))}
          </div>
        </div>
      </section>

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

export default SingleEventHall;
