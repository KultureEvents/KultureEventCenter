import React from "react";
import styles from "./ContactHero.module.css";

import { contactHeroImg } from "../../../public/images";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className={`${styles.contactHero} section`}>
      <div className={`${styles.contactHero__container} container`}>
        <div className={styles.contactHero__container_contents}>
          <h2>Contact Us</h2>

          <p>
            <p>ADDRESS:</p>
            2932 Canton Road Marietta, Georgia 30066
            <br />
            <br />
            <p>CONTACT INFORMATION:</p>
            info@kultureevents.com <br /> Venue Management <br />
            Larry Boykins
            <br /> Tel: 470-257-7997 <br />
            <br />
            <p>BUSINESS HOURS:</p>
            Monday-Sunday 9AM-12AM <br />
            <br />
          </p>
        </div>

        <div className={styles.contactHero__container_image}>
          <Image src={contactHeroImg} alt="about us" width={608} height={568} />

          {/* <button
            type="button"
            className={styles.contactHero__container_image_btn}
          >
            Contact Us
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
