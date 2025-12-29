import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import type { PageState } from "../../types";
import { PORTFOLIO_DATA } from "../../data/portfolio.data";

interface HomeProps {
  setPage: (page: PageState) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const [text, setText] = useState("");
  const fullText = `> HELLO_WORLD\n> IDENTITY_CONFIRMED: ${PORTFOLIO_DATA.name}\n> ROLE: ${PORTFOLIO_DATA.role}\n> STATUS: ONLINE`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 opacity-10 pointer-events-none">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-cyan-900/30" />
        ))}
      </div>

      {/* 3D Reactor Core Animation (CSS Only) */}
      <div className="relative w-64 h-64 mb-12 group perspective-1000">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow group-hover:border-cyan-400/80 transition-colors" />
        <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse group-hover:border-purple-400/80 transition-colors" />
        <div className="absolute inset-8 rounded-full border border-cyan-300/20 animate-pulse" />

        {/* Core Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 font-orbitron tracking-tighter animate-pulse">
            M.C.
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-2xl px-4">
        <div className="font-mono text-cyan-400 text-left bg-black/50 p-6 rounded-lg border border-cyan-900/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-8 min-h-[140px] whitespace-pre-line">
          {text}
          <span className="animate-pulse">_</span>
        </div>

        <p className="text-gray-400 mb-8 font-light text-lg tracking-wide">
          {PORTFOLIO_DATA.tagline}
        </p>

        <button
          onClick={() => setPage("work")}
          className="group relative px-8 py-4 mb-10 bg-transparent overflow-hidden rounded-none border border-cyan-500/50 hover:border-cyan-400 transition-all"
        >
          <div className="absolute inset-0 w-0 bg-cyan-500/10 transition-all duration-250 ease-out group-hover:w-full"></div>
          <span className="relative text-cyan-400 font-orbitron tracking-widest group-hover:text-white flex items-center gap-2">
            INITIALIZE_WORK <ChevronRight size={16} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
