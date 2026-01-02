import React from 'react';
import { ScoreResult } from '../types';

interface ResultFeedbackProps {
  result: ScoreResult;
}

export const ResultFeedback: React.FC<ResultFeedbackProps> = ({ result }) => {
  const { diff, rank, color } = result;
  
  // Convert diff to signed string +0.05 or -0.05
  const diffSign = diff > 0 ? '+' : '';
  const diffStr = `${diffSign}${diff.toFixed(2)}s`;

  return (
    <div className="flex flex-col items-center animate-[bounce_0.5s_ease-out]">
      <div className={`text-5xl font-black italic mb-2 ${color} drop-shadow-lg`}>
        {rank}
      </div>
      <div className="text-xl text-gray-300 font-mono bg-gray-800 px-4 py-1 rounded-full border border-gray-700">
        오차: <span className={color}>{diffStr}</span>
      </div>
      {rank === 'PERFECT' && (
         <div className="mt-4 text-sm text-yellow-200 animate-pulse">
           ✨ 전설의 감각! 인간 메트로놈! ✨
         </div>
      )}
    </div>
  );
};