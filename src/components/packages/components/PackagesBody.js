// PackagesBody.js
import React from "react";
import styles from "../Packages.module.css";
import { packageDetails } from "@/data/data";

const PackagesBody = ({ currentPackage }) => (
  <div className={styles.packages__body}>
    <h3
      className={`${styles.packages__body_title} ${
        currentPackage === "Silver"
          ? styles.silverTitle
          : currentPackage === "Gold"
          ? styles.goldTitle
          : currentPackage === "Platinum"
          ? styles.platinumTitle
          : ""
      }`}
    >
      {currentPackage} Package
    </h3>

    {/* Package details */}
    <div className={styles.packages__body_list}>
      <ul className={styles.packages__body_item}>
        {packageDetails[currentPackage].map((detail, index) => (
          <li key={index}>
            {detail.icon}
            <span>{detail.text}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div
        className={`${styles.packages__body_price} ${
          currentPackage === "Silver"
            ? styles.silverTitle
            : currentPackage === "Gold"
            ? styles.goldTitle
            : currentPackage === "Platinum"
            ? styles.platinumTitle
            : ""
        }`}
      >
        <p>Package Fee:</p>
        {/* Price based on the current package */}
        {currentPackage === "Silver" && <span>$2,150</span>}
        {currentPackage === "Gold" && <span>$2,700</span>}
        {currentPackage === "Platinum" && <span>$2,995</span>}
      </div>
    </div>
  </div>
);

export default PackagesBody;
