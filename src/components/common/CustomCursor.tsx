import React from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

const CustomCursor: React.FC = () => {
  const { position, isHovering } = useMousePosition();

  return (
    <motion.div
      className="fixed pointer-events-none z-60 mix-blend-difference hidden md:block"
      animate={{
        x: position.x - (isHovering ? 24 : 12),
        y: position.y - (isHovering ? 24 : 12),
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className="border border-primary rounded-full"
        animate={{
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          backgroundColor: isHovering
            ? "hsl(180 100% 50% / 0.2)"
            : "transparent",
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="absolute bg-primary rounded-full"
        style={{
          width: 4,
          height: 4,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
