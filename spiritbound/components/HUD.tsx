
import React from 'react';
import { SKILLS, CHARACTERS } from '../constants';
import { CharacterType } from '../types';

interface HUDProps {
  characterType: CharacterType;
  hp: number;
  maxHp: number;
  score: number;
  combo: number;
  cooldowns: Record<string, number>;
  energy: number;
}

const HUD: React.FC<HUDProps> = ({ characterType, hp, maxHp, score, combo, cooldowns, energy }) => {
  const hpPercent = Math.max(0, (hp / maxHp) * 100);
  const charConfig = CHARACTERS[characterType];

  return (
    <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between font-orbitron text-white">
      <div className="flex justify-between items-start">
        <div className="space-y-6">
            <div className="w-[420px]">
                <div className="flex justify-between mb-2">
                    <span className="text-cyan-400 text-sm font-black uppercase italic tracking-[0.4em]">Spirit Sync</span>
                    <span className="text-base font-black">{Math.ceil(hp)}%</span>
                </div>
                <div className="h-7 w-full bg-black/80 border-2 border-cyan-500/50 p-1.5">
                    <div className="h-full bg-gradient-to-r from-cyan-800 via-cyan-400 to-white transition-all duration-300 shadow-[0_0_30px_#0ff]" style={{ width: `${hpPercent}%` }} />
                </div>
            </div>
            <div className="w-[360px]">
                <div className="flex justify-between mb-2">
                    <span className="text-purple-400 text-sm font-black uppercase italic tracking-[0.4em]">Soul Charge</span>
                    <span className="text-base font-black">{Math.ceil(energy)} / 100</span>
                </div>
                <div className="h-6 w-full bg-black/80 border-2 border-purple-500/50 p-1">
                    <div className="h-full bg-gradient-to-r from-purple-900 via-purple-500 to-white transition-all duration-200 shadow-[0_0_20px_purple]" style={{ width: `${energy}%` }} />
                </div>
            </div>
        </div>
        <div className="text-right">
          <div className="text-[100px] leading-none font-black italic tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] text-white">{score.toLocaleString()}</div>
          {combo > 1 && <div className="text-6xl font-black text-cyan-400 animate-pulse italic">{combo}X COMBO</div>}
        </div>
      </div>

      <div className="flex gap-8 items-end">
        {charConfig.skills.map((sKey) => {
          const skill = (SKILLS as any)[sKey];
          const cd = cooldowns[skill.id] || 0;
          const energyReq = skill.energyCost || 0;
          const isReady = cd <= 0 && energy >= energyReq;
          return (
            <div key={sKey} className="relative">
              <div className={`w-28 h-28 border-2 flex flex-col items-center justify-center transition-all ${isReady ? 'border-purple-400 bg-purple-900/60 shadow-[0_0_30px_rgba(200,0,255,0.5)] scale-110' : 'border-gray-800 bg-black opacity-50'}`}>
                <span className="text-4xl font-black">{skill.id}</span>
                <span className="text-[10px] font-black uppercase">{skill.name}</span>
                {!isReady && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                        <span className="text-xs font-bold">{cd > 0 ? `${(cd/1000).toFixed(1)}s` : 'LOW EP'}</span>
                    </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HUD;
