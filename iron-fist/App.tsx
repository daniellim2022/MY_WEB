import React, { useEffect, useRef, useState } from 'react';
import { GameEngine } from './game/GameEngine';
import HUD from './components/HUD';
import MenuScreen from './components/MenuScreen';
import CharacterSelectScreen from './components/CharacterSelectScreen';
import { GameState, GAME_CONFIG, CharacterType } from './types';

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameEngine | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    p1Health: GAME_CONFIG.MAX_HEALTH,
    p2Health: GAME_CONFIG.MAX_HEALTH,
    timeLeft: GAME_CONFIG.ROUND_TIME,
    gameOver: false,
    winner: null,
    isIntro: true,
    comboP1: 0,
    comboP2: 0,
    notification: null,
    p1Wins: 0,
    p2Wins: 0,
    currentRound: 1
  });

  const [screen, setScreen] = useState<'MENU' | 'CHAR_SELECT' | 'GAME'>('MENU');
  const [selectedP1, setSelectedP1] = useState<CharacterType>('GILGAMESH');
  const [selectedP2, setSelectedP2] = useState<CharacterType>('ARCHER');

  useEffect(() => {
    if (screen === 'GAME' && canvasRef.current && !gameRef.current) {
      gameRef.current = new GameEngine(canvasRef.current, selectedP1, selectedP2, (newState) => {
        setGameState(prevState => {
          if (prevState.timeLeft !== newState.timeLeft ||
            prevState.p1Health !== newState.p1Health ||
            prevState.p2Health !== newState.p2Health ||
            prevState.gameOver !== newState.gameOver ||
            prevState.isIntro !== newState.isIntro ||
            prevState.comboP1 !== newState.comboP1 ||
            prevState.comboP2 !== newState.comboP2 ||
            prevState.notification !== newState.notification) {
            return newState;
          }
          return prevState;
        });
      });
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.cleanup();
        gameRef.current = null;
      }
    };
  }, [screen]);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {screen === 'MENU' && <MenuScreen onStart={() => setScreen('CHAR_SELECT')} />}
      {screen === 'CHAR_SELECT' && <CharacterSelectScreen onConfirm={(p1, p2) => {
        setSelectedP1(p1);
        setSelectedP2(p2);
        setScreen('GAME');
      }} />}

      {screen === 'GAME' && (
        <>
          <canvas ref={canvasRef} className="block w-full h-full" />
          <HUD
            gameState={gameState}
            p1Name={selectedP1}
            p2Name={selectedP2}
            onRematch={() => {
              if (gameRef.current) {
                gameRef.current.cleanup();
                gameRef.current = null;
              }
              setGameState({
                p1Health: GAME_CONFIG.MAX_HEALTH,
                p2Health: GAME_CONFIG.MAX_HEALTH,
                timeLeft: GAME_CONFIG.ROUND_TIME,
                gameOver: false,
                winner: null,
                isIntro: true,
                comboP1: 0,
                comboP2: 0,
                notification: null,
                p1Wins: 0,
                p2Wins: 0,
                currentRound: 1
              });
              setScreen('CHAR_SELECT');
              setTimeout(() => setScreen('GAME'), 0);
            }}
            onMenu={() => setScreen('MENU')}
          />
        </>
      )}
    </div>
  );
};

export default App;