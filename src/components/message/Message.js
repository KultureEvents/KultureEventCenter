"use client";
import React, { useState } from "react";
import styles from "./Message.module.css";
import Image from "next/image";
import { Arrow2 } from "../../../public/svg";
import { toast } from "react-toastify";
import { submitWeb3Form } from "@/lib/submitWeb3Form";

const normalizePhone = (value) => value.replace(/\D/g, "");

const Message = ({ imgSrc }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split("T")[0];

  const validate = (data) => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = normalizePhone(data.phoneNumber || "");

    if (!data.fullName?.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!data.email?.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!emailRegex.test(data.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!phoneDigits) {
      nextErrors.phoneNumber = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      nextErrors.phoneNumber = "Enter at least 10 digits";
    }

    if (!data.date) {
      nextErrors.date = "Date of event is required";
    }

    if (!data.venue) {
      nextErrors.venue = "Please select a venue";
    }

    if (!data.hearAboutUs?.trim()) {
      nextErrors.hearAboutUs = "This field is required";
    }

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.phoneNumber = normalizePhone(data.phoneNumber);

    const formErrors = validate(data);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      toast.error("Please fix the highlighted fields");
      return;
    }

    setLoading(true);

    try {
      await submitWeb3Form({
        subject: `[CONTACT] General inquiry — ${data.venue}`,
        from_name: "Kulture — Contact Form",
        "FORM TYPE": "CONTACT — General inquiry",
        "Form Page": "Message Us (Home / About / Contact)",
        replyto: data.email,
        name: data.fullName,
        email: data.email,
        "Full Name": data.fullName,
        "Phone Number": data.phoneNumber,
        "Date of Event": data.date,
        Venue: data.venue,
        "How Did You Hear About Us": data.hearAboutUs,
        message: data.message || "(none)",
      });

      toast.success("Message sent successfully. We will get back to you shortly.");
      e.target.reset();
      setErrors({});
    } catch (error) {
      console.error("There was a problem with your submission:", error);
      toast.error(
        error.message ||
          "We could not send your message right now. Please try again or call us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = (hasError) =>
    `${styles.message__formInput}${hasError ? ` ${styles.message__formInput_error}` : ""}`;

  return (
    <section className={`${styles.message} section`}>
      <div className={`${styles.message__container} container`}>
        <div className={styles.message__content}>
          <p className={styles.message__content_desc}>
            INQUIRIES &amp; GENERAL MESSAGES
          </p>

          <h2 className={styles.message__content_title}>
            Message Us Here and We Will Get Back to You Shortly
          </h2>

          <Arrow2 />
          <div className={styles.message__contentImg}>
            <Image src={imgSrc} alt="Event venue interior" width={600} height={400} />
          </div>
        </div>

        <div className={styles.message__form}>
          <form
            onSubmit={handleSubmit}
            className={styles.message__formContainer}
            noValidate
          >
            <div className={styles.message__formGrid}>
              <div className={styles.message__formField}>
                <label htmlFor="fullName" className={styles.message__formLabel}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={fieldClass(errors.fullName)}
                  placeholder="Enter your full name"
                  autoComplete="name"
                />
                {errors.fullName && (
                  <span className={styles.error}>{errors.fullName}</span>
                )}
              </div>

              <div className={styles.message__formField}>
                <label htmlFor="email" className={styles.message__formLabel}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={fieldClass(errors.email)}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.message__formField}>
                <label htmlFor="phoneNumber" className={styles.message__formLabel}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={fieldClass(errors.phoneNumber)}
                  placeholder="e.g. (404) 555-1234"
                  autoComplete="tel"
                />
                {errors.phoneNumber && (
                  <span className={styles.error}>{errors.phoneNumber}</span>
                )}
              </div>

              <div className={styles.message__formField}>
                <label htmlFor="date" className={styles.message__formLabel}>
                  Date of Event
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={today}
                  className={fieldClass(errors.date)}
                />
                {errors.date && (
                  <span className={styles.error}>{errors.date}</span>
                )}
              </div>

              <div className={styles.message__formField}>
                <label htmlFor="venue" className={styles.message__formLabel}>
                  Venue
                </label>
                <select
                  id="venue"
                  name="venue"
                  className={fieldClass(errors.venue)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a venue
                  </option>
                  <option value="Kulture I">Kulture I</option>
                  <option value="Kulture II">Kulture II</option>
                </select>
                {errors.venue && (
                  <span className={styles.error}>{errors.venue}</span>
                )}
              </div>

              <div className={styles.message__formField}>
                <label htmlFor="hearAboutUs" className={styles.message__formLabel}>
                  How Did You Hear About Us?
                </label>
                <input
                  type="text"
                  id="hearAboutUs"
                  name="hearAboutUs"
                  className={fieldClass(errors.hearAboutUs)}
                  placeholder="Social media, friend, search, etc."
                />
                {errors.hearAboutUs && (
                  <span className={styles.error}>{errors.hearAboutUs}</span>
                )}
              </div>
            </div>

            <div className={styles.message__formField}>
              <label htmlFor="message" className={styles.message__formLabel}>
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className={styles.message__formTextarea}
                placeholder="Tell us about your event, guest count, or any questions"
                rows={5}
              />
            </div>

            <div className={styles.message__formActions}>
              <button
                type="submit"
                className={styles.message__formBtn}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.message__formBtnInner}>
                    <span className="spinner" aria-hidden="true" />
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Message;
