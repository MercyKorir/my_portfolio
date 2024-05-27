import { ProjectData, WorkData } from "@/types/types";
import React from "react";
import styles from "../../styles/ModalContent.module.css";
import WorkDetails from "./WorkDetails";
import ProjectDetails from "./ProjectDetails";

interface ModalContentProps {
  selectedData: WorkData | ProjectData | null;
}

const ModalContent: React.FC<ModalContentProps> = ({ selectedData }) => {
  if (!selectedData) return null;

  return (
    <div className={styles.modalContentContainer}>
      {"organization" in selectedData ? (
        <WorkDetails selectedData={selectedData as WorkData} />
      ) : (
        <ProjectDetails selectedData={selectedData as ProjectData} />
      )}
    </div>
  );
};

export default ModalContent;
