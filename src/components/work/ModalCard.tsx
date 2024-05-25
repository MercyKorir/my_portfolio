import React, { ReactNode } from "react";
import styles from "../../styles/ModalCard.module.css";
import { WorkData, ProjectData } from "@/types/types";

interface ModalCardProps {
  selectedData: WorkData | ProjectData | null;
  children?: ReactNode;
  closeFn: () => void;
}

const ModalCard: React.FC<ModalCardProps> = ({
  selectedData,
  closeFn,
  children,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardComponent}>
        <span onClick={closeFn} className={styles.closeBtn}></span>
        <div className={styles.cardContent}>{children}</div>
      </div>
    </div>
  );
};

export default ModalCard;
