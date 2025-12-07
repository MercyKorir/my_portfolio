import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  User,
  Layers,
  Award,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/portfolio.data";

const About: React.FC = () => {
  const handleCertClick = (certUrl?: string) => {
    if (certUrl) {
      window.open(certUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, certUrl?: string) => {
    if ((e.key === "Enter" || e.key === " ") && certUrl) {
      e.preventDefault();
      handleCertClick(certUrl);
    }
  };

  const skillCategories = {
    "Front-End": PORTFOLIO_DATA.skills.slice(0, 8),
    "Back-End": PORTFOLIO_DATA.skills.slice(8, 17),
    Databases: PORTFOLIO_DATA.skills.slice(17, 21),
    "DevOps & Tools": PORTFOLIO_DATA.skills.slice(21),
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
      {/* Bio Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-8">
        {/* Avatar/ID Card */}
        <div className="md:col-span-1">
          <div className="relative bg-black/40 border border-gray-700 p-6 rounded-2xl backdrop-blur-sm group hover:border-cyan-500/50 transition-colors">
            <div className="w-32 h-32 mx-auto bg-linear-to-br from-gray-800 to-black rounded-full mb-6 border-2 border-cyan-500/30 flex items-center justify-center overflow-hidden">
              {/* Placeholder for Profile Pic */}
              <User size={48} className="text-gray-600" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-white font-orbitron mb-1">
                {PORTFOLIO_DATA.name}
              </h2>
              <p className="text-cyan-500 text-sm font-mono mb-4">
                {PORTFOLIO_DATA.role}
              </p>

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub profile"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit LinkedIn profile"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={PORTFOLIO_DATA.socials.email}
                  aria-label="Send email"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* ID Barcode Decoration */}
            <div className="mt-6 flex justify-between items-end opacity-30">
              <div
                className="h-8 w-32 bg-current"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 20%, 0 20%, 0 40%, 100% 40%, 100% 60%, 0 60%, 0 80%, 100% 80%, 100% 100%, 0 100%)",
                }}
              />
              <div className="font-mono text-[10px]">ID: 884-XJ</div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="bg-gray-900/30 border-l-2 border-cyan-500 p-6 rounded-r-lg">
            <h3 className="text-gray-500 font-mono text-sm mb-2">
              // BIO_SUMMARY
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {PORTFOLIO_DATA.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix - Organized by Category */}
      <div className="w-full mb-16">
        <h3 className="text-2xl font-orbitron text-white mb-8 flex items-center gap-2 border-b border-gray-800 pb-2">
          <Layers size={18} className="text-purple-500" /> SKILL_MATRIX
        </h3>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h4 className="text-sm font-mono text-cyan-500 mb-4 uppercase tracking-wider">
              {category}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-black/20 border border-gray-800 p-3 rounded flex items-center gap-3 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-cyan-400">{skill.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300 font-mono truncate">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 shrink-0 ml-2">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-cyan-600 to-purple-600"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="w-full mb-20">
        <h3 className="text-2xl font-orbitron text-white mb-8 border-b border-gray-800 pb-2">
          AUTHORIZATION_KEYS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certs.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => handleCertClick(cert.certUrl)}
              onKeyDown={(e) => handleKeyDown(e, cert.certUrl)}
              role={cert.certUrl ? "button" : undefined}
              tabIndex={cert.certUrl ? 0 : undefined}
              aria-label={
                cert.certUrl ? `View ${cert.title} certificate` : undefined
              }
              className={`
                relative group bg-linear-to-r from-gray-900 to-black border 
                border-gray-800 p-6 rounded-lg overflow-hidden 
                hover:border-purple-500/50 transition-all
                ${
                  cert.certUrl
                    ? "cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    : ""
                }
              `}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={64} />
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors flex-1">
                    {cert.title}
                  </h4>
                  {cert.certUrl && (
                    <ExternalLink
                      className="text-purple-400 group-hover:text-purple-300 transition-colors shrink-0 ml-2"
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="text-purple-400 font-mono text-sm mt-1">
                  {cert.issuer}
                </p>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-xs text-gray-500 font-mono">
                    {cert.date}
                  </span>
                  <span className="text-xs text-gray-600 font-mono border border-gray-800 px-2 py-0.5 rounded">
                    {cert.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
