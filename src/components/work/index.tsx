import React, { useState } from "react";
import WorkCard from "./WorkCard";
import ProjectCard from "./ProjectCard";
import ModalCard from "./ModalCard";
import styles from "../../styles/Work.module.css";
import userIntersectionObserver from "@/hooks/userIntersectionObserver";
import { WorkData, ProjectData } from "@/types/types";

interface WorkSectionProps {}

const workData: WorkData[] = [
  {
    title: "Full Stack Developer",
    organization: "Organic Kitchen Gardens Kenya",
    imageName: "org-image.png",
  },
  {
    title: "Full Stack Developer",
    organization: "Freelancer Platform",
    imageName: "freelancer-logo.png",
  },
  {
    title: "Front End Developer",
    organization: "Upsurge Solutions Kenya",
    imageName: "minister-image.png",
  },
  {
    title: "Full Stack Developer",
    organization: "Upwork Freelance Platform",
    imageName: "upwork.png",
  },
];

const projectData: ProjectData[] = [
  {
    title: "Crypto Dashboard",
    description: "A personal portfolio website.",
    imageName: "cryptoapp-img.png",
    demoUrl: "/videos/crypto-dashboard-demo.mp4",
  },
  {
    title: "Course Web Application",
    description: "A full stack e-commerce platform.",
    imageName: "courseapp-img.png",
    demoUrl: "/videos/course-app-demo.mp4",
  },
  {
    title: "Blog Design Challenge",
    description: "A full stack e-commerce platform.",
    imageName: "blog-design-img.png",
  },
  {
    title: "TastyBook",
    description: "A personal portfolio website.",
    imageName: "tastybook-img.png",
    demoUrl: "/videos/tastybook-demo.mp4",
  },
  {
    title: "Bitnine Global Clone",
    description: "A personal portfolio website.",
    imageName: "bitnine-img.png",
  },
  {
    title: "MeloMeet",
    description: "A personal portfolio website.",
    imageName: "melomeet-img.png",
  },
  {
    title: "ToDo App",
    description: "A personal portfolio website.",
    imageName: "todo-img.png",
  },
  {
    title: "Wallpaper Website",
    description: "A personal portfolio website.",
    imageName: "wallpaper-web-img.png",
  },
];

const WorkSection: React.FC<WorkSectionProps> = () => {
  const { isVisible, containerRef } = userIntersectionObserver();
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState<
    WorkData | ProjectData | null
  >(null);

  const handleShowWorkDetails = (work: WorkData) => {
    console.log("Clicked Work!");
    setSelectedData(work);
    setShowModal(true);
  };

  const handleShowProjectDetails = (project: ProjectData) => {
    console.log("Clicked Project!");
    setSelectedData(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
                    title={work.title}
                    organization={work.organization}
                    imageName={work.imageName}
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
              {projectData.map((project, index) =>
                project.demoUrl ? (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageName={project.imageName}
                    demoUrl={project.demoUrl}
                    clickFunction={() => handleShowProjectDetails(project)}
                  />
                ) : (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageName={project.imageName}
                    clickFunction={() => handleShowProjectDetails(project)}
                  />
                )
              )}
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
