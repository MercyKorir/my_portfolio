import React from "react";
import WorkCard from "./WorkCard";
import ProjectCard from "./ProjectCard";
import styles from "../../styles/Work.module.css";
import userIntersectionObserver from "@/hooks/userIntersectionObserver";

interface WorkSectionProps {}

const workData = [
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

const projectData = [
  {
    title: "Course Web Application",
    description: "A full stack e-commerce platform.",
    imageName: "courseapp-img.png",
    demoUrl: "/videos/course-app-demo.mp4",
  },
  {
    title: "Crypto Dashboard",
    description: "A personal portfolio website.",
    imageName: "cryptoapp-img.png",
    demoUrl: "/videos/crypto-dashboard-demo.mp4",
  },
];

const WorkSection: React.FC<WorkSectionProps> = () => {
  const { isVisible, containerRef } = userIntersectionObserver();

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
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsContent}>
            <h4 className={styles.projectsTitle}>My Projects</h4>
            <div
              className={`${styles.projectsList} ${
                isVisible ? styles.fadeIn : ""
              }`}
              ref={containerRef}
            >
              {projectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageName={project.imageName}
                  demoUrl={project.demoUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
