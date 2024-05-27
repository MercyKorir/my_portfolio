import React, { useState } from "react";
import WorkCard from "./WorkCard";
import ProjectCard from "./ProjectCard";
import ModalCard from "./ModalCard";
import styles from "../../styles/Work.module.css";
import userIntersectionObserver from "@/hooks/userIntersectionObserver";
import { WorkData, ProjectData } from "@/types/types";
import workData from "@/data/workData";
import projectData from "@/data/ProjectData";

interface WorkSectionProps {}

const WorkSection: React.FC<WorkSectionProps> = () => {
  const { isVisible, containerRef } = userIntersectionObserver();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<
    WorkData | ProjectData | null
  >(null);

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

  return (
    <div className={styles.workContainer}>
      <div className={styles.workContent}>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            <div className={styles.introHeader}>
              <div className={styles.introHeaderContent}>
                <h1>The Pixel Playground</h1>
                <p>
                  Welcome to the showcase of my digital artistry. Here, you'll
                  find a curated collection of projects that have challenged me,
                  inspired me, and ultimately fueled my growth as a web
                  developer. Prepare to be captivated by the fusion of
                  functionality and design, as I unveil the stories behind each
                  creation
                </p>
              </div>
            </div>
            <div className={styles.workExpContainer}>
              <h4 className={styles.workExpTitle}>Work Experience</h4>
              <div className={styles.workExpList}>
                {workData.map((work, index) => (
                  <WorkCard
                    key={index}
                    work={work}
                    clickFunction={() => handleShowWorkDetails(work)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsContent}>
            <h4 className={styles.projectsTitle}>My Projects</h4>
            <div className={`${styles.projectsList}`} ref={containerRef}>
              {projectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  clickFunction={() => handleShowProjectDetails(project)}
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
  );
};

export default WorkSection;
