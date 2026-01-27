import React, { useState } from "react";
import type { PageState } from "../../types";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface NavItemProps {
  page: PageState;
  Icon: LucideIcon;
  label: string;
  isActive: boolean;
  navKey: string;
  isMenuOpen: boolean;
  onClick: (page: PageState) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  page,
  Icon,
  label,
  isActive,
  navKey,
  isMenuOpen,
  onClick,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isHovered = hoveredItem === navKey;

  return (
    <motion.button
      onClick={() => onClick(page)}
      onMouseEnter={() => {
        if (!isMenuOpen) {
          setHoveredItem(navKey);
        }
      }}
      onMouseLeave={() => {
        if (!isMenuOpen) {
          setHoveredItem(null);
        }
      }}
      className={`
        flex items-center
        ${
          isMenuOpen
            ? "gap-4 w-full p-4 transition-colors"
            : "flex-col gap-1 nav-link cursor-pointer"
        }
        ${
          isActive
            ? `${isMenuOpen ? "text-primary bg-secondary/50" : "active"}`
            : `${isMenuOpen ? "text-muted-foreground" : ""}`
        }
      `}
      whileHover={!isMenuOpen ? { y: -2 } : undefined}
      whileTap={{ scale: isMenuOpen ? 0.98 : 0.95 }}
    >
      <Icon
        size={20}
        className={
          isMenuOpen
            ? ""
            : `transition-colors duration-300 ${
                isActive || isHovered ? "text-primary" : "text-muted-foreground"
              }`
        }
      />
      <span
        className={`
          font-orbitron
          ${
            isMenuOpen
              ? "text-sm tracking-widest"
              : `text-xs tracking-wider transition-colors duration-300 ${
                  isActive || isHovered
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`
          }
        `}
      >
        {label}
      </span>

      {isActive &&
        (isMenuOpen ? (
          <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
        ) : (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
            layoutId="activeTab"
            style={{ boxShadow: "0 0 10px hsl(180 100% 50%)" }}
          />
        ))}
    </motion.button>
  );
};

export default NavItem;
