import React from "react";
import { useRouter } from "next/router";
import { routes } from "../../utils/navigationRoutes";
import styles from "../../styles/NavigationButtons.module.css";

const NavigationButtons: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const currentRouteIndex = routes.findIndex(
    (route) => route.path === currentPath
  );

  const nextRoute = routes[(currentRouteIndex + 1) % routes.length];
  const prevRoute =
    routes[(currentRouteIndex - 1 + routes.length) % routes.length];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.navBtnContainer}>
      <span className={`${styles.buttonOuterLayer} ${styles.outerLayerPrev}`}>
        <button onClick={() => handleNavigation(prevRoute.path)}></button>
      </span>
      <span className={`${styles.buttonOuterLayer} ${styles.outerLayerNext}`}>
        <button onClick={() => handleNavigation(nextRoute.path)}></button>
      </span>
    </div>
  );
};

export default NavigationButtons;
