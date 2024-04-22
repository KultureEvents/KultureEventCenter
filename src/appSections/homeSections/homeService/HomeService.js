import React from "react";
import styles from "./HomeService.module.css";

const serviceItems = [
  {
    title: "Weddings/Receptions",
    description:
      "We have developed a well-earned reputation for outstanding event planning expertise, impeccable service, and warm hospitality. We are committed to providing you and your guests with exceptional service and memorable experiences.",
    itemClass: styles.homeService__contents_item_1,
  },
  {
    title: "Birthday Parties",
    description:
      "We have developed a well-earned reputation for outstanding event planning expertise, impeccable service, and warm hospitality. We are committed to providing you and your guests with exceptional service and memorable experiences.",
    itemClass: styles.homeService__contents_item_2,
  },
  {
    title: "Graduation Parties",
    description:
      "We have developed a well-earned reputation for outstanding event planning expertise, impeccable service, and warm hospitality. We are committed to providing you and your guests with exceptional service and memorable experiences.",
    itemClass: styles.homeService__contents_item_3,
  },
];

const HomeService = ({ title }) => {
  return (
    <section className={`${styles.homeService} section`}>
      <div className={`${styles.homeService__container} container flex`}>
        <h2 className={styles.homeService__container_title}>{title}</h2>
        <div className={styles.homeService__contents}>
          {serviceItems.map((item, index) => (
            <ServiceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, description, itemClass }) => {
  return (
    <div className={`${itemClass} item`}>
      <div className={styles.item_text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeService;
