"use client";
import React, { useState } from "react";
import styles from "./Testimonial.module.css";
import { Quote, Arrow1, Arrow2 } from "../../../public/svg";

const testimonials = [
  {
    quote:
      "The place is beautiful, spacious, and it’s already setup in such a way that you don’t have to do too much. I highly recommend this place and will book again.",
    name: "Kevin",
  },

  {
    quote:
      "The venue is beautiful and the staff is amazing. I would definitely recommend this venue to anyone looking for a place to host an event. I will definitely be booking again.",

    name: "John",
  },

  {
    quote:
      "it was a great experience. The staff was very helpful and the venue was beautiful. I would definitely recommend this place to anyone looking for a venue to host an event. I will definitely be booking again.",

    name: "Sarah",
  },

  {
    quote:
      "I love this place! The staff is amazing and the venue is beautiful. I would definitely recommend this place to anyone looking for a venue to host an event. I will definitely be booking again.",

    name: "Allie",
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section className={`${styles.testimonial} section`}>
      <div className={`${styles.testimonial__container} container`}>
        <div className={styles.testimonial__content}>
          <Quote />
          <p className={styles.testimonial__contentDesc}>
            {currentTestimonial.quote}
          </p>
        </div>

        <h3>{currentTestimonial.name}</h3>

        <div className={styles.testimonial__navigation}>
          <Arrow1 onClick={prevTestimonial} />
          <Arrow2 onClick={nextTestimonial} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
