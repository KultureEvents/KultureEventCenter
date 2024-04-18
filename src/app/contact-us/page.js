import React from "react";
import styles from "./page.module.css";
import PageBanner from "@/components/pageBanner/PageBanner";

const ContactPage = () => {
  return (
    <>
      <PageBanner />
      <section className="section contact">
        <div className="contact__container container">
          <h1 className="title">Contact</h1>
          <p className="subtitle">This is the contact page</p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
