import React, { useState, useEffect } from "react";
import styles from "./BookingContent.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { bookingDetails } from "@/data/data";
import BookingForm from "@/components/bookingForm/BookingForm";
import {
  Bus1,
  Bus2,
  Chair1,
  Chair2,
  Carpet1,
  Carpet2,
} from "../../../public/images";

const BookingContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");
  const selectedHall = searchParams.get("hall");

  const [selectedBookingDetails, setSelectedBookingDetails] = useState(null);

  useEffect(() => {
    if (selectedHall && selectedPackage) {
      const hallDetails = bookingDetails[selectedHall];
      const packageDetails = hallDetails.find(
        (packageDetail) => packageDetail.name === selectedPackage
      );
      setSelectedBookingDetails(packageDetails);
    }
  }, [selectedHall, selectedPackage]);

  const handleAddonSelection = (addonKey) => {
    if (!selectedAddons.includes(addonKey)) {
      setSelectedAddons([...selectedAddons, addonKey]);
      setIsChecked(true);
    } else {
      const updatedAddons = selectedAddons.filter(
        (selected) => selected !== addonKey
      );
      setSelectedAddons(updatedAddons);
      setIsChecked(updatedAddons.length > 0);
    }
  };

  if (!selectedBookingDetails) {
    return <p>Loading...</p>;
  }

  return (
    <section className={`${styles.booking} section`}>
      <div className={`${styles.booking__container} container`}>
        <h2 className={styles.booking__title}>Complete Your Booking</h2>

        <div className={styles.booking__container_contents}>
          <div className={styles.contents__package}>
            <div className={styles.package__title_wrapper}>
              <h3 className={styles.package__title}>
                {selectedBookingDetails.name} Package for {selectedHall}
              </h3>
              <p>
                Package Fee:
                <br />
                <span className={styles.package__fee}>
                  {selectedBookingDetails.fee}
                </span>
              </p>
            </div>

            <div
              className={
                isChecked
                  ? styles.package__image_wrapper
                  : styles.package__image_wrapper_full
              }
            >
              {selectedAddons.length === 0
                ? selectedBookingDetails.images.map((image, index) => (
                    <Image
                      key={`default-${index}`}
                      src={image}
                      alt={`default-image-${index}`}
                      width={171}
                      height={146}
                    />
                  ))
                : selectedAddons.map((addonKey, index) => {
                    switch (addonKey) {
                      case "sprinterVan":
                        return (
                          <div
                            key={`addon-${index}`}
                            className={styles.addonImage}
                          >
                            <Image
                              src={Bus1}
                              alt="Sprinter Van"
                              width={171}
                              height={146}
                            />
                            <Image
                              src={Bus2}
                              alt="Sprinter Van"
                              width={171}
                              height={146}
                            />
                          </div>
                        );
                      case "throneChair":
                        return (
                          <div
                            key={`addon-${index}`}
                            className={styles.addonImage}
                          >
                            <Image
                              src={Chair1}
                              alt="Throne Chair"
                              width={171}
                              height={146}
                            />
                            <Image
                              src={Chair2}
                              alt="Throne Chair"
                              width={171}
                              height={146}
                            />
                          </div>
                        );
                      case "redCarpet":
                        return (
                          <div
                            key={`addon-${index}`}
                            className={styles.addonImage}
                          >
                            <Image
                              src={Carpet1}
                              alt="Red Carpet"
                              width={171}
                              height={146}
                            />
                            <Image
                              src={Carpet2}
                              alt="Red Carpet"
                              width={171}
                              height={146}
                            />
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
            </div>

            <div className={styles.package__addon_wrapper}>
              <p
                onClick={() => setIsOpen((prev) => !prev)}
                className={styles.package__customize}
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
                      <input
                        type="checkbox"
                        onChange={() => handleAddonSelection(detail.key)}
                        checked={selectedAddons.includes(detail.key)}
                      />
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
