import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "../../styles/ScrollIndicator.module.css";

interface ScrollIndicatorProps {}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.ScrollIndicator} ${!isVisible && styles.hidden}`}>
      <ChevronDown className={styles.arrow} size={52} />
    </div>
  );
};

export default ScrollIndicator;
