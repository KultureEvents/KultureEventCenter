import React from "react";
import styles from "./page.module.css";
import PageBanner from "@/components/pageBanner/PageBanner";

const EventHallPage = () => {
  return (
    <>
      <PageBanner />
      <section className={`${styles.event} section`}>
        <div className={`${styles.event__container} container`}>
          <h1 className={styles.title}>Event</h1>
          <p className={styles.subtitle}>This is the Event page</p>
        </div>
      </section>
    </>
  );
};

export default EventHallPage;
