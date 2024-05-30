import React from "react";
import Image from "next/image";
import { ProjectData } from "@/types/types";
import ReactPlayer from "react-player";
import styles from "../../styles/ProjectDetails.module.css";

interface ProjectDetailsProps {
  selectedData: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ selectedData }) => {
  return (
    <div className={styles.projectDetailsContainer}>
      <div className={styles.titleContainer}>
        <h2>{selectedData.title}</h2>
        <p>{selectedData.description}</p>
      </div>
      <div className={styles.imageVideoContainer}>
        {selectedData.demoUrl ? (
          <ReactPlayer
            width="100%"
            height="100%"
            url={selectedData.demoUrl}
            playing={true}
            controls={true}
            light={false}
            loop={true}
            volume={0}
            muted={true}
            playsinline={true}
          />
        ) : (
          <Image
            src={`/images/${selectedData.imageName}`}
            width={500}
            height={400}
            alt={selectedData.title}
            className={styles.img}
          />
        )}
      </div>
      <div className={styles.problemSolutionContainer}>
        {selectedData.problem && (
          <div className={styles.problemContainer}>
            <h4>Problem</h4>
            <p>{selectedData.problem}</p>
          </div>
        )}
        {selectedData.solution && (
          <div className={styles.solutionContainer}>
            <h4>Solution</h4>
            <p>{selectedData.solution}</p>
          </div>
        )}
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
                src={`/images/project-images/${img}`}
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

export default ProjectDetails;
