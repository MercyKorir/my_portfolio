import React, { useEffect, useId, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../../styles/ProjectCard.module.css";
import { ProjectData } from "@/types/types";
import { CldVideoPlayer } from "next-cloudinary";
import { sanitized } from "@/utils/helpers";

interface ProjectCardProps {
  project: ProjectData;
  clickFunction: () => void;
  isModalOpen: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  clickFunction,
  isModalOpen,
}) => {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const basePath = process.env.BASE_PATH || "";
  const reactId = useId();

  useEffect(() => {
    if (project.demoUrl || project.cldPublicId) {
      const timer = setTimeout(() => {
        setShowThumbnail(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [project.demoUrl, project.cldPublicId]);

  useEffect(() => {
    if (!project.cldPublicId || showThumbnail || videoError) return;

    const videoId = `${sanitized(
      `detail-${project.title}`,
      project.cldPublicId
    )}-${reactId}`;

    const playerElement = document.getElementById(videoId);
    if (!playerElement) return;

    const videoElement = playerElement.querySelector("video");
    if (!videoElement) return;

    if (isModalOpen) {
      videoElement.pause();
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isModalOpen) {
              videoElement
                .play()
                .catch((error) =>
                  console.error(`Error playing video: ${error}`)
                );
            } else {
              videoElement.pause();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(playerElement);
      return () => observer.disconnect();
    }
  }, [
    isModalOpen,
    project.cldPublicId,
    showThumbnail,
    videoError,
    reactId,
    project.title,
  ]);

  const handleVideoError = () => {
    setVideoError(true);
    setShowThumbnail(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderImage = () => {
    if (project.cldImgPublicId && !imageError) {
      return (
        <Image
          className={styles.projectImage}
          width={700}
          height={400}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${project.cldImgPublicId}`}
          alt={project.title}
          onError={handleImageError}
          loading="lazy"
        />
      );
    }

    return (
      <Image
        src={`${basePath}/images/${project.imageName}`}
        alt={project.title}
        width={700}
        height={400}
        className={styles.projectImage}
        loading="lazy"
      />
    );
  };

  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.projectCardContent}>
        <div className={styles.projectImageContainer}>
          {project.demoUrl || project.cldPublicId ? (
            showThumbnail || videoError ? (
              renderImage()
            ) : project.cldPublicId ? (
              <div className={styles.reactPlayerWrapper}>
                <CldVideoPlayer
                  id={`${sanitized(
                    `card-${project.title}`,
                    project.cldPublicId
                  )}-${reactId}`}
                  className={styles.reactPlayer}
                  width="100%"
                  height="100%"
                  src={project.cldPublicId}
                  autoplay="on-scroll"
                  loop={true}
                  muted={true}
                  controls={false}
                  aspectRatio="16:9"
                  playbackRates={[1]}
                  playsinline={true}
                  bigPlayButton={false}
                  onError={handleVideoError}
                />
              </div>
            ) : (
              <div className={styles.reactPlayerWrapper}>
                <ReactPlayer
                  className={styles.reactPlayer}
                  width="100%"
                  height="100%"
                  url={project.demoUrl}
                  playing={!showThumbnail && !isModalOpen}
                  controls={false}
                  light={false}
                  loop={true}
                  volume={0}
                  muted={true}
                  playsinline={true}
                />
              </div>
            )
          ) : (
            renderImage()
          )}
        </div>
        <span className={styles.projectTitleContainer}>
          <div className={styles.projectTitleDescription}>
            <h3>{project.title}</h3>
          </div>
          <button className={styles.detailsButton} onClick={clickFunction}>
            View Details
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
