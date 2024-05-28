import React from "react";
import Image from "next/image";
import { CertificationData } from "@/types/types";
import styles from "../../styles/CertItem.module.css";

interface CertItemProps {
  cert: CertificationData;
  isLastItem: boolean;
}

const CertItem: React.FC<CertItemProps> = ({ cert, isLastItem }) => {
  return (
    <div
      className={`${styles.certItemContainer} ${
        !isLastItem ? styles.borderedBottom : ""
      }`}
    >
      <div className={styles.headerImageContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.leftTitle}>
            <h5 className={styles.title}>{cert.title}</h5>
            <h5 className={styles.otherTitle}>{cert.courseName}</h5>
          </div>
          <div className={styles.rightTitle}>
            <h5 className={styles.otherTitle}>{cert.date}</h5>
            <h5 className={styles.otherTitle}>{cert.organization}</h5>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/about-assets/${cert.imageName}`}
            width={700}
            height={400}
            alt={cert.title}
            className={styles.certImage}
          />
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <p>{cert.description}</p>
      </div>
    </div>
  );
};

export default CertItem;
