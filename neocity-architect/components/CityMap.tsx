
import React from 'react';
import { Tile, BuildingType, CityResources } from '../types';
import { TERRAIN_COLORS, BUILDING_CONSTRAINTS, BUILDING_DATA } from '../constants';
import Building3D from './Building3D';

interface CityMapProps {
  tiles: Tile[][];
  onTileClick: (x: number, y: number) => void;
  selectedTile: { x: number; y: number } | null;
  previewBuilding: BuildingType | 'DEMOLISH' | null;
  resources: CityResources;
  startMousePos: { x: number; y: number };
}

const CityMap: React.FC<CityMapProps> = ({ 
  tiles, 
  onTileClick, 
  selectedTile, 
  previewBuilding, 
  resources,
  startMousePos
}) => {
  
  const handleMouseUp = (e: React.MouseEvent, x: number, y: number) => {
    // 드래그 거리 계산 (5px 이상 움직이면 드래그로 간주하고 클릭 무시)
    const dx = Math.abs(e.clientX - startMousePos.x);
    const dy = Math.abs(e.clientY - startMousePos.y);
    if (dx < 5 && dy < 5) {
      onTileClick(x, y);
    }
  };

  return (
    <div 
      className="relative grid gap-1 p-16 bg-slate-900/20 border-[40px] border-slate-950/50 rounded-[6rem] shadow-[0_0_200px_rgba(0,0,0,1)]" 
      style={{ 
        gridTemplateColumns: `repeat(${tiles.length}, 60px)`,
        transformStyle: 'preserve-3d',
        pointerEvents: 'auto'
      }}
    >
      {tiles.map((row, y) => (
        <React.Fragment key={`row-${y}`}>
          {row.map((tile, x) => {
            const isSelected = selectedTile?.x === x && selectedTile?.y === y;
            const terrainClass = TERRAIN_COLORS[tile.terrain];
            
            let canPlace = false;
            let errorReason = "";
            let isSynergyZone = false;

            if (previewBuilding === 'DEMOLISH') {
              canPlace = !!tile.building;
            } else if (previewBuilding) {
              const constraints = BUILDING_CONSTRAINTS[previewBuilding];
              const bData = BUILDING_DATA[previewBuilding];
              
              if (tile.building) errorReason = "OCCUPIED";
              else if (!constraints.allowedTerrain.includes(tile.terrain)) errorReason = "TERRAIN";
              else if (resources.money < bData.cost) errorReason = "FUNDS";
              else {
                canPlace = true;
                // 시너지 확인 (주변 8칸)
                const neighbors = [
                  {dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:0},{dx:-1,dy:0},
                  {dx:1,dy:1},{dx:-1,dy:-1},{dx:1,dy:-1},{dx:-1,dy:1}
                ];
                isSynergyZone = neighbors.some(n => {
                  const nt = tiles[y+n.dy]?.[x+n.dx];
                  return nt?.building && bData.synergy?.with.includes(nt.building.type);
                });
              }
            }

            return (
              <div
                key={tile.id}
                onMouseUp={(e) => handleMouseUp(e, x, y)}
                className={`
                  tile
                  ${terrainClass}
                  ${isSelected ? 'z-50' : ''}
                  ${isSynergyZone && !tile.building ? 'ring-4 ring-blue-400/50 ring-inset shadow-[0_0_30px_rgba(96,165,250,0.6)]' : ''}
                `}
                style={{ 
                  transformStyle: 'preserve-3d',
                  zIndex: (x + y) // 아이소메트릭 깊이 정렬 (앞쪽이 위로)
                }}
              >
                {/* Selection Highlight */}
                {isSelected && <div className="tile-highlight" />}

                {/* Building Layer */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none" 
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {tile.building && (
                    <div className="construct-flash w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                      <Building3D type={tile.building.type} level={tile.building.level} />
                    </div>
                  )}

                  {/* Placement Preview */}
                  {previewBuilding && !tile.building && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                      <div className={`absolute inset-[-6px] border-[4px] rounded-xl transition-all duration-300
                        ${canPlace 
                          ? (previewBuilding === 'DEMOLISH' ? 'border-red-500 bg-red-500/30' : 'border-blue-400 bg-blue-400/30 scale-105') 
                          : 'border-red-600 bg-red-600/50 scale-90 opacity-40'}
                      `} />
                      
                      {previewBuilding !== 'DEMOLISH' && (
                        <div className="opacity-60 scale-95" style={{ transformStyle: 'preserve-3d' }}>
                           <Building3D type={previewBuilding as BuildingType} isGhost />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Demolish Highlight */}
                  {previewBuilding === 'DEMOLISH' && tile.building && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-600/50 rounded-lg animate-pulse z-[100]">
                      <span className="text-4xl" style={{ transform: 'translateZ(60px) rotateX(-45deg)' }}>💥</span>
                    </div>
                  )}
                </div>

                {/* Grid Visual */}
                <div className="absolute inset-0 border-[0.5px] border-white/5 pointer-events-none" />
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CityMap;
