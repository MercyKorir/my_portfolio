import React from "react";
import styles from "../../styles/ModalCard.module.css";
import { WorkData, ProjectData } from "@/types/types";
import CloseIcon from "@mui/icons-material/Close";
import ModalContent from "./ModalContent";

interface ModalCardProps {
  selectedData: WorkData | ProjectData | null;
  closeFn: () => void;
}

const ModalCard: React.FC<ModalCardProps> = ({ selectedData, closeFn }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardComponent}>
        <span onClick={closeFn} className={styles.closeBtn}>
          <CloseIcon fontSize="inherit" />
        </span>
        <div className={styles.cardContent}>
          <ModalContent selectedData={selectedData} />
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
