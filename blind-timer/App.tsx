import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TimerDisplay } from './components/TimerDisplay';
import { ResultFeedback } from './components/ResultFeedback';
import { audioService } from './services/audioService';
import { GameState, ScoreResult } from './types';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [result, setResult] = useState<ScoreResult | null>(null);
  
  // Use useRef for high-precision timing logic to avoid re-render delays
  const startTimeRef = useRef<number>(0);
  const requestRef = useRef<number>(0);

  const calculateRank = (finalTime: number): ScoreResult => {
    const diff = finalTime - 10.00;
    const absDiff = Math.abs(diff);
    
    let rank = 'BAD';
    let color = 'text-gray-400';

    if (absDiff < 0.02) { // 9.98 ~ 10.02
      rank = 'PERFECT';
      color = 'text-yellow-400';
    } else if (absDiff < 0.15) {
      rank = 'GREAT';
      color = 'text-green-400';
    } else if (absDiff < 0.50) {
      rank = 'GOOD';
      color = 'text-blue-400';
    } else {
      rank = 'BAD';
      color = 'text-red-400';
    }

    return { time: finalTime, diff, rank, color };
  };

  const updateTimer = () => {
    if (gameState !== GameState.RUNNING) return;
    
    const now = performance.now();
    // Calculate elapsed time in seconds
    const elapsed = (now - startTimeRef.current) / 1000;
    setCurrentTime(elapsed);
    
    requestRef.current = requestAnimationFrame(updateTimer);
  };

  // Start the loop when game runs
  useEffect(() => {
    if (gameState === GameState.RUNNING) {
      startTimeRef.current = performance.now();
      requestRef.current = requestAnimationFrame(updateTimer);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  const handleStart = () => {
    audioService.playStart();
    setGameState(GameState.RUNNING);
    setResult(null);
    setCurrentTime(0);
  };

  const handleStop = () => {
    // Determine the precise end time immediately
    const endTime = performance.now();
    const finalTime = (endTime - startTimeRef.current) / 1000;
    
    setGameState(GameState.RESULT);
    setCurrentTime(finalTime); // Snap UI to exact final time
    
    const scoreResult = calculateRank(finalTime);
    setResult(scoreResult);

    // Play Feedback Sound
    if (scoreResult.rank === 'PERFECT') audioService.playPerfect();
    else if (scoreResult.rank === 'BAD') audioService.playFail();
    else audioService.playSuccess();
  };

  const handleReset = () => {
    audioService.playClick();
    setGameState(GameState.IDLE);
    setCurrentTime(0);
    setResult(null);
  };

  // Main Action Button Logic
  const handleMainAction = () => {
    if (gameState === GameState.IDLE) handleStart();
    else if (gameState === GameState.RUNNING) handleStop();
    else handleReset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-black select-none">
      
      {/* Header */}
      <header className="absolute top-8 text-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-1">
          <i className="fa-solid fa-stopwatch mr-2"></i>Blind Timer
        </h1>
        <p className="text-gray-500 text-sm">마음의 눈으로 10.00초를 맞추세요</p>
      </header>

      {/* Main Game Area */}
      <main className="w-full max-w-md bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-2xl flex flex-col items-center">
        
        {/* Timer Display Component */}
        <TimerDisplay 
          time={currentTime} 
          isRunning={gameState === GameState.RUNNING} 
          isResult={gameState === GameState.RESULT}
        />

        {/* Feedback Area */}
        <div className="h-32 flex items-center justify-center w-full mb-4">
          {gameState === GameState.RESULT && result && (
            <ResultFeedback result={result} />
          )}
          {gameState === GameState.RUNNING && (
             <div className="text-gray-600 animate-pulse text-lg">
               Counting...
             </div>
          )}
          {gameState === GameState.IDLE && (
            <div className="text-gray-500 text-center text-sm px-4">
              <p className="mb-2">처음 3초만 숫자가 보입니다.</p>
              <p>눈을 감고 리듬을 느껴보세요!</p>
            </div>
          )}
        </div>

        {/* Interactive Button */}
        <button
          onClick={handleMainAction}
          className={`
            relative w-full py-6 rounded-2xl text-2xl font-bold uppercase tracking-widest transition-all duration-200 transform active:scale-95
            shadow-[0_0_20px_rgba(0,0,0,0.5)] border-b-4 
            ${gameState === GameState.IDLE ? 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-800' : ''}
            ${gameState === GameState.RUNNING ? 'bg-red-600 hover:bg-red-500 text-white border-red-800 animate-pulse-glow' : ''}
            ${gameState === GameState.RESULT ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-900' : ''}
          `}
        >
          {gameState === GameState.IDLE && <span><i className="fa-solid fa-play mr-2"></i>START</span>}
          {gameState === GameState.RUNNING && <span><i className="fa-solid fa-hand mr-2"></i>STOP!</span>}
          {gameState === GameState.RESULT && <span><i className="fa-solid fa-rotate-right mr-2"></i>RETRY</span>}
        </button>

      </main>

      {/* Footer / Credits */}
      <footer className="absolute bottom-4 text-gray-600 text-xs">
         Using performance.now() for high precision
      </footer>

    </div>
  );
};

export default App;