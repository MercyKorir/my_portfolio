import React from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../styles/WorkCard.module.css";

interface WorkCardProps {
  title: string;
  organization: string;
  imageName: string;
  clickFunction: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  organization,
  imageName,
  clickFunction,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardImageContainer}>
          <Image
            src={`/images/${imageName}`}
            alt={title}
            width={320}
            height={200}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardTitle}>
          <h3>{title}</h3>
          <p>{organization}</p>
          <span onClick={clickFunction}>
            <ExpandMoreIcon fontSize="inherit" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
