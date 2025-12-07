import { useState } from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/sections/Home";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import type { PageState } from "./types";

function App() {
  const [activePage, setActivePage] = useState<PageState>("home");

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
    <Layout activePage={activePage} onPageChange={setActivePage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
