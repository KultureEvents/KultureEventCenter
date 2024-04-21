import React from "react";
import styles from "./PageBanner.module.css";

const PageBanner = () => {
  return (
    <section className={`${styles.page_banner} flex`}>
      <div className={`${styles.page_banner__container} flex`}>
        <h2 className="page-banner__title">KULTURE EVENTS</h2>
      </div>
    </section>
  );
};

export default PageBanner;
