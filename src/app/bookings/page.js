"use client";

import React, { Suspense } from "react";
import BookingContent from "@/appSections/bookingSection/BookingContent";

const BookingsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex">
          {/* <p className="spinner"></p>
          <span>Loading...</span> */}
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
};

export default BookingsPage;
