
import React from 'react';

interface PolicyPanelProps {
  taxRate: number;
  setTaxRate: (rate: number) => void;
  income: number;
  expenses: number;
  onClose: () => void;
}

const PolicyPanel: React.FC<PolicyPanelProps> = ({ taxRate, setTaxRate, income, expenses, onClose }) => {
  const profit = income - expenses;

  return (
    <div className="absolute left-8 bottom-48 w-80 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl p-8 z-[60] animate-in fade-in slide-in-from-bottom-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-black uppercase tracking-widest text-blue-400">City Treasury</h3>
        <button onClick={onClose} className="text-slate-500 hover:text-white">✕</button>
      </div>

      <div className="space-y-6">
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Monthly Income</span>
            <span className="text-emerald-400 font-mono font-bold">+${Math.floor(income).toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Maintenance</span>
            <span className="text-red-400 font-mono font-bold">-${Math.floor(expenses).toLocaleString()}</span>
          </div>
          <div className="h-px bg-white/10 my-1"></div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-xs font-black uppercase tracking-widest text-white">Estimated Profit</span>
            <span className={`text-sm font-black font-mono ${profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
              ${Math.floor(profit).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Target Tax Rate: {taxRate}%</span>
            <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-tighter">Happiness impact x2.5</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="30" 
            step="1" 
            value={taxRate} 
            onChange={(e) => setTaxRate(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[8px] font-black text-slate-600 uppercase tracking-widest px-1">
            <span>Booster Growth</span>
            <span>Max Revenue</span>
          </div>
        </div>

        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <p className="text-[10px] text-blue-300 italic leading-relaxed">
            "시장님, 세금이 너무 높으면 시민들이 떠나고 행복도가 급락합니다. 전력과 수도 공급을 완료하면 수익이 230% 이상 증가할 수 있습니다."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPanel;
