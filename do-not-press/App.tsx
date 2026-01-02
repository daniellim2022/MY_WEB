import React, { useState, useEffect, useCallback, useRef } from 'react';

// 효과음 생성 유틸리티 (Web Audio API)
const playSound = (type: 'click' | 'angry' | 'error' | 'win') => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;
  
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  const now = ctx.currentTime;

  if (type === 'click') {
    // 뽁! 하는 귀여운 소리
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } else if (type === 'angry') {
    // 삐빅! 경고음
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.2);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'error') {
    // 지지직 노이즈 느낌
    osc.type = 'square';
    osc.frequency.setValueAtTime(50, now);
    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
    osc.start(now);
    osc.stop(now + 0.5);
  }
};

// 버튼의 대사 목록
const MESSAGES = [
  "절대 누르지 마시오", // 0
  "왜 눌렀어?",       // 1
  "누르지 말라니까!",  // 2
  "경고했어...",      // 3
  "하지 말라고!!",     // 4
  "야!!!",            // 5
  "진짜 화낸다?",      // 6
  "시스템 삭제 중...", // 7
  "농담이야 메롱 :P",  // 8
  "잡아봐라~",        // 9 ~
];

// 랜덤 위치 생성 함수 (화면 밖으로 나가지 않게 10% ~ 80% 범위 제한)
const getRandomPosition = () => {
  return {
    top: Math.floor(Math.random() * 70) + 15, // 15% ~ 85%
    left: Math.floor(Math.random() * 70) + 15, // 15% ~ 85%
  };
};

const App: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [isAngry, setIsAngry] = useState(false);
  const [isBlackout, setIsBlackout] = useState(false); // 페이크 종료 효과
  
  // 버튼 클릭 핸들러
  const handleButtonClick = useCallback(() => {
    // 10번째 클릭 시 페이크 종료 효과 (화면 꺼짐)
    if (clickCount === 7) {
      playSound('error');
      setIsBlackout(true);
      setTimeout(() => {
        setIsBlackout(false);
        setClickCount(prev => prev + 1);
        playSound('click');
      }, 2000);
      return;
    }

    // 소리 재생 로직
    if (clickCount > 4) {
      playSound('angry');
      setIsAngry(true);
      setTimeout(() => setIsAngry(false), 300);
    } else {
      playSound('click');
    }

    // 카운트 증가
    setClickCount(prev => prev + 1);

    // 위치 이동 (첫 클릭 이후부터)
    const newPos = getRandomPosition();
    setPosition(newPos);

  }, [clickCount]);

  // 대사 결정 로직
  const getMessage = () => {
    if (clickCount >= MESSAGES.length) return MESSAGES[MESSAGES.length - 1];
    return MESSAGES[clickCount];
  };

  // 배경색 결정 로직 (화날수록 배경이 붉어짐)
  const getBackgroundColor = () => {
    if (isBlackout) return 'bg-black';
    if (clickCount < 3) return 'bg-slate-900';
    if (clickCount < 6) return 'bg-red-900';
    return 'bg-red-950';
  };

  // 버튼 스타일 동적 생성
  const buttonStyle = {
    top: `${position.top}%`,
    left: `${position.left}%`,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className={`w-full h-screen transition-colors duration-700 ease-in-out relative overflow-hidden flex flex-col items-center justify-center ${getBackgroundColor()}`}>
      
      {/* 배경 장식 텍스트 (분위기 조성) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <span className="text-white text-[20vw] font-impact rotate-12">
          {clickCount > 5 ? "DANGER" : "WARNING"}
        </span>
      </div>

      {/* 헤더 / 상태 표시 */}
      <div className={`absolute top-10 text-white text-center transition-opacity duration-500 ${isBlackout ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-2xl opacity-50 mb-2">DO NOT PRESS CHALLENGE</h1>
        <p className="text-sm text-gray-400">레벨: {clickCount > 9 ? 'MAX' : clickCount}</p>
      </div>

      {/* 페이크 종료 화면 메시지 */}
      {isBlackout && (
        <div className="z-50 text-green-500 font-mono text-xl animate-pulse text-center">
          SYSTEM FAILURE...<br/>
          REBOOTING...
        </div>
      )}

      {/* 메인 버튼 */}
      {!isBlackout && (
        <button
          onClick={handleButtonClick}
          style={buttonStyle}
          className={`
            absolute
            w-48 h-48 sm:w-64 sm:h-64
            rounded-full
            shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_-10px_20px_rgba(0,0,0,0.2)]
            border-8 border-red-800
            bg-gradient-to-br from-red-500 to-red-700
            active:scale-95 active:shadow-inner
            flex flex-col items-center justify-center
            text-white text-center
            transition-all duration-300 ease-out
            cursor-pointer
            group
            ${isAngry ? 'animate-angry' : 'animate-bounce'}
          `}
        >
          {/* 버튼 광택 효과 */}
          <div className="absolute top-4 w-3/4 h-1/2 bg-gradient-to-b from-white to-transparent opacity-20 rounded-full blur-sm"></div>
          
          {/* 아이콘 */}
          <i className={`fas fa-hand-point-up text-4xl mb-4 transition-transform duration-200 ${clickCount > 0 ? 'group-hover:rotate-180' : ''}`}></i>
          
          {/* 텍스트 */}
          <span className="text-xl sm:text-2xl font-bold font-impact drop-shadow-md px-4 break-keep leading-tight select-none">
            {getMessage()}
          </span>
        </button>
      )}

      {/* 힌트/안내 (초반에만 표시) */}
      {clickCount === 0 && (
        <div className="absolute bottom-10 text-gray-500 animate-pulse">
          소리를 켜고 즐겨주세요 🔊
        </div>
      )}

    </div>
  );
};

export default App;