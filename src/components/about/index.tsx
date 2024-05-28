import React from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../../styles/AboutMe.module.css";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutMeContent}>
        <div className={styles.aboutMeIntroContainer}>
          <div className={styles.aboutMeIntroContent}>
            <div className={styles.aboutMeHeader}>
              <div className={styles.aboutMeHeaderContent}>
                <div className={styles.aboutMeTitleContainer}>
                  <div className={styles.aboutMeTitleContent}>
                    <h1>The Developer Behind the Code.</h1>
                    <p>
                      Delve into the mind of a developer whose passion for
                      creating extends far beyond the digital realm. On this
                      page, you'll uncover the driving forces, inspirations, and
                      life experiences that have shaped my approach to coding
                      and design. Get ready to discover the human element behind
                      the pixels.
                    </p>
                  </div>
                </div>
                <div className={styles.aboutMeAnimationContainer}>
                  <div className={styles.aboutMeAnimationContent}>
                    <Image
                      height={300}
                      width={400}
                      alt="Social Background"
                      src={"/images/social-icons-bg.svg"}
                      className={styles.socialIconsBg}
                    />
                    <div className={styles.socialIconsItems}>
                      <span className={styles.socialIconItem1}>
                        <GitHubIcon fontSize="inherit" />
                      </span>
                      <span className={styles.socialIconItem2}>
                        <LinkedInIcon fontSize="inherit" />
                      </span>
                      <span className={styles.socialIconItem3}>
                        <MailIcon fontSize="inherit" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.skillsContainer}></div>
          </div>
        </div>
        <div className={styles.educationCertsContainer}></div>
      </div>
    </div>
  );
};

export default AboutMe;
