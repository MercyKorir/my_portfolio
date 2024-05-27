import React from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../styles/WorkCard.module.css";
import { WorkData } from "@/types/types";

interface WorkCardProps {
  work: WorkData;
  clickFunction: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({
  work,
  clickFunction,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardImageContainer}>
          <Image
            src={`/images/${work.imageName}`}
            alt={work.title}
            width={320}
            height={200}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardTitle}>
          <h3>{work.title}</h3>
          <p>{work.organization}</p>
          <span onClick={clickFunction}>
            <ExpandMoreIcon fontSize="inherit" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
