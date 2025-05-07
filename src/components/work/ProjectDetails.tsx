import React, { useId, useState } from "react";
import Image from "next/image";
import { ProjectData } from "@/types/types";
import ReactPlayer from "react-player";
import { CldVideoPlayer } from "next-cloudinary";
import { GitHub } from "@mui/icons-material";
import { Globe } from "lucide-react";
import { sanitized } from "@/utils/helpers";
import styles from "../../styles/ProjectDetails.module.css";

interface ProjectDetailsProps {
  selectedData: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ selectedData }) => {
  const basePath = process.env.BASE_PATH || "";
  const [videoError, setVideoError] = useState(false);
  const reactId = useId();

  const handleVideoError = () => {
    setVideoError(true);
  };

  const renderVideo = () => {
    if (videoError) {
      return (
        <Image
          src={`${basePath}/images/${selectedData.imageName}`}
          width={500}
          height={400}
          alt={selectedData.title}
          className={styles.img}
        />
      );
    }

    if (selectedData.cldPublicId) {
      return (
        <CldVideoPlayer
          id={`${sanitized(
            `detail-${selectedData.title}`,
            selectedData.cldPublicId
          )}-${reactId}`}
          width="100%"
          height="100%"
          src={selectedData.cldPublicId}
          autoplay="on-scroll"
          loop={true}
          muted={true}
          controls={true}
          aspectRatio="16:9"
          playbackRates={[1]}
          playsinline={true}
          onError={handleVideoError}
        />
      );
    }

    if (selectedData.demoUrl) {
      return (
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
      );
    }

    return (
      <Image
        src={`${basePath}/images/${selectedData.imageName}`}
        width={500}
        height={400}
        alt={selectedData.title}
        className={styles.img}
      />
    );
  };

  return (
    <div className={styles.projectDetailsContainer}>
      <div className={styles.titleContainer}>
        <h2>{selectedData.title}</h2>
        <p>{selectedData.description}</p>
        <div className={styles.techStack}>
          {selectedData.technologies?.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.imageVideoContainer}>{renderVideo()}</div>
      <div className={styles.contentContainer}>
        <div className={styles.problemSolutionContainer}>
          {selectedData.problem && (
            <div className={styles.problemContainer}>
              <h4>Challenge</h4>
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
        <div className={styles.linksContainer}>
          {selectedData.githubUrl && (
            <a
              href={selectedData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <GitHub fontSize="inherit" />
              <span>View Code</span>
            </a>
          )}
          {selectedData.webUrl && (
            <a
              href={selectedData.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <Globe size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
        {selectedData.imagesPath && (
          <div className={styles.imagesContainer}>
            <h4>Project Images</h4>
            <div className={styles.imagesItems}>
              {selectedData.imagesPath.map((img, index) => (
                <Image
                  key={index}
                  src={`${basePath}/images/project-images/${img}`}
                  width={500}
                  height={400}
                  alt={selectedData.title}
                  className={styles.imgItem}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={styles.modalFooterContainer}></div>
    </div>
  );
};

export default ProjectDetails;
