
import React, { useState, useEffect } from 'react';
import { BuildingType, CityResources } from '../types';
import { BUILDING_ICONS, BUILDING_DATA } from '../constants';

interface BuildingMenuProps {
  selected: BuildingType | 'DEMOLISH' | null;
  onSelect: (type: BuildingType | 'DEMOLISH' | null) => void;
  resources: CityResources;
  cityLevel: number;
}

type CategoryType = '주거' | '상업' | '산업' | '공공' | '해양' | '인프라' | '특수';

const BuildingMenu: React.FC<BuildingMenuProps> = ({ selected, onSelect, resources, cityLevel }) => {
  const [activeTab, setActiveTab] = useState<CategoryType>('주거');

  const categories: { title: CategoryType; hotkey: string; items: BuildingType[] }[] = [
    { title: '주거', hotkey: '1', items: [BuildingType.RESIDENTIAL, BuildingType.APARTMENT] },
    { title: '상업', hotkey: '2', items: [BuildingType.COMMERCIAL, BuildingType.OFFICE, BuildingType.MARINA] },
    { title: '산업', hotkey: '3', items: [BuildingType.INDUSTRIAL, BuildingType.FISHERY, BuildingType.OFFSHORE_RIG] },
    { title: '해양', hotkey: '4', items: [BuildingType.PORT, BuildingType.SEA_PARK, BuildingType.WATER_TRANS, BuildingType.OCEAN_LAB] },
    { title: '공공', hotkey: '5', items: [BuildingType.PARK, BuildingType.HOSPITAL, BuildingType.FOUNTAIN] },
    { title: '인프라', hotkey: '6', items: [BuildingType.ROAD, BuildingType.POWER_PLANT, BuildingType.WATER_TOWER] },
    { title: '특수', hotkey: '7', items: [BuildingType.LANDMARK_TOWER, BuildingType.MUSEUM, BuildingType.TECH_HUB] }
  ];

  const currentCategory = categories.find(c => c.title === activeTab);
  const currentItems = currentCategory?.items || [];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const cat = categories.find(c => c.hotkey === e.key);
      if (cat) {
        setActiveTab(cat.title);
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'q' && currentItems[0]) onSelect(selected === currentItems[0] ? null : currentItems[0]);
      if (key === 'w' && currentItems[1]) onSelect(selected === currentItems[1] ? null : currentItems[1]);
      if (key === 'e' && currentItems[2]) onSelect(selected === currentItems[2] ? null : currentItems[2]);
      if (key === 'r' && currentItems[3]) onSelect(selected === currentItems[3] ? null : currentItems[3]);
      
      if (e.key === 'x') onSelect(selected === 'DEMOLISH' ? null : 'DEMOLISH');
      if (e.key === ' ' || e.key === 'Escape') onSelect(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, currentItems, selected, onSelect]);

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-3xl border-t-2 border-white/10 shadow-[0_-20px_100px_rgba(0,0,0,0.9)] flex flex-col z-[500]">
      
      {/* Category Tabs */}
      <div className="flex justify-center gap-1 p-3 bg-black/60 border-b border-white/5 overflow-x-auto no-scrollbar">
        <button
          onClick={() => onSelect(selected === 'DEMOLISH' ? null : 'DEMOLISH')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all border-2 mr-4
            ${selected === 'DEMOLISH' ? 'bg-red-600 border-red-400 text-white animate-pulse' : 'bg-red-950/30 border-red-900/50 text-red-500 hover:bg-red-600/20'}
          `}
        >
          <span className="text-xl">⛏️</span>
          <span className="text-[10px] font-black uppercase tracking-widest">Demolish (X)</span>
        </button>

        {categories.map(cat => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(cat.title)}
            className={`px-6 py-2 rounded-xl flex items-center gap-3 transition-all border-2 whitespace-nowrap
              ${activeTab === cat.title ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5'}
            `}
          >
            <span className="text-[11px] font-black uppercase tracking-wider">{cat.title}</span>
            <span className="text-[9px] font-bold bg-black/40 px-1.5 py-0.5 rounded opacity-60 font-mono">{cat.hotkey}</span>
          </button>
        ))}
      </div>

      {/* Building Items Row */}
      <div className="flex justify-center items-center gap-8 py-4 h-36 px-10 relative">
        <div className="flex gap-8">
          {currentItems.map((type, idx) => {
            const data = BUILDING_DATA[type];
            if (!data) return null;
            const isUnlocked = cityLevel >= (data.unlockLevel || 1);
            const canAfford = resources.money >= data.cost;
            const isSelected = selected === type;
            const hotkeyLabel = ['Q', 'W', 'E', 'R'][idx];

            return (
              <div key={type} className="group relative">
                <button
                  disabled={(!isUnlocked || !canAfford) && !isSelected}
                  onClick={() => onSelect(isSelected ? null : type)}
                  className={`
                    w-24 h-24 rounded-[2rem] flex flex-col items-center justify-center relative transition-all border-2
                    ${isSelected ? 'bg-blue-600 border-white scale-110 z-10 shadow-[0_0_50px_rgba(59,130,246,0.8)]' : 'bg-slate-800 border-white/10 hover:bg-slate-700 hover:border-white/40'}
                    ${!isUnlocked ? 'opacity-20 grayscale pointer-events-none' : ''}
                    ${!canAfford && !isSelected && isUnlocked ? 'opacity-40 grayscale' : 'active:scale-90'}
                  `}
                >
                  <span className="text-4xl mb-1.5 drop-shadow-2xl">{isUnlocked ? BUILDING_ICONS[type] : '🔒'}</span>
                  
                  {isUnlocked ? (
                    <div className="bg-slate-950 px-2 py-0.5 rounded-lg border border-white/10">
                      <span className={`text-[11px] font-black font-mono ${canAfford ? 'text-emerald-400' : 'text-red-400'}`}>
                        ${data.cost.toLocaleString()}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[9px] font-black text-slate-500 uppercase">Lv.{data.unlockLevel}</span>
                  )}

                  {isUnlocked && (
                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-slate-950 border-2 border-white/10 rounded-xl flex items-center justify-center text-[10px] font-black text-blue-400 shadow-2xl group-hover:bg-blue-600 group-hover:text-white">
                      {hotkeyLabel}
                    </span>
                  )}
                </button>

                {/* Tooltip */}
                {isUnlocked && (
                  <div className="absolute bottom-full mb-8 left-1/2 -translate-x-1/2 hidden group-hover:block w-72 bg-slate-950 border-2 border-white/20 p-6 rounded-[2.5rem] shadow-2xl z-[600]">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{type}</span>
                      <span className="text-2xl">{BUILDING_ICONS[type]}</span>
                    </div>
                    <div className="space-y-2 text-[11px] text-slate-400 font-medium">
                      <div className="flex justify-between"><span>MAINTENANCE</span><span className="text-red-400">-${data.maintenance}/mo</span></div>
                      {data.revenue && <div className="flex justify-between"><span>BASE REVENUE</span><span className="text-emerald-400">+${data.revenue}</span></div>}
                      {data.popCapacity && <div className="flex justify-between"><span>CAPACITY</span><span className="text-sky-400">{data.popCapacity} People</span></div>}
                      {data.synergy && <div className="flex flex-col pt-2 border-t border-white/5">
                        <span className="text-[9px] text-blue-300 font-black uppercase tracking-widest">Synergy Potential</span>
                        <span className="text-[10px] text-slate-500 italic">Boosted by {data.synergy.with.map(b => BUILDING_ICONS[b]).join(' ')}</span>
                      </div>}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BuildingMenu;
