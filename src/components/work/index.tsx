import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import WorkCard from "./WorkCard";
import ProjectCard from "./ProjectCard";
import ModalCard from "./ModalCard";
import styles from "../../styles/Work.module.css";
import userIntersectionObserver from "@/hooks/userIntersectionObserver";
import { WorkData, ProjectData } from "@/types/types";
import workData from "@/data/workData";
import projectData from "@/data/projectData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollIndicator from "../common/ScrollIndicator";

interface WorkSectionProps {}

const WorkSection: React.FC<WorkSectionProps> = () => {
  const { isVisible, containerRef } = userIntersectionObserver();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<
    WorkData | ProjectData | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const workListRef = useRef<HTMLDivElement>(null);

  const basePath = process.env.BASE_PATH || "";

  useEffect(() => {
    if (showModal) {
      const allVideos = document.querySelectorAll("video");
      allVideos.forEach((video: HTMLVideoElement) => {
        video.pause();
      });
    }
  }, [showModal]);

  const handleShowWorkDetails = (work: WorkData) => {
    setSelectedData(work);
    setShowModal(true);
  };

  const handleShowProjectDetails = (project: ProjectData) => {
    setSelectedData(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedData(null);
  };

  const scrollToIndex = (index: number) => {
    if (workListRef.current) {
      const cards = workListRef.current.children;

      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < workData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <Head>
        <title>My Work - My Portfolio</title>
        <meta
          name="description"
          content="Learn more about my work and my projects."
        />
      </Head>
      <div className={styles.workContainer}>
        <div className={styles.workContent}>
          <div
            className={styles.introContainer}
            style={{
              backgroundImage: `url('${basePath}/images/otherbg.svg')`,
            }}
          >
            <div className={styles.introContent}>
              <div className={styles.introHeader}>
                <div className={styles.introHeaderContent}>
                  <h1>The Pixel Playground</h1>
                  <p>
                    Welcome to the showcase of my digital artistry. Here, you'll
                    find a curated collection of projects that have challenged
                    me, inspired me, and ultimately fueled my growth as a web
                    developer. Prepare to be captivated by the fusion of
                    functionality and design, as I unveil the stories behind
                    each creation
                  </p>
                </div>
              </div>
              <div className={styles.workExpContainer}>
                <h4 className={styles.workExpTitle}>Work Experience</h4>
                <div className={styles.workExpWrapper}>
                  <div className={styles.workExpList} ref={workListRef}>
                    {workData.map((work, index) => (
                      <WorkCard
                        key={index}
                        work={work}
                        clickFunction={() => handleShowWorkDetails(work)}
                      />
                    ))}
                  </div>
                  <div className={styles.navigationButtons}>
                    <button
                      className={`${styles.navButton} ${
                        currentIndex === 0 ? styles.disabled : ""
                      }`}
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      className={`${styles.navButton} ${
                        currentIndex === workData.length - 1
                          ? styles.disabled
                          : ""
                      }`}
                      onClick={handleNext}
                      disabled={currentIndex === workData.length - 1}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
              <ScrollIndicator />
            </div>
          </div>
          <div
            className={styles.projectsContainer}
            style={{
              backgroundImage: `url('${basePath}/images/otherbg2.svg')`,
            }}
          >
            <div className={styles.projectsContent}>
              <h4 className={styles.projectsTitle}>My Projects</h4>
              <div className={`${styles.projectsList}`} ref={containerRef}>
                {projectData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    clickFunction={() => handleShowProjectDetails(project)}
                    isModalOpen={showModal}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <ModalCard selectedData={selectedData} closeFn={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default WorkSection;
