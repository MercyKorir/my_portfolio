import React from "react";
import WorkCard from "./WorkCard";
import styles from "../../styles/Work.module.css";

interface WorkSectionProps {}

const workData = [
  { title: "Full Stack Developer", imageName: "project1.jpg" },
  { title: "Full Stack Developer", imageName: "project1.jpg" },
  { title: "Front End Developer", imageName: "project1.jpg" },
  { title: "Full Stack Developer", imageName: "project1.jpg" },
];

const WorkSection: React.FC<WorkSectionProps> = () => {
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
                    imageName={work.imageName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsContent}>
            <div className={styles.projectsTitle}>My Projects</div>
            <div className={styles.projectsList}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
