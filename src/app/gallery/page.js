import React from "react";
import styles from "./page.module.css";
import PageBanner from "@/components/pageBanner/PageBanner";

const GalleryPage = () => {
  return (
    <>
      <PageBanner />
      <section className={`${styles.gallery} section`}>
        <div className="gallery__container container">
          <h1 className="title">Gallery</h1>
          <p className="subtitle">This is the gallery page</p>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
