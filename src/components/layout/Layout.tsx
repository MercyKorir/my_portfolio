import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CustomCursor from "../common/CustomCursor";
import type { PageState } from "../../types";
import MatrixRain from "../common/MatrixRain";
import { motion, AnimatePresence } from "framer-motion";
import { SecureCommLink } from "../common/SecureCommLink";

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
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-background text-foreground overflow-x-hidden scanlines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CustomCursor />

        <MatrixRain />

        {/* Glow */}
        <div className="fixed top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <Navigation activePage={activePage} onPageChange={onPageChange} />

        <main className="relative z-10">
          {children}
          {activePage !== "home" && <Footer />}
        </main>

        <div className="fixed top-20 left-2 md:left-4 w-16 h-16 border-l-2 border-t-2 border-primary/20 pointer-events-none" />
        <div className="fixed bottom-2 md:bottom-4 right-2 md:right-4 w-16 h-16 border-r-2 border-b-2 border-primary/20 pointer-events-none" />

        <SecureCommLink />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
