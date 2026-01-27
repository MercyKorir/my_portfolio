import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-12 text-center border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-muted-foreground font-tech-mono text-sm">
        © 2025 MERCY.DEV | SYSTEM_OPERATIONAL
      </p>
      <motion.div
        className="mt-4 flex items-center justify-center gap-2"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-primary font-tech-mono text-xs">
          ALL SYSTEMS NOMINAL
        </span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
