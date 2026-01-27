import React from "react";
import { motion } from "framer-motion";
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
import AnimatedSection from "../common/AnimatedSection";
import GlitchText from "../common/GlitchText";

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
    <section className="min-h-screen py-32">
      <div className="container mx-auto px-6">
        {/* Bio */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Avatar card */}
          <motion.div className="md:col-span-1" whileHover={{ scale: 1.02 }}>
            <div className="relative card-glow rounded-2xl p-8 text-center group">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center bg-linear-to-br from-secondary to-background overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(180 100% 50% / 0.2)",
                    "0 0 40px hsl(180 100% 50% / 0.4)",
                    "0 0 20px hsl(180 100% 50% / 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Profile Picture */}
                <User size={48} className="text-muted-foreground" />
              </motion.div>

              <h2 className="font-orbitron text-xl font-bold text-foreground mb-1">
                {PORTFOLIO_DATA.name}
              </h2>
              <p className="text-primary font-tech-mono text-sm mb-6">
                {PORTFOLIO_DATA.role}
              </p>

              <div className="flex justify-center gap-4 mb-6">
                {[
                  {
                    icon: Github,
                    href: PORTFOLIO_DATA.socials.github,
                    name: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: PORTFOLIO_DATA.socials.linkedin,
                    name: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: PORTFOLIO_DATA.socials.email,
                    name: "Email",
                  },
                ].map(({ icon: Icon, href, name }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${name} profile`}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Barcode Deco */}
              <div className="flex justify-between items-end opacity-30 mt-6">
                <div
                  className="h-8 w-32 bg-current"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 20%, 0 20%, 0 40%, 100% 40%, 100% 60%, 0 60%, 0 80%, 100% 80%, 100% 100%, 0 100%)",
                  }}
                />
                <span className="font-tech-mono text-[10px]">ID: 884-XJ</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="card-glow rounded-lg p-8 border-l-2 border-primary">
              <p className="text-muted-foreground font-tech-mono text-sm mb-4">
                // BIO_SUMMARY
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {PORTFOLIO_DATA.bio}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Matrix */}
        <AnimatedSection className="mb-24">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <Layers className="text-accent" size={24} />
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground">
              <GlitchText text="SKILL_MATRIX" />
            </h2>
          </div>

          {Object.entries(skillCategories).map(
            ([category, skills], categoryIdx) => (
              <motion.div
                key={category}
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIdx * 0.1 }}
              >
                <h3 className="text-sm font-tech-mono text-primary mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-secondary/20 border border-border p-3 rounded flex items-center gap-3 hover:border-primary/30 transition-colors group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-foreground font-tech-mono truncate">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground shrink-0 ml-2">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-linear-to-r from-primary to-accent skill-bar"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: idx * 0.05,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-8 border-b border-border pb-4">
            <GlitchText text="AUTH_KEYS" />
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.certs.map((cert, index) => (
              <motion.div
                key={index}
                onClick={() => handleCertClick(cert.certUrl)}
                onKeyDown={(e) => handleKeyDown(e, cert.certUrl)}
                role={cert.certUrl ? "button" : undefined}
                tabIndex={cert.certUrl ? 0 : undefined}
                aria-label={
                  cert.certUrl ? `View ${cert.title} certificate` : undefined
                }
                className={`relative group card-glow rounded-lg p-6 overflow-hidden hover:border-accent/50 transition-all ${
                  cert.certUrl ? "cursor-pointer" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px hsl(280 100% 65% / 0.15)",
                }}
              >
                <motion.div
                  className="absolute top-4 right-4 text-muted-foreground/10 group-hover:text-muted-foreground/20 transition-colors"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Award size={64} />
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-rajdhani text-xl font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                      {cert.title}
                    </h3>
                    {cert.certUrl && (
                      <ExternalLink
                        className="text-accent/50 group-hover:text-accent transition-colors shrink-0 ml-2"
                        size={18}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="text-accent font-tech-mono text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      {cert.date}
                    </span>
                    <span className="font-tech-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded border border-border">
                      {cert.id}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
