"use client";

import React, { useState } from "react";
import styles from "./Packages.module.css";
import {
  PackagesImg1,
  PackagesImg2,
  PackagesImg3,
  PackagesImg4,
  PackagesImg5,
  PackagesImg6,
} from "../../../public/images";
import PackageNavigation from "./components/PackagesNavigation";
import PackageImage from "./components/PackagesImage";
import PackagesBody from "./components/PackagesBody";

const Packages = () => {
  // State variables
  const [currentPackage, setCurrentPackage] = useState("Silver");

  const packageImages = {
    Silver: [PackagesImg1, PackagesImg2],
    Gold: [PackagesImg3, PackagesImg4],
    Platinum: [PackagesImg5, PackagesImg6],
  };

  // Function to handle switching to the next package
  const handleNextPackage = () => {
    if (currentPackage === "Silver") setCurrentPackage("Gold");
    else if (currentPackage === "Gold") setCurrentPackage("Platinum");
  };

  // Function to handle switching to the previous package
  const handlePrevPackage = () => {
    if (currentPackage === "Platinum") setCurrentPackage("Gold");
    else if (currentPackage === "Gold") setCurrentPackage("Silver");
  };

  return (
    <section className={`${styles.packages} section`} id="packages">
      <div className={`${styles.packages__container} container`}>
        <PackageImage
          className={styles.packages__container_leftImg}
          imageSrc={packageImages[currentPackage][0]}
        />

        <div className={styles.packages__container_contents}>
          <div className={styles.packages__header}>
            <h2 className={styles.packages__header_title}>
              Our Event Packages
            </h2>

            <p className={styles.packages__header_subtitle}>
              We offer a variety of event packages which ranges from all-
              inclusive to ala carta for your event. We also have vendors
              available to serve in the event you may need any of their
              services, or you are welcome to provide your own vendors.
              <br /> <br />
              Choose a Package that suits your preference:
            </p>
          </div>

          <div className={styles.packages__divider}></div>

          <PackagesBody currentPackage={currentPackage} />

          <div className={styles.packages__divider}></div>

          <div className={styles.packages__bottom}>
            <PackageNavigation
              currentPackage={currentPackage}
              handlePrevPackage={handlePrevPackage}
              handleNextPackage={handleNextPackage}
            />
          </div>
        </div>

        <PackageImage
          className={styles.packages__container_rightImg}
          imageSrc={packageImages[currentPackage][1]}
        />
      </div>
    </section>
  );
};

export default Packages;
