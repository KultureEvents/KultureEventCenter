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
  const [activeHall, setActiveHall] = useState("Kulture I");

  const packageImages = {
    Silver: [PackagesImg1, PackagesImg2],
    Gold: [PackagesImg3, PackagesImg4],
    Platinum: [PackagesImg5, PackagesImg6],
    Wedding: [PackagesImg5, PackagesImg6],
  };

 const handleNextPackage = () => {
   if (currentPackage === "Silver") setCurrentPackage("Gold");
   else if (currentPackage === "Gold") setCurrentPackage("Platinum");
   else if (currentPackage === "Platinum") setCurrentPackage("Wedding");
 };

 const handlePrevPackage = () => {
   if (currentPackage === "Wedding") setCurrentPackage("Platinum");
   else if (currentPackage === "Platinum") setCurrentPackage("Gold");
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

          <div className={styles.packages__tabs}>
            <button
              className={`${styles.packages__tab} ${
                activeHall === "Kulture I" ? styles.active : ""
              }`}
              onClick={() => setActiveHall("Kulture I")}
            >
              Packages for Kulture I
            </button>
            <button
              className={`${styles.packages__tab} ${
                activeHall === "Kulture II" ? styles.active : ""
              }`}
              onClick={() => setActiveHall("Kulture II")}
            >
              Packages for Kulture II
            </button>
          </div>

          <div className={styles.packages__divider}></div>

          <PackagesBody
            currentPackage={currentPackage}
            activeHall={activeHall}
          />

          <div className={styles.packages__divider}></div>

          <div className={styles.packages__bottom}>
            <PackageNavigation
              currentPackage={currentPackage}
              handlePrevPackage={handlePrevPackage}
              handleNextPackage={handleNextPackage}
              activeHall={activeHall} // Pass activeHall to PackageNavigation
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
