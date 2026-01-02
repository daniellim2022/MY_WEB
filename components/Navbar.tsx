import React from 'react';
import { Compass, Settings, User } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-4 flex items-center justify-between">
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={onLogoClick}
      >
        <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
          <Compass className="text-white w-6 h-6 animate-spin-slow" />
        </div>
        <h1
          className="text-3xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400 glitch-text drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          data-text="MY WEB"
        >
          MY WEB
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-400 to-purple-500 ring-2 ring-white/20" />
      </div>
    </nav>
  );
};
