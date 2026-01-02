
import React from 'react';
import { CityResources, Mission, CityEvent } from '../types';

interface HeaderProps {
  resources: CityResources;
  date: string;
  advice: string;
  level: number;
  missions: Mission[];
  activeEvent: CityEvent | null;
}

const Header: React.FC<HeaderProps> = ({ resources, date, advice, level, missions, activeEvent }) => {
  return (
    <div className="bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex flex-col gap-4 z-[100] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-start">
        <div className="flex gap-10 items-center">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center font-black text-3xl shadow-xl border-2 border-white/20">
              {level}
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>

          <div className="flex gap-8 items-center">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Treasury</span>
              <span className="text-xl font-black text-emerald-400 font-mono tracking-tighter">
                ${Math.floor(resources.money).toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Population</span>
              <span className="text-xl font-black text-white font-mono tracking-tighter">
                {resources.population.toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Happiness</span>
              <div className="flex items-center gap-3">
                 <span className="text-xl font-black text-yellow-400 font-mono">{Math.floor(resources.satisfaction)}%</span>
                 <div className="w-20 h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="bg-yellow-400 h-full transition-all duration-1000" style={{ width: `${resources.satisfaction}%` }} />
                 </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Power / Water</span>
              <div className="flex gap-3 text-xs font-black font-mono">
                <span className={resources.power >= 0 ? 'text-blue-400' : 'text-red-500'}>⚡ {resources.power} MW</span>
                <span className={resources.water >= 0 ? 'text-sky-400' : 'text-red-500'}>💧 {resources.water} kG</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="text-3xl font-black font-mono text-white/90">{date}</div>
          {activeEvent && (
            <div className="bg-yellow-500/20 border border-yellow-500/50 px-3 py-1 rounded-lg animate-pulse flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest">{activeEvent.name}</span>
            </div>
          )}
          {missions.length > 0 && (
            <div className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
              NEXT: {missions[0].description} ({missions[0].current}/{missions[0].target})
            </div>
          )}
        </div>
      </div>

      <div className="bg-white/5 rounded-xl px-5 py-2.5 text-xs border border-white/5 flex items-center gap-4 group">
        <span className="bg-blue-600/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-md font-black uppercase tracking-wider border border-blue-400/30">Advisor</span>
        <span className="text-slate-400 italic group-hover:text-white transition-colors">"{advice}"</span>
      </div>
    </div>
  );
};

export default Header;
