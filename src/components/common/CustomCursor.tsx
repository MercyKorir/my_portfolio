import React from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

const CustomCursor: React.FC = () => {
  const { position, isHovering } = useMousePosition();

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`
        border border-cyan-400 rounded-full transition-all duration-150 ease-out
        ${isHovering ? "w-12 h-12 bg-cyan-400/20" : "w-6 h-6"}
      `}
      />
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default CustomCursor;
