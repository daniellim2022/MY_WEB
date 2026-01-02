import React, { useEffect, useRef } from 'react';
import { Message } from '../types';

interface TerminalProps {
  messages: Message[];
  isThinking: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({ messages, isThinking }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  return (
    <div className="flex-1 bg-slate-900 relative flex flex-col overflow-hidden">
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 z-10"></div>
      
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide z-0"
      >
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] p-4 rounded-lg border ${
                msg.role === 'user' 
                  ? 'bg-cyan-900/20 border-cyan-800 text-cyan-100' 
                  : msg.role === 'system'
                  ? 'bg-red-900/10 border-red-900/50 text-red-400 text-sm italic w-full text-center'
                  : 'bg-slate-800 border-slate-700 text-slate-200 shadow-lg'
              }`}
            >
              {msg.role !== 'user' && msg.role !== 'system' && (
                <div className="text-xs text-slate-500 mb-1 uppercase tracking-widest font-bold">
                  Suspect: Light
                </div>
              )}
              <p className="whitespace-pre-wrap leading-relaxed">
                {msg.text}
                {msg.isTyping && <span className="typing-cursor ml-1"></span>}
              </p>
            </div>
          </div>
        ))}

        {isThinking && (
          <div className="flex justify-start">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};