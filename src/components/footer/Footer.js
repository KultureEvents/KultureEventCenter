import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { client } from "@/sanityClient/sanity";

export const getFooterImages = async () => {
  try {
    const groqQuery = `*[_type == "footer"]{
      "Title": "Footer Images",
      "footerImages": footerImages[].asset->url
    }`;

    const data = await client.fetch(groqQuery);

    return data;
  } catch (error) {
    console.error("Error fetching footer images:", error.message);
    return null;
  }
};

import {
  Facebook,
  Instagram,
  Logo,
  Tiktok,
  YouTube,
} from "../../../public/svg";
const Footer = async () => {
  const footerImages = await getFooterImages();
  const carouselItems = footerImages[0]?.footerImages;
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
                className={`${styles["footer__carousel-item"]}`}
                style={{
                  backgroundImage: `url(${carouselItems[index]})`,
                }}
              ></span>
            ))}
          </div>
        </div>

        <div className={`${styles.footer__links} container`}>
          <ul className={styles["footer__links-social"]}>
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
            <li>
              <Link
                href="https://www.facebook.com/kultureeventsatl?mibextid=LQQJ4d"
                target="_blank"
              >
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" target="_blank">
                <YouTube />
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
