"use client";
import React, { useState } from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";
import {
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
  galleryImg10,
  galleryImg11,
  galleryImg12,
} from "../../../public/images";
import { Arrow1, Arrow2 } from "../../../public/svg";

const Gallery = () => {
  const galleryImages = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9,
    galleryImg10,
    galleryImg11,
    galleryImg12,
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, galleryImages.length);
  const displayedImages = galleryImages.slice(startIndex, endIndex);

  return (
    <section className={`${styles.gallery} section`}>
      <div className={`${styles.gallery__container} container`}>
        <div className={`${styles.gallery__container_contents}`}>
          {displayedImages.map((img, index) => (
            <div key={index} className={styles.gallery__contents_item}>
              <Image src={img} alt="Gallery Image" width={448} height={488} />
            </div>
          ))}
        </div>

        <div className={styles.gallery__pagination}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={styles.gallery__pagination_btn}
          >
            <Arrow1 />
          </button>

          <span>{`${currentPage} / ${totalPages}`}</span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={styles.gallery__pagination_btn}
          >
            <Arrow2 />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
