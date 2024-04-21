import React from "react";
import styles from "./AboutInfo.module.css";
import Image from "next/image";
import { aboutInfo1 } from "../../../../public/images";
import { Arrow2 } from "../../../../public/svg";

const AboutInfo = () => {
  return (
    <section className={`${styles.aboutInfo} section`}>
      <div className={`${styles.aboutInfo__container} container`}>
        <div className={styles.aboutInfo__contents_left}>
          <Image src={aboutInfo1} alt="about info" width={592} height={680} />

          <div className={styles.aboutInfo__contents_left_text}>
            <p>
              Do We Sound Like The Perfect Match For You Events? Inquire Here
            </p>

            <span>
              <Arrow2 />
            </span>
          </div>
        </div>

        <div className={styles.aboutInfo__contents_right}>
          <div className={styles.aboutInfo__contents_right_text}>
            <p>Learn More About Our Services And How We Can Work Together</p>

            <span>
              <Arrow2 />
            </span>
          </div>

          <Image src={aboutInfo1} alt="about info" width={592} height={680} />
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
