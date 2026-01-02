import React, { useEffect, useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { FilesetResolver, FaceLandmarker, FaceLandmarkerResult } from '@mediapipe/tasks-vision';
import { GameState } from './types';
import { SmileMeter } from './components/SmileMeter';
import { GameOverlay } from './components/GameOverlay';
import * as AudioUtils from './utils/audio';

// Constants
const SMILE_THRESHOLD = 0.55; // Sensitivity for smiling (0.0 - 1.0)
const DETECTION_INTERVAL = 100; // Check face every 100ms

const App: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [faceLandmarker, setFaceLandmarker] = useState<FaceLandmarker | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.LOADING);
  const [smileScore, setSmileScore] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const requestRef = useRef<number>();
  
  // Initialize MediaPipe FaceLandmarker
  useEffect(() => {
    const loadModel = async () => {
      try {
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
        );
        const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
            delegate: "GPU"
          },
          outputFaceBlendshapes: true,
          runningMode: "VIDEO",
          numFaces: 1
        });
        setFaceLandmarker(landmarker);
        setGameState(GameState.IDLE);
      } catch (error) {
        console.error("Failed to load FaceLandmarker", error);
        alert("AI 모델을 불러오는데 실패했습니다. 페이지를 새로고침 해주세요.");
      }
    };
    loadModel();
  }, []);

  // Game Loop
  const detectSmile = useCallback(() => {
    if (gameState !== GameState.PLAYING || !faceLandmarker || !webcamRef.current?.video) {
      return;
    }

    const video = webcamRef.current.video;
    if (video.currentTime > 0 && !video.paused && !video.ended) {
      const startTimeMs = performance.now();
      const results: FaceLandmarkerResult = faceLandmarker.detectForVideo(video, startTimeMs);

      if (results.faceBlendshapes && results.faceBlendshapes.length > 0) {
        const shapes = results.faceBlendshapes[0].categories;
        
        // Find smile-related blendshapes
        const smileLeft = shapes.find(s => s.categoryName === 'mouthSmileLeft')?.score || 0;
        const smileRight = shapes.find(s => s.categoryName === 'mouthSmileRight')?.score || 0;
        
        // Average the score
        const currentSmileScore = (smileLeft + smileRight) / 2;
        setSmileScore(currentSmileScore);

        // Sound feedback for rising tension
        if (currentSmileScore > SMILE_THRESHOLD * 0.6) {
             AudioUtils.playWarningSound(currentSmileScore);
        }

        // Check for Game Over
        if (currentSmileScore > SMILE_THRESHOLD) {
          endGame();
        }
      }
    }
  }, [faceLandmarker, gameState]);

  // Timer loop
  useEffect(() => {
    if (gameState === GameState.PLAYING) {
      const intervalId = setInterval(() => {
        setCurrentTime(Date.now());
        detectSmile();
      }, 50); // High frequency check
      return () => clearInterval(intervalId);
    }
  }, [gameState, detectSmile]);

  const startGame = () => {
    AudioUtils.playStartSound();
    setSmileScore(0);
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    setGameState(GameState.PLAYING);
  };

  const endGame = () => {
    AudioUtils.playGameOverSound();
    setGameState(GameState.GAME_OVER);
  };

  const elapsedTime = startTime ? currentTime - startTime : 0;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative font-sans select-none">
      
      {/* Top Bar: Timer */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
        <div>
           <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Time Survived</h3>
           <div className="text-4xl font-mono font-bold text-white tabular-nums drop-shadow-md">
             {(elapsedTime / 1000).toFixed(2)}<span className="text-sm text-emerald-400 ml-1">s</span>
           </div>
        </div>
        <div className="text-right">
           <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${gameState === GameState.PLAYING ? 'bg-red-600 animate-pulse text-white' : 'bg-gray-800 text-gray-400'}`}>
             {gameState === GameState.PLAYING ? 'Recording' : 'Standby'}
           </div>
        </div>
      </div>

      {/* Main Camera Area */}
      <div className="relative w-full max-w-2xl aspect-[3/4] md:aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-800">
        
        {/* Red Flash Overlay on high danger */}
        <div 
           className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-75 ease-in-out bg-red-600 mix-blend-overlay"
           style={{ opacity: gameState === GameState.PLAYING ? Math.max(0, (smileScore - 0.3) * 1.5) : 0 }}
        />

        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{
            facingMode: "user",
            width: 1280,
            height: 720
          }}
          className="absolute inset-0 w-full h-full object-cover transform scale-x-[-1]" // Mirror effect
        />
        
        {/* Game Overlay (Start/End screens) */}
        <GameOverlay 
          gameState={gameState} 
          onStart={startGame} 
          onRestart={startGame}
          finalTime={elapsedTime}
        />
      </div>

      {/* Bottom Control: Smile Meter */}
      <div className="w-full max-w-2xl mt-4 z-20">
         <SmileMeter score={smileScore} threshold={SMILE_THRESHOLD} />
      </div>

    </div>
  );
};

export default App;