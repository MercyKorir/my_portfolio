import React from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../../styles/Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.nameLogo}>
          <h3>Mercy Chelangat</h3>
        </div>
        <div className={styles.navItems}>
          <Link href={"#"} className={styles.linkItem}>
            About Me
          </Link>
          <Link href={"#"} className={styles.linkItem}>
            Hello
          </Link>
          <Link href={"#"} className={styles.linkItem}>
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
