import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CustomCursor from "../common/CustomCursor";
import type { PageState } from "../../types";

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageState;
  onPageChange: (page: PageState) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activePage,
  onPageChange,
}) => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation activePage={activePage} onPageChange={onPageChange} />

      <main className="pt-20 min-h-screen relative">
        {/* Glow */}
        <div className="fixed top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
