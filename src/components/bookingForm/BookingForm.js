import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import Link from "next/link";
import { toast } from "react-toastify";

const BookingForm = ({ selectedPackage, packageFee, selectedAddons }) => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventName: "",
    date: "",
    eventTime: "", // New field for time period
    estimatedGroupSize: "",
    Alcohol: "",
    scheduleTour: "",
    phoneBooth: "",
    message: "",
    agreement: false,
    news: false,
  };
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.agreement) {
      newErrors.agreement = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const dataToSend = {
      ...formData,
      selectedPackage,
      packageFee,
      selectedAddons,
    };

    try {
      const response = await fetch(
        "https://contact-us-pj4v.onrender.com/api/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Server Response:", responseData);
      toast.success("Your request has been successfully sent!");

      setFormData(defaultValues);
    } catch (error) {
      console.error("There was an error!", error);
      toast.error(
        "There was an error sending your request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contents__form}>
      <form className={styles.form__wrapper} onSubmit={handleSubmit}>
        <h3>Contact information</h3>

        <div className={styles.form_group}>
          <div className={styles.formPair}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.form_input}
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName}</p>
            )}
          </div>

          <div className={styles.formPair}>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.form_input}
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className={styles.error}>{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className={styles.form_group}>
          <div className={styles.formPair}>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.form_input}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.formPair}>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={styles.form_input}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && (
              <p className={styles.error}>{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        <input
          type="text"
          id="eventName"
          name="eventName"
          className={styles.form_input}
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleInputChange}
          required
        />

        <div className={styles.form_group}>
          <div className={styles.form_pair}>
            <label htmlFor="date" className={styles.form_label}>
              Desired Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className={styles.form_input}
              placeholder="Desired Date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.form_pair}>
            <label htmlFor="eventTime" className={styles.form_label}>
              Time Period
            </label>
            <select
              id="eventTime"
              name="eventTime"
              className={styles.form_select}
              value={formData.eventTime}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Time Period *</option>
              <option value="AM (11:00 AM - 5:00 PM)">
                AM (11:00 AM - 5:00 PM)
              </option>
              <option value="PM (6:00 PM - 12:00 AM)">
                PM (6:00 PM - 12:00 AM)
              </option>
            </select>
          </div>
        </div>

        <input
          type="number"
          id="estimatedGroupSize"
          name="estimatedGroupSize"
          className={styles.form_input}
          placeholder="Estimated Group Size"
          value={formData.estimatedGroupSize}
          onChange={handleInputChange}
          required
        />

        <select
          id="Alcohol"
          name="Alcohol"
          className={styles.form_select}
          value={formData.Alcohol}
          onChange={handleInputChange}
          required
        >
          <option value="">Will You Be Serving Alcohol? *</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>

        <select
          id="scheduleTour"
          name="scheduleTour"
          className={styles.form_select}
          value={formData.scheduleTour}
          onChange={handleInputChange}
          required
        >
          <option value="">Do You Need To Schedule A Tour? *</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>

        <select
          id="phoneBooth"
          name="phoneBooth"
          className={styles.form_select}
          value={formData.phoneBooth}
          onChange={handleInputChange}
          required
        >
          <option value="">Would You Like To Rent A 360 Phone Booth? *</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>

        <textarea
          name="message"
          id="message"
          className={styles.form_textarea}
          placeholder="Type Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
        ></textarea>

        <div className={styles.form_agreement}>
          <div className={styles.formPair}>
            <div
              className="flex"
              style={{ alignSelf: "flex-start", gap: "16px" }}
            >
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                className="inp-cbx"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              <p>
                I agree to the <Link href="/">terms and conditions</Link>
              </p>
            </div>

            {errors.agreement && (
              <p className={styles.error}>{errors.agreement}</p>
            )}
          </div>
        </div>

        <div className={styles.form_news}>
          <input
            type="checkbox"
            id="news"
            name="news"
            className="inp-cbx"
            checked={formData.news}
            onChange={handleInputChange}
          />
          <p>Be the first to know about our exclusive discounts.</p>
        </div>

        <button type="submit" className={styles.form_btn} disabled={loading}>
          {loading ? (
            <div className="flex">
              <p className="spinner"></p>
              <span>Sending...</span>
            </div>
          ) : (
            "Send a request"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
