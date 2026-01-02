import React from 'react';

interface TimerDisplayProps {
  time: number;
  isRunning: boolean;
  isResult: boolean;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, isRunning, isResult }) => {
  // Format to 2 decimal places: "10.00"
  const formattedTime = time.toFixed(2);
  
  // Logic for Blind Mode:
  // If running and time > 3 seconds, fade out or hide.
  // We use opacity transition for smoothness.
  const isHidden = isRunning && time > 3.0;

  let textColorClass = "text-white";
  if (isResult) {
    if (Math.abs(time - 10.00) < 0.02) textColorClass = "text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]";
    else if (Math.abs(time - 10.00) < 0.1) textColorClass = "text-green-400";
    else if (Math.abs(time - 10.00) < 0.5) textColorClass = "text-blue-400";
    else textColorClass = "text-red-400";
  }

  return (
    <div className="relative flex flex-col items-center justify-center my-10 h-32">
       {/* Hints for the user */}
      {isRunning && !isHidden && (
        <div className="absolute -top-6 text-gray-500 text-sm font-bold tracking-widest animate-pulse">
          RHYTHM CHECK...
        </div>
      )}
      {isHidden && isRunning && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 text-6xl opacity-20 select-none">
          ? ? . ? ?
        </div>
      )}

      {/* The Actual Timer Number */}
      <div 
        className={`text-8xl font-mono font-bold transition-all duration-700 ${textColorClass} ${isHidden ? 'opacity-0 blur-sm scale-95' : 'opacity-100 scale-100'}`}
      >
        {formattedTime}<span className="text-4xl ml-2 text-gray-500">s</span>
      </div>
      
      {/* Target Indicator */}
      <div className="mt-4 text-gray-400 uppercase tracking-[0.2em] text-sm">
        Target: <span className="text-yellow-500 font-bold">10.00s</span>
      </div>
    </div>
  );
};