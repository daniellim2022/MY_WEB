
import React, { useState } from 'react';
import Game from './components/Game';
import Cutscene from './components/Cutscene';
import CharacterSelect from './components/CharacterSelect';
import { GameState, CharacterType } from './types';
import { LEVELS } from './constants';
import { audioService } from './services/audio';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('START');
  const [selectedChar, setSelectedChar] = useState<CharacterType>('RIN');
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const initGame = () => {
    audioService.init();
    setGameState('CHARACTER_SELECT');
  };

  const handleCharSelect = (type: CharacterType) => {
    setSelectedChar(type);
    setGameState('STORY');
    setScore(0);
    setCurrentLevelIdx(0);
  };

  const nextLevel = () => {
    if (currentLevelIdx < LEVELS.length - 1) {
      setCurrentLevelIdx(prev => prev + 1);
      setGameState('STORY');
    } else {
      setGameState('VICTORY');
    }
  };

  const onGameOver = (finalScore: number) => {
    setScore(finalScore);
    if (finalScore > highScore) setHighScore(finalScore);
    setGameState('GAMEOVER');
  };

  return (
    <div className="relative w-full h-screen bg-[#050010] flex items-center justify-center overflow-hidden font-orbitron">
      {gameState === 'START' && (
        <div className="text-center z-10 p-16 border-t-4 border-purple-500 bg-black/80 shadow-[0_0_50px_rgba(150,0,255,0.4)]">
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-300 to-purple-600 mb-2 italic tracking-tighter">SPIRITBOUND</h1>
          <h2 className="text-2xl font-bold text-cyan-400 mb-12 tracking-[0.5em] opacity-80">주술의 각성</h2>
          <p className="text-white/40 mb-10 max-w-lg mx-auto border-y border-purple-900/50 py-4 italic text-sm">
            영혼도시를 잠식하는 주령들을 제령하고<br/>기억의 파편을 되찾으십시오.
          </p>
          <button 
            onClick={initGame}
            className="px-16 py-6 border-2 border-white text-white font-black text-2xl hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            주술 각성
          </button>
        </div>
      )}

      {gameState === 'CHARACTER_SELECT' && <CharacterSelect onSelect={handleCharSelect} />}

      {gameState === 'STORY' && <Cutscene level={LEVELS[currentLevelIdx]} onComplete={() => setGameState('PLAYING')} />}
      
      {gameState === 'PLAYING' && (
        <Game 
          characterType={selectedChar} 
          level={LEVELS[currentLevelIdx]} 
          onWin={nextLevel} 
          onLose={onGameOver} 
          onUpdateScore={(s) => setScore(s)} 
        />
      )}

      {gameState === 'GAMEOVER' && (
        <div className="text-center z-10 p-12 border-4 border-red-900 bg-black/95">
          <h2 className="text-6xl font-black text-red-600 mb-4 animate-pulse italic">영혼 잠식</h2>
          <p className="text-white text-3xl mb-8 font-bold uppercase tracking-widest">Score: {score}</p>
          <button onClick={initGame} className="px-12 py-4 bg-red-800 text-white font-black text-xl hover:bg-red-600 transition-all uppercase">영혼 재결합</button>
        </div>
      )}

      {gameState === 'VICTORY' && (
        <div className="text-center z-10 p-16 border-4 border-cyan-400 bg-black/95">
          <h2 className="text-6xl font-black text-cyan-400 mb-4 tracking-tighter italic">완전 제령</h2>
          <p className="text-white text-2xl mb-8 uppercase tracking-widest">모든 영혼이 제 자리를 찾았습니다.</p>
          <p className="text-cyan-200 mb-12 text-4xl font-black tracking-widest">RANK: S</p>
          <button onClick={() => setGameState('START')} className="px-16 py-5 bg-cyan-600 text-black font-black text-xl hover:bg-cyan-400 transition-all">결계 강화</button>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none opacity-30 scanlines" />
      <style>{`
        .scanlines {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%;
          z-index: 100;
        }
      `}</style>
    </div>
  );
};

export default App;
