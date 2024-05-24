import React from "react";
import Image from "next/image";
import styles from "../../styles/WorkCard.module.css";

interface WorkCardProps {
  title: string;
  imageName: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, imageName }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <Image
            src={`/images/${imageName}`}
            alt={title}
            width={320}
            height={200}
          />
        </div>
        <div className={styles.cardTitle}>
            <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
