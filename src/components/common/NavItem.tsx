import React from "react";
import type { PageState } from "../../types";

interface NavItemProps {
  page: PageState;
  icon: React.ReactNode;
  label: string;
  activePage: PageState;
  onClick: (page: PageState) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  page,
  icon,
  label,
  activePage,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(page)}
      className={`
        flex flex-col items-center justify-center p-4 w-full md:w-auto md:p-2 md:px-6 relative group transition-all
        ${
          activePage === page
            ? "text-cyan-400"
            : "text-gray-500 hover:text-gray-300"
        }
      `}
    >
      <div className="mb-1">{icon}</div>
      <span className="text-[10px] font-orbitron tracking-widest">{label}</span>

      {activePage === page && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
      )}

      <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></span>
    </button>
  );
};

export default NavItem;
