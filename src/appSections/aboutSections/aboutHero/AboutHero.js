import React from "react";
import styles from "./AboutHero.module.css";
import { aboutHeroImg } from "../../../../public/images";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className={`${styles.aboutHero} section`}>
      <div className={`${styles.aboutHero__container} container`}>
        <div className={styles.aboutHero__container_contents}>
          <h2>About Us</h2>
          <p>
            At our company, we take pride in our exceptional event planning
            expertise, impeccable service, and warm hospitality. Our team has
            worked tirelessly to build a reputation as the go-to event planners
            in the industry. We are committed to providing you and your guests
            with an unforgettable experience that will be talked about for years
            to come. Our top priority is to create an event that is tailored to
            your needs and executed seamlessly from start to finish. So whether
            you're planning a corporate event, a wedding, or a private party, we
            have the expertise and the passion to make it a success. Trust us to
            bring your vision to life, and let us show you why we are the best
            in the business.
          </p>
        </div>
        
        <figure className={styles.aboutHero__container_image}>
          <Image src={aboutHeroImg} alt="about us" width={608} height={568} />
        </figure>
      </div>
    </section>
  );
};

export default AboutHero;
