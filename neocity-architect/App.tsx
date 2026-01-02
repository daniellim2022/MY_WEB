
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  BuildingType, 
  TerrainType, 
  Tile, 
  CityResources, 
  GameState,
  Mission,
  CityEvent
} from './types';
import { 
  GRID_SIZE, 
  INITIAL_RESOURCES, 
  BUILDING_DATA,
  BUILDING_CONSTRAINTS
} from './constants';
import Header from './components/Header';
import BuildingMenu from './components/BuildingMenu';
import InfoPanel from './components/InfoPanel';
import CityMap from './components/CityMap';
import PolicyPanel from './components/PolicyPanel';
import { GoogleGenAI } from '@google/genai';

const MILESTONES = [
  { pop: 50, reward: 5000, label: '작은 정착지' },
  { pop: 300, reward: 15000, label: '활기찬 해안 도시' },
  { pop: 1000, reward: 40000, label: '거대 해상 무역항' },
  { pop: 3000, reward: 200000, label: '네오 시티 메트로폴리스' }
];

const EVENTS: CityEvent[] = [
  { id: 'boom', name: '경제 호황', description: '시장 상황이 좋습니다! 세수 수익이 50% 증가합니다.', duration: 15, effect: { revenueMultiplier: 1.5 } },
  { id: 'festival', name: '음악 축제', description: '도시 전체에 음악이 흐릅니다! 행복도가 크게 상승합니다.', duration: 7, effect: { happinessBonus: 30 } },
  { id: 'storm', name: '해양 폭풍', description: '거센 파도가 항구를 위협합니다. 유지비가 상승합니다.', duration: 5, effect: { revenueMultiplier: 0.6 } },
  { id: 'discovery', name: '심해 유전 발견', description: '바다에서 새로운 에너지가 발견되었습니다. 산업 수익이 증가합니다.', duration: 10, effect: { revenueMultiplier: 1.8 } }
];

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const initialTiles: Tile[][] = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row: Tile[] = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        let terrain = TerrainType.GRASS;
        if (x < 5 || y > 10) terrain = TerrainType.WATER;
        if (x > 12 && y < 3) terrain = TerrainType.MOUNTAIN;
        row.push({ id: `${x}-${y}`, x, y, terrain });
      }
      initialTiles.push(row);
    }
    return {
      tiles: initialTiles,
      resources: { ...INITIAL_RESOURCES, taxRate: 10, monthlyIncome: 0, monthlyExpenses: 0 },
      day: 1, month: 1, year: 2024,
      level: 1,
      selectedBuildingType: null,
      selectedTile: null,
      milestonesReached: [],
      missions: [
        { id: 'm1', description: '도시 인프라: 도로 15개', target: 15, current: 0, reward: 2000, isCompleted: false, category: 'Infrastructure' },
        { id: 'm2', description: '해양 산업: 해양 건물 5개', target: 5, current: 0, reward: 5000, isCompleted: false, category: 'Maritime' },
        { id: 'm3', description: '부유한 시장: 자산 $50,000', target: 50000, current: 15000, reward: 10000, isCompleted: false, category: 'Economy' }
      ],
      activeEvent: null
    };
  });

  const [camera, setCamera] = useState({ x: 0, y: 0, zoom: 0.8 });
  const [isDragging, setIsDragging] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const startMousePos = useRef({ x: 0, y: 0 });
  const [aiAdvice, setAiAdvice] = useState<string>("도시 건설 준비 완료. 바다의 잠재력을 깨우는 것이 승리의 열쇠입니다.");
  const [lastNotification, setLastNotification] = useState<string | null>(null);
  const [placementError, setPlacementError] = useState<string | null>(null);
  const lastAdviceTime = useRef<number>(0);

  const checkConnectivity = useCallback((tiles: Tile[][]) => {
    return tiles.map(row => row.map(tile => {
      if (!tile.building) return tile;
      if (tile.building.type === BuildingType.ROAD || tile.building.type === BuildingType.POWER_PLANT || tile.building.type === BuildingType.WATER_TOWER || tile.building.type === BuildingType.OFFSHORE_RIG) {
        return { ...tile, building: { ...tile.building, isConnected: true } };
      }
      const neighbors = [{ dx: 0, dy: 1 }, { dx: 0, dy: -1 }, { dx: 1, dy: 0 }, { dx: -1, dy: 0 }];
      const hasRoadNeighbor = neighbors.some(n => {
        const nt = tiles[tile.y + n.dy]?.[tile.x + n.dx];
        return nt?.building?.type === BuildingType.ROAD;
      });
      return { ...tile, building: { ...tile.building, isConnected: hasRoadNeighbor } };
    }));
  }, []);

  const calculateSynergy = (tile: Tile, tiles: Tile[][]) => {
    if (!tile.building) return 1;
    const stats = BUILDING_DATA[tile.building.type];
    if (!stats?.synergy) return 1;
    const neighbors = [{ dx: 0, dy: 1 }, { dx: 0, dy: -1 }, { dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 1, dy: 1 }, { dx: -1, dy: -1 }, { dx: 1, dy: -1 }, { dx: -1, dy: 1 }];
    let multiplier = 1;
    neighbors.forEach(n => {
      const neighborTile = tiles[tile.y + n.dy]?.[tile.x + n.dx];
      if (neighborTile?.building && stats.synergy?.with.includes(neighborTile.building.type)) {
        multiplier += stats.synergy.bonus;
      }
    });
    return Math.min(multiplier, 3.0);
  };

  const getAiAdvice = useCallback(async (res: CityResources) => {
    if (Date.now() - lastAdviceTime.current < 35000) return;
    lastAdviceTime.current = Date.now();
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `도시 건설 전략 고문입니다. 자산 $${res.money}, 인구 ${res.population}, 행복도 ${res.satisfaction}%. 해양 산업 활성화 방안에 대해 조언 한 문장을 하세요.`;
      const response = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: prompt });
      if (response.text) setAiAdvice(response.text.trim());
    } catch (e) { console.warn("Advisor is busy."); }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setGameState(prev => {
        let dailyPotentialRev = 0, dailyMaint = 0, pDem = 0, wDem = 0, pSup = 0, wSup = 0, pCap = 0, hMod = 0;
        let roadCount = 0, maritimeCount = 0;
        const updatedTiles = checkConnectivity(prev.tiles);
        const event = prev.activeEvent;
        
        updatedTiles.forEach(row => row.forEach(t => {
          if (t.building) {
            const s = BUILDING_DATA[t.building.type];
            if (!s) return;
            const level = t.building.level;
            const synergy = calculateSynergy(t, updatedTiles);
            const isUtility = [BuildingType.POWER_PLANT, BuildingType.WATER_TOWER, BuildingType.ROAD].includes(t.building.type);
            const efficiency = (isUtility || t.building.isConnected) ? (1 + (level - 1) * 0.6) * synergy : 0.2;
            dailyPotentialRev += (s.revenue || 0) * efficiency;
            dailyMaint += s.maintenance * level;
            pDem += s.powerDemand * level * (event?.effect.demandMultiplier || 1);
            wDem += s.waterDemand * level;
            pSup += (s.powerOutput || 0) * level;
            wSup += (s.waterOutput || 0) * level;
            pCap += (s.popCapacity || 0) * (t.building.isConnected ? efficiency : 0.4);
            hMod += (s.happinessBonus || 0) * (t.building.isConnected ? 1.2 : 0.5);
            if (t.building.type === BuildingType.ROAD) roadCount++;
            if ([BuildingType.PORT, BuildingType.FISHERY, BuildingType.SEA_PARK, BuildingType.OFFSHORE_RIG, BuildingType.MARINA].includes(t.building.type)) maritimeCount++;
          }
        }));

        let activeEvent = prev.activeEvent;
        if (activeEvent) {
          const newDuration = activeEvent.duration - 0.1;
          if (newDuration <= 0) activeEvent = null;
          else activeEvent = { ...activeEvent, duration: newDuration };
        } else if (Math.random() < 0.004) {
          activeEvent = EVENTS[Math.floor(Math.random() * EVENTS.length)];
          setLastNotification(`EVENT: ${activeEvent.name}`);
        }

        if (activeEvent?.effect.revenueMultiplier) dailyPotentialRev *= activeEvent.effect.revenueMultiplier;
        const pMet = pSup >= pDem, wMet = wSup >= wDem;
        const currentSatisfaction = Math.min(100, Math.max(0, 80 + (hMod / 6) - Math.max(0, (prev.resources.taxRate - 10) * 3.5)));
        const actualDailyRevenue = dailyPotentialRev * (0.25 + (pMet ? 0.375 : 0) + (wMet ? 0.375 : 0));
        const actualDailyMaint = dailyMaint / 30;
        const m = prev.resources.money + actualDailyRevenue - actualDailyMaint;
        let pop = prev.resources.population;
        if (pMet && wMet && currentSatisfaction > 35) {
          if (pop < pCap) pop += Math.ceil((currentSatisfaction / 100) * (pCap - pop) * 0.12 + 1);
        } else if (currentSatisfaction < 25) pop = Math.max(0, pop - 5);

        let d = prev.day + 1, mo = prev.month, yr = prev.year;
        if (d > 30) { d = 1; mo++; if (mo > 12) { mo = 1; yr++; } }

        let newMilestones = [...prev.milestonesReached], bonus = 0, newLevel = prev.level;
        MILESTONES.forEach(ms => {
          if (pop >= ms.pop && !newMilestones.includes(ms.label)) {
            newMilestones.push(ms.label); bonus += ms.reward; newLevel++;
            setLastNotification(`MILESTONE: ${ms.label}!`);
          }
        });

        const updatedMissions = prev.missions.map(mission => {
          if (mission.isCompleted) return mission;
          let currentVal = mission.current;
          if (mission.category === 'Infrastructure') currentVal = roadCount;
          if (mission.category === 'Maritime') currentVal = maritimeCount;
          if (mission.category === 'Economy') currentVal = m;
          if (currentVal >= mission.target) {
            bonus += mission.reward; setLastNotification(`MISSION SUCCESS: ${mission.description}`);
            return { ...mission, current: currentVal, isCompleted: true };
          }
          return { ...mission, current: currentVal };
        });

        const res = { money: Math.max(0, m + bonus), power: pSup - pDem, water: wSup - wDem, population: pop, satisfaction: currentSatisfaction, taxRate: prev.resources.taxRate, monthlyIncome: actualDailyRevenue * 30, monthlyExpenses: dailyMaint };
        if (d === 1 || d === 15) getAiAdvice(res);
        return { ...prev, tiles: updatedTiles, day: d, month: mo, year: yr, resources: res, level: newLevel, milestonesReached: newMilestones, missions: updatedMissions, activeEvent };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [getAiAdvice, checkConnectivity]);

  const handleTileClick = useCallback((x: number, y: number) => {
    const tile = gameState.tiles[y][x];

    if (gameState.selectedBuildingType === 'DEMOLISH') {
      if (!tile.building) return;
      setGameState(prev => {
        const nt = [...prev.tiles.map(r => [...r])];
        nt[y][x] = { ...nt[y][x], building: undefined };
        return { ...prev, tiles: nt };
      });
      return;
    }

    if (gameState.selectedBuildingType) {
      const bType = gameState.selectedBuildingType as BuildingType;
      const bData = BUILDING_DATA[bType];
      const constraints = BUILDING_CONSTRAINTS[bType];

      if (tile.building) { setPlacementError("이미 건물이 배치되어 있습니다!"); return; }
      if (!constraints.allowedTerrain.includes(tile.terrain)) { setPlacementError("이 지역에는 건설할 수 없습니다."); return; }
      if (gameState.resources.money < bData.cost) { setPlacementError("자금이 부족합니다!"); return; }

      setGameState(prev => {
        const nt = [...prev.tiles.map(r => [...r])];
        nt[y][x] = { ...nt[y][x], building: { type: bType, level: 1 } };
        setPlacementError(null);
        return { ...prev, tiles: nt, resources: { ...prev.resources, money: prev.resources.money - bData.cost } };
      });
      return;
    }
    setGameState(prev => ({ ...prev, selectedTile: prev.selectedTile?.x === x && prev.selectedTile?.y === y ? null : { x, y } }));
  }, [gameState.selectedBuildingType, gameState.tiles, gameState.resources.money, gameState.selectedTile]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    setCamera(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const pos = { x: e.clientX, y: e.clientY };
    lastMousePos.current = pos;
    startMousePos.current = pos;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    setIsDragging(false);
  };

  return (
    <div className="h-screen w-screen grid grid-rows-[auto_1fr_auto] bg-slate-950 text-white overflow-hidden select-none" 
         onMouseMove={handleMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
      
      <Header resources={gameState.resources} date={`${gameState.year}.${gameState.month}.${gameState.day}`} advice={aiAdvice} level={gameState.level} missions={gameState.missions.filter(m => !m.isCompleted)} activeEvent={gameState.activeEvent} />
      
      <div className={`relative isometric-container overflow-hidden transition-all duration-300 ${gameState.selectedBuildingType ? (gameState.selectedBuildingType === 'DEMOLISH' ? 'ring-[20px] ring-inset ring-red-500/20' : 'ring-[20px] ring-inset ring-blue-500/10') : ''}`} onMouseDown={onMouseDown} onWheel={(e) => setCamera(prev => ({ ...prev, zoom: Math.min(2.0, Math.max(0.3, prev.zoom - e.deltaY * 0.001)) }))}>
        <div className="stars" />
        
        {placementError && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[400] bg-red-600 border-2 border-white px-8 py-2.5 rounded-full shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-bounce pointer-events-none">
            <span className="text-sm font-black uppercase tracking-widest">⚠️ {placementError}</span>
          </div>
        )}

        {lastNotification && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[390] bg-blue-600 border-2 border-white px-10 py-4 rounded-2xl shadow-2xl animate-in zoom-in duration-300 pointer-events-none">
            <span className="text-md font-black uppercase tracking-widest">{lastNotification}</span>
          </div>
        )}

        <div className="camera-layer" style={{ transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})` }}>
          <div className="world-wrapper">
            <CityMap 
              tiles={gameState.tiles} 
              onTileClick={handleTileClick} 
              selectedTile={gameState.selectedTile} 
              previewBuilding={gameState.selectedBuildingType} 
              resources={gameState.resources}
              startMousePos={startMousePos.current}
            />
          </div>
        </div>

        <button onClick={() => setShowPolicy(!showPolicy)} className="absolute top-8 left-8 bg-slate-900/90 hover:bg-slate-800 p-5 rounded-[2.5rem] border-2 border-white/10 z-[200] flex items-center gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all active:scale-95 group">
          <span className="text-3xl group-hover:rotate-12 transition-transform">⚖️</span>
          <div className="text-left">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Treasury & Strategy</div>
            <div className="text-sm font-bold text-white">TAX: {gameState.resources.taxRate}%</div>
          </div>
        </button>

        {showPolicy && <PolicyPanel taxRate={gameState.resources.taxRate} setTaxRate={(rate) => setGameState(prev => ({ ...prev, resources: { ...prev.resources, taxRate: rate } }))} income={gameState.resources.monthlyIncome} expenses={gameState.resources.monthlyExpenses} onClose={() => setShowPolicy(false)} />}
        
        {gameState.selectedTile && (
          <InfoPanel 
            tile={gameState.tiles[gameState.selectedTile.y][gameState.selectedTile.x]} 
            onClose={() => setGameState(prev => ({ ...prev, selectedTile: null }))} 
            onUpgrade={(x, y) => {
              const tile = gameState.tiles[y][x];
              if (!tile.building) return;
              const cost = Math.floor(BUILDING_DATA[tile.building.type].cost * tile.building.level * 2.0);
              if (gameState.resources.money >= cost) {
                setGameState(prev => {
                  const nt = [...prev.tiles.map(r => [...r])];
                  nt[y][x] = { ...nt[y][x], building: { ...nt[y][x].building!, level: nt[y][x].building!.level + 1 } };
                  return { ...prev, tiles: nt, resources: { ...prev.resources, money: prev.resources.money - cost } };
                });
              }
            }}
            money={gameState.resources.money}
          />
        )}
      </div>

      <BuildingMenu selected={gameState.selectedBuildingType} onSelect={(t) => setGameState(prev => ({ ...prev, selectedBuildingType: t }))} resources={gameState.resources} cityLevel={gameState.level} />
    </div>
  );
};

export default App;
