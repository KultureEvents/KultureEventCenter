import React from "react";
import styles from "./CTA.module.css";
import Link from "next/link";

const CTA = ({ title, subText, linkText, link, className }) => {
  return (
    <section className={`${styles.cta} section flex`}>
      <div className={`${styles.cta__container} container`}>
        <p className={styles.cta__subtitle}>LET'S GET STARTED</p>
        <h2 className={styles.cta__title}>{title}</h2>
        <p className={styles.cta__subtext}>{subText}</p>

        <Link href={link} className={`${className} ${styles.cta__link}`}>
          <span className={styles.cta__link_text}>{linkText}</span>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
