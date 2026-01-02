import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Mic, Volume2, AlertTriangle } from 'lucide-react';
import { GAME_WIDTH, GAME_HEIGHT, GRAVITY, LIFT_MULTIPLIER, OBSTACLE_SPEED, OBSTACLE_SPAWN_RATE, OBSTACLE_GAP, MIC_SENSITIVITY_DEFAULT } from './constants';
import { GameState, Obstacle, Particle } from './types';

const App: React.FC = () => {
  // React State for UI
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0); // For UI visualization
  const [sensitivity, setSensitivity] = useState(MIC_SENSITIVITY_DEFAULT);
  const [micPermission, setMicPermission] = useState<boolean | null>(null);

  // Refs for Game Loop (Mutable state without re-renders)
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const scoreRef = useRef(0);
  
  // Game Entities Refs
  const playerY = useRef(GAME_HEIGHT / 2);
  const playerVelocity = useRef(0);
  const obstacles = useRef<Obstacle[]>([]);
  const particles = useRef<Particle[]>([]);
  const frameCount = useRef(0);

  // Audio Refs
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  // --- Audio Engine ---
  
  const initAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission(true);
      
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const analyser = audioCtx.createAnalyser();
      const source = audioCtx.createMediaStreamSource(stream);
      
      analyser.fftSize = 256;
      source.connect(analyser);
      
      audioContextRef.current = audioCtx;
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
      
      // Resume context if suspended (browser policy)
      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }
    } catch (err) {
      console.error("Microphone access denied:", err);
      setMicPermission(false);
    }
  };

  const getAudioVolume = (): number => {
    if (!analyserRef.current || !dataArrayRef.current) return 0;
    
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    
    // Calculate average volume
    let sum = 0;
    for (let i = 0; i < dataArrayRef.current.length; i++) {
      sum += dataArrayRef.current[i];
    }
    const average = sum / dataArrayRef.current.length;
    return average;
  };

  const playSoundEffect = (type: 'jump' | 'score' | 'crash') => {
    if (!audioContextRef.current) return;
    
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    if (type === 'score') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.1); // C6
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'crash') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.5);
      gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    }
  };

  // --- Game Loop ---

  const resetGame = () => {
    playerY.current = GAME_HEIGHT / 2;
    playerVelocity.current = 0;
    obstacles.current = [];
    particles.current = [];
    scoreRef.current = 0;
    setScore(0);
    frameCount.current = 0;
    setGameState(GameState.PLAYING);
  };

  const createParticles = (x: number, y: number, color: string) => {
    for (let i = 0; i < 20; i++) {
      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1.0,
        color
      });
    }
  };

  const update = useCallback(() => {
    if (gameState !== GameState.PLAYING) {
       // Even if paused, we want to visualize the mic volume on the start screen
       const vol = getAudioVolume();
       setCurrentVolume(vol);
       requestRef.current = requestAnimationFrame(update);
       return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // 1. Audio Input Handling
    const vol = getAudioVolume();
    setCurrentVolume(vol);
    
    // Apply lift if volume exceeds threshold (sensitivity)
    // Map sensitivity (0-100) to a threshold. 
    // Low sensitivity value on slider means HIGH threshold (needs loud noise)? 
    // No, let's make: High Slider = High Sensitivity = Reacts to whisper.
    // Slider 0-100. Threshold = 100 - sensitivity.
    const threshold = Math.max(5, 100 - sensitivity); 
    const isLoud = vol > threshold;
    
    if (isLoud) {
      // The louder the voice, the stronger the lift, capped reasonably
      const lift = Math.min((vol - threshold) * 0.05, 2.5);
      playerVelocity.current -= lift * LIFT_MULTIPLIER;
    }

    // 2. Physics
    playerVelocity.current += GRAVITY;
    playerY.current += playerVelocity.current;

    // Ceiling / Floor Collision
    if (playerY.current > GAME_HEIGHT - 30) {
        playerY.current = GAME_HEIGHT - 30;
        playerVelocity.current = 0;
        // Floor hit doesn't kill immediately in this version, or could bounce
    }
    if (playerY.current < 30) {
        playerY.current = 30;
        playerVelocity.current = 0;
    }

    // 3. Obstacle Management
    frameCount.current++;
    if (frameCount.current % OBSTACLE_SPAWN_RATE === 0) {
      const minHeight = 50;
      const maxHeight = GAME_HEIGHT - OBSTACLE_GAP - minHeight;
      const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
      
      obstacles.current.push({
        x: GAME_WIDTH,
        width: 60,
        topHeight: topHeight,
        passed: false
      });
    }

    // Move Obstacles
    obstacles.current.forEach(obs => {
      obs.x -= OBSTACLE_SPEED;
    });

    // Remove off-screen obstacles
    obstacles.current = obstacles.current.filter(obs => obs.x + obs.width > 0);

    // 4. Collision Detection
    const playerRadius = 20; // Visual radius
    const playerX = 150; // Fixed horizontal position

    // Check collision
    let collided = false;
    obstacles.current.forEach(obs => {
      // Box collision logic
      const inHorizontalRange = playerX + playerRadius > obs.x && playerX - playerRadius < obs.x + obs.width;
      const hitTop = playerY.current - playerRadius < obs.topHeight;
      const hitBottom = playerY.current + playerRadius > obs.topHeight + OBSTACLE_GAP;

      if (inHorizontalRange && (hitTop || hitBottom)) {
        collided = true;
      }

      // Score update
      if (!obs.passed && playerX > obs.x + obs.width) {
        obs.passed = true;
        scoreRef.current += 1;
        setScore(scoreRef.current);
        playSoundEffect('score');
      }
    });

    // Check floor collision for Game Over
    if (playerY.current >= GAME_HEIGHT - 35) collided = true;

    if (collided) {
      playSoundEffect('crash');
      createParticles(playerX, playerY.current, '#ef4444');
      setGameState(GameState.GAME_OVER);
      if (scoreRef.current > highScore) setHighScore(scoreRef.current);
    }

    // 5. Drawing
    // Clear
    ctx.fillStyle = '#7dd3fc'; // Sky blue
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw Clouds (Parallax effect - simplistic)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    const cloudOffset = (frameCount.current * 0.5) % GAME_WIDTH;
    ctx.beginPath();
    ctx.arc(200 - cloudOffset, 100, 40, 0, Math.PI * 2);
    ctx.arc(250 - cloudOffset, 120, 50, 0, Math.PI * 2);
    ctx.arc(800 - cloudOffset, 150, 60, 0, Math.PI * 2);
    ctx.fill();

    // Draw Obstacles
    obstacles.current.forEach(obs => {
      ctx.fillStyle = '#22c55e'; // Green pipe
      // Top Pipe
      ctx.fillRect(obs.x, 0, obs.width, obs.topHeight);
      // Bottom Pipe
      ctx.fillRect(obs.x, obs.topHeight + OBSTACLE_GAP, obs.width, GAME_HEIGHT - (obs.topHeight + OBSTACLE_GAP));
      
      // Pipe borders
      ctx.strokeStyle = '#15803d';
      ctx.lineWidth = 4;
      ctx.strokeRect(obs.x, 0, obs.width, obs.topHeight);
      ctx.strokeRect(obs.x, obs.topHeight + OBSTACLE_GAP, obs.width, GAME_HEIGHT - (obs.topHeight + OBSTACLE_GAP));
    });

    // Draw Particles
    particles.current.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.05;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
    });
    particles.current = particles.current.filter(p => p.life > 0);

    // Draw Player (Helicopter)
    // Save context for rotation
    ctx.save();
    ctx.translate(playerX, playerY.current);
    
    // Tilt based on velocity
    const tilt = Math.min(Math.max(playerVelocity.current * 2, -30), 30) * (Math.PI / 180);
    ctx.rotate(tilt);

    // Body
    ctx.fillStyle = '#fbbf24'; // Amber
    ctx.beginPath();
    ctx.ellipse(0, 0, 30, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Cockpit
    ctx.fillStyle = '#e0f2fe';
    ctx.beginPath();
    ctx.arc(10, -5, 12, 0, Math.PI * 2);
    ctx.fill();

    // Tail
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(-50, -5, 25, 10);
    
    // Rotors
    ctx.fillStyle = '#4b5563';
    // Top Rotor (animate width to simulate spin)
    const rotorWidth = 70 * Math.abs(Math.sin(frameCount.current * 0.5));
    ctx.fillRect(-rotorWidth/2, -25, rotorWidth, 5);
    ctx.fillRect(-2, -25, 4, 15); // Shaft
    
    // Rear Rotor
    const rearRotorHeight = 20 * Math.abs(Math.cos(frameCount.current * 0.5));
    ctx.fillRect(-52, -5 - rearRotorHeight/2, 4, rearRotorHeight);

    ctx.restore();

    // Draw Ground
    ctx.fillStyle = '#84cc16'; // Lime green
    ctx.fillRect(0, GAME_HEIGHT - 20, GAME_WIDTH, 20);
    ctx.fillStyle = '#837750'; // Dirt
    ctx.fillRect(0, GAME_HEIGHT - 10, GAME_WIDTH, 10);

    requestRef.current = requestAnimationFrame(update);
  }, [gameState, sensitivity]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [update]);

  // Start logic
  const handleStart = async () => {
    if (!audioContextRef.current) {
      await initAudio();
    }
    resetGame();
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center font-sans">
      <div className="relative w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden border-4 border-slate-700 bg-black">
        
        {/* Header */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 pointer-events-none">
          <h1 className="text-3xl font-black text-white drop-shadow-md tracking-wider" style={{fontFamily: 'Verdana, sans-serif'}}>
            VOICE COPTER <i className="fas fa-helicopter text-yellow-400"></i>
          </h1>
          <div className="flex gap-6">
             <div className="text-white font-bold text-2xl drop-shadow-md">
              SCORE: <span className="text-yellow-400">{score}</span>
            </div>
             <div className="text-white font-bold text-2xl drop-shadow-md">
              BEST: <span className="text-green-400">{highScore}</span>
            </div>
          </div>
        </div>

        {/* Game Canvas */}
        <canvas
          ref={canvasRef}
          width={GAME_WIDTH}
          height={GAME_HEIGHT}
          className="w-full h-auto bg-sky-300 block"
        />

        {/* Start / Game Over Overlay */}
        {gameState !== GameState.PLAYING && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 backdrop-blur-sm z-20 text-center">
            
            {gameState === GameState.GAME_OVER && (
              <div className="mb-6 animate-bounce">
                <h2 className="text-6xl font-black text-red-500 stroke-white drop-shadow-lg mb-2">GAME OVER</h2>
                <p className="text-white text-xl">You screamed too hard (or not enough)!</p>
              </div>
            )}

            {gameState === GameState.START && (
               <div className="mb-8 max-w-lg text-center">
                  <h2 className="text-5xl font-black text-yellow-400 mb-6 drop-shadow-lg">READY FOR TAKEOFF?</h2>
                  <div className="bg-white/10 p-6 rounded-lg text-left text-white mb-6">
                    <p className="mb-2"><i className="fas fa-microphone mr-2"></i> <strong>How to play:</strong></p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-200">
                      <li>Allow microphone access.</li>
                      <li><strong>Scream</strong> or talk loudly to fly UP!</li>
                      <li><strong>Whisper</strong> or stay quiet to go DOWN.</li>
                      <li>Avoid the green pipes!</li>
                    </ul>
                  </div>
               </div>
            )}

            {micPermission === false && (
              <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg flex items-center gap-3 text-red-200 mb-6">
                <AlertTriangle size={24} />
                <span>Microphone access is blocked. Please enable it in browser settings to play.</span>
              </div>
            )}

            <button
              onClick={handleStart}
              className="group relative px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.5)] flex items-center gap-3"
            >
              {gameState === GameState.START ? <Play fill="black" /> : <RotateCcw />}
              {gameState === GameState.START ? 'START GAME' : 'TRY AGAIN'}
            </button>
            
            {/* Visualizer and Sensitivity Control */}
            <div className="mt-12 w-full max-w-md bg-black/40 p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-2 text-white">
                <div className="flex items-center gap-2">
                   <Mic size={18} />
                   <span className="font-bold">Mic Input Check</span>
                </div>
                <div className="text-xs text-gray-400">Current Level: {currentVolume.toFixed(0)}</div>
              </div>
              
              {/* Volume Meter */}
              <div className="w-full h-6 bg-gray-700 rounded-full overflow-hidden mb-6 relative">
                 {/* Threshold Marker */}
                 <div 
                    className="absolute top-0 bottom-0 w-1 bg-red-500 z-10"
                    style={{ left: `${Math.max(5, 100 - sensitivity)}%` }}
                    title="Volume Threshold"
                 />
                 <div 
                    className="h-full bg-gradient-to-r from-green-400 to-red-500 transition-all duration-75 ease-out"
                    style={{ width: `${Math.min(currentVolume, 100)}%` }}
                 />
              </div>

              {/* Sensitivity Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Less Sensitive (Needs Scream)</span>
                  <span>More Sensitive (Needs Whisper)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="95"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
              </div>
            </div>

          </div>
        )}

        {/* In-Game HUD (Always visible visualizer for feedback) */}
        {gameState === GameState.PLAYING && (
          <div className="absolute bottom-4 left-4 flex flex-col gap-1 z-10 bg-black/30 p-2 rounded backdrop-blur">
            <div className="flex items-center gap-2 text-white text-sm font-bold">
               <Volume2 size={16} /> THRUST POWER
            </div>
            <div className="w-32 h-2 bg-gray-600 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-yellow-400 transition-all duration-75"
                 style={{ width: `${Math.min(currentVolume, 100)}%` }}
               />
            </div>
          </div>
        )}
      </div>
      
      <p className="mt-4 text-gray-500 text-sm">
        Use a headset for the best experience. Avoid background noise.
      </p>
    </div>
  );
};

export default App;