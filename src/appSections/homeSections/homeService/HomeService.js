import React from "react";
import styles from "./HomeService.module.css";
import { urlForImage } from "@/sanityClient/sanityImageUrl";

const HomeService = ({ title, homeServiceData }) => {
 
  return (
    <section className={`${styles.homeService} section`}>
      <div className={`${styles.homeService__container} container flex`}>
        <h2 className={styles.homeService__container_title}>{title}</h2>
        <div className={styles.homeService__contents}>
          {homeServiceData.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, description, itemClass, image }) => {
  const imageUrl = image ? urlForImage(image).url() : null;

  const backgroundImageStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className={`${styles[itemClass]}`} style={backgroundImageStyle}>
      <div className={styles.item_text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeService;
