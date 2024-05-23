import React, { ReactNode } from "react";
import Footer from "./Footer";
import NavigationButtons from "./NavigationButtons";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <NavigationButtons />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
