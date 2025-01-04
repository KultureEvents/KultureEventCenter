"use client";
import React, { useState } from "react";
import styles from "./Gallery.module.css";
import Image from "next/image";
import { Arrow1, Arrow2 } from "../../../public/svg";

const Gallery = ({ galleryImages }) => {
  const actualGalleryImages = galleryImages[0]?.galleryImages;
  const itemsPerPage = 20;
  const totalPages = Math.ceil(actualGalleryImages?.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    actualGalleryImages?.length
  );
  const displayedImages = actualGalleryImages?.slice(startIndex, endIndex);

  const handleImageClick = (index) => {
    setEnlargedImageIndex(index);
  };

  const handleCloseModal = () => {
    setEnlargedImageIndex(null);
  };

  const handleModalNext = () => {
    if (enlargedImageIndex < actualGalleryImages.length - 1) {
      setEnlargedImageIndex(enlargedImageIndex + 1);
    }
  };

  const handleModalPrev = () => {
    if (enlargedImageIndex > 0) {
      setEnlargedImageIndex(enlargedImageIndex - 1);
    }
  };

  return (
    <section className={`${styles.gallery} section`}>
      <div className={`${styles.gallery__container} container`}>
        <div className={`${styles.gallery__container_contents}`}>
          {displayedImages?.map((img, index) => (
            <div
              key={index}
              className={styles.gallery__contents_item}
              onClick={() => handleImageClick(startIndex + index)}
            >
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

      {enlargedImageIndex !== null && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <Image
              src={actualGalleryImages[enlargedImageIndex]}
              alt="Enlarged Image"
              width={800}
              height={800}
              className={styles.modalImage}
            />

            <div className={styles.modalNav}>
              <button
                onClick={handleModalPrev}
                disabled={enlargedImageIndex === 0}
                className={styles.modalNavButton}
              >
                <Arrow1 />
              </button>
              <button
                onClick={handleModalNext}
                disabled={enlargedImageIndex === actualGalleryImages.length - 1}
                className={styles.modalNavButton}
              >
                <Arrow2 />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
