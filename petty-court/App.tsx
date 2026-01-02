import React, { useState, useEffect, useRef } from 'react';
import { getVerdict } from './services/geminiService';
import { CaseData, Verdict, AppState } from './types';
import { playGavelSound, playStampSound } from './utils/audio';

// --- Helper Component: Gavel Loading Animation ---
const GavelLoader = () => (
  <div className="flex flex-col items-center justify-center space-y-4 animate-pulse">
    <div className="text-6xl text-amber-600">
      <i className="fa-solid fa-gavel fa-spin" style={{ animationDuration: '2s' }}></i>
    </div>
    <p className="text-xl font-serif text-amber-200">엄중히 심리 중...</p>
    <p className="text-sm text-slate-400">판례를 뒤적이는 중입니다.</p>
  </div>
);

// --- Helper Component: Verdict Paper ---
const VerdictPaper = ({ verdict, onReset }: { verdict: Verdict; onReset: () => void }) => {
  // 컴포넌트 마운트 시 도장 소리 재생
  useEffect(() => {
    setTimeout(() => playStampSound(), 500); // 0.5초 뒤 쾅!
  }, []);

  return (
    <div className="relative w-full max-w-lg bg-[#f0e6d2] text-slate-900 p-8 rounded-sm shadow-2xl overflow-hidden border-8 border-double border-slate-800">
      {/* Background Texture Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>

      {/* Header */}
      <div className="text-center border-b-2 border-slate-800 pb-4 mb-6">
        <h2 className="text-3xl font-serif font-black tracking-widest uppercase mb-1">判 決 文</h2>
        <p className="text-xs font-mono text-slate-600">The Petty Court of AI Justice</p>
      </div>

      {/* Case Info */}
      <div className="mb-6 font-serif">
        <p className="mb-1"><span className="font-bold">사건:</span> {verdict.title}</p>
        <p className="text-red-800 font-bold mt-2">승소: {verdict.winner}</p>
        <p className="text-slate-500 text-sm">패소: {verdict.loser} (소송 비용 부담)</p>
      </div>

      {/* Main Text */}
      <div className="text-justify leading-relaxed font-serif mb-8 text-sm md:text-base border-l-4 border-slate-300 pl-4 italic">
        {verdict.reasoning}
      </div>

      {/* Quote */}
      <div className="text-center mb-8">
        <p className="text-lg font-bold">"{verdict.funQuote}"</p>
        <p className="text-right text-xs mt-2">- AI 솔로몬 판사 -</p>
      </div>

      {/* The Stamp */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="stamp-animation border-4 border-red-700 text-red-700 font-black text-4xl p-4 rounded-lg opacity-80 rotate-[-15deg] whitespace-nowrap bg-red-100/10 backdrop-blur-[1px]">
          승소 (WIN)
        </div>
      </div>
      
      {/* Footer Date */}
      <div className="text-center mt-12 text-xs text-slate-500">
        판결 일자: {new Date().toLocaleDateString()}
      </div>

      <button
        onClick={onReset}
        className="w-full mt-6 bg-slate-800 text-amber-100 py-3 font-bold hover:bg-slate-700 transition-colors rounded-sm"
      >
        다른 사건 접수하기
      </button>
    </div>
  );
};

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.INPUT);
  const [caseData, setCaseData] = useState<CaseData>({
    plaintiff: '',
    defendant: '',
    argument: ''
  });
  const [verdict, setVerdict] = useState<Verdict | null>(null);

  // Handle Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCaseData(prev => ({ ...prev, [name]: value }));
  };

  // Submit Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseData.plaintiff || !caseData.defendant || !caseData.argument) {
      alert("모든 빈칸을 채워주세요, 존경하는 재판장님.");
      return;
    }

    playGavelSound(); // 탕탕탕!
    setAppState(AppState.DELIBERATING);

    try {
      const result = await getVerdict(caseData);
      setVerdict(result);
      setAppState(AppState.VERDICT);
    } catch (error) {
      console.error(error);
      setAppState(AppState.INPUT);
      alert("법정 시스템 오류입니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-amber-600"></div>
      
      {/* Title */}
      <header className="mb-8 text-center">
        <div className="text-5xl mb-2 text-amber-500">
          <i className="fa-solid fa-scale-balanced"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-100 mb-1">
          The Petty Court
        </h1>
        <p className="text-slate-400 text-sm">솔로몬의 AI 판결소</p>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-lg">
        {appState === AppState.INPUT && (
          <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-md p-6 rounded-lg border border-slate-700 shadow-xl space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-amber-500 mb-1 uppercase tracking-wider">원고 (억울한 사람)</label>
                <input
                  type="text"
                  name="plaintiff"
                  value={caseData.plaintiff}
                  onChange={handleInputChange}
                  placeholder="이름 A"
                  className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-amber-500 mb-1 uppercase tracking-wider">피고 (범인?)</label>
                <input
                  type="text"
                  name="defendant"
                  value={caseData.defendant}
                  onChange={handleInputChange}
                  placeholder="이름 B"
                  className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-500 mb-1 uppercase tracking-wider">사건 내용 (무엇이 문제인가)</label>
              <textarea
                name="argument"
                value={caseData.argument}
                onChange={handleInputChange}
                placeholder="예: 제가 탕수육 소스를 부었는데 친구가 화를 냅니다. 이게 맞나요?"
                rows={4}
                className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span>판결 요청</span>
              <i className="fa-solid fa-gavel group-hover:rotate-12 transition-transform"></i>
            </button>
            <p className="text-xs text-center text-slate-500 mt-2">* 판결 결과는 법적 효력이 없으며, 재미로만 보세요.</p>
          </form>
        )}

        {appState === AppState.DELIBERATING && (
          <GavelLoader />
        )}

        {appState === AppState.VERDICT && verdict && (
          <VerdictPaper 
            verdict={verdict} 
            onReset={() => {
              setAppState(AppState.INPUT);
              setCaseData({ plaintiff: '', defendant: '', argument: '' });
            }} 
          />
        )}
      </main>
    </div>
  );
}
