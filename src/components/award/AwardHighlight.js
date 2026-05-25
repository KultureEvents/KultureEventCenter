import React from "react";
import Image from "next/image";
import styles from "./AwardHighlight.module.css";
import { AwardShowcase } from "../../../public/images";

const AwardHighlight = () => {
  return (
    <section className={`${styles.award} section`} aria-labelledby="award-heading">
      <div className={`${styles.award__container} container`}>
        <figure className={styles.award__figure}>
          <Image
            src={AwardShowcase}
            alt="Kulture Event Center — ranked number one event venue in Marietta, Georgia 2025"
            width={640}
            height={480}
            className={styles.award__image}
            priority={false}
          />
        </figure>

        <div className={styles.award__content}>
          <p className={styles.award__eyebrow}>Recognition</p>
          <h2 id="award-heading" className={styles.award__title}>
            Voted Best Venue in Marietta
          </h2>
          <p className={styles.award__year}>2025</p>
          <p className={styles.award__desc}>
            Thank you to our community for recognizing Kulture Event Center as
            Marietta&apos;s premier event venue. We are honored by this award and
            remain committed to exceptional service and unforgettable
            celebrations.
          </p>
          <p className={styles.award__meta}>
            Best of Marietta · Event Venue · Google Reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardHighlight;
