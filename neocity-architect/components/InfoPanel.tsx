
import React from 'react';
import { Tile, BuildingType } from '../types';
import { BUILDING_DATA, BUILDING_ICONS } from '../constants';

interface InfoPanelProps {
  tile: Tile;
  onClose: () => void;
  onUpgrade: (x: number, y: number) => void;
  money: number;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ tile, onClose, onUpgrade, money }) => {
  const buildingData = tile.building ? BUILDING_DATA[tile.building.type] : null;
  const isUtility = tile.building && [BuildingType.POWER_PLANT, BuildingType.WATER_TOWER, BuildingType.ROAD].includes(tile.building.type);
  const currentLevel = tile.building?.level || 1;
  const upgradeCost = buildingData ? Math.floor(buildingData.cost * currentLevel * 1.5) : 0;
  const canAffordUpgrade = money >= upgradeCost;

  return (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-80 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_50px_100px_rgba(0,0,0,0.8)] p-8 z-40 animate-in fade-in slide-in-from-left-10 duration-500">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-black text-white uppercase tracking-widest">{tile.terrain} Sector</h3>
          <p className="text-[10px] font-mono text-slate-500 uppercase font-black">Local Node {tile.x}:{tile.y}</p>
        </div>
        <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all text-slate-500 hover:text-white">
          ✕
        </button>
      </div>

      <div className="h-px bg-white/5 mb-8"></div>

      {tile.building ? (
        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center text-4xl shadow-2xl border border-white/10">
              {BUILDING_ICONS[tile.building.type]}
            </div>
            <div className="flex-1">
              <div className="text-2xl font-black text-blue-400 tracking-tighter leading-none mb-1">
                {tile.building.type}
              </div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[2px]">Efficiency Lvl.{tile.building.level}</div>
            </div>
          </div>

          {!isUtility && !tile.building.isConnected && (
            <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-2xl flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-red-400 uppercase tracking-widest leading-none mb-1">Disconnected</span>
                <span className="text-[11px] text-red-200/70 font-medium leading-tight">Requires adjacent Road to reach full capacity and yield.</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
              <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Maintenance</div>
              <div className="text-red-400 font-black font-mono">-${(buildingData?.maintenance || 0) * currentLevel}/mo</div>
            </div>
            <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
              <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Daily Yield</div>
              <div className="text-emerald-400 font-black font-mono">
                +${Math.floor((buildingData?.revenue || 0) * (tile.building.isConnected || isUtility ? (1 + (currentLevel - 1) * 0.5) : 0.1))}/day
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
              <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Load Balance</div>
              <div className="text-blue-300 font-black font-mono">
                {buildingData?.powerOutput ? `+${buildingData.powerOutput * currentLevel}` : `-${(buildingData?.powerDemand || 0) * currentLevel}`} MW
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
              <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Fluid Flow</div>
              <div className="text-sky-300 font-black font-mono">
                {buildingData?.waterOutput ? `+${buildingData.waterOutput * currentLevel}` : `-${(buildingData?.waterDemand || 0) * currentLevel}`} kG
              </div>
            </div>
          </div>

          {buildingData?.popCapacity && (
            <div className="bg-black/40 p-4 rounded-3xl border border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Habitation Limit</span>
                <span className="text-xs font-black text-white">{Math.floor(buildingData.popCapacity * (1 + (currentLevel-1)*0.5))} Units</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-blue-400 h-full transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  style={{ width: `${Math.min(100, (currentLevel / 10) * 100)}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-white/5">
            <button 
              onClick={() => onUpgrade(tile.x, tile.y)}
              disabled={!canAffordUpgrade}
              className={`w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[3px] transition-all border shadow-lg flex flex-col items-center justify-center gap-1
                ${canAffordUpgrade 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white border-white/20 active:scale-95' 
                  : 'bg-slate-800 text-slate-600 border-white/5 cursor-not-allowed opacity-50'}
              `}
            >
              <span>Upgrade to Lvl.{currentLevel + 1}</span>
              <span className="text-[9px] opacity-70 tracking-widest font-mono">Cost: ${upgradeCost.toLocaleString()}</span>
            </button>
            {!canAffordUpgrade && (
              <p className="text-[9px] text-center mt-2 text-red-400 font-bold uppercase tracking-wider">Insufficient Funds</p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-10">
          <div className="text-5xl mb-6 grayscale opacity-20 animate-pulse">🏗️</div>
          <p className="text-slate-400 text-sm font-medium px-4">Open sector identified. Awaiting urban development protocol.</p>
          <div className="mt-6 flex flex-col gap-2">
             <div className="text-[9px] text-slate-600 font-black uppercase tracking-[2px]">Placement Options</div>
             <div className="text-[10px] text-slate-700 italic">Select a module from the terminal below.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPanel;
