"use client";
import React, { useState } from "react";
import styles from "./Message.module.css";
import Image from "next/image";
import { Arrow2 } from "../../../public/svg";
import { toast } from "react-toastify";

const Message = ({ imgSrc }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!data.fullName) {
      errors.fullName = "Full Name is required";
    }

    if (!data.email) {
      errors.email = "Email Address is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!phoneRegex.test(data.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits";
    }

    if (!data.date) {
      errors.date = "Date of Event is required";
    }

    if (!data.eventLocation) {
      errors.eventLocation = "Event Location is required";
    }

    if (!data.hearAboutUs) {
      errors.hearAboutUs = "This field is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const formErrors = validate(data);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);

      try {
        const response = await fetch(
          "https://contact-us-pj4v.onrender.com/api/contactus",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          toast.error("There was a problem with your submission");
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        toast.success("Message sent successfully");
        e.target.reset();
      } catch (error) {
        console.error("There was a problem with your submission:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className={`${styles.message} section`}>
      <div className={`${styles.message__container} container`}>
        <div className={styles.message__content}>
          <p className={styles.message__content_desc}>
            INQUIRES & GENERAL MESSAGES
          </p>

          <h2 className={styles.message__content_title}>
            Message Us Here and We Will Get Back to You Shortly
          </h2>

          <Arrow2 />
          <div className={styles.message__contentImg}>
            <Image src={imgSrc} alt="message" width={600} height={400} />
          </div>
        </div>

        <div className={styles.message__form}>
          <form
            action=""
            onSubmit={handleSubmit}
            className={styles.message__formContainer}
          >
            <div className={styles.message__formGroup}>
              <div className={styles.message__formPair}>
                <label htmlFor="fullName" className={styles.message__formLabel}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={styles.message__formInput}
                  placeholder="Enter Full Name"
                />
                {errors.fullName && (
                  <span className={styles.error}>{errors.fullName}</span>
                )}
              </div>

              <div className={styles.message__formPair}>
                <label htmlFor="email" className={styles.message__formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.message__formInput}
                  placeholder=" Enter Email Address"
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>
            </div>

            <div className={styles.message__formGroup}>
              <div className={styles.message__formPair}>
                <label
                  htmlFor="phoneNumber"
                  className={styles.message__formLabel}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={styles.message__formInput}
                  placeholder="Enter Phone Number"
                />
                {errors.phoneNumber && (
                  <span className={styles.error}>{errors.phoneNumber}</span>
                )}
              </div>

              <div className={styles.message__formPair}>
                <label htmlFor="date" className={styles.message__formLabel}>
                  Date of Event
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={styles.message__formInput}
                  placeholder="Enter Date of Event"
                />
                {errors.date && (
                  <span className={styles.error}>{errors.date}</span>
                )}
              </div>
            </div>

            <div className={styles.message__formGroup}>
              <div className={styles.message__formPair}>
                <label
                  htmlFor="eventLocation"
                  className={styles.message__formLabel}
                >
                  Event Location
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  className={styles.message__formInput}
                  placeholder="Where is the Event?"
                />
                {errors.eventLocation && (
                  <span className={styles.error}>{errors.eventLocation}</span>
                )}
              </div>

              <div className={styles.message__formPair}>
                <label
                  htmlFor="hearAboutUs"
                  className={styles.message__formLabel}
                >
                  How Did You Hear About Us
                </label>
                <input
                  type="text"
                  id="hearAboutUs"
                  name="hearAboutUs"
                  className={styles.message__formInput}
                  placeholder="Where Did You Hear About Us"
                />
                {errors.hearAboutUs && (
                  <span className={styles.error}>{errors.hearAboutUs}</span>
                )}
              </div>
            </div>

            <textarea
              name="message"
              id="message"
              className={styles.message__formTextarea}
              placeholder="Send us a  Message"
              rows={5}
              resize="none"
            ></textarea>

            <button
              type="submit"
              className={styles.message__formBtn}
              disabled={loading}
            >
              {loading ? (
                <div className="flex">
                  <p className="spinner"></p>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;
