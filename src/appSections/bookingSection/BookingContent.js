"use client";

import React, { useState } from "react";
import styles from "./BookingContent.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { bookingDetails } from "@/data/data";
import BookingForm from "@/components/bookingForm/BookingForm";

const BookingContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");

  // Find the selected package details from the bookingDetails array
  const selectedBookingDetails = bookingDetails.find(
    (packageDetail) => packageDetail.name === selectedPackage
  );

  return (
    <section className={`${styles.booking} section`}>
      <div className={`${styles.booking__container} container`}>
        <h2 className={styles.booking__title}>Complete Your Booking</h2>

        <div className={styles.booking__container_contents}>
          <div className={styles.contents__package}>
            <div className={styles.package__title_wrapper}>
              <h3
                className={`${
                  selectedBookingDetails.name === "Silver"
                    ? styles.silverTitle
                    : selectedBookingDetails.name === "Gold"
                    ? styles.goldTitle
                    : selectedBookingDetails.name === "Platinum"
                    ? styles.platinumTitle
                    : ""
                }`}
              >
                {selectedBookingDetails.name} Package
              </h3>
              <p>
                Package Fee:
                <br />{" "}
                <span
                  className={`${
                    selectedBookingDetails.name === "Silver"
                      ? styles.silverTitle
                      : selectedBookingDetails.name === "Gold"
                      ? styles.goldTitle
                      : selectedBookingDetails.name === "Platinum"
                      ? styles.platinumTitle
                      : ""
                  }`}
                >
                  {" "}
                  {selectedBookingDetails.fee}
                </span>
              </p>
            </div>

            <div className={styles.package__image_wrapper}>
              <Image
                src={selectedBookingDetails.images[0]}
                alt="package"
                width={171}
                height={146}
              />
              <Image
                src={selectedBookingDetails.images[1]}
                alt="package"
                width={171}
                height={146}
              />
            </div>

            <div className={styles.package__addon_wrapper}>
              <p
                onClick={() => setIsOpen((prev) => !prev)}
                className={`${
                  selectedBookingDetails.name === "Silver"
                    ? styles.silverTitle
                    : selectedBookingDetails.name === "Gold"
                    ? styles.goldTitle
                    : selectedBookingDetails.name === "Platinum"
                    ? styles.platinumTitle
                    : ""
                }`}
              >
                {isOpen ? "Proceed to booking" : " Customize your package"}
              </p>
              <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
                Select Add-Ons
              </button>
            </div>

            {isOpen && (
              <ul className={styles.package__addon_details}>
                {selectedBookingDetails.addOn.map((detail, index) => (
                  <li key={index}>
                    <div className={styles.text}>
                      {detail.star}
                      <p>{detail.text}</p>
                    </div>

                    <div className={styles.fees}>
                      <p>{detail.fee}</p>
                      <input type="checkbox" />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingContent;
