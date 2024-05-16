"use client";
import React from "react";
import styles from "./page.module.css";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const ScheduleMeeting = () => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  return (
    <section className={`${styles.meeting} section`}>
      <InlineWidget
        url="https://calendly.com/info-thcx/kultureevents"
        className={`${styles.meeting__container} container`}
      />
    </section>
  );
};

export default ScheduleMeeting;
