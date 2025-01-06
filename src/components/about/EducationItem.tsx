import React from "react";
import Image from "next/image";
import { EducationData } from "@/types/types";
import styles from "../../styles/EducationItem.module.css";

interface EducationItemProps {
  education: EducationData;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
  const basePath = process.env.BASE_PATH || '';

  return (
    <div className={styles.educationItemContainer}>
      <div className={styles.headerContainer}>
        <h5>{education.title}</h5>
        <div className={styles.descriptionContainer}>
          <p>{education.description[0]}</p>
          <p>{education.description[1]}</p>
          <p>{education.description[2]}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`${basePath}/images/about-assets/${education.imageName}`}
          alt={education.title}
          width={700}
          height={400}
          className={styles.educationImage}
        />
      </div>
    </div>
  );
};

export default EducationItem;
