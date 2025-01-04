import React from "react";
import styles from "../Packages.module.css";
import { packageDetails } from "@/data/data";

const PackagesBody = ({ currentPackage, activeHall }) => {
  const { details, price } = packageDetails[activeHall][currentPackage];

  return (
    <div className={styles.packages__body}>
      <h3
        className={`${styles.packages__body_title} ${
          currentPackage === "Silver"
            ? styles.silverTitle
            : currentPackage === "Gold"
            ? styles.goldTitle
            : currentPackage === "Platinum"
            ? styles.platinumTitle
            : currentPackage === "Wedding"
            ? styles.weddingTitle
            : ""
        }`}
      >
        {currentPackage} Package for {activeHall}
      </h3>

      <div className={styles.packages__body_list}>
        <ul className={styles.packages__body_item}>
          {details.map((detail, index) => (
            <li key={index}>
              {detail.icon}
              <span>{detail.text}</span>
            </li>
          ))}
        </ul>

        <div
          className={`${styles.packages__body_price} ${
            currentPackage === "Silver"
              ? styles.silverTitle
              : currentPackage === "Gold"
              ? styles.goldTitle
              : currentPackage === "Wedding"
              ? styles.weddingTitle
              : currentPackage === "Wedding"
              ? styles.weddingTitle
              : ""
          }`}
        >
          <p>Package Fee:</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default PackagesBody;
