"use client";

import React from "react";
import styles from "./page.module.css";

import CTA from "@/components/cta/CTA";
import Image from "next/image";
import { singleEventData } from "@/data/data";

import PageBanner from "@/components/pageBanner/PageBanner";
import { ArrowCircle } from "../../../../public/svg";

const SingleEventHall = ({ params }) => {
  const scrollToSection = () => {
    const section = document.getElementById("floorPlan");
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  const eventData = singleEventData.find((data) => data.slug === params.slug);

  if (!eventData) {
    // Handle if the data for the current route is not found
    return <div>Event data not found for this route.</div>;
  }
  const { slug, title, subtitle, floorPlanInfo, floorPlanImage, images } =
    eventData;
  return (
    <>
      <PageBanner
        backgroundImage="/images/single-banner.png"
        title={`KULTURE EVENT ${params.slug}`}
      />

      <section className={`${styles.eventInfo} section`}>
        <div className={`${styles.eventInfo__container} container`}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.floor_plan}>{floorPlanInfo}</p>

          <div className={styles.info}>
            <p>View Our Floor Plans Below</p>
            <ArrowCircle onClick={scrollToSection} />
          </div>
        </div>
      </section>

      <section className={`${styles.eventFloor} section`} id="floorPlan">
        <div className={`${styles.eventFloor__container} container`}>
          <h2>Kulture {slug} Floor Plan</h2>
          <Image
            src={floorPlanImage}
            alt="floor plan"
            width={1248}
            height={267}
          />
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
