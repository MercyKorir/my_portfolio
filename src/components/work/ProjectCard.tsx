import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../../styles/ProjectCard.module.css";
import { ProjectData } from "@/types/types";

interface ProjectCardProps {
  project: ProjectData;
  clickFunction: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  clickFunction,
}) => {
  const [showThumbnail, setShowThumbnail] = useState(true);

  useEffect(() => {
    if (project.demoUrl) {
      const timer = setTimeout(() => {
        setShowThumbnail(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [project.demoUrl]);

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardContent} onClick={clickFunction}>
        <div className={styles.projectImageContainer}>
          {project.demoUrl ? (
            showThumbnail ? (
              <Image
                src={`/images/${project.imageName}`}
                alt={project.title}
                width={700}
                height={400}
                className={styles.projectImage}
              />
            ) : (
              <ReactPlayer
                width="700px"
                height="400px"
                url={project.demoUrl}
                playing={true}
                controls={false}
                light={false}
                loop={true}
                volume={0}
                muted={true}
                playsinline={true}
              />
            )
          ) : (
            <Image
              src={`/images/${project.imageName}`}
              alt={project.title}
              width={700}
              height={400}
              className={styles.projectImage}
            />
          )}
        </div>
        <span className={styles.projectTitleContainer}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
