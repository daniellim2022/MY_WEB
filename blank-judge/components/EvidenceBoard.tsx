import React from 'react';
import { Evidence } from '../types';

interface EvidenceBoardProps {
  items: Evidence[];
  onPresent: (item: Evidence) => void;
}

export const EvidenceBoard: React.FC<EvidenceBoardProps> = ({ items, onPresent }) => {
  return (
    <div className="bg-slate-900 border-l border-slate-800 w-full md:w-[400px] flex flex-col h-full relative overflow-hidden shadow-[inset_10px_0_20px_rgba(0,0,0,0.5)]">
      {/* Corkboard Texture/Grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%,rgba(6,182,212,0.05)_100%)] bg-[size:20px_20px]"></div>

      <div className="p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur z-10 flex justify-between items-center">
        <h2 className="text-red-500 font-bold uppercase tracking-widest text-sm animate-pulse">
          <i className="fas fa-network-wired mr-2"></i> 증거 관계도
        </h2>
        <span className="text-[10px] text-slate-500 font-mono">SECURE DATABASE</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-8 z-10 relative">
        {/* Red String Effect (CSS Line) */}
        <div className="absolute left-[29px] top-[60px] bottom-[60px] w-0.5 bg-red-900/50 z-0"></div>

        {items.map((item, index) => (
          <div 
            key={item.id}
            onClick={() => onPresent(item)}
            className="group relative bg-slate-900/90 p-4 rounded-sm border border-slate-700 hover:border-red-500 cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
          >
            {/* Pin */}
            <div className="absolute -left-[23px] top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow-[0_0_10px_red] border border-white z-10 group-hover:bg-red-400"></div>
            {/* Connection Line horizontal */}
            <div className="absolute -left-[20px] top-1/2 w-5 h-0.5 bg-red-800 group-hover:bg-red-500 transition-colors"></div>

            <div className="flex items-start space-x-4">
              <div className="text-3xl filter drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{item.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-cyan-100 text-sm group-hover:text-red-400 uppercase tracking-wide font-mono">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed border-t border-slate-800 pt-2 font-mono">
                  {item.description}
                </p>
              </div>
            </div>
            
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] bg-red-900/80 text-red-200 px-2 py-0.5 rounded border border-red-500/50 animate-pulse">
                제시하기
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-black/50 text-[10px] text-slate-600 border-t border-slate-800 font-mono text-center">
        증거를 클릭하여 모순을 지적하십시오.
      </div>
    </div>
  );
};