import React from 'react';
import { GameState } from '../types';

interface GameOverScreenProps {
    state: GameState;
    onRestart: () => void;
    report?: string;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ state, onRestart, report }) => {
    const isWin = state === GameState.GAME_OVER_WON;

    return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in">
            {/* Background Glitch Effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center space-y-8 p-10 max-w-2xl border-y-4 border-double w-full">
                {/* Title */}
                <h1 className={`text-6xl md:text-8xl font-black italic tracking-tighter ${isWin ? 'text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]' : 'text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]'}`}
                    style={{ fontFamily: 'Impact, sans-serif', WebkitTextStroke: isWin ? '2px #0891b2' : '2px #991b1b' }}>
                    {isWin ? 'MISSION CLEAR' : 'GAME OVER'}
                </h1>

                {/* Subtitle */}
                <div className="space-y-2">
                    <p className={`text-2xl font-bold font-mono ${isWin ? 'text-white' : 'text-gray-400'}`}>
                        {isWin ? '자백 확보 성공 (CONFESSION OBTAINED)' : '용의자 심리 방어선 돌파 실패'}
                    </p>
                </div>

                {/* Investigator Report Card */}
                {report && (
                    <div className="text-left bg-slate-900/80 border border-slate-700 p-6 rounded-sm shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-50">
                            <span className="text-[10px] border border-slate-500 px-1 text-slate-400">CONFIDENTIAL</span>
                        </div>
                        <h3 className="text-cyan-500 font-bold mb-4 uppercase tracking-widest border-b border-slate-700 pb-2">
                            <i className="fas fa-user-secret mr-2"></i> 수사관 심리 분석 보고서
                        </h3>
                        <div className="whitespace-pre-wrap text-sm text-slate-300 font-mono leading-relaxed">
                            {report}
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <button
                    onClick={onRestart}
                    className={`px-12 py-4 text-xl font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 mt-4
            ${isWin
                            ? 'bg-cyan-600 hover:bg-cyan-500 text-white border-2 border-cyan-400 shadow-[0_0_20px_cyan]'
                            : 'bg-red-600 hover:bg-red-500 text-white border-2 border-red-400 shadow-[0_0_20px_red]'}
          `}
                >
                    {isWin ? 'Next Case' : 'Retry Investigation'}
                </button>
            </div>
        </div>
    );
};
