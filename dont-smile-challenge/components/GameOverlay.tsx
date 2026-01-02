import React from 'react';
import { GameState } from '../types';

interface GameOverlayProps {
  gameState: GameState;
  onStart: () => void;
  onRestart: () => void;
  finalTime: number;
}

export const GameOverlay: React.FC<GameOverlayProps> = ({ 
  gameState, 
  onStart, 
  onRestart, 
  finalTime 
}) => {
  if (gameState === GameState.PLAYING) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
      <div className="max-w-md w-full text-center">
        
        {gameState === GameState.LOADING && (
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-emerald-500 border-gray-700 rounded-full animate-spin mb-4"></div>
            <h2 className="text-xl font-bold text-white">AI 로딩중...</h2>
            <p className="text-gray-400 mt-2">얼굴 인식 엔진을 준비하고 있어요.</p>
          </div>
        )}

        {gameState === GameState.IDLE && (
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-2xl">
            <div className="text-6xl mb-6">😐</div>
            <h1 className="text-3xl font-black text-white mb-2 tracking-tight">
              DON'T SMILE
            </h1>
            <p className="text-gray-400 mb-8">
              웃으면 바로 게임 오버!<br/>
              얼마나 오래 무표정을 유지할 수 있을까요?
            </p>
            <button
              onClick={onStart}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-900/50"
            >
              도전 시작하기
            </button>
          </div>
        )}

        {gameState === GameState.GAME_OVER && (
          <div className="bg-red-950/90 border border-red-800 p-8 rounded-2xl shadow-2xl animate-[bounce_0.5s_ease-out]">
            <div className="text-6xl mb-6">😆</div>
            <h1 className="text-4xl font-black text-red-500 mb-2">GAME OVER!</h1>
            <p className="text-red-200 mb-6 font-medium">
              웃어버리셨군요!
            </p>
            
            <div className="bg-black/40 rounded-lg p-4 mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wide">버틴 시간</p>
              <p className="text-4xl font-mono text-white mt-1">
                {(finalTime / 1000).toFixed(2)}<span className="text-lg">초</span>
              </p>
            </div>

            <button
              onClick={onRestart}
              className="w-full bg-white text-red-900 hover:bg-gray-200 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              다시 도전하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};