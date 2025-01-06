import React from "react";
import Image from "next/image";
import { WorkData } from "@/types/types";
import styles from "../../styles/WorkDetails.module.css";

interface WorkDetailsProps {
  selectedData: WorkData;
}

const WorkDetails: React.FC<WorkDetailsProps> = ({ selectedData }) => {
  const basePath = process.env.BASE_PATH || '';

  return (
    <div className={styles.workDetailsContainer}>
      <div className={styles.titleContainer}>
        <h2>{selectedData.title}</h2>
        <p>{selectedData.organization}</p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={`${basePath}/images/${selectedData.imageName}`}
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
          <div className={styles.frontendBackend}>
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
      {selectedData.webUrl && (
        <div className={styles.webUrlContainer}>
          <h4>Website:</h4>
          <p>{selectedData.webUrl}</p>
        </div>
      )}
      {selectedData.imagesPath && (
        <div className={styles.imagesContainer}>
          <h4>Project Images</h4>
          <div className={styles.imagesItems}>
            {selectedData.imagesPath.map((img, index) => (
              <Image
                key={index}
                src={`${basePath}/images/work-images/${img}`}
                width={500}
                height={400}
                alt={selectedData.title}
                className={styles.imgItem}
              />
            ))}
          </div>
        </div>
      )}
      <div className={styles.modalFooterContainer}></div>
    </div>
  );
};

export default WorkDetails;
