import React, { useEffect, useRef } from 'react';
import { Message } from '../types';

interface InterrogationRoomProps {
  messages: Message[];
  isThinking: boolean;
  onSendMessage: (text: string) => void;
  onPress: () => void;
  currentEmotion: number;
  onHint: () => void;
}

export const InterrogationRoom: React.FC<InterrogationRoomProps> = ({ messages, isThinking, onSendMessage, onPress, currentEmotion, onHint }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = React.useState('');

  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
  const isSuspectTalking = lastMessage?.role === 'model';

  // Auto-scroll logic for history log (optional, keeping hidden mostly for VN feel)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  // Sprite Calculation (Assuming 6 frames horizontal strip)
  const getSpriteStyle = () => {
    // 6 frames: 0, 1, 2, 3, 4, 5
    // width per frame = 100% / 6 ~= 16.666%
    const positions = ['0%', '20%', '40%', '60%', '80%', '100%'];
    return {
      backgroundImage: `url('kira_emotions.png')`,
      backgroundSize: '600% 100%',
      backgroundPosition: `${positions[currentEmotion] || '0%'} 0%`,
      backgroundRepeat: 'no-repeat',
      transition: 'none' // Instant switch, no slide
    };
  };

  return (
    <div className="flex-1 relative flex flex-col overflow-hidden bg-black select-none">

      {/* 1. VISUAL LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Background: Interrogation Room */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599940786968-07e11c50e417?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale contrast-125"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/50 to-transparent"></div>

        {/* Digital Rain / Scanlines */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

        {/* CHARACTER TACHIE (Sprite) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full max-h-[85vh] w-auto aspect-[1/2] z-10 pointer-events-none flex items-end justify-center">
          {/* Sprite Render */}
          <div
            className={`h-full w-full filter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] ${isThinking ? 'brightness-75 grayscale' : 'brightness-100'}`}
            style={getSpriteStyle()}
          />
        </div>
      </div>

      {/* 2. HISTORY LAYER (Transparent Overlay) */}
      <div className="absolute top-0 left-0 right-0 h-[40%] p-4 overflow-y-auto scrollbar-hide z-20 mask-linear-gradient">
        <div className="space-y-2 opacity-70 hover:opacity-100 transition-opacity">
          {messages.slice(-5, -1).map((msg, idx) => (
            <div key={idx} className={`text-xs ${msg.role === 'user' ? 'text-cyan-300 text-right' : 'text-slate-300'}`}>
              {msg.role === 'user' ? '나: ' : '라이토: '} {msg.text}
            </div>
          ))}
        </div>
      </div>

      {/* 3. DIALOGUE UI LAYER (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 p-4 md:p-8 flex flex-col gap-4">

        {/* Dialogue Box */}
        <div className="bg-slate-950/90 border-t-2 border-slate-700 backdrop-blur-md p-6 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] relative min-h-[160px]">
          {/* Speaker Name Tag */}
          <div className="absolute -top-4 left-6 bg-cyan-700 text-white px-4 py-1 text-sm font-bold uppercase tracking-widest border border-cyan-500 shadow-[0_0_10px_cyan]">
            {isThinking ? '분석 중...' : isSuspectTalking ? '용의자: 야가미 라이토' : '시스템'}
          </div>

          {/* Text Content */}
          <p className="text-slate-100 text-lg leading-relaxed font-sans font-medium drop-shadow-md">
            {isThinking ? (
              <span className="flex items-center gap-2 text-cyan-400 animate-pulse">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                생각을 정리하는 중...
              </span>
            ) : (
              lastMessage?.text.split('').map((char, i) => (
                <span key={i} className="animate-fade-in" style={{ animationDelay: `${i * 10}ms` }}>{char}</span>
              ))
            )}
            {!isThinking && <span className="inline-block w-3 h-5 bg-cyan-500 ml-2 animate-blink align-middle"></span>}
          </p>
        </div>

        {/* Input Controls */}
        <form onSubmit={handleSubmit} className="flex gap-2 items-stretch h-14">
          {/* Hint Button */}
          <button
            type="button"
            onClick={onHint}
            disabled={isThinking}
            className="px-4 bg-yellow-600/20 text-yellow-500 border border-yellow-600/50 rounded font-bold hover:bg-yellow-600/40 transition-colors disabled:opacity-50 flex items-center justify-center backdrop-blur-sm"
            title="서장의 힌트"
          >
            <i className="fas fa-lightbulb text-xl"></i>
          </button>

          <button
            type="button"
            onClick={onPress}
            disabled={isThinking}
            className="bg-yellow-700/80 hover:bg-yellow-600 text-yellow-100 px-6 border border-yellow-500 font-bold uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed clip-path-slant backdrop-blur-sm"
          >
            추궁하기
          </button>

          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-cyan-500/20 skew-x-12 blur-sm group-focus-within:bg-cyan-500/40 transition-all"></div>
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="심문할 내용을 입력하세요..."
              className="w-full h-full bg-slate-900/80 border border-slate-600 px-4 text-white focus:outline-none focus:border-cyan-400 focus:bg-slate-800 transition-colors font-mono relative z-10"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={isThinking}
            className="bg-red-700 hover:bg-red-600 text-white px-8 font-black uppercase tracking-tighter text-lg border-2 border-red-500 shadow-[0_0_15px_red] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 skew-x-[-10deg]"
          >
            이의 있음!
          </button>
        </form>
      </div>
    </div>
  );
};