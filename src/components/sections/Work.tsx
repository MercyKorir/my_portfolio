import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Zap, ChevronDown } from "lucide-react";
import AnimatedSection from "../common/AnimatedSection";
import GlitchText from "../common/GlitchText";
import { PORTFOLIO_DATA } from "../../data/portfolio.data";

const Work: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleProjectClick = (githubUrl?: string) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, githubUrl?: string) => {
    if ((e.key === "Enter" || e.key === " ") && githubUrl) {
      e.preventDefault();
      handleProjectClick(githubUrl);
    }
  };

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleAccordionKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <section className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-2">
                <GlitchText text="PROJECT_ARCHIVE" />
              </h2>
              <motion.span
                className="text-primary font-tech-mono text-sm"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LOADING ASSETS...
              </motion.span>
            </div>
            <span className="text-muted-foreground font-tech-mono text-sm hidden md:block">
              SYS.VER.2.0.4
            </span>
          </div>
        </AnimatedSection>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative h-80 bg-secondary/40 border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 30px hsl(180 100% 50% / 0.15)",
              }}
              onClick={() => handleProjectClick(project.githubUrl)}
              onKeyDown={(e) => handleKeyDown(e, project.githubUrl)}
              role={project.githubUrl ? "button" : undefined}
              tabIndex={project.githubUrl ? 0 : undefined}
              aria-label={
                project.githubUrl
                  ? `View ${project.title} on GitHub`
                  : undefined
              }
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${project.image})` }}
                whileHover={{ scale: 1.1, opacity: 0.4 }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-transparent opacity-90" />

              {/* Scanning Line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-primary/50 opacity-0 group-hover:opacity-100"
                animate={{ y: [0, 320, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-full p-6"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary text-xs font-tech-mono tracking-widest border border-primary/30 px-2 py-1 rounded bg-secondary/50">
                    {project.category.toUpperCase()}
                  </span>
                  {project.githubUrl && (
                    <ExternalLink
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-orbitron group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="text-muted-foreground text-xs font-tech-mono"
                    >
                      [{t}]
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-muted-foreground text-xs font-tech-mono">
                      [+{project.tech.length - 4}]
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <AnimatedSection className="mt-32">
          <div className="flex items-center gap-3 mb-12">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Zap className="text-accent" size={24} />
            </motion.div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground">
              <GlitchText text="EXECUTION_LOG" />
            </h2>
          </div>

          <div className="relative border-l-2 border-border ml-4 space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative pl-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                {/* Node */}
                <motion.div
                  className={`
                    absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all
                    ${
                      exp.isCurrent
                        ? "border-accent bg-accent/20"
                        : "border-muted-foreground bg-background hover:border-accent hover:bg-accent/20"
                    }
                  `}
                  animate={
                    exp.isCurrent
                      ? {
                          boxShadow: [
                            "0 0 0 0 hsl(280 100% 65% / 0.7)",
                            "0 0 0 10px hsl(280 100% 65% / 0)",
                            "0 0 0 0 hsl(280 100% 65% / 0.7)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div
                  onClick={() => exp.contributions && toggleAccordion(idx)}
                  onKeyDown={(e) => {
                    if (exp.contributions) {
                      handleAccordionKeyDown(e, idx);
                    }
                  }}
                  // role="button"
                  // tabIndex={0}
                  // aria-expanded={expandedIndex === idx}
                  // aria-controls={`experience-content-${idx}`}
                  className={`${exp.contributions ? "cursor-pointer" : ""} group/accordion`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4
                        className={`
                          text-xl font-bold transition-colors
                          ${
                            exp.isCurrent
                              ? "text-accent"
                              : "text-foreground group-hover/accordion:text-accent"
                          }
                        `}
                      >
                        {exp.role}
                      </h4>
                      {exp.isCurrent && (
                        <span className="text-xs font-tech-mono text-accent border border-accent/50 px-2 py-0.5 rounded bg-accent/10">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-tech-mono text-sm text-muted-foreground">
                        {exp.date}
                      </span>
                      {exp.contributions && (
                        <motion.div
                          animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown
                            className="text-muted-foreground"
                            size={18}
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <p
                    className={`
                      font-tech-mono text-sm mb-2
                      ${exp.isCurrent ? "text-primary" : "text-primary/80"}
                    `}
                  >
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                <AnimatePresence>
                  {exp.contributions && expandedIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-secondary/30 border-l-2 border-accent/30 pl-4 py-3 mt-4 rounded-r-lg">
                        <h5 className="text-sm font-tech-mono text-accent mb-3 uppercase tracking-wider">
                          Key Contributions:
                        </h5>
                        <ul className="space-y-2">
                          {exp.contributions.map((contribution, contribIdx) => (
                            <motion.li
                              key={contribIdx}
                              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: contribIdx * 0.1 }}
                            >
                              <span className="text-primary shrink-0 mt-1">
                                ▹
                              </span>
                              <span>{contribution}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Work;
