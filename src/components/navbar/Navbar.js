"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import { NavLinks } from "@/data/data";
import "./Navbar.css";
import {
  Facebook,
  Instagram,
  LongArr,
  Logo,
  Close,
  Open,
  Tiktok,
  YouTube,
} from "../../../public/svg";

const Navbar = () => {
  const navMenu = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  // const [toggleNavMenu, setToggleNavMenu] = useState(false);

  useEffect(() => {
    showLinks
      ? navMenu.current.classList.add("show-menu")
      : navMenu.current.classList.remove("show-menu");
  }, [showLinks]);

  const handleNavMenuClose = () => {
    // setToggleNavMenu(false);
    setShowLinks(false);
  };

  const handleNavMenuOpen = () => {
    // setToggleNavMenu(true);
    setShowLinks(true);
  };

  const handleNavLinkClose = () => {
    setShowLinks(false);
    // setToggleNavMenu(!toggleNavMenu);
  };

  return (
    <div className="navbar__layout">
      <div className="navbar-banner flex">
        <div className="navbar-banner__container">
          <div className="navbar-banner__socials">
            <ul className="flex">
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
                <Link
                  href="https://youtube.com/@kultureeventsatl?si=G8ys3N2OXLI4p6Vd"
                  target="_blank"
                >
                  <YouTube />
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/schedule-meeting" className="navbar-banner__link">
            <p>Schedule a Facility Tour</p>
            <LongArr />
          </Link>
        </div>
      </div>

      <header className="navbar">
        <nav className="navbar__container container">
          <Link href="/" className="navbar__logo">
            <Logo />
          </Link>

          <div className="nav__menu" ref={navMenu}>
            <div className="nav__toggle-close" onClick={handleNavMenuClose}>
              <Close />
            </div>

            <div className="nav__text">
              <p>Menu</p>
              <span className="nav__text-divider"></span>
            </div>

            <ul className="nav__list">
              {NavLinks.map((link) => {
                const { id, title, url } = link;
                return (
                  <li className="nav__item" key={id}>
                    <Link
                      href={url}
                      className="nav__link"
                      onClick={handleNavLinkClose}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="nav__socials">
              <ul className="flex">
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
                  <Link
                    href="https://youtube.com/@kultureeventsatl?si=G8ys3N2OXLI4p6Vd"
                    target="_blank"
                  >
                    <YouTube />
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="/schedule-meeting" className="nav__btn-link">
              Schedule For A Facility Inspection
            </Link>
          </div>

          <div className="nav__toggle" onClick={handleNavMenuOpen}>
            <Open />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
