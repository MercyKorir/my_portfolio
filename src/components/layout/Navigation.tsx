import React, { useState } from "react";
import { Home, Briefcase, User } from "lucide-react";
import type { PageState } from "../../types";
import GlitchText from "../common/GlitchText";
import NavItem from "../common/NavItem";

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
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]" />
          <span className="font-orbitron font-bold text-lg tracking-wider text-white">
            <GlitchText text="MERCY.DEV" />
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center h-full">
          <NavItem
            page="home"
            icon={<Home size={18} />}
            label="HOME"
            activePage={activePage}
            onClick={handleNavClick}
          />
          <NavItem
            page="work"
            icon={<Briefcase size={18} />}
            label="WORK"
            activePage={activePage}
            onClick={handleNavClick}
          />
          <NavItem
            page="about"
            icon={<User size={18} />}
            label="ABOUT"
            activePage={activePage}
            onClick={handleNavClick}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-400 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transform transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transform transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95 backdrop-blur-xl absolute w-full">
          <NavItem
            page="home"
            icon={<Home size={20} />}
            label="HOME"
            activePage={activePage}
            onClick={handleNavClick}
          />
          <NavItem
            page="work"
            icon={<Briefcase size={20} />}
            label="WORK"
            activePage={activePage}
            onClick={handleNavClick}
          />
          <NavItem
            page="about"
            icon={<User size={20} />}
            label="ABOUT"
            activePage={activePage}
            onClick={handleNavClick}
          />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
