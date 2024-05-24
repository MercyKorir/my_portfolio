import { useEffect, useRef, useState } from "react";

export default function userIntersectionObserver() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const callbackFn = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFn, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    console.log(isVisible);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return { isVisible, containerRef };
}
