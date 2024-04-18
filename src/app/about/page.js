import React from "react";
import styles from "./page.module.css";
import PageBanner from "@/components/pageBanner/PageBanner";

const AboutPage = () => {
  return (
    <>
      <PageBanner />
      <section className="section about">
        <div className="about__container container">
          <h1 className="title">About</h1>
          <p className="subtitle">This is the about page</p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
