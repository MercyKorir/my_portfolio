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
      <button onClick={() => handleNavigation(prevRoute.path)}>Prev</button>
      <button onClick={() => handleNavigation(nextRoute.path)}>Next</button>
    </div>
  );
};

export default NavigationButtons;
