"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css"; // Import CSS module

import Link from "next/link";

import { Slider1, Slider2, Slider3 } from "../../../../public/images";

const HomeHero = () => {
  const slides = [Slider1, Slider2, Slider3];
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlide, slides.length]);

  return (
    <section
      className={styles["home-hero"] + " flex"} // Use CSS module classNames
      style={{ backgroundImage: `url(${slides[activeSlide].src})` }}
    >
      <div className={styles["home-hero__container"]}>
        <div className={styles["home-hero__contents"]}>
          <h1 className={styles["home-hero__container-title"]}>
            Atlanta's Premier Venue
          </h1>

          <p className={styles["home-hero__container-subtitle"]}>
            Kulture Event Center is metro Atlanta‘s premier event venue, we have
            developed a well-earned reputation for outstanding event planning
            expertise, impeccable service, and warm hospitality. We are
            committed to providing you and your guests with exceptional service
            and memorable experiences.
          </p>

          <div className={styles["home-hero__buttons"]}>
            <Link href="/" className={styles["home-hero__btn"]}>
              Learn More
            </Link>
            <Link href="/" className={styles["home-hero__btn"]}>
              Book Now
            </Link>
          </div>
        </div>

        <div className={styles["home-hero__pagination-dot"]}>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`${styles["home-hero__pagination-dot-item"]} ${
                activeSlide === index ? styles["active"] : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
