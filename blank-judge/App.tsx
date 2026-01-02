import React, { useState, useEffect } from 'react';
import { InterrogationRoom } from './components/InterrogationRoom';
import { EvidenceBoard } from './components/EvidenceBoard';
import { StatusPanel } from './components/StatusPanel';
import { GameOverScreen } from './components/GameOverScreen';
import { ApiKeyModal } from './components/ApiKeyModal';
import { initializeChat, sendMessageToSuspect, analyzeInvestigator, getHintFromChief } from './services/geminiService';
import { playTypingSound, playAlertSound, playEvidenceSound } from './services/audioService';
import { Message, Evidence, GameState } from './types';

// Korean Evidence Data
const INITIAL_EVIDENCE: Evidence[] = [
  {
    id: 'e1',
    name: 'CCTV 영상',
    description: '학원 입구 20:00. 라이토가 들어가는 모습이 찍히지 않음.',
    icon: '📹',
    revealed: true,
  },
  {
    id: 'e2',
    name: '피해자 프로필',
    description: '고로 "더 불". 심장마비. 7:58 PM 사망자 명단 방송 송출.',
    icon: '💀',
    revealed: true,
  },
  {
    id: 'e3',
    name: '수상한 노트',
    description: '현장 근처 쓰레기통 발견. 영어로 규칙이 적혀 있음.',
    icon: '📓',
    revealed: false,
  }
];

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [defense, setDefense] = useState(100);
  const [evidenceList, setEvidenceList] = useState<Evidence[]>(INITIAL_EVIDENCE);
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const [shake, setShake] = useState(false);
  const [report, setReport] = useState<string>("");
  const [showEvidence, setShowEvidence] = useState(false); // Mobile Toggle State
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  // Initialize Game on Mount
  useEffect(() => {
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) {
      setApiKey(storedKey);
      startNewGame(storedKey);
    } else {
      setShowApiKeyModal(true);
    }
  }, []);

  const handleSaveKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
    setShowApiKeyModal(false);
    startNewGame(key);
  };

  const startNewGame = async (key: string) => {
    setIsThinking(true);
    setGameState(GameState.INTRO);
    setDefense(100);
    setMessages([]);
    setReport("");
    try {
      const rawIntro = await initializeChat(key);
      const { emotionIndex, cleanText } = parseResponse(rawIntro);

      setCurrentEmotion(emotionIndex);
      setMessages([{ role: 'model', text: cleanText }]);
      setGameState(GameState.PLAYING);
    } catch (e) {
      console.error(e);
      setMessages([{ role: 'system', text: '시스템 오류: 연결 실패. API 키를 재설정합니다...' }]);
      localStorage.removeItem('gemini_api_key');
      setApiKey(null);
      setTimeout(() => setShowApiKeyModal(true), 1500); // Give user time to read the error
    } finally {
      setIsThinking(false);
    }
  };

  const endGame = async (won: boolean) => {
    setGameState(won ? GameState.GAME_OVER_WON : GameState.GAME_OVER_LOST);

    // Generate Report
    const analysis = await analyzeInvestigator(messages);
    setReport(analysis);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  // Emotion Parser
  const parseResponse = (text: string) => {
    // 1. Extract Emotion
    const emotionMatch = text.match(/\[EMOTION:\s*(\d+)\]/i);
    let emotionIndex = 0;
    if (emotionMatch) {
      emotionIndex = parseInt(emotionMatch[1]);
    }

    // 2. Clean Text (Remove emotion tag and any other meta tags like [Mental Defense: ...])
    let cleanText = text
      .replace(/\[EMOTION:\s*\d+\]/gi, '')
      .replace(/\[Current Mental Defense:.*?\]/gi, '')
      .replace(/\[Mental Defense:.*?\]/gi, '')
      .replace(/\[SYSTEM:.*?\]/gi, '')
      .trim();

    return { emotionIndex, cleanText };
  };

  const [currentEmotion, setCurrentEmotion] = useState(0);

  // Handle Text Submission
  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isThinking || gameState !== GameState.PLAYING) return;

    playTypingSound();
    setMessages(prev => [...prev, { role: 'user', text: text }]);
    setIsThinking(true);

    try {
      const rawResponse = await sendMessageToSuspect(text, defense);
      const { emotionIndex, cleanText } = parseResponse(rawResponse);

      setCurrentEmotion(emotionIndex);
      setMessages(prev => [...prev, { role: 'model', text: cleanText }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsThinking(false);
    }
  };

  // Handle "Press" (추궁하기)
  const handlePress = async () => {
    if (isThinking || gameState !== GameState.PLAYING) return;
    playAlertSound('low');
    triggerShake();

    // Chip damage
    setDefense(prev => Math.max(0, prev - 5));

    const pressPrompt = `[ACTION: The investigator PRESSES the suspect. Deal 5 damage. Current Defense: ${Math.max(0, defense - 5)}%]`;

    setMessages(prev => [...prev, { role: 'system', text: '!!! 추궁하기 !!! (멘탈 데미지 -5)' }]);
    setIsThinking(true);

    try {
      const rawResponse = await sendMessageToSuspect(pressPrompt, Math.max(0, defense - 5));
      const { emotionIndex, cleanText } = parseResponse(rawResponse);

      setCurrentEmotion(emotionIndex);
      setMessages(prev => [...prev, { role: 'model', text: cleanText }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsThinking(false);
    }
  };

  // Handle Hint
  const handleHint = async () => {
    if (isThinking || gameState !== GameState.PLAYING) return;

    setMessages(prev => [...prev, { role: 'system', text: '>>> [서장실] 긴급 회선 연결 중...' }]);
    setIsThinking(true);

    try {
      const hint = await getHintFromChief(messages, evidenceList);
      setMessages(prev => [...prev, { role: 'system', text: `>>> [서장]: "${hint}"` }]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsThinking(false);
    }
  };

  // Handle Evidence Presentation
  const handlePresentEvidence = async (item: Evidence) => {
    if (isThinking || gameState !== GameState.PLAYING) return;

    playEvidenceSound();
    let damage = 0;

    // Damage Logic
    if (item.id === 'e1') damage = 20; // CCTV (Critical)
    if (item.id === 'e2') damage = 10; // Profile (Weak)
    if (item.id === 'e3') damage = 30; // Note (Fatal)

    const newDefense = Math.max(0, defense - damage);
    setDefense(newDefense);

    if (damage >= 20) {
      playAlertSound('high');
      triggerShake();
    }

    const prompt = `[ACTION: Evidence Presented: "${item.name}: ${item.description}". Deal ${damage} mental damage. Current Defense: ${newDefense}%]`;

    setMessages(prev => [...prev, { role: 'system', text: `> 증거 제시: [${item.name}] (데미지 -${damage})` }]);
    setIsThinking(true);

    try {
      const rawResponse = await sendMessageToSuspect(prompt, newDefense);
      const { emotionIndex, cleanText } = parseResponse(rawResponse);

      setCurrentEmotion(emotionIndex);
      setMessages(prev => [...prev, { role: 'model', text: cleanText }]);

      // Win Condition
      if (newDefense <= 0) {
        endGame(true);
      }

    } catch (error) {
      console.error(error);
    } finally {
      setIsThinking(false);
    }
  };

  // Heartbeat Effect Class
  const heartbeatClass = defense < 30 ? 'animate-heartbeat-fast' : defense < 60 ? 'animate-heartbeat-slow' : 'hidden';

  return (
    <div className={`h-screen flex flex-col bg-slate-950 text-slate-200 font-mono overflow-hidden relative ${shake ? 'animate-shake' : ''}`}>

      {/* Heartbeat Overlay - Red Vignette */}
      <div className={`absolute inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(220,38,38,0.3)_100%)] ${heartbeatClass}`}></div>

      {/* API Key Modal */}
      {showApiKeyModal && (
        <ApiKeyModal onSave={handleSaveKey} />
      )}

      {/* Game Over Screen Overlay */}
      {(gameState === GameState.GAME_OVER_WON || gameState === GameState.GAME_OVER_LOST) && (
        <GameOverScreen state={gameState} onRestart={() => apiKey && startNewGame(apiKey)} report={report} />
      )}

      {/* 1. Header / Status */}
      <StatusPanel defense={defense} />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

        {/* Left: Interrogation Room (Main Visual) */}
        <InterrogationRoom
          messages={messages}
          isThinking={isThinking}
          onSendMessage={handleSendMessage}
          onPress={handlePress}
          currentEmotion={currentEmotion}
          onHint={handleHint}
        />

        {/* Mobile Evidence Toggle */}
        <button
          className="md:hidden absolute top-4 right-4 z-30 p-2 bg-slate-800 text-cyan-400 border border-cyan-500/50 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] animate-pulse"
          onClick={() => setShowEvidence(!showEvidence)}
        >
          {showEvidence ? <i className="fas fa-times"></i> : <i className="fas fa-folder-open"></i>}
        </button>

        {/* Right: Evidence Panel (Responsive) */}
        <div className={`${showEvidence ? 'absolute inset-0 z-50 bg-black/95 flex' : 'hidden'} md:flex md:static md:w-[400px] md:z-20 shadow-2xl transition-all duration-300`}>
          <EvidenceBoard items={evidenceList} onPresent={(item) => {
            handlePresentEvidence(item);
            setShowEvidence(false);
          }} />
        </div>
      </div>
    </div>
  );
}