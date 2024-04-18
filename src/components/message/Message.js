"use client";
import React from "react";
import styles from "./Message.module.css";
import Image from "next/image";
import { Arrow2 } from "../../../public/svg";

const Message = ({ imgSrc }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
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
              <input
                type="text"
                id="name"
                name="name"
                className={styles.message__formInput}
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                className={styles.message__formInput}
                placeholder="Email Address"
                required
              />
            </div>

            <div className={styles.message__formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.message__formInput}
                placeholder="Phone Number"
                required
              />

              <input
                type="date"
                id="date"
                name="date"
                className={styles.message__formInput}
                placeholder="Date of Event"
                required
              />
            </div>

            <div className={styles.message__formGroup}>
              <input
                type="location"
                id="location"
                name="location"
                className={styles.message__formInput}
                placeholder="Event Location"
                required
              />

              <input
                type="text"
                id="text"
                name="text"
                className={styles.message__formInput}
                placeholder="Where Did You Hear About Us"
                required
              />
            </div>

            <textarea
              name="message"
              id="message"
              className={styles.message__formTextarea}
              placeholder="Type Your Message"
              required
              rows={5}
              resize="none"
            ></textarea>

            <button type="submit" className={styles.message__formBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;
