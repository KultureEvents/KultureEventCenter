import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import Link from "next/link";

const BookingForm = ({ selectedPackage, packageFee, selectedAddons }) => {
  // Define state to store form data
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    eventName: "",
    date: "",
    startTime: "",
    endTime: "",
    estimatedGroupSize: "",
    Alcohol: "",
    scheduleTour: "",
    phoneBooth: "",
    message: "",
    agreement: false,
    news: false,
  };
  const [formData, setFormData] = useState(defaultValues);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData(event.target);

    // Append additional data
    formData.append("selectedPackage", selectedPackage);
    formData.append("packageFee", packageFee);
    formData.append("selectedAddons", JSON.stringify(selectedAddons));

    // Convert FormData to JSON for demonstration purposes
    const formDataJSON = {};
    formData.forEach((value, key) => {
      formDataJSON[key] = value;
    });
    console.log("Form Data:", formDataJSON);
  };

  return (
    <div className={styles.contents__form}>
      <form className={styles.form__wrapper} onSubmit={handleSubmit}>
        <h3>Contact information</h3>

        {/* First Name and Last Name input fields */}
        <div className={styles.form_group}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.form_input}
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.form_input}
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email and Phone input fields */}
        <div className={styles.form_group}>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.form_input}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className={styles.form_input}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Event Name, Date, Start Time, End Time, and Estimated Group Size input fields */}
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
            <label htmlFor="startTime" className={styles.form_label}>
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
              // style={{ padding: "16px 64px" }}
            />
          </div>

          <div className={styles.form_pair}>
            <label htmlFor="startTime" className={styles.form_label}>
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              className={styles.form_input}
              value={formData.startTime}
              onChange={handleInputChange}
              required
              // style={{ padding: "16px 64px" }}
            />
          </div>
          {/* <div className={styles.form_group}>
          </div> */}

          <div className={styles.form_pair}>
            <label htmlFor="endTime" className={styles.form_label}>
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              className={styles.form_input}
              value={formData.endTime}
              onChange={handleInputChange}
              required
              // style={{ padding: "16px 64px" }}
            />
          </div>
          {/* <div className={styles.form_group}>
          </div> */}
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

        {/* Serving Alcohol, scheduleTour, and Phone Booth selection */}
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

        {/* Message textarea */}
        <textarea
          name="message"
          id="message"
          className={styles.form_textarea}
          placeholder="Type Your Message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
        ></textarea>

        {/* Agreement checkbox */}
        <div className={styles.form_agreement}>
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            className="inp-cbx"
            checked={formData.agreement}
            onChange={handleInputChange}
            required
          />
          <p>
            I agree to the <Link href="/">terms and conditions</Link>
          </p>
        </div>

        {/* Newsletter checkbox */}
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

        {/* Submit button */}
        <button type="submit" className={styles.form_btn}>
          Send a request
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
