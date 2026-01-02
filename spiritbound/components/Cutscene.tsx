
import React, { useState, useEffect } from 'react';
import { LevelConfig } from '../types';

interface CutsceneProps {
  level: LevelConfig;
  onComplete: () => void;
}

const Cutscene: React.FC<CutsceneProps> = ({ level, onComplete }) => {
  const [text, setText] = useState("");
  const fullText = level.description;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center p-12 text-center font-orbitron overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-2xl w-full">
        <div className="text-purple-500 text-xs font-bold uppercase tracking-[0.5em] mb-4">제령 보고서 :: Phase {level.id}</div>
        <h2 className="text-5xl font-black text-white mb-8 tracking-tighter italic border-b-2 border-purple-900 pb-4">{level.title}</h2>
        <div className="bg-purple-950/20 p-8 backdrop-blur-md border border-purple-500/20 text-left min-h-[200px]">
          <p className="text-lg text-white/90 leading-relaxed italic">
            &gt; {text}<span className="animate-pulse bg-purple-500 ml-1">_</span>
          </p>
        </div>
        <button 
          onClick={onComplete}
          className="mt-12 px-12 py-4 bg-white text-black font-black text-xl transition-all hover:bg-purple-400 hover:scale-105 active:scale-95"
        >
          제령 시작
        </button>
      </div>
    </div>
  );
};

export default Cutscene;
