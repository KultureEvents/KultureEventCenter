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
            2932 Canton Road Marietta, Georgia 30066
            <br />
            <br /> info@kultureevents.com <br /> Venue Management <br />
            Larry Boykins
            <br />
            <br /> Tel: 470-257-7997 <br />
            <br /> Monday-Friday 9AM-5PM <br />
            <br /> BUSINESS HOURS: CONTACT INFORMATION: ADDRESS:
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
