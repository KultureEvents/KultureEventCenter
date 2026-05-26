import React from "react";
import styles from "./ContactHero.module.css";
import { contactHeroImg } from "../../../public/images";
import Image from "next/image";
import { Mail, Phone } from "../../../public/svg";

const ContactHero = () => {
  return (
    <section className={`${styles.contactHero} section`}>
      <div className={`${styles.contactHero__container} container`}>
        <div className={styles.contactHero__content}>
          <h2>Contact Us</h2>

          <div className={styles.contactHero__details}>
            <p>
              <strong>ADDRESS:</strong>
              <br />
              2932 Canton Road Marietta, Georgia 30066
            </p>

            <div className={styles.contactHero__block}>
              <strong>CONTACT INFORMATION:</strong>
              <ul className={styles.contactHero__list}>
                <li>
                  <span className={styles.contactHero__icon} aria-hidden="true">
                    <Mail />
                  </span>
                  <a href="mailto:info@kultureevents.com">
                    Mail: info@kultureevents.com
                  </a>
                </li>
                <li>
                  <span className={styles.contactHero__icon} aria-hidden="true">
                    <Phone />
                  </span>
                  <a href="tel:+14702577997">Tel: 470-257-7997</a>
                </li>
              </ul>
            </div>

            <p>
              <strong>BUSINESS HOURS:</strong>
              <br />
              Monday-Sunday 9AM-12AM
            </p>
          </div>
        </div>

        <figure className={styles.contactHero__media}>
          <Image
            src={contactHeroImg}
            alt="Kulture Event Center venue interior"
            width={608}
            height={568}
            className={styles.contactHero__image}
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default ContactHero;
