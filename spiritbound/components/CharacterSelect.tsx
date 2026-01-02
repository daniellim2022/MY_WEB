
import React from 'react';
import { CharacterType } from '../types';
import { CHARACTERS, SKILLS } from '../constants';

interface CharacterSelectProps {
  onSelect: (type: CharacterType) => void;
}

const CharacterSelect: React.FC<CharacterSelectProps> = ({ onSelect }) => {
  return (
    <div className="absolute inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-8 font-orbitron overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent" />
      </div>

      <h2 className="text-5xl font-black text-white mb-16 tracking-[0.2em] italic uppercase border-b-4 border-white pb-4 shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
        주술사 선택
      </h2>

      <div className="flex gap-12 max-w-6xl w-full">
        {(Object.keys(CHARACTERS) as CharacterType[]).map((type) => {
          const char = CHARACTERS[type];
          return (
            <div 
              key={type}
              onClick={() => onSelect(type)}
              className="group flex-1 bg-gray-900/40 border-2 border-gray-800 p-8 cursor-pointer transition-all duration-500 hover:border-white hover:bg-white/5 hover:scale-105"
            >
              <div className="h-2 w-full mb-6 transition-all group-hover:bg-white" style={{ backgroundColor: char.color }} />
              <h3 className="text-4xl font-black mb-4 group-hover:text-white" style={{ color: char.color }}>{char.name}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed italic">{char.description}</p>
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">보유 주술</span>
                <div className="flex flex-wrap gap-2">
                  {char.skills.map(sKey => (
                    <span key={sKey} className="px-3 py-1 bg-black border border-gray-700 text-[10px] text-white font-bold">
                      {(SKILLS as any)[sKey].name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4">
                <div className="flex-1 h-px bg-white/30" />
                <span className="text-white font-black text-xl italic">SELECT</span>
                <div className="flex-1 h-px bg-white/30" />
              </div>
            </div>
          );
        })}
      </div>
      
      <p className="mt-16 text-gray-600 text-xs tracking-widest uppercase animate-pulse">각 주술사는 고유한 필살기를 가지고 있습니다</p>
    </div>
  );
};

export default CharacterSelect;
