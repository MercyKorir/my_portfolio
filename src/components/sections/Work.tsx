import React, { useState } from "react";
import { ExternalLink, Zap, ChevronDown } from "lucide-react";
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
    <div className="w-full max-w-6xl mx-auto px-4 pb-20">
      <div className="mb-12 border-b border-cyan-900/50 pb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl font-orbitron text-white mb-2">
            PROJECT_ARCHIVE
          </h2>
          <p className="text-cyan-500/60 font-mono text-sm">
            LOADING ASSETS...
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs text-gray-500 font-mono">SYS.VER.2.0.4</p>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => handleProjectClick(project.githubUrl)}
            onKeyDown={(e) => handleKeyDown(e, project.githubUrl)}
            role={project.githubUrl ? "button" : undefined}
            tabIndex={project.githubUrl ? 0 : undefined}
            aria-label={
              project.githubUrl ? `View ${project.title} on GitHub` : undefined
            }
            className="group relative h-80 bg-black/40 border border-gray-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] rounded-xl"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400 text-xs font-mono tracking-widest border border-cyan-900 px-2 py-1 rounded bg-cyan-950/30">
                  {project.category.toUpperCase()}
                </span>
                {project.githubUrl && (
                  <ExternalLink
                    className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-gray-400 text-xs font-mono">
                    [{t}]
                  </span>
                ))}
              </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 opacity-0 group-hover:opacity-100 animate-[scan_2s_linear_infinite]" />
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h3 className="text-2xl font-orbitron text-white mb-8 flex items-center gap-2">
          <Zap className="text-purple-500" /> EXECUTION_LOG
        </h3>

        <div className="relative border-l-2 border-gray-800 ml-4 space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8">
              {/* Node */}
              <div
                className={`
                  absolute -left-[9px] top-0 w-4 h-4 bg-black rounded-full 
                  transition-all shadow-[0_0_10px_rgba(0,0,0,1)]
                  ${
                    exp.isCurrent
                      ? "border-2 border-purple-500 bg-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                      : "border-2 border-gray-600 hover:border-purple-500 hover:bg-purple-500/20"
                  }
                `}
              />

              <div
                onClick={() => toggleAccordion(idx)}
                onKeyDown={(e) => handleAccordionKeyDown(e, idx)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedIndex === idx}
                aria-controls={`experience-content-${idx}`}
                className="cursor-pointer group/accordion"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4
                      className={`
                      text-xl font-bold transition-colors
                      ${
                        exp.isCurrent
                          ? "text-purple-400"
                          : "text-gray-200 group-hover/accordion:text-purple-400"
                      }
                    `}
                    >
                      {exp.role}
                    </h4>
                    {exp.isCurrent && (
                      <span className="text-xs font-mono text-purple-400 border border-purple-500/50 px-2 py-0.5 rounded bg-purple-950/30">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-gray-500">
                      {exp.date}
                    </span>
                    <ChevronDown
                      className={`
                        text-gray-500 transition-transform duration-200
                        ${expandedIndex === idx ? "rotate-180" : ""}
                      `}
                      size={18}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p
                  className={`
                  font-mono text-sm mb-2 transition-colors
                  ${exp.isCurrent ? "text-cyan-400" : "text-cyan-500/80"}
                `}
                >
                  {exp.company}
                </p>
                <p className="text-gray-400 leading-relaxed">{exp.desc}</p>
              </div>

              {exp.contributions && (
                <div
                  id={`experience-content-${idx}`}
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      expandedIndex === idx
                        ? "max-h-[1000px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="bg-gray-900/30 border-l-2 border-purple-500/30 pl-4 py-3 rounded-r">
                    <h5 className="text-sm font-mono text-purple-400 mb-3 uppercase tracking-wider">
                      Key Contributions:
                    </h5>
                    <ul className="space-y-2">
                      {exp.contributions.map((contribution, contribIdx) => (
                        <li
                          key={contribIdx}
                          className="text-sm text-gray-300 leading-relaxed flex gap-2"
                        >
                          <span className="text-cyan-400 shrink-0 mt-1">▹</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
