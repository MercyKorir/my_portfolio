import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { PageState } from "../../types";
import GlitchText from "../common/GlitchText";
import NavItem from "../common/NavItem";
import { NAV_ITEMS } from "../../data/portfolio.data";

interface NavigationProps {
  activePage: PageState;
  onPageChange: (page: PageState) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activePage,
  onPageChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: PageState) => {
    onPageChange(page);
    setIsMenuOpen(false);
  };
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick("home")}
        >
          <motion.span
            className="w-3 h-3 rounded-full bg-primary"
            animate={{
              boxShadow: [
                "0 0 0 0 hsl(180 100% 50% / 0.7)",
                "0 0 0 8px hsl(180 100% 50% / 0)",
                "0 0 0 0 hsl(180 100% 50% / 0.7)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-orbitron text-xl font-bold text-foreground tracking-wider">
            <GlitchText text="MERCY.DEV" />
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.name;

            return (
              <NavItem
                key={item.id}
                page={item.name}
                Icon={Icon}
                label={item.label}
                isActive={isActive}
                navKey={item.id}
                isMenuOpen={isMenuOpen}
                onClick={handleNavClick}
              />
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.name;

              return (
                <NavItem
                  key={item.id}
                  page={item.name}
                  Icon={Icon}
                  label={item.label}
                  isActive={isActive}
                  navKey={item.id}
                  isMenuOpen={isMenuOpen}
                  onClick={handleNavClick}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
