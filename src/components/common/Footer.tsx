import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../../styles/Footer.module.css";

interface FooterProps {
  home: boolean;
}

const Footer: React.FC<FooterProps> = ({ home }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const handleNavigateGithub = () => {
    window.open("https://github.com/MercyKorir", "_blank");
  };

  const handleNavigateLinkedIn = () => {
    window.open("https://www.linkedin.com/in/mercychelangatkorir/", "_blank");
  };

  const handleNavigateEmail = () => {
    window.location.href = "mailto:korir.mercy.chelangat@gmail.com";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.footerContainer} ${!home ? styles.addBgColor : ""} ${
        isOpen ? styles.openMenu : ""
      }`}
    >
      <div className={`${styles.hamburgerMenu} ${activeLink === "/" ? styles.hamburgerMenuHomeColor : ""}`} onClick={toggleMenu}>
        <MenuIcon fontSize="inherit" />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.closeIcon} onClick={toggleMenu}>
          <CloseIcon fontSize="inherit" />
        </div>
        <div className={styles.nameLogo}>
          <h3>Mercy Chelangat</h3>
        </div>
        <div
          className={`${styles.navItems} ${
            !home ? styles.brightColorText : ""
          }`}
        >
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
          <span onClick={handleNavigateGithub}>
            <GitHubIcon fontSize="inherit" className={styles.githubIcon} />
          </span>
          <span onClick={handleNavigateLinkedIn}>
            <LinkedInIcon fontSize="inherit" color="primary" />
          </span>
          <span onClick={handleNavigateEmail}>
            <MailIcon fontSize="inherit" className={styles.mailIcon} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
