import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/sections/Home";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import SEO from "./components/common/SEO";
import type { PageState } from "./types";

function App() {
  const getInitialPage = (): PageState => {
    const hash = window.location.hash.slice(1); // Remove the '#'
    if (hash === "work" || hash === "about") {
      return hash;
    }
    return "home";
  };

  const [activePage, setActivePage] = useState<PageState>(getInitialPage);

  useEffect(() => {
    const hash = activePage === "home" ? "" : `#${activePage}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash || window.location.pathname);
    }
  }, [activePage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "work" || hash === "about") {
        setActivePage(hash);
      } else {
        setActivePage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const getSEOConfig = () => {
    switch (activePage) {
      case "home":
        return {
          title:
            "Mercy Chelangat - Full Stack Engineer | React & TypeScript Developer",
          description:
            "Full Stack Engineer with 3+ years of experience building scalable web applications. Explore my portfolio to see cutting-edge projects in React, TypeScript, and modern web technologies.",
          keywords:
            "Full Stack Developer, React Developer, TypeScript, Frontend Engineer, Portfolio, Web Developer, Software Engineer, Mercy Chelangat",
          canonicalUrl: "https://mercykorir.github.io/my_portfolio/",
        };
      case "work":
        return {
          title: "Projects & Work - Mercy Chelangat | Full Stack Engineer",
          description:
            "Browse my portfolio of web applications and projects. From e-commerce platforms to real-time dashboards, see how I solve complex problems with React, TypeScript, and modern frameworks.",
          keywords:
            "Projects, Portfolio, Web Applications, React Projects, TypeScript Projects, Full Stack Projects, Mercy Chelangat Work",
          canonicalUrl: "https://mercykorir.github.io/my_portfolio/#work",
        };
      case "about":
        return {
          title: "About Me - Mercy Chelangat | Full Stack Engineer & Developer",
          description:
            "Learn about my journey as a Full Stack Engineer. With 3+ years of experience in React, TypeScript, and Node.js, I'm passionate about building elegant solutions to complex problems.",
          keywords:
            "About Mercy Chelangat, Full Stack Engineer Bio, React Developer, TypeScript Expert, Software Engineer Career",
          canonicalUrl: "https://mercykorir.github.io/my_portfolio/#about",
        };
      default:
        return {
          title:
            "Mercy Chelangat - Full Stack Engineer | React & TypeScript Developer",
          description:
            "Full Stack Engineer with 3+ years of experience building scalable web applications using React, TypeScript, Node.js, and modern frameworks.",
          keywords:
            "Full Stack Developer, React Developer, TypeScript, Frontend Engineer, Web Developer, Software Engineer, Mercy Chelangat",
          canonicalUrl: "https://mercykorir.github.io/my_portfolio/",
        };
    }
  };

  const seoConfig = getSEOConfig();

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home setPage={setActivePage} />;
      case "work":
        return <Work />;
      case "about":
        return <About />;
      default:
        return <Home setPage={setActivePage} />;
    }
  };

  return (
    <>
      <SEO {...seoConfig} />
      <Layout activePage={activePage} onPageChange={setActivePage}>
        {renderPage()}
      </Layout>
    </>
  );
}

export default App;
