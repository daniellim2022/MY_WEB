import React, { useEffect, useRef, useState, useCallback } from 'react';
import { GameState, Bullet, BulletType, Player, CANVAS_WIDTH, CANVAS_HEIGHT, BOX_BOUNDS } from '../types';

// ==========================================
// 상수 정의 (Constants)
// ==========================================
const PLAYER_SPEED = 4;
const FPS = 60;
const IFRAMES = 60; // 무적 시간 프레임
const MAX_HP = 20;

// 색상 팔레트
const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  RED: '#FF0000',
  YELLOW: '#FFFF00',
  ORANGE: '#FFA500',
  BLUE: '#00FFFF',
  UI_GRAY: '#808080'
};

const ASGORE_Y = -20; // Raised significantly to guarantee clearance
const TEXT_SPEED = 2; // Frames per char (Lower is faster)

const ASSETS = {
  BTN_FIGHT: 'assets/공격바.png',
  BTN_ACT: 'assets/행동바.png',
  BTN_ITEM: 'assets/아이템바.png',
  BTN_MERCY: 'assets/아직부서지지않은자비바.png',
  BGM_ASGORE: 'assets/asgore_theme.mp3',
  ASGORE_TALK_1: 'assets/asgore_talk_1.png',
  ASGORE_TALK_2: 'assets/asgore_talk_2.png',
  DIALOGUE_BOX: 'assets/dialogue_box.png'
};


interface Shard {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  rotation: number;
  vRotation: number;
}

