import React, { useState } from "react";
import styles from "./BookingForm.module.css";
import Link from "next/link";

const BookingForm = () => {
  // Define state to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventName: "",
    date: "",
    startTime: "",
    endTime: "",
    size: "",
    servingAlcohol: "",
    tour: "",
    phoneBooth: "",
    message: "",
    agreement: false,
    news: false,
  });
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
    // Access the form data stored in formData state
    console.log(formData);

    // Here you can perform further actions like sending the data to a backend
    // Example:
    // sendFormDataToServer(formData);
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
            id="phone"
            name="phone"
            className={styles.form_input}
            placeholder="Phone Number"
            value={formData.phone}
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
          <select
            id="startTime"
            name="startTime"
            className={styles.form_input}
            value={formData.startTime}
            onChange={handleInputChange}
            required
          >
            <option value="">Start Time</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
          </select>
          <select
            id="endTime"
            name="endTime"
            className={styles.form_input}
            value={formData.endTime}
            onChange={handleInputChange}
            required
          >
            <option value="">End Time</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">01:00 PM</option>
          </select>
        </div>
        <input
          type="number"
          id="size"
          name="size"
          className={styles.form_input}
          placeholder="Estimated Group Size"
          value={formData.size}
          onChange={handleInputChange}
          required
        />

        {/* Serving Alcohol, Tour, and Phone Booth selection */}
        <select
          id="servingAlcohol"
          name="servingAlcohol"
          className={styles.form_select}
          value={formData.servingAlcohol}
          onChange={handleInputChange}
          required
        >
          <option value="">Will You Be Serving Alcohol? *</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        <select
          id="tour"
          name="tour"
          className={styles.form_select}
          value={formData.tour}
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
          required
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
