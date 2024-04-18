import React from "react";

const SingleEventHall = ({ params }) => {
  return (
    <section className="section event-hall">
      <div className="event-hall__container container">
        <h1 className="title">Event Hall</h1>
        <p className="subtitle">
          This is the single event hall page {params.slug}
        </p>
      </div>
    </section>
  );
};

export default SingleEventHall;
