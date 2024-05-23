import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../../styles/Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.nameLogo}>
          <h3>Mercy Chelangat</h3>
        </div>
        <div className={styles.navItems}>
          <Link
            href={"/about"}
            className={`${styles.linkItem} ${
              activeLink === "/about" ? styles.activeLink : ""
            }`}
          >
            About Me
          </Link>
          <Link
            href={"/"}
            className={`${styles.linkItem} ${
              activeLink === "/" ? styles.activeLink : ""
            }`}
          >
            Hello
          </Link>
          <Link
            href={"/my-work"}
            className={`${styles.linkItem} ${
              activeLink === "/my-work" ? styles.activeLink : ""
            }`}
          >
            My Work
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <span>
            <GitHubIcon fontSize="inherit" className={styles.githubIcon} />
          </span>
          <span>
            <LinkedInIcon fontSize="inherit" color="primary" />
          </span>
          <span>
            <MailIcon fontSize="inherit" className={styles.mailIcon} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
