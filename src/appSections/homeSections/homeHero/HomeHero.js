"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css"; // Import CSS module

import Link from "next/link";

const HomeHero = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]); // Only re-run the effect if slides.length changes

  const scrollToSection = () => {
    const section = document.getElementById("packages");
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`${styles["home-hero"]} flex`}
      style={{ backgroundImage: `url(${slides[activeSlide]})` }}
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
            <Link href="/about" className={styles["home-hero__btn"]}>
              Learn More
            </Link>
            <button
              type="button"
              className={styles["home-hero__btn"]}
              onClick={scrollToSection}
            >
              Book Now
            </button>
          </div>
        </div>

        <div className={styles["home-hero__pagination-dot"]}>
          {slides.map((_, index) => (
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
