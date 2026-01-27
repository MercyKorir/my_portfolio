import React from "react";
import { ChevronRight } from "lucide-react";
import type { PageState } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolio.data";
import { motion } from "framer-motion";
import TypeWriter from "../common/TypeWriter";

interface HomeProps {
  setPage: (page: PageState) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const fullText = [
    "HELLO_WORLD",
    `IDENTITY_CONFIRMED: ${PORTFOLIO_DATA.name}`,
    `ROLE: ${PORTFOLIO_DATA.role}`,
    "STATUS: ONLINE",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(hsl(from var(--color-primary) h s l / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(from var(--color-primary) h s l / 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* 3D animation */}
      <motion.div
        className="relative mb-12"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute rounded-full border-2 border-primary/30"
          style={{ width: 280, height: 280, left: -15, top: -15 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner reverse ring */}
        <motion.div
          className="absolute rounded-full border-2 border-accent/30"
          style={{ width: 220, height: 220, left: 15, top: 15 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Pulsing middle ring */}
        <motion.div
          className="absolute rounded-full border border-primary/20"
          style={{ width: 180, height: 180, left: 35, top: 35 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Glowing core */}
        <div className="w-[250px] h-[250px] rounded-full border-2 border-primary ring-pulse flex items-center justify-center relative">
          <motion.div
            className="absolute inset-4 rounded-full bg-linear-to-br from-secondary to-background"
            animate={{
              boxShadow: [
                "0 0 20px hsl(180 100% 50% / 0.2)",
                "0 0 40px hsl(180 100% 50% / 0.4)",
                "0 0 20px hsl(180 100% 50% / 0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Initials */}
          <motion.span
            className="font-orbitron text-5xl font-black gradient-text relative z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              textShadow: [
                "0 0 20px hsl(180 100% 50% / 0.5)",
                "0 0 40px hsl(180 100% 50% / 0.8)",
                "0 0 20px hsl(180 100% 50% / 0.5)",
              ],
            }}
            transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
          >
            M.C.
          </motion.span>
        </div>

        {/* Outer accent ring */}
        <motion.div
          className="absolute rounded-full border border-accent/50"
          style={{ width: 320, height: 320, left: -35, top: -35 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="card-glow px-4 py-6 md:px-6 rounded-lg max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <TypeWriter
          texts={fullText}
          className="font-tech-mono md:text-lg text-primary space-y-2"
          speed={40}
        />
      </motion.div>

      <motion.p
        className="text-muted-foreground text-xl font-rajdhani tracking-wide mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        {PORTFOLIO_DATA.tagline}
      </motion.p>

      <motion.button
        className="cyber-button group flex items-center gap-2"
        onClick={() => setPage("work")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>INITIALIZE_WORK</span>
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      <motion.div
        className="absolute bottom-4 md:bottom-8 left-4 md:left-8 flex items-center md:gap-2 text-muted-foreground font-tech-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <span>CPU: OPTIMAL</span>
        <span className="mx-2">|</span>
        <span>MEM: 64%</span>
      </motion.div>

      <motion.div
        className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-muted-foreground font-tech-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        SECURE_CONNECTION_ESTABLISHED
      </motion.div>
    </section>
  );
};

export default Home;
