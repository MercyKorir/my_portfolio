import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import NavigationButtons from "./NavigationButtons";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div
      className={`${styles.layoutContainer} ${
        isHomePage ? styles.homeLayout : ""
      }`}
    >
      <main className={styles.mainContainer}>
        <span className={styles.navigation}>
          <NavigationButtons home={isHomePage} />
        </span>
        {children}
      </main>
      <Footer home={isHomePage} />
    </div>
  );
};

export default Layout;
