import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  className = "",
  speed = 50,
  delay = 0,
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentLineIndex >= texts.length) {
          setIsComplete(true);
          return;
        }

        const currentText = texts[currentLineIndex];

        if (currentCharIndex < currentText.length) {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentText.slice(
              0,
              currentCharIndex + 1,
            );
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      },
      currentCharIndex === 0 && currentLineIndex > 0 ? speed * 5 : speed,
    );

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, texts, speed, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
      className={className}
    >
      {displayedLines.map((line, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-primary">{">"}</span>
          <span>
            {line}
            {index === currentLineIndex && !isComplete && (
              <span className="animate-pulse">_</span>
            )}
          </span>
        </div>
      ))}
      {isComplete && (
        <div className="flex items-center gap-2">
          <span className="text-primary">{">"}</span>
          <span className="animate-pulse">_</span>
        </div>
      )}
    </motion.div>
  );
};

export default TypeWriter;
