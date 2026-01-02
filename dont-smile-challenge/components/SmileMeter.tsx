import React from 'react';

interface SmileMeterProps {
  score: number;
  threshold: number;
}

export const SmileMeter: React.FC<SmileMeterProps> = ({ score, threshold }) => {
  // Calculate percentage (0 to 100)
  const percentage = Math.min(100, Math.max(0, score * 100));
  const isDanger = score > threshold * 0.8;
  
  return (
    <div className="w-full max-w-md mx-auto mt-4 px-4">
      <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-1 text-gray-400">
        <span>Poker Face</span>
        <span className={isDanger ? "text-red-500 animate-pulse" : ""}>Don't Smile!</span>
      </div>
      <div className="h-6 w-full bg-gray-800 rounded-full overflow-hidden border border-gray-700 relative">
        {/* Threshold Marker */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-10 opacity-50"
          style={{ left: `${threshold * 100}%` }}
        />
        
        {/* Progress Bar */}
        <div 
          className={`h-full transition-all duration-100 ease-out ${
            score > threshold ? 'bg-red-600' : isDanger ? 'bg-orange-500' : 'bg-emerald-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-center mt-2 font-mono text-sm text-gray-500">
        Smile Level: {percentage.toFixed(0)}%
      </div>
    </div>
  );
};