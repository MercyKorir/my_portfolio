import React from "react";
import Image from "next/image";
import { WorkData } from "@/types/types";
import styles from "../../styles/WorkDetails.module.css";

interface WorkDetailsProps {
  selectedData: WorkData;
}

const WorkDetails: React.FC<WorkDetailsProps> = ({ selectedData }) => {
  return (
    <div className={styles.workDetailsContainer}>
      <div className={styles.titleContainer}>
        <h2>{selectedData.title}</h2>
        <p>{selectedData.organization}</p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={`/images/${selectedData.imageName}`}
          width={500}
          height={400}
          alt={selectedData.title}
          className={styles.img}
        />
      </div>
      <div className={styles.descriptionTech}>
        <div className={styles.descriptionContainer}>
          <h4>Responsibilities</h4>
          <p>{selectedData.description}</p>
        </div>
        <div className={styles.techContainer}>
          <h4>Technologies</h4>
          <div className={styles.frontend}>
            <h5>Frontend Technologies</h5>
            <ul>
              {selectedData.frontTechnologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.frontend}>
            <h5>Backend Technologies</h5>
            <ul>
              {selectedData.backTechnologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
