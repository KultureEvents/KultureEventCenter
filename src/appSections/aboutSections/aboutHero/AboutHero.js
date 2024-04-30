import React from "react";
import styles from "./AboutHero.module.css";
import Image from "next/image";
import { urlForImage } from "@/sanityClient/sanityImageUrl";
import { PortableText } from "@portabletext/react";

const AboutHero = ({ aboutData }) => {
  const imageUrl = urlForImage(aboutData[0].image).url();

  return (
    <section className={`${styles.aboutHero} section`}>
      <div className={`${styles.aboutHero__container} container`}>
        <div className={styles.aboutHero__container_contents}>
          <h2>{aboutData[0].title}</h2>
          <PortableText value={aboutData[0].content} />
        </div>

        <figure className={styles.aboutHero__container_image}>
          <Image src={imageUrl} alt="about us" width={608} height={568} />
        </figure>
      </div>
    </section>
  );
};

export default AboutHero;