const Game: React.FC = () => {
  console.log("Game Component Initialized - Audio Path:", ASSETS.BGM_ASGORE);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Asset Refs
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
  const transformFramesRef = useRef<HTMLImageElement[]>([]); // New ref for animation frames
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // ==========================================
  // React State for UI Overlay (HP, Name, etc.)
  // ==========================================
  // React State for UI Overlay
  const [hp, setHp] = useState(MAX_HP);
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const stateRef = useRef<GameState>(GameState.INTRO);

  const changeState = (newState: GameState) => {
    setGameState(newState);
    stateRef.current = newState;
  };

  // IntroStep moved to useRef to fix stale closure in game loop
  const [dialogueText, setDialogueText] = useState("");
  const [menuSelection, setMenuSelection] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // ==========================================
  // Mutable Game State (Refs for performance)
  // ==========================================
  const targetTextRef = useRef(""); // Added missing ref
  const textTimerRef = useRef(0);
  const introStepRef = useRef(0); // 0: Idle, 1: Intro Active
  const playerRef = useRef<Player>({
    x: CANVAS_WIDTH / 2,
    y: 350, // Start slightly lower relative to new box
    width: 6, // Make heart slightly smaller/sharper
    height: 6,
    vx: 0,
    vy: 0,
    color: COLORS.RED,
    invulnerable: 0,
    isMoving: false
  });

  const keysRef = useRef<{ [key: string]: boolean }>({});
  const bulletsRef = useRef<Bullet[]>([]);
  const frameRef = useRef(0);
  const phaseTimerRef = useRef(0);
  const cutsceneTimerRef = useRef(0);
  const mercyBrokenRef = useRef(false); // Mercy 버튼 파괴 여부
  const hasTransformedRef = useRef(false); // 변신 완료 여부
  const introTimerRef = useRef(0); // Intro Sequence Timer

  // Attack Bar State
  const attackBarXRef = useRef(0);
  const attackBarSpeedRef = useRef(10);
  const attackDamageRef = useRef(0);
  const attackResultTimerRef = useRef(0);

  // Mercy Destruction State
  const mercyShardsRef = useRef<Shard[]>([]);
  const mercyBreakTimerRef = useRef(0);

  // ==========================================
  // 입력 핸들링 (Input Handling)
  // ==========================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (introStepRef.current > 0) return; // Block input during intro
      keysRef.current[e.key] = true;

      // Start Game Trigger
      if (gameState === GameState.INTRO) {
        startGame();
        return;
      }

      // 메뉴 네비게이션
      if (gameState === GameState.MENU) {
        if (e.key === 'ArrowLeft') setMenuSelection(prev => (prev > 0 ? prev - 1 : 3));
        if (e.key === 'ArrowRight') setMenuSelection(prev => (prev < 3 ? prev + 1 : 0));
        if (e.key === 'z' || e.key === 'Z' || e.key === 'Enter') {
          handleMenuSelect();
        }
      }
      // 대화 넘기기
      else if (gameState === GameState.DIALOGUE) {
        if (e.key === 'z' || e.key === 'Z' || e.key === 'Enter') {
          startAttackPhase();
        }
      }
      // 게임 오버 리셋
      else if (gameState === GameState.GAME_OVER) {
        if (e.key === 'z' || e.key === 'Z') {
          resetGame();
        }
      }
      // 공격 조준 (Attack Aim)
      else if (gameState === GameState.PLAYER_ATTACK_AIM) {
        if (e.key === 'z' || e.key === 'Z' || e.key === 'Enter') {
          handleAttackInput();
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, menuSelection]);

  // Load Sprites
  useEffect(() => {
    const loadImages = async () => {
      const promises = Object.entries(ASSETS).map(([key, src]) => {
        if (key === 'BGM_ASGORE') return Promise.resolve(); // Skip audio here

        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          // Fix for the uploaded image if needed, but for now we won't load it as an asset since it's in brain dir. 
          // We will stick to drawing or using existing assets.
          img.src = src;
          img.onload = () => {
            imagesRef.current[key] = img;
            resolve();
          };
          img.onerror = (e) => {
            console.error("Failed to load image:", src, e);
            // Resolve anyway to prevent blocking, maybe display placeholder
            resolve();
          };
        });
      });

      await Promise.all(promises);

      // Load Transformation Frames (0 to 100)
      const framePromises = [];
      for (let i = 0; i < 49; i++) {
        framePromises.push(new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `assets/transform_new/frame_${i}.png`;
          img.onload = () => {
            resolve();
          };
          img.onerror = () => resolve();
          transformFramesRef.current[i] = img;
        }));
      }
      await Promise.all(framePromises);

      setAssetsLoaded(true);
    };

    loadImages();
  }, []);

  const startGame = () => {
    if (gameState !== GameState.INTRO) return;

    // Initialize and Play Audio
    if (!audioRef.current) {
      audioRef.current = new Audio(ASSETS.BGM_ASGORE + '?v=' + Date.now()); // Cache bust
      audioRef.current.loop = true;
      audioRef.current.volume = 0.6;
    }
    audioRef.current.play().catch(e => console.error("Audio play failed:", e));

    audioRef.current.play().catch(e => console.error("Audio play failed:", e));

    changeState(GameState.CUTSCENE);
    cutsceneTimerRef.current = 0;
    introStepRef.current = 0; // Don't use introStep logic for cutscene
  };

  // Intro Sequence Trigger
  useEffect(() => {
    // Auto-start intro logic if needed, or wait for user input
    // For now, let's assume 'Z' key triggers it from MENU if in BEFORE state
    // Actually, let's make it automatic on load or specific state
  }, []);


  // ==========================================
  // 로직 함수 (Logic Functions)
  // ==========================================

  const resetGame = () => {
    setHp(MAX_HP);
    setGameOver(false);
    setGameState(GameState.MENU);
    bulletsRef.current = [];
    playerRef.current.invulnerable = 0;
    mercyBrokenRef.current = false;
    frameRef.current = 0;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    console.log("Canvas Clicked!", gameState);
    if (gameState === GameState.INTRO) {
      console.log("Starting game from INTRO click");
      startGame();
      return;
    }

    // Music Trigger Area (Top half / Asgore area)
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickY = e.clientY - rect.top;
    const clickX = e.clientX - rect.left;
    console.log(`Click at (${clickX}, ${clickY}). GameState: ${gameState}`);

    if (clickY < 250) {
      console.log("Triggering Transformation...");
      triggerTransformation();
    } else {
      console.log("Click too low for trigger (< 250 required)");
    }
  };

  const handleMenuSelect = () => {
    if (menuSelection === 3) { // MERCY
      if (mercyBrokenRef.current) {
        setTargetText("Mercy option is gone.");
        setGameState(GameState.DIALOGUE);
      } else {
        setGameState(GameState.MERCY_ANIMATION);
        mercyBreakTimerRef.current = 0;
        mercyShardsRef.current = [];
        // Delay dialogue until animation finishes handled in update loop
      }
    } else if (menuSelection === 0) { // FIGHT
      startAttackAim();
    } else {
      // Act, Item -> Just trigger dialogue for this demo
      const texts = [
        "Human... It was nice to meet you.",
        "ASGORE attacks!",
        "You firmly tell ASGORE to stop fighting.",
        "Smells like charcoal."
      ];
      setTargetText(texts[Math.floor(Math.random() * texts.length)]);
      setGameState(GameState.DIALOGUE);
    }
  };

  // Helper to set text with reset
  const setTargetText = (text: string) => {
    targetTextRef.current = text;
    setDialogueText(""); // Reset display
  };

  const startAttackPhase = () => {
    setGameState(GameState.ATTACK);
    bulletsRef.current = [];
    phaseTimerRef.current = 0;

    // 플레이어를 박스 중앙으로 이동
    playerRef.current.x = CANVAS_WIDTH / 2;
    playerRef.current.y = BOX_BOUNDS.y + BOX_BOUNDS.height / 2;
  };

  const startAttackAim = () => {
    setGameState(GameState.PLAYER_ATTACK_AIM);
    attackBarXRef.current = 0; // Start from left
    attackBarSpeedRef.current = 8; // Speed
  };

  const handleAttackInput = () => {
    // Calculate damage based on distance from center
    // Center is CANVAS_WIDTH / 2.
    // Range is roughly [BOX_X, BOX_X + BOX_W] mapped to the eye width.
    // Eye width approx 550.

    const center = CANVAS_WIDTH / 2;
    const currentX = BOX_BOUNDS.x + attackBarXRef.current;
    const dist = Math.abs(currentX - center);

    let damage = 0;
    if (dist < 20) damage = 100 + Math.floor(Math.random() * 20); // Crit
    else if (dist < 100) damage = 60 + Math.floor(Math.random() * 20);
    else damage = 10; // Miss/Glance

    attackDamageRef.current = damage;
    attackResultTimerRef.current = 0;
    setGameState(GameState.PLAYER_ATTACK_RESULT);

    // Animate slash?
  };

  const triggerTransformation = () => {
    if (gameState !== GameState.MENU) return;

    // Start Transform Sequence
    setGameState(GameState.TRANSFORM);
    // introStepRef.current = 1; // We'll set this after animation
    introTimerRef.current = 0; // Reset timer for animation frame tracking

    // Play Music
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }

    setDialogueText("");
  };

  const spawnMercyShards = () => {
    // Mercy Button Position (Index 3)
    const btnW = 142;
    const startX = 20;
    const btnX = startX + 3 * (btnW + 12);
    const btnY = 430;
    const btnH = 42;

    const cols = 5;
    const rows = 2;
    const cellW = btnW / cols;
    const cellH = btnH / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        mercyShardsRef.current.push({
          x: btnX + c * cellW,
          y: btnY + r * cellH,
          vx: (Math.random() - 0.5) * 10,
          vy: -5 - Math.random() * 5, // Jump up
          width: cellW,
          height: cellH,
          color: COLORS.ORANGE, // Make it orange fragments
          rotation: 0,
          vRotation: (Math.random() - 0.5) * 0.5
        });
      }
    }
  };

  // ==========================================
  // Intro Logic in Update Loop
  // ==========================================
  const updateIntroLogic = () => {
    if (introStepRef.current === 0) return;

    introTimerRef.current++;
    const timer = introTimerRef.current;
    const seconds = timer / 60; // Assuming 60 FPS

    // 1. Dialogue Timing (16.99s total)
    // 0s - 5s: "인간이여"
    // 5s - 11s: "만나서 반가웠네"
    // 11s - 16.99s: "잘가게"

    let targetText = "";
    if (seconds < 5) targetText = "인간이여";
    else if (seconds < 11) targetText = "만나서 반가웠네";
    else if (seconds < 16.99) targetText = "잘가게";
    else {
      // End Intro (approx 17s)
      introStepRef.current = 0;
      mercyBrokenRef.current = true; // Break button
      setGameState(GameState.DIALOGUE);
      setDialogueText("..."); // Reset dialogue
      return;
    }

    // Typewriter Effect logic
    let segmentTime = 0;
    let charsPerSecond = 3; // Slow typing

    if (seconds < 5) {
      segmentTime = seconds;
    } else if (seconds < 11) {
      segmentTime = seconds - 5;
    } else {
      segmentTime = seconds - 11;
    }

    const charCount = Math.floor(segmentTime * charsPerSecond);
    const newText = targetText.substring(0, charCount);

    // Optimize: Only update state if text changed to prevent 60FPS re-renders
    setDialogueText(prev => {
      if (prev !== newText) return newText;
      return prev;
    });
  };

  // ==========================================
  // 게임 루프 (Game Loop)
  // ==========================================
  const update = useCallback(() => {
    const gameState = stateRef.current; // Use ref to avoid stale closure
    if (gameOver) return;

    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    frameRef.current++;
    phaseTimerRef.current++;

    // Update Attack Aim
    if (gameState === GameState.PLAYER_ATTACK_AIM) {
      attackBarXRef.current += attackBarSpeedRef.current;
      if (attackBarXRef.current > BOX_BOUNDS.width || attackBarXRef.current < 0) {
        // Bounce or Reset? Usually it goes once then misses.
        // Let's make it bounce for easier testing, or loop.
        // Undertale usually loops once or twice then fails? Or just goes off screen.
        // Let's bounce for now.
        if (attackBarXRef.current > BOX_BOUNDS.width) {
          // Missed
          attackDamageRef.current = 0;
          attackResultTimerRef.current = 0;
          setGameState(GameState.PLAYER_ATTACK_RESULT);
        }
      }
    }

    // Update Attack Result
    if (gameState === GameState.PLAYER_ATTACK_RESULT) {
      attackResultTimerRef.current++;
      if (attackResultTimerRef.current > 60) { // 1 second display
        // Proceed to Dialogue
        const texts = [
          "ASGORE attacks!",
          "You tell ASGORE that he has killed you too many times to count. He nods grievously.",
          "Smells like charcoal.",
          "ASGORE seems saddened."
        ];
        setTargetText(texts[Math.floor(Math.random() * texts.length)]);
        setGameState(GameState.DIALOGUE);
      }
    }

    // 1. 화면 클리어
    let bgColor = COLORS.BLACK;
    if (gameState === GameState.TRANSFORM) {
      // User request: Background turns white automatically while GIF plays
      bgColor = COLORS.WHITE;
    }
    // Debug log (Throttle to ~1sec if possible, or just log on state change? 
    // Logging every frame is noisy but effective for short debug)
    if (frameRef.current % 60 === 0) {
      console.log(`Frame: ${frameRef.current}, State: ${gameState}, BG: ${bgColor}, IntroTimer: ${introTimerRef.current}, CutsceneTimer: ${cutsceneTimerRef.current}`);
    }

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (gameState === GameState.INTRO) {
      ctx.fillStyle = COLORS.WHITE;
      ctx.font = '24px "Press Start 2P"';
      ctx.textAlign = 'center';
      ctx.fillText("PRESS Z TO START", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

      if (Math.floor(frameRef.current / 30) % 2 === 0) {
        ctx.fillStyle = COLORS.UI_GRAY;
        ctx.font = '16px "Press Start 2P"';
        ctx.fillText("- CLICK or KEY -", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 40);
      }
      ctx.textAlign = 'left';

      requestAnimationFrame(update);
      return;
    }



    // Mercy Animation Loop
    if (gameState === GameState.MERCY_ANIMATION) {
      mercyBreakTimerRef.current++;
      const t = mercyBreakTimerRef.current;

      // Frame 30: Impact
      if (t === 30) {
        spawnMercyShards();
        // Play crunch sound ideally
      }

      // Physics
      if (t >= 30) {
        mercyShardsRef.current.forEach(shard => {
          shard.x += shard.vx;
          shard.y += shard.vy;
          shard.vy += 0.5; // Gravity
          shard.rotation += shard.vRotation;
        });
      }

      if (t > 120) {
        mercyBrokenRef.current = true;
        setTargetText("ASGORE destroys the MERCY button!");
        setGameState(GameState.DIALOGUE);
      }
    }


    // Transform Animation
    if (gameState === GameState.TRANSFORM) {
      introTimerRef.current++;
      // Play 1 frame per tick? Or slower?
      // 60FPS might be too fast if GIF was 30 or 15.
      // Let's try every 2 frames (30FPS) or 3.
      const frameIndex = Math.floor(introTimerRef.current / 2);

      // 49 Frames total (0 to 48)
      if (frameIndex > 48) {
        // Animation finished
        hasTransformedRef.current = true;
        changeState(GameState.MERCY_ANIMATION);
        mercyBreakTimerRef.current = 0;
        mercyShardsRef.current = [];

        // Resume BGM after transformation
        if (audioRef.current) {
          audioRef.current.play().catch(e => console.log("Audio resume failed", e));
        }
        return;
      }

      // Draw Frame
      const img = transformFramesRef.current[frameIndex];
      // Clear screen is done at start of loop
      if (img && img.complete) {
        // New GIF is 171x128. Scale 2.5x => 427.5 x 320
        const w = 171 * 2.5;
        const h = 128 * 2.5;
        const x = CANVAS_WIDTH / 2 - w / 2;
        const y = ASGORE_Y;

        ctx.drawImage(img, x, y, w, h);
      }

      requestAnimationFrame(update);
      return;
    }

    if (gameState === GameState.CUTSCENE) {
      cutsceneTimerRef.current++;
      const t = cutsceneTimerRef.current / FPS; // seconds

      let currentText = "";
      let isTalking = false;

      // 0s - 5s: "Human..." (인간이여,)
      if (t < 5) {
        const fullText = "Human...";
        // Typewriter effect: ~1 char every 0.2s
        const charCount = Math.floor(t * 5);
        currentText = fullText.slice(0, charCount);
        isTalking = charCount < fullText.length;
      }
      // 5s - 11s: "It was nice to meet you." (만나서 즐거웠네, 6초)
      else if (t < 11) {
        const fullText = "It was nice to meet you.";
        const subT = t - 5;
        const charCount = Math.floor(subT * 10);
        currentText = fullText.slice(0, charCount);
        isTalking = charCount < fullText.length;
      }
      // 11s - 16s: "Goodbye." (잘 가게, 5초)
      else if (t < 16) {
        const fullText = "Goodbye.";
        const subT = t - 11;
        const charCount = Math.floor(subT * 5);
        currentText = fullText.slice(0, charCount);
        isTalking = charCount < fullText.length;
      } else {
        // End of cutscene - start transformation
        // Pause BGM exactly at 17s (start of GIF)
        if (audioRef.current) {
          try {
            audioRef.current.pause();
          } catch (e) { console.error(e); }
        }

        changeState(GameState.TRANSFORM);
        introTimerRef.current = 0;
        return;
      }

      // Draw Asgore with talking animation logic
      drawAsgore(ctx, frameRef.current, isTalking);

      // Draw Box for text
      const boxX = BOX_BOUNDS.x;
      const boxY = BOX_BOUNDS.y;
      const boxW = BOX_BOUNDS.width;
      const boxH = BOX_BOUNDS.height;
      ctx.strokeStyle = COLORS.WHITE;
      ctx.lineWidth = 5;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      // Draw Text
      ctx.fillStyle = COLORS.WHITE;
      ctx.font = '24px "DotGothic16"';
      ctx.fillText("* " + currentText, boxX + 20, boxY + 50);

      requestAnimationFrame(update);
      return;
    }

    // 2. 아스고어 그리기
    if (introStepRef.current > 0) {
      drawSpriteIntro(ctx);
    } else {
      drawAsgore(ctx, frameRef.current);
    }

    // 3. 전투 박스 그리기
    if (introStepRef.current > 0) {
      // Intro 때는 박스 숨김
    } else {
      // Normal Battle Box
      const boxX = BOX_BOUNDS.x;
      const boxY = BOX_BOUNDS.y;
      const boxW = BOX_BOUNDS.width;
      const boxH = BOX_BOUNDS.height;

      // Masking: Fill box with black to hide Asgore's feet/cape bottom
      ctx.fillStyle = COLORS.BLACK;
      ctx.fillRect(boxX, boxY, boxW, boxH);

      ctx.strokeStyle = COLORS.WHITE;
      ctx.lineWidth = 5;
      ctx.strokeRect(boxX, boxY, boxW, boxH);

      // 4. 상태별 로직
      if (gameState === GameState.ATTACK) {
        handleAttackPhase(ctx, boxX, boxY, boxW, boxH);
      } else if (gameState === GameState.PLAYER_ATTACK_AIM) {
        drawAttackAim(ctx, boxX, boxY, boxW, boxH);
      } else if (gameState === GameState.PLAYER_ATTACK_RESULT) {
        drawAttackResult(ctx);
      } else if (gameState === GameState.DIALOGUE) {
        drawDialogue(ctx, boxX, boxY);
      } else if (gameState === GameState.MENU) {
        drawMenu(ctx);
      } else if (gameState === GameState.MERCY_ANIMATION) {
        drawMercyBreak(ctx);
      } else if (gameState === GameState.GAME_OVER) {
        drawGameOver(ctx);
      }

      // 5. 플레이어 그리기 (항상 렌더링되지만 상태에 따라 숨길 수 있음)
      if (gameState !== GameState.GAME_OVER && gameState !== GameState.MERCY_ANIMATION && gameState !== GameState.PLAYER_ATTACK_AIM && gameState !== GameState.PLAYER_ATTACK_RESULT) {
        updatePlayer();
        drawPlayer(ctx);
      }

      // 6. UI 그리기 (Stats) - Canvas로 통합
      drawStats(ctx);

      // 루프 계속
      requestAnimationFrame(update);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [gameState, hp, menuSelection]); // Dependencies for state values used inside render

  useEffect(() => {
    const loopId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(loopId);
  }, [update]);


  // ==========================================
  // 공격 패턴 & 물리 엔진 (Physics & Patterns)
  // ==========================================
  const handleAttackPhase = (ctx: CanvasRenderingContext2D, boxX: number, boxY: number, boxW: number, boxH: number) => {
    const player = playerRef.current;

    // 공격 패턴 생성기 (Attack Spawner)
    const time = phaseTimerRef.current;

    // 패턴 1: 파이어 서클 (Spiraling Fire) (0 ~ 300 프레임)
    if (time < 300 && time % 15 === 0) {
      const angle = (time / 20);
      const radius = 200;
      const centerX = CANVAS_WIDTH / 2;
      const centerY = boxY + boxH / 2;

      bulletsRef.current.push({
        type: BulletType.FIREBALL,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: -Math.cos(angle) * 2,
        vy: -Math.sin(angle) * 2,
        width: 10,
        height: 10,
        color: COLORS.WHITE,
        id: Math.random()
      });
    }

    // 패턴 2: 파이어 레인 (Fire Rain) (300 ~ 500 프레임)
    if (time > 300 && time < 500 && time % 10 === 0) {
      const randX = boxX + Math.random() * boxW;
      bulletsRef.current.push({
        type: BulletType.FIREBALL,
        x: randX,
        y: 0,
        vx: 0,
        vy: 4,
        width: 10,
        height: 10,
        color: COLORS.WHITE,
        id: Math.random()
      });
    }

    // 패턴 3: 삼지창 (Trident) (550 프레임)
    if (time === 550) {
      // 경고 (Warning Flash)
      bulletsRef.current.push({
        type: Math.random() > 0.5 ? BulletType.TRIDENT_BLUE : BulletType.TRIDENT_ORANGE,
        x: 0,
        y: 0, // 전체 화면 효과
        vx: 0,
        vy: 0,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        color: 'transparent',
        warning: true,
        timer: 60, // 1초 경고
        id: Math.random()
      });
    }

    // 총알 업데이트 및 충돌 처리
    bulletsRef.current = bulletsRef.current.filter(bullet => {
      // 삼지창 처리
      if (bullet.type === BulletType.TRIDENT_BLUE || bullet.type === BulletType.TRIDENT_ORANGE) {
        if (bullet.warning) {
          bullet.timer = (bullet.timer || 0) - 1;
          // 경고 깜빡임 그리기
          if (bullet.timer > 0) {
            ctx.fillStyle = (Math.floor(bullet.timer / 5) % 2 === 0)
              ? (bullet.type === BulletType.TRIDENT_BLUE ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 165, 0, 0.3)')
              : 'transparent';
            ctx.fillRect(boxX, boxY, boxW, boxH);

            // 눈 표시 (상단에)
            ctx.fillStyle = bullet.type === BulletType.TRIDENT_BLUE ? COLORS.BLUE : COLORS.ORANGE;
            ctx.font = '20px "Press Start 2P"';
            ctx.fillText(bullet.type === BulletType.TRIDENT_BLUE ? "STAY!" : "MOVE!", CANVAS_WIDTH / 2 - 40, boxY - 20);

            return true;
          } else {
            // 공격 활성화 (판정 프레임)
            bullet.warning = false;
            bullet.timer = 10; // 공격 지속 시간

            // 실제 공격 판정
            const isMoving = player.isMoving;
            const isBlue = bullet.type === BulletType.TRIDENT_BLUE; // 파랑: 멈춰야 함
            const isOrange = bullet.type === BulletType.TRIDENT_ORANGE; // 오렌지: 움직여야 함

            let hit = false;
            if (isBlue && isMoving) hit = true;
            if (isOrange && !isMoving) hit = true;

            if (hit && player.invulnerable === 0) {
              takeDamage();
            }

            // 시각적 효과 (Trident Swipe)
            ctx.fillStyle = isBlue ? COLORS.BLUE : COLORS.ORANGE;
            ctx.fillRect(boxX, boxY, boxW, boxH);
            return true;
          }
        } else {
          // 공격 후 사라짐
          bullet.timer = (bullet.timer || 0) - 1;
          return (bullet.timer > 0);
        }
      }

      // 일반 총알 이동
      bullet.x += bullet.vx;
      bullet.y += bullet.vy;

      // 화면 밖으로 나가면 제거
      const outOfBounds = bullet.x < -50 || bullet.x > CANVAS_WIDTH + 50 || bullet.y > CANVAS_HEIGHT + 50;

      // 그리기
      ctx.fillStyle = bullet.color;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.width / 2, 0, Math.PI * 2);
      ctx.fill();

      // 충돌 감지 (Circle vs Point)
      if (!outOfBounds && player.invulnerable <= 0) {
        const dx = bullet.x - player.x;
        const dy = bullet.y - player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (bullet.width / 2 + player.width / 2)) {
          takeDamage();
        }
      }

      return !outOfBounds;
    });

    // 페이즈 종료 조건
    if (time > 700) {
      setGameState(GameState.MENU);
      setMenuSelection(0);
    }
  };

  const updatePlayer = () => {
    const player = playerRef.current;
    const keys = keysRef.current;

    let moveX = 0;
    let moveY = 0;

    if (keys['ArrowUp']) moveY -= PLAYER_SPEED;
    if (keys['ArrowDown']) moveY += PLAYER_SPEED;
    if (keys['ArrowLeft']) moveX -= PLAYER_SPEED;
    if (keys['ArrowRight']) moveX += PLAYER_SPEED;

    // 이동 여부 체크 (Blue/Orange 공격용)
    player.isMoving = (moveX !== 0 || moveY !== 0);

    // 위치 업데이트
    if (gameState === GameState.ATTACK) {
      // 박스 내부로 제한
      const nextX = player.x + moveX;
      const nextY = player.y + moveY;

      if (nextX > BOX_BOUNDS.x + 8 && nextX < BOX_BOUNDS.x + BOX_BOUNDS.width - 8) {
        player.x = nextX;
      }
      if (nextY > BOX_BOUNDS.y + 8 && nextY < BOX_BOUNDS.y + BOX_BOUNDS.height - 8) {
        player.y = nextY;
      }
    } else {
      // 메뉴나 대화 중에는 이동 불가 (일반적으로는)
    }

    // 무적 시간 감소
    if (player.invulnerable > 0) {
      player.invulnerable--;
    }
  };

  const takeDamage = () => {
    setHp(prev => {
      const newHp = prev - 4;
      if (newHp <= 0) {
        setGameState(GameState.GAME_OVER);
        return 0;
      }
      return newHp;
    });
    playerRef.current.invulnerable = IFRAMES;
    // 화면 흔들림 효과 추가 가능
  };

  // ==========================================
  // 그리기 함수들 (Drawing Functions)
  // ==========================================

  const drawPlayer = (ctx: CanvasRenderingContext2D) => {
    const p = playerRef.current;
    if (p.invulnerable > 0 && Math.floor(frameRef.current / 4) % 2 === 0) return; // 깜빡임 효과

    ctx.fillStyle = COLORS.RED;
    // 간단한 하트 모양 그리기
    const x = p.x;
    const y = p.y;
    const size = p.width / 2;

    ctx.beginPath();
    ctx.moveTo(x, y + size / 2);
    ctx.bezierCurveTo(x, y, x - size, y - size, x - size, y - size / 2);
    ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 1.5);
    ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y - size / 2);
    ctx.bezierCurveTo(x + size, y - size, x, y, x, y + size / 2);
    ctx.fill();
  };

  const drawAsgore = (ctx: CanvasRenderingContext2D, frame: number, isTalking: boolean = false) => {
    ctx.save();
    const x = CANVAS_WIDTH / 2;
    const y = ASGORE_Y;

    // 변신 후에는 변신 애니메이션의 마지막 프레임을 유지
    if (hasTransformedRef.current) {
      const img = transformFramesRef.current[48];
      if (img && img.complete) {
        // New GIF is 171x128. Scale 2.5x => 427.5 x 320
        const w = 171 * 2.5;
        const h = 128 * 2.5;
        const tx = CANVAS_WIDTH / 2 - w / 2;
        const ty = ASGORE_Y;
        ctx.drawImage(img, tx, ty, w, h);
        ctx.restore();
        return;
      }
    }

    const img1 = imagesRef.current['ASGORE_TALK_1'];
    const img2 = imagesRef.current['ASGORE_TALK_2'];

    let img = img1;
    if (isTalking && img2) {
      if (Math.floor(frame / 10) % 2 === 0) {
        img = img2;
      }
    }

    if (img) {
      // Standardize size
      const width = 300;
      const scale = width / img.width;
      const height = img.height * scale;
      // Position him higher up
      const yPos = y;
      ctx.drawImage(img, x - width / 2, yPos, width, height);
    } else {
      // Fallback Vector Drawing
      const bounce = Math.sin(frame / 30) * 5;
      ctx.translate(x, y + bounce);
      ctx.fillStyle = COLORS.WHITE;

      // 망토 (Cape)
      ctx.beginPath();
      ctx.moveTo(-60, 20);
      ctx.lineTo(60, 20);
      ctx.lineTo(100, 300); // Extended length to hide behind box
      ctx.lineTo(-100, 300);
      ctx.fill();

      // 갑옷 (Armor Body)
      ctx.fillStyle = COLORS.BLACK;
      ctx.fillRect(-40, 40, 80, 80);
      ctx.strokeStyle = COLORS.WHITE;
      ctx.lineWidth = 2;
      ctx.strokeRect(-40, 40, 80, 80);

      // 얼굴 (Face)
      ctx.fillStyle = COLORS.WHITE;
      ctx.fillRect(-30, -30, 60, 50);
    }
    ctx.restore();
  };

  const drawSpriteIntro = (ctx: CanvasRenderingContext2D) => {
    if (frameRef.current % 60 === 0) console.log("Drawing Sprite Intro...");
    const toggle = Math.floor(frameRef.current / 15) % 2 === 0;
    const imgKey = toggle ? 'ASGORE_TALK_1' : 'ASGORE_TALK_2';
    const img = imagesRef.current[imgKey];

    if (img) {
      // Center image for intro
      const w = 300;
      const scale = w / img.width;
      const h = img.height * scale;
      const x = CANVAS_WIDTH / 2 - w / 2;
      const y = -10; // Intro position
      ctx.drawImage(img, x, y, w, h);
    } else {
      if (frameRef.current % 60 === 0) console.log(`[DrawSprite] Missing image: ${imgKey}`);
    }

    // 2. Draw Dialogue Box - MOVE DOWN
    const boxImg = imagesRef.current['DIALOGUE_BOX'];
    if (boxImg) {
      const bw = 570;
      const bh = 140;
      const bx = CANVAS_WIDTH / 2 - bw / 2;
      const by = 290; // Moved down from 250 -> 290 to reduce overlap
      ctx.drawImage(boxImg, bx, by, bw, bh);

      // Draw Text
      ctx.fillStyle = COLORS.WHITE;
      ctx.font = '24px "DotGothic16"';
      ctx.fillText(dialogueText, bx + 40, by + 50);
    }
  };

  const drawDialogue = (ctx: CanvasRenderingContext2D, bx: number, by: number) => {
    ctx.fillStyle = COLORS.WHITE;
    ctx.font = '24px "DotGothic16"';
    ctx.fillText("* " + dialogueText, bx + 20, by + 50);

    if (Math.floor(frameRef.current / 30) % 2 === 0) {
      ctx.fillText("▼", bx + BOX_BOUNDS.width - 30, by + BOX_BOUNDS.height - 20);
    }
  };

  const drawMenu = (ctx: CanvasRenderingContext2D) => {
    const labels = ["FIGHT", "ACT", "ITEM", "MERCY"];
    const btnImages = [ASSETS.BTN_FIGHT, ASSETS.BTN_ACT, ASSETS.BTN_ITEM, ASSETS.BTN_MERCY];
    const btnKeys = ['BTN_FIGHT', 'BTN_ACT', 'BTN_ITEM', 'BTN_MERCY'];

    const btnW = 142; // Even wider buttons to fill 640px space (640 - 20*2 margins) / 4 ~ 150
    const startX = 20; // Reduce margins
    const y = 430;

    labels.forEach((label, i) => {
      // If Mercy is broken, skip drawing the 4th button (index 3)
      if (i === 3 && mercyBrokenRef.current) return;

      const x = startX + i * (btnW + 12); // Gap 12
      const isSelected = menuSelection === i;

      const img = imagesRef.current[btnKeys[i]];
      if (img) {
        // Draw Button Image
        if (isSelected) {
          ctx.save();
          ctx.globalAlpha = 1.0;
          ctx.shadowColor = COLORS.YELLOW;
          ctx.shadowBlur = 10;
          ctx.drawImage(img, x, y, btnW, 42);
          // Orange/Yellow Tint for selection (simple overlay)
          ctx.globalCompositeOperation = 'source-over'; // standard
          ctx.strokeStyle = COLORS.YELLOW;
          ctx.lineWidth = 3;
          ctx.strokeRect(x, y, btnW, 42);
          ctx.restore();
        } else {
          ctx.drawImage(img, x, y, btnW, 42);
        }
      } else {
        // Fallback to rect
        ctx.strokeStyle = isSelected ? COLORS.YELLOW : COLORS.ORANGE;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, btnW, 40);
        ctx.fillStyle = isSelected ? COLORS.YELLOW : COLORS.ORANGE;
        ctx.font = '16px "Press Start 2P"';
        ctx.fillText(label, x + 20, y + 28);
      }

      // Selection Heart
      if (isSelected) {
        const hx = x + 16; // Adjusted for new button image
        const hy = y + 21;
        ctx.fillStyle = COLORS.RED;
        ctx.beginPath();
        ctx.arc(hx, hy, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    });


  };

  const drawAttackAim = (ctx: CanvasRenderingContext2D, boxX: number, boxY: number, boxW: number, boxH: number) => {
    // Draw Eye Shape (Elliptical)
    const cx = CANVAS_WIDTH / 2;
    const cy = boxY + boxH / 2;

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, boxW / 2 - 20, boxH / 2 - 20, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#FFFFFF'; // White border normally, varies by weapon
    ctx.stroke();

    // Draw Target Lines (Center)
    // Usually there's a specific graphic, but we'll draw lines
    ctx.fillStyle = COLORS.WHITE;

    // The moving bar
    const barX = boxX + attackBarXRef.current;
    ctx.fillStyle = COLORS.WHITE;
    ctx.fillRect(barX, boxY + 10, 14, boxH - 20); // Vertical bar

    // Center Marker (Target)
    ctx.strokeStyle = COLORS.RED; // Critical Area
    ctx.lineWidth = 2;
    ctx.strokeRect(cx - 15, boxY + 20, 30, boxH - 40);

    ctx.restore();
  };

  const drawAttackResult = (ctx: CanvasRenderingContext2D) => {
    // Draw Slash Animation or Result Number
    const damage = attackDamageRef.current;

    // Draw Slice (Simple Line for now)
    if (attackResultTimerRef.current < 20) {
      ctx.strokeStyle = COLORS.RED;
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(CANVAS_WIDTH / 2 - 100, 100);
      ctx.lineTo(CANVAS_WIDTH / 2 + 100, 200);
      ctx.fill(); // wait stroke
      ctx.stroke();
    }

    // Draw Damage Number
    if (attackResultTimerRef.current > 10) {
      ctx.fillStyle = COLORS.RED;
      ctx.font = '40px "Press Start 2P"';
      ctx.textAlign = 'center';
      ctx.fillText(damage > 0 ? damage.toString() : "MISS", CANVAS_WIDTH / 2, 150);
      ctx.textAlign = 'left';

      // Boss HP Bar (Briefly visible)
      // ...
    }
  };

  const drawMercyBreak = (ctx: CanvasRenderingContext2D) => {
    const t = mercyBreakTimerRef.current;

    // Trident Slash Animation
    if (t < 40) {
      // Swipe visual
      const alpha = Math.max(0, 1 - Math.abs(t - 30) / 10); // Peak at 30
      if (alpha > 0) {
        ctx.save();
        ctx.strokeStyle = `rgba(255, 0, 0, ${alpha})`;
        ctx.lineWidth = 15;
        ctx.beginPath();
        // Slash across the button area
        const btnX = 20 + 3 * (142 + 12);
        const btnY = 430;
        const w = 142;

        // Dynamic slash line
        ctx.moveTo(btnX - 20, btnY - 20);
        ctx.lineTo(btnX + w + 20, btnY + 60);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Shards
    mercyShardsRef.current.forEach(shard => {
      ctx.save();
      ctx.translate(shard.x + shard.width / 2, shard.y + shard.height / 2);
      ctx.rotate(shard.rotation);
      ctx.fillStyle = shard.color;
      ctx.fillRect(-shard.width / 2, -shard.height / 2, shard.width, shard.height);
      ctx.strokeStyle = COLORS.YELLOW;
      ctx.strokeRect(-shard.width / 2, -shard.height / 2, shard.width, shard.height);
      ctx.restore();
    });
  };

  const drawGameOver = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = COLORS.WHITE;
    ctx.font = '40px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillText("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    ctx.font = '16px "Press Start 2P"';
    ctx.fillStyle = COLORS.UI_GRAY;
    ctx.fillText("Press Z to Restart", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 50);
    ctx.textAlign = 'left'; // Reset
  };

  const drawStats = (ctx: CanvasRenderingContext2D) => {
    // Y position below Box (Box Bottom is 390 -> 250+140)
    // Buttons at 430.
    // Stats should be around 405.
    const y = 415;
    const startX = 35; // Align with box

    ctx.font = '20px "Press Start 2P"';
    ctx.fillStyle = COLORS.WHITE;

    // Name & LV
    ctx.fillText("NUKER", startX, y);
    ctx.fillText("LV 20", startX + 130, y);

    // HP Section
    // HP Label
    ctx.font = '12px "Press Start 2P"';
    ctx.fillText("HP", startX + 280, y);

    // HP Bar
    const barX = startX + 310;
    const barY = y - 14;
    const barW = 100; // Visual width
    const barH = 18;

    ctx.fillStyle = COLORS.RED;
    ctx.fillRect(barX, barY, barW, barH);

    ctx.fillStyle = COLORS.YELLOW;
    const hpWidth = (hp / MAX_HP) * barW;
    ctx.fillRect(barX, barY, hpWidth, barH);

    // HP Text
    ctx.fillStyle = COLORS.WHITE;
    ctx.font = '20px "Press Start 2P"';
    ctx.fillText(`${hp} / ${MAX_HP}`, barX + barW + 15, y);
  };

  // ==========================================
  // UI 렌더링 (HTML Overlay for static UI)
  // ==========================================

  // Transform GIF Overlay
  // We center it roughly where Asgore is.
  // Asgore is drawn at (CANVAS_WIDTH/2, 80) roughly inside canvas.
  // The GIF likely needs to be positioned absolutely over the canvas.

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Boss HP Bar - Only Visible on Hit */}
      {/* For now, we don't have a 'hit' state on boss, so we'll just keep it hidden or add a toggle if needed by user requirement ??? 
          "Asgore health bar is only visible when hit" -> implied it appears during damage calculation.
          For the demo, let's hide it by default.
      */}
      <div
        className="absolute top-[80px] w-full max-w-[570px] flex flex-col items-center z-10 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }} // Hidden for now as requested
      >
        <div className="w-full flex justify-between items-end mb-1">
          <span className="text-white font-['Press_Start_2P'] text-xl uppercase">ASGORE</span>
        </div>
        <div className="w-full h-[24px] bg-[#404040] border-2 border-black relative">
          <div
            className="h-full bg-[#00FF00] absolute top-0 left-0 transition-all duration-500"
            style={{ width: `${100}%` }}
          />
        </div>
      </div>

      {/* Transformation GIF Overlay (REMOVED - Using Sprites) */}

      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="border-none bg-black cursor-pointer object-contain"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          imageRendering: 'pixelated'
        }}
        onClick={handleCanvasClick}
      />
    </div>
  );
};

export default Game;