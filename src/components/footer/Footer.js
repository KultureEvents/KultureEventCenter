"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
  Footer6,
} from "../../../public/images";
const carouselItemStyles = [
  "item-1",
  "item-2",
  "item-3",
  "item-4",
  "item-5",
  "item-6",
  "item-7",
  "item-8",
  "item-9",
  "item-10",
  "item-11",
  "item-12",
  "item-13",
];

import {
  WhatsApp,
  Facebook,
  Instagram,
  Logo,
  Tiktok,
} from "../../../public/svg";
const Footer = () => {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={styles.footer__container}>
        <div className={`${styles.footer__header} container`}>
          <Logo />
          <h3 className={styles["footer__header-company"]}>Kulture Events</h3>
        </div>

        <div className={styles.footer__carousel}>
          <div className={styles.footer__carousel}>
            {[...Array(13)].map((_, index) => (
              <span
                key={index}
                className={`${styles["footer__carousel-item"]} ${
                  styles[carouselItemStyles[index]]
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className={`${styles.footer__links} container`}>
          <ul className={styles["footer__links-social"]}>
            <li>
              <Link href="/">
                <WhatsApp />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/kultureeventsatl?mibextid=LQQJ4d"
                target="_blank"
              >
                <Facebook />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/kultureeventsatl?igsh=MWM0bXgxanU3OWpteg%3D%3D&utm_source=qr"
                target="_blank"
              >
                <Instagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@kultureeventsatl?_t=8lqnrFfsuUw&_r=1"
                target="_blank"
              >
                <Tiktok />
              </Link>
            </li>
          </ul>

          <div className={styles.footer__group}>
            <small className={styles["footer__link-text"]}>
              © KULTURE EVENTS {new Date().getFullYear()}
            </small>

            <Link href="/" className={styles["footer__link-link"]}>
              PRIVACY POLICY & TERMS
            </Link>
          </div>

          <Link
            href="https://www.radiksez.com/"
            className={styles["footer__link-text"]}
            target="_blank"
          >
            DESIGN INSPIRED BY RADIKSEZ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
