
import React from 'react';
import { BuildingType } from '../types';
import { BUILDING_VISUALS } from '../constants';

interface Building3DProps {
  type: BuildingType;
  level?: number;
  isGhost?: boolean;
}

const Building3D: React.FC<Building3DProps> = ({ type, level = 1, isGhost = false }) => {
  const visual = BUILDING_VISUALS[type] || { color: '#ffffff', height: 10 };
  const height = visual.height * (1 + (level - 1) * 0.4);
  const scale = 1 + (level - 1) * 0.05;

  return (
    <div 
      className={`building-3d ${isGhost ? 'opacity-40 brightness-125' : ''}`}
      style={{ '--h': `${height}px`, color: visual.color, transform: `scale(${scale})`, pointerEvents: 'none' } as any}
    >
      <div className="face face-top" />
      <div className="face face-front">
        {['COMMERCIAL', 'RESIDENTIAL', 'OFFICE', 'LANDMARK_TOWER', 'PORT', 'OCEAN_LAB'].includes(type) && (
          <div className="absolute inset-1 grid grid-cols-4 grid-rows-6 gap-[2px]">
            {Array.from({length: Math.min(32, 24 + level * 4)}).map((_, i) => (
              <div key={i} className="bg-white/40 rounded-[1px] shadow-[0_0_3px_rgba(255,255,255,0.6)]" />
            ))}
          </div>
        )}
      </div>
      <div className="face face-side" />

      {/* Detail: Offshore Rig Legs & Pipes */}
      {type === BuildingType.OFFSHORE_RIG && (
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
           <div className="absolute w-2 h-20 bg-slate-700" style={{ transform: 'translateZ(-20px) translateX(-10px)' }} />
           <div className="absolute w-2 h-20 bg-slate-700" style={{ transform: 'translateZ(-20px) translateX(10px)' }} />
           <div className="absolute w-10 h-2 bg-red-500 animate-pulse" style={{ transform: `translateZ(${height}px)` }} />
        </div>
      )}

      {/* Detail: Marina Docks */}
      {type === BuildingType.MARINA && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-400/50" style={{ transform: 'translateZ(1px)' }}>
          <div className="absolute top-0 left-2 w-1 h-12 bg-slate-200" style={{ transform: 'rotateX(-90deg)' }} />
          <div className="absolute top-0 right-2 w-1 h-12 bg-slate-200" style={{ transform: 'rotateX(-90deg)' }} />
        </div>
      )}

      {/* Detail: Ocean Lab Domes */}
      {type === BuildingType.OCEAN_LAB && (
        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          <div className="w-10 h-10 rounded-full bg-cyan-200/40 border border-white/30" style={{ transform: `translateZ(${height}px)` }} />
        </div>
      )}

      {/* Level Visual Feedback */}
      {level >= 3 && (
        <div className="absolute w-full h-1 bg-yellow-400/80 blur-sm" style={{ transform: `translateZ(${height + 2}px)` }} />
      )}
    </div>
  );
};

export default Building3D;
