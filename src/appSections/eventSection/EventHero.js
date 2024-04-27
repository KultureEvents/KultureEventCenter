import React from "react";
import styles from "./EventHero.module.css";
import Link from "next/link";

const EventHero = () => {
  return (
    <section className={`${styles.eventHero} section flex`}>
      <div className={`${styles.eventHero__container} container`}>
        <div className={styles.eventHero__container_link}>
          <div className={styles.link__text}>
            <h3>Kulture Event I (Capacity 250 Audience)</h3>
            <Link href={`/events/I`}>
              <span>View Here</span>
            </Link>
          </div>
        </div>

        <div className={styles.eventHero__container_link}>
          <div className={styles.link__text}>
            <h3>Kulture Event II (Capacity 60 Audience)</h3>
            <Link href={`/events/II`}>
              <span>View Here</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.eventHero__contents_texts}>
        <h3>Our Venue</h3>
        <p>
          Our events center offers you two fantastic options to choose from,
          making sure that you have the perfect venue for your next event.
          Whether you're looking for a large space to accommodate a big
          gathering or a smaller, more intimate setting, we've got you covered.
          Our <span>"Kulture Event I"</span> is the perfect choice for those
          looking to host a grand celebration, while our{" "}
          <span>"Kulture Event II"</span> offers a cozy and intimate space for
          more low-key events. Choose us and make your next event unforgettable!
        </p>
        <div className={styles.contents__square}>
          <p>
            Kulture Event I: <br /> <span>4250 SQ Ft</span>
          </p>
          <p>
            Kulture Event II: <br /> <span>2650 SQ Ft</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
