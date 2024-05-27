import React from "react";
import { ProjectData } from "@/types/types";
import ReactPlayer from "react-player";
import styles from "../../styles/ProjectDetails.module.css";

interface ProjectDetailsProps {
  selectedData: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ selectedData }) => {
  return (
    <div className={styles.projectDetailsContainer}>
      <h2>{selectedData.title}</h2>
      <p>{selectedData.description}</p>
      {selectedData.demoUrl && (
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
      )}
    </div>
  );
};

export default ProjectDetails;
