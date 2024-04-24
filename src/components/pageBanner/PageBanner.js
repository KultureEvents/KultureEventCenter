import React from "react";
import styles from "./PageBanner.module.css";

const PageBanner = ({ backgroundImage, title }) => {
  return (
    <section
      className={`${styles.page_banner} flex`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.page_banner__container} flex`}>
        <h2 className="page-banner__title">{title}</h2>
      </div>
    </section>
  );
};

export default PageBanner;
