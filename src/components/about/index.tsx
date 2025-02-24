import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import skillData from "@/data/skillData";
import educationData from "@/data/educationData";
import certificateData from "@/data/certificateData";
import SkillItem from "./SkillItem";
import CertItem from "./CertItem";
import EducationItem from "./EducationItem";
import styles from "../../styles/AboutMe.module.css";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  const skillsContentRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.BASE_PATH || "";

  useEffect(() => {
    const skillsContentElement = skillsContentRef.current;
    if (skillsContentElement) {
      const clone = skillsContentElement.cloneNode(true);
      skillsContentElement.parentNode?.appendChild(clone);
    }
  }, []);

  const handleNavigateGithub = () => {
    window.open("https://github.com/MercyKorir", "_blank");
  };

  const handleNavigateLinkedIn = () => {
    window.open("https://www.linkedin.com/in/mercychelangatkorir/", "_blank");
  };

  const handleNavigateEmail = () => {
    window.location.href = "mailto:korir.mercy.chelangat@gmail.com";
  };

  return (
    <>
      <Head>
        <title>About Me - My Portfolio</title>
        <meta
          name="description"
          content="Learn more about me and my background."
        />
      </Head>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeContent}>
          <div
            className={styles.aboutMeIntroContainer}
            style={{
              backgroundImage: `url('${basePath}/images/otherbg.svg')`,
            }}
          >
            <div className={styles.aboutMeIntroContent}>
              <div className={styles.aboutMeHeader}>
                <div className={styles.aboutMeHeaderContent}>
                  <div className={styles.aboutMeTitleContainer}>
                    <div className={styles.aboutMeTitleContent}>
                      <h1>The Developer Behind the Code.</h1>
                      <p>
                        Delve into the mind of a developer whose passion for
                        creating extends far beyond the digital realm. On this
                        page, you'll uncover the driving forces, inspirations,
                        and life experiences that have shaped my approach to
                        coding and design. Get ready to discover the human
                        element behind the pixels.
                      </p>
                    </div>
                  </div>
                  <div className={styles.aboutMeAnimationContainer}>
                    <div className={styles.aboutMeAnimationContent}>
                      <Image
                        height={300}
                        width={400}
                        alt="Social Background"
                        src={`${basePath}/images/social-icons-bg.svg`}
                        className={styles.socialIconsBg}
                      />
                      <div className={styles.socialIconsItems}>
                        <span
                          className={styles.socialIconItem1}
                          onClick={handleNavigateGithub}
                        >
                          <GitHubIcon fontSize="inherit" />
                        </span>
                        <span
                          className={styles.socialIconItem2}
                          onClick={handleNavigateLinkedIn}
                        >
                          <LinkedInIcon fontSize="inherit" />
                        </span>
                        <span
                          className={styles.socialIconItem3}
                          onClick={handleNavigateEmail}
                        >
                          <MailIcon fontSize="inherit" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.skillsContainer}>
                <div className={styles.skillsContent} ref={skillsContentRef}>
                  {skillData.map((skill, index) => (
                    <SkillItem key={index} itemData={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.educationCertsContainer}
            style={{
              backgroundImage: `url('${basePath}/images/otherbg2.svg')`,
            }}
          >
            <div className={styles.educationCertContent}>
              <div className={styles.educationContainer}>
                <h4 className={styles.title}>Educational Experiences</h4>
                <div className={styles.educationContent}>
                  {educationData.map((education, index) => (
                    <EducationItem key={index} education={education} />
                  ))}
                </div>
              </div>
              <div className={styles.certContainer}>
                <h4 className={styles.title}>Certifications</h4>
                <div className={styles.certContent}>
                  {certificateData.map((cert, index) => (
                    <CertItem
                      key={index}
                      cert={cert}
                      isLastItem={index === certificateData.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
