"use client";
// import React from "react";
// import styles from "./page.module.css";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// import { bookingDetails } from "@/data/data"; // Import the bookingDetails array

// const BookingsPage = () => {
//   const searchParams = useSearchParams();
//   const selectedPackage = searchParams.get("package");

//   // Find the selected package details from the bookingDetails array
//   const selectedBookingDetails = bookingDetails.find(
//     (packageDetail) => packageDetail.name === selectedPackage
//   );

//   return (
//     <section className="section bookings">
//       <div className="bookings__container container">
//         <h1 className="title">Bookings</h1>
//         {selectedPackage ? (
//           <>
//             <div>
//               <h2>{selectedBookingDetails.name} Package Details</h2>
//               <p>Fee: {selectedBookingDetails.fee}</p>
//               <Image
//                 src={selectedBookingDetails.images[0]}
//                 alt="package"
//                 width={160}
//                 height={150}
//               />
//               <Image
//                 src={selectedBookingDetails.images[1]}
//                 alt="package"
//                 width={160}
//                 height={150}
//               />
//               <h3>Add-Ons:</h3>
//               <ul>
//                 {selectedBookingDetails.addOn.map((addOn, index) => (
//                   <li key={index}>
//                     {addOn.star}
//                     <p>{addOn.text}</p>
//                     <p>Fee: {addOn.fee}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </>
//         ) : (
//           <p className="subtitle">Please select a package to proceed.</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BookingsPage;

// // import React from 'react'

// // const BookingPage = () => {
// //   return (
// //     <div>BookingPage</div>
// //   )
// // }

// // export default BookingPage

import React, { Suspense } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { bookingDetails } from "@/data/data"; // Import the bookingDetails array

const BookingsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingsContent />
    </Suspense>
  );
};

const BookingsContent = () => {
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");

  // Find the selected package details from the bookingDetails array
  const selectedBookingDetails = bookingDetails.find(
    (packageDetail) => packageDetail.name === selectedPackage
  );

  return (
    <section className="section bookings">
      <div className="bookings__container container">
        <h1 className="title">Bookings</h1>
        {selectedPackage ? (
          <>
            <div>
              <h2>{selectedBookingDetails.name} Package Details</h2>
              <p>Fee: {selectedBookingDetails.fee}</p>
              <Image
                src={selectedBookingDetails.images[0]}
                alt="package"
                width={160}
                height={150}
              />
              <Image
                src={selectedBookingDetails.images[1]}
                alt="package"
                width={160}
                height={150}
              />
              <h3>Add-Ons:</h3>
              <ul>
                {selectedBookingDetails.addOn.map((addOn, index) => (
                  <li key={index}>
                    {addOn.star}
                    <p>{addOn.text}</p>
                    <p>Fee: {addOn.fee}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="subtitle">Please select a package to proceed.</p>
        )}
      </div>
    </section>
  );
};

export default BookingsPage;
