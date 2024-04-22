// PackageNavigation.js
import React from "react";
import Link from "next/link";
import styles from "../Packages.module.css";
import { Arrow1, Arrow2 } from "../../../../public/svg";

const PackageNavigation = ({
  currentPackage,
  handlePrevPackage,
  handleNextPackage,
}) => (
  <>
    {" "}
    <Link href="/bookings" className={styles.packages__bottom_link}>
      <span>Book Now</span>
    </Link>
    <div className={styles.packages__bottom_nav}>
      {/* Previous button */}
      {currentPackage !== "Silver" && (
        <button
          onClick={handlePrevPackage}
          className={`${styles.packages__bottom_button} ${styles.packages__bottom_prev}`}
        >
          <Arrow1 />
          <span>Prev</span>
        </button>
      )}

      {/* Next button */}
      {currentPackage !== "Platinum" && (
        <button
          onClick={handleNextPackage}
          className={`${styles.packages__bottom_button} ${styles.packages__bottom_next}`}
        >
          <span>Next</span>
          <Arrow2 />
        </button>
      )}
    </div>
  </>
);

export default PackageNavigation;
