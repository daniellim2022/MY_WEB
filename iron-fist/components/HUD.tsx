import React, { useEffect, useState } from 'react';
import { GameState, GAME_CONFIG } from '../types';

interface HUDProps {
  gameState: GameState;
  p1Name?: string;
  p2Name?: string;
  onRematch?: () => void;
  onMenu?: () => void;
}

const HUD: React.FC<HUDProps> = ({ gameState, p1Name = 'GILGAMESH', p2Name = 'ARCHER', onRematch, onMenu }) => {
  // Logic for Health Decay (Yellow Bar)
  const [p1HealthDelayed, setP1HealthDelayed] = useState(gameState.p1Health);
  const [p2HealthDelayed, setP2HealthDelayed] = useState(gameState.p2Health);

  useEffect(() => {
    // If real health drops below delayed health, shrink delayed health slowly
    const timer = setInterval(() => {
      setP1HealthDelayed(prev => {
        if (prev > gameState.p1Health) return Math.max(gameState.p1Health, prev - 1); // Decay speed
        return gameState.p1Health;
      });
      setP2HealthDelayed(prev => {
        if (prev > gameState.p2Health) return Math.max(gameState.p2Health, prev - 1);
        return gameState.p2Health;
      });
    }, 16); // 60fps update

    return () => clearInterval(timer);
  }, [gameState.p1Health, gameState.p2Health]);


  const p1Width = (gameState.p1Health / GAME_CONFIG.MAX_HEALTH) * 100;
  const p1DelayWidth = (p1HealthDelayed / GAME_CONFIG.MAX_HEALTH) * 100;

  const p2Width = (gameState.p2Health / GAME_CONFIG.MAX_HEALTH) * 100;
  const p2DelayWidth = (p2HealthDelayed / GAME_CONFIG.MAX_HEALTH) * 100;

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden text-shadow-md" style={{ fontFamily: '"Russo One", sans-serif' }}>
      {/* Notifications (FIGHT, ROUND 1, KO) */}
      {gameState.notification && (
        <div className="absolute inset-0 flex items-center justify-center z-40 animate-in zoom-in spin-in-3 duration-300">
          <h1 className="text-9xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-red-600 tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,1)] scale-150 animate-pulse">
            {gameState.notification}
          </h1>
        </div>
      )}

      {/* COMBOS - ARCADE STYLE */}
      {gameState.comboP1 > 1 && (
        <div className="absolute top-40 left-10 z-30 animate-in slide-in-from-left-10 fade-in duration-200">
          <div className="flex flex-col items-center transform -rotate-6">
            <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-orange-600 filter drop-shadow-[0_4px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px white' }}>
              {gameState.comboP1}
            </span>
            <span className="text-3xl font-black italic text-white tracking-widest uppercase drop-shadow-lg scale-x-110">
              COMBO!
            </span>
          </div>
        </div>
      )}
      {gameState.comboP2 > 1 && (
        <div className="absolute top-40 right-10 z-30 animate-in slide-in-from-right-10 fade-in duration-200">
          <div className="flex flex-col items-center transform rotate-6">
            <span className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-purple-600 filter drop-shadow-[0_4px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '2px white' }}>
              {gameState.comboP2}
            </span>
            <span className="text-3xl font-black italic text-white tracking-widest uppercase drop-shadow-lg scale-x-110">
              COMBO!
            </span>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="absolute top-0 w-full p-4 flex justify-between items-start">

        {/* P1 Health (Cyan/Blue Theme for Gilgamesh/Default) */}
        <div className="w-2/5 max-w-lg relative group">
          <div className="flex justify-between items-end mb-1 px-2">
            <div className="text-cyan-400 font-bold text-2xl italic tracking-wider drop-shadow-md flex items-center">
              <span className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-[0_0_10px_cyan]"></span>
              P1 {p1Name}
            </div>
            <div className="text-white font-mono text-sm opacity-60">{Math.ceil(gameState.p1Health)} / {GAME_CONFIG.MAX_HEALTH}</div>
          </div>

          <div className={`h-6 w-full bg-black/80 backdrop-blur border-2 border-cyan-500/30 transform -skew-x-12 overflow-hidden relative shadow-[0_0_15px_rgba(0,255,255,0.1)]`}>
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

            {/* Delayed Bar (White/Red Fade) */}
            <div
              className="absolute h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${p1DelayWidth}%` }}
            />
            {/* Main Health Bar (Cyan Gradient) */}
            <div
              className={`absolute h-full transition-all duration-75 ease-linear ${gameState.p1Health < 20 ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-r from-cyan-600 via-cyan-400 to-white'}`}
              style={{ width: `${p1Width}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" /> {/* Shine */}
            </div>
          </div>
        </div>

        {/* Timer & Round Score */}
        <div className="w-24 h-20 bg-black/40 backdrop-blur-md border border-white/20 border-b-4 border-b-yellow-500 flex items-center justify-center relative top-[-5px] shadow-lg z-10 clip-path-polygon group">
          {/* P1 Rounds (Left of Timer) */}
          <div className="absolute right-[110%] top-1/2 -translate-y-1/2 flex gap-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className={`w-4 h-4 rounded-full border-2 border-cyan-400 shadow-[0_0_5px_cyan] transition-all ${i < (gameState.p1Wins || 0) ? 'bg-cyan-400 scale-110' : 'bg-transparent opacity-50'}`} />
            ))}
          </div>

          <span className={`text-5xl ${gameState.timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'} drop-shadow-md`}>
            {gameState.timeLeft}
          </span>
          <div className="absolute -bottom-6 text-xs text-yellow-500 font-bold tracking-widest uppercase opacity-80">
            Round {gameState.currentRound || 1}
          </div>

          {/* P2 Rounds (Right of Timer) */}
          <div className="absolute left-[110%] top-1/2 -translate-y-1/2 flex gap-2 flex-row-reverse">
            {[...Array(2)].map((_, i) => (
              <div key={i} className={`w-4 h-4 rounded-full border-2 border-pink-500 shadow-[0_0_5px_magenta] transition-all ${i < (gameState.p2Wins || 0) ? 'bg-pink-500 scale-110' : 'bg-transparent opacity-50'}`} />
            ))}
          </div>
        </div>

        {/* P2 Health (Magenta/Red Theme) */}
        <div className="w-2/5 max-w-lg relative group text-right">
          <div className="flex justify-between items-end mb-1 px-2 flex-row-reverse">
            <div className="text-pink-500 font-bold text-2xl italic tracking-wider drop-shadow-md flex items-center flex-row-reverse">
              <span className="w-3 h-3 bg-pink-500 rounded-full ml-2 animate-pulse shadow-[0_0_10px_magenta]"></span>
              P2 {p2Name}
            </div>
            <div className="text-white font-mono text-sm opacity-60">{Math.ceil(gameState.p2Health)} / {GAME_CONFIG.MAX_HEALTH}</div>
          </div>

          <div className={`h-6 w-full bg-black/80 backdrop-blur border-2 border-pink-500/30 transform skew-x-12 overflow-hidden relative shadow-[0_0_15px_rgba(255,0,255,0.1)]`}>
            {/* Delayed Bar */}
            <div
              className="absolute right-0 h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${p2DelayWidth}%` }}
            />
            {/* Main Health Bar */}
            <div
              className={`absolute right-0 h-full transition-all duration-75 ease-linear ${gameState.p2Health < 20 ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-l from-pink-600 via-pink-400 to-white'}`}
              style={{ width: `${p2Width}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" /> {/* Shine */}
            </div>
          </div>
        </div>
      </div>

      {/* Controls / Instructions */}
      <div className="absolute bottom-4 left-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded">
        <p className="font-bold mb-1">P1 {p1Name} (Red)</p>
        <p>WASD - Move (D/A: Walk, W/S: Sidestep)</p>
        <p>U - Left Punch (LP)</p>
        <p>I - Right Punch (RP)</p>
        <p>J - Left Kick (LK)</p>
        <p>K - Right Kick (RK)</p>
        {p1Name?.toUpperCase() === 'GILGAMESH' ? (
          <>
            <p className="text-yellow-400">Combos: U,I,U...</p>
          </>
        ) : (
          <>
            <p className="text-gray-400">Combos: U,I,U...</p>
          </>
        )}
      </div>
      <div className="absolute bottom-4 right-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded text-right">
        <p className="font-bold mb-1">P2 (Blue)</p>
        <p>Arrows - Move</p>
        <p>Num 1 - Left Punch (LP)</p>
        <p>Num 2 - Right Punch (RP)</p>
        <p>Num 4 - Left Kick (LK)</p>
        <p>Num 5 - Right Kick (RK)</p>
      </div>

      {/* Game Over Screen */}
      {gameState.gameOver && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50 animate-in fade-in duration-1000 backdrop-blur-sm">
          <div className="relative">
            <h1 className="text-9xl font-black italic text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 via-orange-500 to-red-600 tracking-tighter scale-110 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)] animate-pulse">
              VICTORY
            </h1>
            <div className="absolute -bottom-4 right-0 text-4xl text-white font-bold tracking-[0.5em] uppercase opacity-80">
              {gameState.winner} WINS
            </div>
          </div>

          <div className="mt-16 flex gap-8">
            <button
              className="pointer-events-auto px-10 py-4 bg-white text-black font-black text-2xl tracking-widest hover:bg-yellow-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] clip-path-polygon"
              onClick={() => onRematch ? onRematch() : window.location.reload()}
            >
              REMATCH
            </button>
            <button
              className="pointer-events-auto px-10 py-4 bg-transparent border-4 border-white text-white font-black text-2xl tracking-widest hover:bg-white hover:text-black hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] clip-path-polygon"
              onClick={() => onMenu ? onMenu() : window.location.reload()}
            >
              MENU
            </button>
          </div>
        </div>
      )}

      {/* Intro Overlay */}
      {gameState.isIntro && !gameState.notification && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
          <div className="animate-pulse flex flex-col items-center">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 mb-4 italic tracking-tighter scale-150" style={{ filter: 'drop-shadow(0 0 10px rgba(255,165,0,0.8))' }}>
              GET READY
            </h1>
            <h2 className="text-4xl text-white font-bold tracking-[1em] uppercase">For The Next Battle</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default HUD;