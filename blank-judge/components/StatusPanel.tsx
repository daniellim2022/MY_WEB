import React from 'react';

interface StatusPanelProps {
  defense: number;
}

export const StatusPanel: React.FC<StatusPanelProps> = ({ defense }) => {
  // Glass gauge effect calculation
  // > 60: Cyan (Confident)
  // 30-60: Yellow (Shaken)
  // < 30: Red (Critical)
  const barColor = defense > 60 ? 'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.7)]' : defense > 30 ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.7)]' : 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.7)]';
  const pulseClass = defense < 30 ? 'animate-pulse' : '';

  return (
    <div className="bg-slate-950 border-b border-slate-800 p-4 flex items-center justify-between z-30 shadow-2xl relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none"></div>

      <div className="flex items-center space-x-4 z-10">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 font-black text-2xl tracking-tighter drop-shadow-sm" style={{ fontFamily: 'Impact, sans-serif' }}>
          공백의 심판자
        </div>
        <div className="hidden md:block h-8 w-px bg-slate-800"></div>
        <div className="hidden md:block text-xs text-slate-400 font-mono leading-tight">
          CASE #2024-K-09 <br />
          <span className="text-cyan-600">SUBJECT: 야가미 라이토</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 w-1/3 md:w-1/4 z-10">
        <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest hidden sm:block">멘탈 방어율 (Mental Defense)</div>

        {/* Glass Gauge Container */}
        <div className="flex-1 h-4 bg-slate-900/80 rounded-sm border border-slate-700 relative backdrop-blur-sm overflow-hidden">
          {/* Grid lines inside bar */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDBMMCA0IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30"></div>

          <div
            className={`h-full ${barColor} ${pulseClass} transition-all duration-700 ease-out skew-x-12 origin-left`}
            style={{ width: `${Math.max(0, defense)}%` }} // Ensure no negative width
          ></div>
        </div>

        <div className="text-lg font-mono text-cyan-400 font-bold w-12 text-right drop-shadow-glow">
          {Math.max(0, defense)}%
        </div>
      </div>
    </div>
  );
};