import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#050505] border-t border-gray-900 py-1 px-4 z-30 hidden md:flex justify-between text-[10px] font-mono text-gray-600">
      <div className="flex gap-4">
        <span>CPU: OPTIMAL</span>
        <span>MEM: 64%</span>
      </div>
      <div>
        <span>SECURE_CONNECTION_ESTABLISHED</span>
      </div>
    </footer>
  );
};

export default Footer;
