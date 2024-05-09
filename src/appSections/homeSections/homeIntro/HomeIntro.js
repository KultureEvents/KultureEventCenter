"use client";

import React from "react";
import styles from "./HomeIntro.module.css"; // Import CSS module
import Image from "next/image";
import Link from "next/link";

const HomeIntro = ({ homeIntroImages }) => {
  const scrollToSection = () => {
    const section = document.getElementById("packages");
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section className={`${styles.homeIntro} section`}>
      <div className={`${styles.homeIntro__container} container`}>
        <div className={styles.homeIntro__contentImg}>
          <Image
            src={homeIntroImages[0]}
            alt="home intro 1"
            width={316}
            height={472}
          />
        </div>

        <div className={styles.homeIntro__contentText}>
          <p className={styles.homeIntro__contentTextSubtitle}>
            Welcome to Kulture Event Center
          </p>

          <h3 className={styles.homeIntro__contentTextTitle}>
            Unforgettable Events at - Atlanta's Premier Venue
          </h3>

          <p className={styles.homeIntro__contentTextDesc}>
            Kulture Event Center is metro Atlanta‘s premier event venue, we have
            developed a well-earned reputation for outstanding event planning
            expertise, impeccable service, and warm hospitality. We are
            committed to providing you and your guests with exceptional service
            and memorable experiences.
          </p>

          <div className={styles.homeIntro__contentTextButton}>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonSecondary}`}
              onClick={scrollToSection}
            >
              View Our Packages
            </button>
            <Link
              href="/venues"
              className={`${styles.link} ${styles.buttonPrimary}`}
            >
              <span>View Our Venues</span>
            </Link>
          </div>
        </div>

        <div className={styles.homeIntro__contentImg}>
          <Image
            src={homeIntroImages[1]}
            alt="home intro 1"
            width={316}
            height={470}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
