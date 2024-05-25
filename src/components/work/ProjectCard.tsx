import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../../styles/ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageName: string;
  demoUrl?: string;
  clickFunction: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageName,
  demoUrl,
  clickFunction,
}) => {
  const [showThumbnail, setShowThumbnail] = useState(true);

  useEffect(() => {
    if (demoUrl) {
      const timer = setTimeout(() => {
        setShowThumbnail(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [demoUrl]);

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardContent} onClick={clickFunction}>
        <div className={styles.projectImageContainer}>
          {demoUrl ? (
            showThumbnail ? (
              <Image
                src={`/images/${imageName}`}
                alt={title}
                width={500}
                height={400}
                className={styles.projectImage}
              />
            ) : (
              <ReactPlayer
                width="100%"
                height="100%"
                url={demoUrl}
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
              src={`/images/${imageName}`}
              alt={title}
              width={500}
              height={400}
              className={styles.projectImage}
            />
          )}
        </div>
        <span className={styles.projectTitleContainer}>
          <h3>{title}</h3>
          <p>{description}</p>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
