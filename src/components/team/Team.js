import React from "react";
import styles from "./Team.module.css"; // Import CSS module
import Image from "next/image";
import Link from "next/link";

const Team = ({ teamImages }) => {
  return (
    <section className={`${styles.team} section`}>
      <div className={`${styles.team__container} container`}>
        <div className={styles.team__containerImages}>
          <div className={styles.team__containerImage}>
            <Image src={teamImages[0]} alt="team" width={292} height={371} />
            <p className={styles.team__containerImageDesc}>
              KELSEY, EVENT PLANNER
            </p>
          </div>

          <div className={styles.team__containerImage}>
            <Image src={teamImages[1]} alt="team" width={292} height={371} />
            <p className={styles.team__containerImageDesc}>
              ASHLEY, EVENT PLANNER
            </p>
          </div>
        </div>

        <div className={styles.team__containerText}>
          <h2 className={styles.team__container_textTitle}>Meet The Team</h2>
          <p className={styles.team__container_textSubtitle}>
            Get to know the amazing team behind Kulture Events! Discover the
            dedicated professionals who work tirelessly to plan and execute
            unforgettable events. Meet the team and experience firsthand their
            passion, creativity, and expertise that make Kulture Events the
            go-to choice for all your event needs
          </p>

          <Link href="/about" className={styles.team__container_textLink}>
            <span>About Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
