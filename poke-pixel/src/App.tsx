import React, { useState, useEffect, useCallback, useRef } from 'react'

const TILE_SIZE = 48;
const WORLD_WIDTH = 16;
const WORLD_HEIGHT = 16;

const SPRITES = {
  PLAYER_BACK: './player_back.png',
  ENEMY_FRONT: './eevee_front.png',
  TRAINER_RIVAL: './trainer_rival.png',
  TRAINER_BACK: './trainer_back.png',
  PIKACHU_BACK: './pikachu_back.png',
};

enum GameState {
  INTRO,
  LOADING,
  START,
  CINEMATIC,
  EXPLORING,
  TRANSITIONING,
  BATTLE,
  VICTORY,
}

type BattlePhase = 'TRAINER_INTRO' | 'ENEMY_SEND_OUT' | 'PLAYER_INTRO' | 'PLAYER_SEND_OUT' | 'BATTLE';

interface Position {
  x: number;
  y: number;
}

interface BattleState {
  status?: 'PARALYSIS' | 'BURN' | 'POISON' | 'SLEEP' | 'FREEZE';
  statStages?: {
    attack?: number;
    defense?: number;
    speed?: number;
    accuracy?: number;
  };
}

interface Move {
  name: string;
  type: 'Electric' | 'Steel' | 'Normal' | 'Ground' | 'Grass';
  category: 'Physical' | 'Special' | 'Status';
  power: number;
  accuracy: number;
  priority?: number;
  effect?: string; // Description for now, logic handled in implementation
  effectType?: 'PARALYSIS' | 'DEFENSE_DOWN' | 'ACCURACY_DOWN' | 'RECOIL' | 'ALWAYS_HIT' | 'SELF_SWITCH' | 'HEAL';
  effectChance?: number;
  fx?: string; // CSS class for animation
}

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  spAtk: number;
  spDef: number;
  speed: number;
}

interface PokemonData {
  id: string;
  name: string;
  maxHp: number;
  stats: Stats;
  frontSprite: string;
  backSprite: string;
  moves: Move[];
}

interface BattlePokemon extends PokemonData {
  hp: number;
  level: number;
  currentStats?: BattleState;
}

interface Trainer {
  name: string;
  sprite: string;
  party: BattlePokemon[];
  defeatText: string;
}

interface Inventory {
  potion: number;
  pokeball: number;
  fullHeal: number;
  xAttack: number;
}

const POKEMON_DB: Record<string, PokemonData> = {
  EEVEE: {
    id: 'eevee',
    name: 'Wild EEVEE',
    maxHp: 55,
    stats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 },
    frontSprite: SPRITES.ENEMY_FRONT,
    backSprite: SPRITES.PLAYER_BACK,
    moves: [
      { name: 'Tackle', type: 'Normal', category: 'Physical', power: 40, accuracy: 100, effectType: 'PARALYSIS', effectChance: 0.1, fx: 'fx-tackle' },
      { name: 'Swift', type: 'Normal', category: 'Special', power: 60, accuracy: 100, effectType: 'ALWAYS_HIT', fx: 'fx-swift' },
      { name: 'Baton Pass', type: 'Normal', category: 'Status', power: 0, accuracy: 100, effectType: 'HEAL', fx: 'fx-baton-pass' },
      { name: 'Sand Attack', type: 'Ground', category: 'Status', power: 0, accuracy: 100, effectType: 'ACCURACY_DOWN', fx: 'fx-sand-attack' }
    ]
  },
  PIKACHU: {
    id: 'pikachu',
    name: 'PIKACHU',
    maxHp: 35, // Base HP
    stats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 },
    frontSprite: './pikachu_front.png',
    backSprite: SPRITES.PIKACHU_BACK,
    moves: [
      { name: 'Thunderbolt', type: 'Electric', category: 'Special', power: 90, accuracy: 100, effectType: 'PARALYSIS', effectChance: 0.1, fx: 'fx-thunderbolt' },
      { name: 'Iron Tail', type: 'Steel', category: 'Physical', power: 100, accuracy: 75, effectType: 'DEFENSE_DOWN', effectChance: 0.3, fx: 'fx-iron-tail' },
      { name: 'Quick Attack', type: 'Normal', category: 'Physical', power: 40, accuracy: 100, priority: 1, fx: 'fx-quick-attack' },
      { name: 'Volt Tackle', type: 'Electric', category: 'Physical', power: 120, accuracy: 100, effectType: 'RECOIL', fx: 'fx-volt-tackle' }
    ]
  },
  MAHORA: {
    id: 'mahora',
    name: 'Wild MAHORA',
    maxHp: 80,
    stats: { hp: 80, attack: 80, defense: 70, spAtk: 60, spDef: 70, speed: 60 },
    frontSprite: './mahora_front.png',
    backSprite: SPRITES.PLAYER_BACK,
    moves: [{ name: 'World Slash', type: 'Normal', category: 'Physical', power: 80, accuracy: 90, fx: 'fx-tackle' }]
  }
};

const TRAINER_DB: Record<string, Trainer> = {
  RIVAL: {
    name: "RIVAL BLUE",
    sprite: SPRITES.TRAINER_RIVAL,
    party: [{ ...POKEMON_DB.EEVEE, hp: 45, level: 15 }],
    defeatText: "Smell ya later!"
  }
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const [battlePhase, setBattlePhase] = useState<BattlePhase>('TRAINER_INTRO');
  const [playerPos, setPlayerPos] = useState<Position>({ x: 4, y: 4 });
  const [battleData, setBattleData] = useState<{
    player: BattlePokemon,
    enemy: BattlePokemon,
    trainer?: Trainer
  } | null>(null);
  const [battleText, setBattleText] = useState("");
  const [selectedAction, setSelectedAction] = useState(0);
  const [isIrisActive, setIsIrisActive] = useState(false);
  const [menuState, setMenuState] = useState<'MAIN' | 'FIGHT' | 'BAG'>('MAIN');
  const [lastMoveFx, setLastMoveFx] = useState<string | null>(null);
  const [victoryItems, setVictoryItems] = useState<{ xp: number; item: string } | null>(null);
  const [inventory, setInventory] = useState<Inventory>({ potion: 5, pokeball: 5, fullHeal: 3, xAttack: 3 }); // Default items
  const [shake, setShake] = useState(false);
  // Battle Visual State
  const [activeEffect, setActiveEffect] = useState<{ type: string, target: 'PLAYER' | 'ENEMY' } | null>(null);
  const [playerAction, setPlayerAction] = useState<string | null>(null);
  const [enemyAction, setEnemyAction] = useState<string | null>(null);
  const [capturePhase, setCapturePhase] = useState<'NONE' | 'THROW' | 'SHAKE' | 'BROKE' | 'CAUGHT'>('NONE');
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  const bgmRef = useRef<HTMLAudioElement | null>(null);
  const victoryBgmRef = useRef<HTMLAudioElement | null>(null);
  const worldBgmRef = useRef<HTMLAudioElement | null>(null);

  const playBgm = (src: string, loop: boolean = true) => {
    if (bgmRef.current) {
      bgmRef.current.pause();
      bgmRef.current = null;
    }
    const audio = new Audio(src);
    audio.loop = loop;
    audio.play().catch(err => console.log("Audio play blocked", err));
    bgmRef.current = audio;
  };

  const playVictoryBgm = () => {
    if (bgmRef.current) {
      bgmRef.current.pause();
      bgmRef.current = null;
    }
    if (victoryBgmRef.current) {
      victoryBgmRef.current.pause();
      victoryBgmRef.current = null;
    }
    const audio = new Audio('./victory_theme.wav');
    audio.loop = true;
    audio.play().catch(() => { });
    victoryBgmRef.current = audio;
  };

  const useItem = () => {
    if (!battleData) return;
    if (selectedAction === 0) { // Potion
      if (inventory.potion > 0) {
        // Heal Logic
        const newHp = Math.min(battleData.player.maxHp, battleData.player.hp + 20);
        setInventory(prev => ({ ...prev, potion: prev.potion - 1 }));
        setBattleData(prev => prev ? { ...prev, player: { ...prev.player, hp: newHp } } : null);
        setBattleText("Used Potion! Recovered HP!");

        // FX
        setActiveEffect({ type: 'HEAL', target: 'PLAYER' });
        setTimeout(() => setActiveEffect(null), 1200);
        playSfx('./hit_sfx.mp3'); // Sound for healing

        setTimeout(() => {
          setBattleText(`What will ${battleData.player.name} do?`);
          setMenuState('MAIN');
          setSelectedAction(0);
        }, 2000);
      } else {
        setBattleText("You don't have enough Potions!");
        setTimeout(() => {
          setBattleText("Select an item.");
        }, 1500);
      }
    } else if (selectedAction === 1) { // Pokeball
      if (inventory.pokeball > 0) {
        if (battleData.trainer) {
          setBattleText("Don't be a thief! The trainer is right there!");
          setTimeout(() => setBattleText("Select an item."), 1500);
        } else {
          // CAPTURE SEQUENCE START
          setInventory(prev => ({ ...prev, pokeball: prev.pokeball - 1 }));
          setMenuState('MAIN'); // Hide menu
          setBattleText(`You threw a Pokeball!`);

          setCapturePhase('THROW');

          // Logic for catch rate
          const catchRate = ((battleData.enemy.maxHp * 3 - battleData.enemy.hp * 2) * 45) / (battleData.enemy.maxHp * 3); // Simplified Gen 1 formula logic
          const isCaught = Math.random() * 255 < catchRate; // Simple check

          setTimeout(() => {
            setCapturePhase('SHAKE');
            // Shake logic (Wait 3s)
            setTimeout(() => {
              if (isCaught) {
                setCapturePhase('CAUGHT');
                setBattleText(`Gotcha! ${battleData.enemy.name} was caught!`);
                playVictoryBgm();
                setTimeout(() => {
                  handleVictoryExit(); // Or specific caught exit
                  setCapturePhase('NONE');
                  setGameState(GameState.EXPLORING);
                }, 3000);
              } else {
                setCapturePhase('BROKE');
                setBattleText(`Oh no! The Pokemon broke free!`);
                setTimeout(() => {
                  setCapturePhase('NONE');
                  endPlayerTurn(); // Enemy turn
                }, 1500);
              }
            }, 3000);
          }, 800); // Throw duration
        }
      } else {
        setBattleText("You have no Pokeballs!");
        setTimeout(() => {
          setBattleText("Select an item.");
        }, 1500);
      }
    } else if (selectedAction === 2) { // Full Heal
      if (inventory.fullHeal > 0) {
        setInventory(prev => ({ ...prev, fullHeal: prev.fullHeal - 1 }));
        setBattleText("Used Full Heal! Status restored!");
        setActiveEffect({ type: 'HEAL', target: 'PLAYER' });
        setTimeout(() => setActiveEffect(null), 1000);
        playSfx('./hit_sfx.mp3');

        setTimeout(() => {
          setBattleText(`What will ${battleData.player.name} do?`);
          setMenuState('MAIN');
          setSelectedAction(0);
        }, 2000);
      } else {
        setBattleText("You have no Full Heals!");
        setTimeout(() => {
          setBattleText("Select an item.");
        }, 1500);
      }
    } else if (selectedAction === 3) { // X Attack
      if (inventory.xAttack > 0) {
        setInventory(prev => ({ ...prev, xAttack: prev.xAttack - 1 }));
        // Boost Attack
        setBattleData(prev => prev ? { ...prev, player: { ...prev.player, stats: { ...prev.player.stats, attack: prev.player.stats.attack * 1.5 } } } : null);

        setBattleText("Used X Attack! Attack rose!");
        setActiveEffect({ type: 'STAT_UP', target: 'PLAYER' });
        setTimeout(() => setActiveEffect(null), 1200);
        playSfx('./hit_sfx.mp3');

        setTimeout(() => {
          setBattleText(`What will ${battleData.player.name} do?`);
          setMenuState('MAIN');
          setSelectedAction(0);
        }, 2000);
      } else {
        setBattleText("You have no X Attacks!");
        setTimeout(() => {
          setBattleText("Select an item.");
        }, 1500);
      }
    } else {
      // Cancel
      setMenuState('MAIN');
      setSelectedAction(0);
    }
  };

  const initWorldBgm = () => {
    if (!worldBgmRef.current) {
      const audio = new Audio('./world_bgm.wav');
      audio.loop = true;
      worldBgmRef.current = audio;
    }
  };




  const handleStartIntro = () => {
    setGameState(GameState.LOADING);
    setTimeout(() => {
      setIsLoadingFinished(true);
      setTimeout(() => {
        setGameState(GameState.START);
        playBgm('./title_bgm.wav');
      }, 500);
    }, 2500);
  };

  const handleStartGame = () => {
    setGameState(GameState.CINEMATIC);
    initWorldBgm();
    setTimeout(() => {
      if (bgmRef.current) bgmRef.current.pause();
      if (worldBgmRef.current) worldBgmRef.current.play();
      setGameState(GameState.EXPLORING);
    }, 7000);
  };

  // Map data (0: grass, 1: path, 2: wall/tree)
  const [worldMap] = useState<number[][]>(() => {
    const map = Array(WORLD_HEIGHT).fill(0).map(() => Array(WORLD_WIDTH).fill(1));
    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 6; x++) map[y][x] = 0;
    }
    for (let y = 10; y < 16; y++) {
      for (let x = 10; x < 16; x++) map[y][x] = 0;
    }
    return map;
  });

  const handleMove = useCallback((dx: number, dy: number) => {
    if (gameState !== GameState.EXPLORING) return;

    const newX = playerPos.x + dx;
    const newY = playerPos.y + dy;

    if (newX >= 0 && newX < WORLD_WIDTH && newY >= 0 && newY < WORLD_HEIGHT) {
      setPlayerPos({ x: newX, y: newY });
      if (worldMap[newY][newX] === 0) {
        if (Math.random() < 0.15) {
          triggerBattle();
        }
      }
    }
  }, [playerPos, gameState, worldMap]);

  const triggerBattle = (trainerId?: string) => {
    console.log("triggerBattle called with:", trainerId);
    if (worldBgmRef.current) worldBgmRef.current.pause();
    setGameState(GameState.TRANSITIONING);
    setIsIrisActive(true);
    playBgm('./battle_bgm.wav');

    // Reset Menu State
    setMenuState('MAIN');
    setSelectedAction(0);

    setTimeout(() => {
      console.log("Transition complete. Setting up battle...");
      setIsIrisActive(false);
      const playerPoke: BattlePokemon = { ...POKEMON_DB.PIKACHU, hp: 40, level: 13 };
      let enemyPoke: BattlePokemon;
      let trainer: Trainer | undefined;

      // Setup Data
      if (trainerId && TRAINER_DB[trainerId]) {
        console.log("Starting Trainer Battle:", trainerId);
        trainer = TRAINER_DB[trainerId];
        enemyPoke = { ...trainer.party[0] };
        setBattleText(`${trainer.name} wants to fight!`);
        setBattlePhase('TRAINER_INTRO');
      } else {
        console.log("Starting Wild Battle");
        enemyPoke = { ...POKEMON_DB.EEVEE, hp: 45, level: 10 };
        setBattleText(`A wild ${enemyPoke.name} appeared!`);
        // Wild Battle starts at PLAYER_INTRO (Enemy is already there, Player Trainer enters)
        setBattlePhase('PLAYER_INTRO');
      }

      setBattleData({ player: playerPoke, enemy: enemyPoke, trainer });
      setGameState(GameState.BATTLE);

      // Define the Player Intro Sequence (Shared End Sequence)
      const startPlayerSequence = () => {
        // Phase 3 (or Start for Wild): Player Intro (Wait 2.5s)
        setTimeout(() => {
          setBattleText(`Go, Pikachu!`);
          setBattlePhase('PLAYER_INTRO');

          // Phase 4: Player Sends Out (Wait 2s)
          setTimeout(() => {
            setBattleText(`Go! ${playerPoke.name}!`); // Keeping this as secondary confirmation or removing? User asked for "Go, Pikachu!" specifically.
            // Let's stick to the flow: Trainer appears -> "Go, Pikachu!" -> Throws ball/Pokemon appears.
            setBattlePhase('PLAYER_SEND_OUT');

            // Phase 5: Battle Start (Wait 2s for animation)
            setTimeout(() => {
              setBattlePhase('BATTLE');
              setBattleText(`What will ${playerPoke.name} do?`);
            }, 2000);
          }, 2000);
        }, 2500);
      };

      if (trainerId) {
        // Trainer Battle Specific Sequence
        // Phase 2: Enemy Sends Out (Wait 2.5s after Intro)
        setTimeout(() => {
          setBattleText(`${trainer!.name} sent out ${enemyPoke.name}!`);
          setBattlePhase('ENEMY_SEND_OUT');

          // Then Player Sequence
          startPlayerSequence();
        }, 2500);
      } else {
        // Wild Battle - Jump straight to Player Sequence
        // Note: For Wild battle, we start at PLAYER_INTRO visually, but we need to wait a moment for the "Wild X appeared" text to be read before showing "Go Pikachu".
        // Actually, if we set phase to PLAYER_INTRO immediately, the code below expects a delay.
        // Let's adjust:
        // 1. "Wild X appeared", Phase=PLAYER_INTRO (Shows Trainer Back + Enemy Pokemon)
        // 2. Wait 2.5s
        // 3. "Go Pikachu", Phase=PLAYER_INTRO (Text change only)
        // Wait... 'startPlayerSequence' sets phase to PLAYER_INTRO again. That's fine.
        startPlayerSequence();
      }
    }, 2500);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (gameState === GameState.EXPLORING) {
        if (e.key === 'ArrowUp' || e.key === 'w') handleMove(0, -1);
        if (e.key === 'ArrowDown' || e.key === 's') handleMove(0, 1);
        if (e.key === 'ArrowLeft' || e.key === 'a') handleMove(-1, 0);
        if (e.key === 'ArrowRight' || e.key === 'd') handleMove(1, 0);
        if (e.key === 't') triggerBattle('RIVAL');
      } else if (gameState === GameState.BATTLE && battlePhase === 'BATTLE') {
        if (menuState === 'MAIN') {
          if (e.key === 'ArrowUp' || e.key === 'w') setSelectedAction(prev => (prev > 1 ? prev - 2 : prev));
          if (e.key === 'ArrowDown' || e.key === 's') setSelectedAction(prev => (prev < 2 ? prev + 2 : prev));
          if (e.key === 'ArrowLeft' || e.key === 'a') setSelectedAction(prev => (prev % 2 !== 0 ? prev - 1 : prev));
          if (e.key === 'ArrowRight' || e.key === 'd') setSelectedAction(prev => (prev % 2 === 0 ? prev + 1 : prev));
          if (e.key === 'Enter' || e.key === ' ') handleAction();
        } else if (menuState === 'FIGHT') {
          if (e.key === 'ArrowUp' || e.key === 'w') setSelectedAction(prev => (prev > 1 ? prev - 2 : prev));
          if (e.key === 'ArrowDown' || e.key === 's') setSelectedAction(prev => (prev < 2 ? prev + 2 : prev));
          if (e.key === 'ArrowLeft' || e.key === 'a') setSelectedAction(prev => (prev % 2 !== 0 ? prev - 1 : prev));
          if (e.key === 'ArrowRight' || e.key === 'd') setSelectedAction(prev => (prev % 2 === 0 ? prev + 1 : prev));
          if (e.key === 'Enter' || e.key === ' ') executePlayerMove();
        }
      } else if (menuState === 'BAG') {
        if (e.key === 'ArrowUp' || e.key === 'w') setSelectedAction(prev => (prev > 0 ? prev - 1 : prev));
        if (e.key === 'ArrowDown' || e.key === 's') setSelectedAction(prev => (prev < 4 ? prev + 1 : prev));
        if (e.key === 'Enter' || e.key === ' ') useItem();
        if (e.key === 'Shift') {
          setMenuState('MAIN');
          setSelectedAction(0);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleMove, gameState, selectedAction, battlePhase]);

  const playSfx = (src: string) => {
    const audio = new Audio(src);
    audio.play().catch(() => { });
  };

  /* New Battle Logic */
  const executePlayerMove = () => {
    if (!battleData) return;
    const move = battleData.player.moves[selectedAction];
    if (!move) return; // Empty slot

    // Accuracy Check
    if (Math.random() * 100 > move.accuracy) {
      setBattleText(`${battleData.player.name} used ${move.name} but missed!`);
      endPlayerTurn();
      return;
    }

    // Damage Calc
    let power = move.power || 0;
    if (move.category === 'Status') power = 0;

    // STAB bonus (simplified)
    if (move.type === 'Electric') power *= 1.5;

    // Stat-based Damage Formula
    // Damage = ((((2 * Level / 5 + 2) * Power * A / D) / 50) + 2) * Modifier
    const level = battleData.player.level;
    const atk = move.category === 'Special' ? battleData.player.stats.spAtk : battleData.player.stats.attack;
    const def = move.category === 'Special' ? battleData.enemy.stats.spDef : battleData.enemy.stats.defense;

    // Basic calculation
    let damage = Math.floor((((2 * level / 5 + 2) * power * (atk / def)) / 50) + 2);

    // Random Variance (0.85 to 1.00)
    damage = Math.floor(damage * (Math.random() * 0.15 + 0.85));

    // Ensure at least 1 damage if it's an attack
    if (power > 0) damage = Math.max(1, damage);

    const newEnemyHp = Math.max(0, battleData.enemy.hp - damage);

    // Apply FX
    if (move.fx) {
      // Standardized Effect Triggering
      let effectType = '';
      if (move.name === 'Thunderbolt') effectType = 'THUNDERBOLT';
      else if (move.name === 'Iron Tail') effectType = 'IRON_TAIL';
      else if (move.name === 'Quick Attack') effectType = 'QUICK_ATTACK';
      else if (move.name === 'Volt Tackle') effectType = 'VOLT_TACKLE';
      else if (move.name === 'Tackle') effectType = 'TACKLE';
      else if (move.name === 'Swift') effectType = 'SWIFT';
      else if (move.name === 'Sand Attack') effectType = 'SAND_ATTACK';
      else if (move.name === 'World Slash') effectType = 'WORLD_SLASH';

      if (effectType) {
        // Character Animations
        let actionClass = '';
        if (['TACKLE', 'QUICK_ATTACK', 'VOLT_TACKLE'].includes(effectType)) actionClass = 'anim-lunge-player';
        else if (effectType === 'IRON_TAIL') actionClass = 'anim-spin';
        else if (effectType === 'SAND_ATTACK') actionClass = 'anim-kick-player';
        else actionClass = 'anim-channel'; // Default for specials

        setPlayerAction(actionClass);
        setTimeout(() => setPlayerAction(null), 500); // Reset animation

        // V4: Universal Shake for Impact
        setShake(true);
        setTimeout(() => setShake(false), 500);

        setActiveEffect({ type: effectType, target: 'ENEMY' });
        setTimeout(() => setActiveEffect(null), 1200);
      } else {
        setLastMoveFx(move.fx);
      }
    }
    setTimeout(() => {
      setLastMoveFx(null);
      // Hit Flash on Enemy
      const enemySprite = document.getElementById('enemy-sprite');
      if (enemySprite) {
        enemySprite.classList.add('fx-hit-flash');
        setTimeout(() => enemySprite.classList.remove('fx-hit-flash'), 300);
      }
    }, 400); // Delay impact slightly

    playSfx('./hit_sfx.mp3');

    // Update State
    setBattleData(prev => prev ? { ...prev, enemy: { ...prev.enemy, hp: newEnemyHp } } : null);
    setBattleText(`${battleData.player.name} used ${move.name}!`);

    // Side Effects
    if (move.effectType === 'RECOIL') {
      const recoil = Math.floor(damage / 4);
      setBattleData(prev => prev ? { ...prev, player: { ...prev.player, hp: Math.max(0, prev.player.hp - recoil) } } : null);
    }

    if (newEnemyHp === 0) {
      handleWin();
    } else {
      setTimeout(enemyTurn, 2000);
    }
  };

  const endPlayerTurn = () => {
    setTimeout(enemyTurn, 2000);
  };

  const enemyTurn = () => {
    if (!battleData || !battleData.enemy) return;
    // AI: Random move
    const enemyMoves = battleData.enemy.moves;
    const move = enemyMoves[Math.floor(Math.random() * enemyMoves.length)];

    setBattleText(`${battleData.enemy.name} used ${move.name}!`);

    // FX
    if (move.fx) {
      let effectType = '';
      if (move.name === 'Tackle') effectType = 'TACKLE';
      else if (move.name === 'Swift') effectType = 'SWIFT';
      else if (move.name === 'Sand Attack') effectType = 'SAND_ATTACK';
      else if (move.name === 'World Slash') effectType = 'WORLD_SLASH';
      else if (move.name === 'Quick Attack') effectType = 'QUICK_ATTACK';
      else if (move.name === 'Iron Tail') effectType = 'IRON_TAIL';
      else if (move.name === 'Thunderbolt') effectType = 'THUNDERBOLT';

      if (effectType) {
        // Enemy Character Animations
        let actionClass = '';
        if (['TACKLE', 'QUICK_ATTACK', 'VOLT_TACKLE'].includes(effectType)) actionClass = 'anim-lunge-enemy';
        else if (effectType === 'IRON_TAIL') actionClass = 'anim-spin';
        else if (effectType === 'SAND_ATTACK') actionClass = 'anim-kick-enemy';
        else actionClass = 'anim-channel';

        setEnemyAction(actionClass);
        setTimeout(() => setEnemyAction(null), 500);

        setShake(true);
        setTimeout(() => setShake(false), 500);

        // Eevee Specific Override (Impact & Speed)
        let activeEffectType = '';
        if (battleData.enemy.name.includes('Eevee')) {
          if (effectType === 'TACKLE') activeEffectType = 'TACKLE_EEVEE';
          else if (effectType === 'SWIFT') activeEffectType = 'SWIFT_EEVEE';
          else if (effectType === 'SAND_ATTACK') activeEffectType = 'SAND_EEVEE';
          else activeEffectType = effectType;
        } else {
          activeEffectType = effectType;
        }

        setActiveEffect({ type: activeEffectType, target: 'PLAYER' });
        setTimeout(() => setActiveEffect(null), 1200);
      } else {
        setLastMoveFx(move.fx);
        setTimeout(() => setLastMoveFx(null), 1000);
      }
    }
    playSfx('./hit_sfx.mp3');

    // Hits?
    if (Math.random() * 100 > move.accuracy) {
      setBattleText(`${battleData.enemy.name} used ${move.name} but missed!`);
      setTimeout(() => {
        setBattleText(`What will ${battleData.player.name} do?`);
        setMenuState('MAIN');
        setSelectedAction(0);
      }, 2000);
      return;
    }

    // Damage
    let power = move.power || 0;
    if (move.category === 'Status') power = 0;

    // Stat-based Damage Formula
    const level = battleData.enemy.level;
    const atk = move.category === 'Special' ? battleData.enemy.stats.spAtk : battleData.enemy.stats.attack;
    const def = move.category === 'Special' ? battleData.player.stats.spDef : battleData.player.stats.defense;

    // Basic calculation
    let damage = Math.floor((((2 * level / 5 + 2) * power * (atk / def)) / 50) + 2);

    // Random Variance
    damage = Math.floor(damage * (Math.random() * 0.15 + 0.85));

    // Ensure at least 1 damage if it's an attack
    if (power > 0) damage = Math.max(1, damage);

    const newPlayerHp = Math.max(0, battleData.player.hp - damage);

    setBattleData(prev => prev ? { ...prev, player: { ...prev.player, hp: newPlayerHp } } : null);

    if (newPlayerHp === 0) {
      handleLoss();
    } else {
      setTimeout(() => {
        setBattleText(`What will ${battleData.player.name} do?`);
        setMenuState('MAIN');
        setSelectedAction(0);
      }, 2000);
    }
  };

  const handleWin = () => {
    setTimeout(() => {
      playSfx('./victory_fanfare.mp3');
      setBattleText(`${battleData?.enemy.name} fainted!`);
      if (bgmRef.current) bgmRef.current.pause();

      setTimeout(() => {
        // Switch to Victory Screen instead of World
        playVictoryBgm();
        const dropItem = Math.random() < 0.5 ? "Potion" : "Pokeball";
        setVictoryItems({ xp: 50, item: dropItem });
        setInventory(prev => ({
          ...prev,
          potion: dropItem === "Potion" ? prev.potion + 1 : prev.potion,
          pokeball: dropItem === "Pokeball" ? prev.pokeball + 1 : prev.pokeball
        }));
        setGameState(GameState.VICTORY);
      }, 2500);
    }, 1000);
  };

  const handleVictoryExit = () => {
    if (victoryBgmRef.current) {
      victoryBgmRef.current.pause();
      victoryBgmRef.current = null;
    }
    if (worldBgmRef.current) worldBgmRef.current.play();
    setVictoryItems(null);

    if (battleData?.trainer) {
      setBattleText(battleData.trainer.defeatText);
      setGameState(GameState.EXPLORING); // Or maybe back to dialog? Simplified.
    } else {
      setGameState(GameState.EXPLORING);
    }
  };

  const handleLoss = () => {
    setTimeout(() => {
      setBattleText(`${battleData?.player.name} fainted...`);
      if (bgmRef.current) bgmRef.current.pause();
      setTimeout(() => {
        if (worldBgmRef.current) worldBgmRef.current.play();
        setPlayerPos({ x: 4, y: 4 });
        setGameState(GameState.EXPLORING);
      }, 3000);
    }, 1000);
  };

  const handleAction = () => {
    if (!battleData || battlePhase !== 'BATTLE') return;
    if (selectedAction === 0) { // Fight Button Logic
      setMenuState('FIGHT');
      setSelectedAction(0);
      setBattleText("Select a move.");
    } else if (selectedAction === 1) { // BAG
      setMenuState('BAG');
      setSelectedAction(0);
      setBattleText("Select an item.");
    } else if (selectedAction === 3) { // Run
      setBattleText("Got away safely!");
      if (bgmRef.current) bgmRef.current.pause();
      setTimeout(() => {
        if (worldBgmRef.current) worldBgmRef.current.play();
        setGameState(GameState.EXPLORING);
      }, 1000);
    } else {
      setBattleText("Can't use that yet!");
      setTimeout(() => setBattleText(`What will ${battleData.player.name} do?`), 1000);
    }
  };

  return (
    <div className={`game-container ${shake ? 'shake-screen' : ''}`}>
      <div className="scanlines" />

      {gameState === GameState.INTRO && (
        <div className="intro-overlay" onClick={handleStartIntro}>
          <div style={{ fontSize: '32px', color: '#fff', animation: 'blink 1.2s infinite' }}>
            CLICK TO INITIALIZE DATA
          </div>
        </div>
      )}

      {gameState === GameState.LOADING && (
        <div className="gameboy-boot">
          <div className="nintendo-logo">Nintendo</div>
          <div className="boot-flash" />
        </div>
      )}

      {gameState === GameState.START && (
        <div className="title-screen">
          <div className="title-logo-grand">
            POKE-PIXEL<br />
            <span style={{ fontSize: '36px', color: '#cc0000', letterSpacing: '8px' }}>RED QUEST</span>
          </div>
          <div style={{ marginTop: '80px', fontSize: '18px', color: '#fff', animation: 'blink 1.5s infinite', cursor: 'pointer', padding: '10px 40px', border: '5px double #fff' }} onClick={handleStartGame}>
            PRESS START
          </div>
        </div>
      )}

      {gameState === GameState.CINEMATIC && (
        <div className="cinematic-journey">
          <div className="journey-vignette" />
          <div className="journey-map-hint" />
          <div className="journey-text">
            THE JOURNEY BEGINS...<br />
            <span style={{ fontSize: '16px', letterSpacing: '4px', opacity: 0.7 }}>A RED ADVENTURE AWAITS</span>
          </div>
        </div>
      )}

      {gameState === GameState.EXPLORING && (
        <div style={{ position: 'relative', width: WORLD_WIDTH * TILE_SIZE, height: WORLD_HEIGHT * TILE_SIZE }}>
          {worldMap.map((row, y) => row.map((type, x) => (
            <div key={`${x}-${y}`} className={`tile ${type === 0 ? 'grass' : ''}`} style={{ left: x * TILE_SIZE, top: y * TILE_SIZE }} />
          )))}
          <div className="player" style={{ left: playerPos.x * TILE_SIZE, top: playerPos.y * TILE_SIZE }}>
            <div className="player-sprite" />
          </div>
        </div>
      )}

      {gameState === GameState.BATTLE && (
        !battleData ? (
          <div className="battle-screen" style={{ color: 'red', fontSize: '24px', zIndex: 9999 }}>
            ERROR: Battle Data Missing!
          </div>
        ) : (
          <div className="battle-screen">
            {/* Enemy HUD - Top Left */}
            {battlePhase === 'BATTLE' && (
              <div className="enemy-hud-container">
                <div className="status-hud">
                  <div className="status-name" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{battleData.enemy.name.replace('Wild ', '')}</span>
                    <span>:L{battleData.enemy.level}</span>
                  </div>
                  <div className="status-bar-container">
                    <div className="hp-container">
                      <div className="hp-label">HP:</div>
                      <div className="hp-bar"><div className="hp-fill" style={{ width: `${(battleData.enemy.hp / battleData.enemy.maxHp) * 100}%` }} /></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="enemy-area">
              <div className="sprite-container">
                {battleData.enemy.id === 'mahora' && battlePhase === 'BATTLE' && (
                  <div className="wheel-container">
                    <div className="wheel">{[...Array(8)].map((_, i) => <div key={i} className="wheel-handle" style={{ transform: `rotate(${i * 45}deg)` }} />)}</div>
                  </div>
                )}

                {/* Dynamic Effect Overlays */}
                {activeEffect?.target === 'ENEMY' && (
                  <>
                    {activeEffect.type === 'THUNDERBOLT' && <div className="fx-thunderbolt-hit" />}
                    {activeEffect.type === 'IRON_TAIL' && <div className="fx-iron-tail-hit" />}
                    {activeEffect.type === 'QUICK_ATTACK' && <div className="fx-quick-attack-hit" />}
                    {activeEffect.type === 'VOLT_TACKLE' && <div className="fx-volt-tackle-hit" />}
                    {activeEffect.type === 'TACKLE' && <div className="fx-tackle-hit" />}
                    {activeEffect.type === 'SWIFT' && <div className="fx-swift-hit" />}
                    {activeEffect.type === 'SAND_ATTACK' && <div className="fx-sand-attack-hit" />}
                    {activeEffect.type === 'WORLD_SLASH' && <div className="fx-world-slash-hit" />}
                    {activeEffect.type === 'TACKLE_EEVEE' && <div className="fx-tackle-eevee" />}
                    {activeEffect.type === 'SWIFT_EEVEE' && <div className="fx-swift-eevee" />}
                    {activeEffect.type === 'SAND_EEVEE' && <div className="fx-sand-eevee" />}
                  </>
                )}

                {/* Capture FX */}
                {capturePhase === 'THROW' && <div className="pokeball-projectile anim-throw-ball" />}
                {capturePhase === 'SHAKE' && <div className="pokeball-projectile anim-ball-shake" />}
                {capturePhase === 'CAUGHT' && <div className="pokeball-projectile anim-capture-success" style={{ bottom: '250px', left: '450px' }} />}
                {capturePhase === 'BROKE' && <div className="pokeball-projectile anim-ball-break" style={{ bottom: '250px', left: '450px' }} />}

                {battlePhase === 'TRAINER_INTRO' && battleData.trainer ? (
                  <img src={battleData.trainer.sprite} className="pokemon-sprite sprite-slide-enemy" style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', position: 'relative', zIndex: 2 }} />
                ) : battlePhase === 'ENEMY_SEND_OUT' ? (
                  /* Phase 2: Trainer Slides Out + Pokemon Pops In */
                  <>
                    <img
                      src={battleData.trainer!.sprite}
                      className="pokemon-sprite sprite-slide-out-right"
                      style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2 }}
                    />
                    <img
                      id="enemy-sprite"
                      src={battleData.enemy.frontSprite}
                      className={`pokemon-sprite sprite-pop-in ${activeEffect?.target === 'ENEMY' ? 'fx-hit-flash' : ''}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2 }}
                    />
                  </>
                ) : (battlePhase === 'PLAYER_INTRO' || battlePhase === 'PLAYER_SEND_OUT' || battlePhase === 'BATTLE') ? (
                  /* Phase 3+: Show Pokemon Only (Trainer is gone) */
                  /* Hide Pokemon if caught or during shake? No, Ball goes over. */
                  <img
                    id="enemy-sprite"
                    src={battleData.enemy.frontSprite}
                    className={`pokemon-sprite ${lastMoveFx === 'fx-quick-attack-enemy' ? 'fx-quick-attack-enemy' : ''} ${enemyAction ? enemyAction : ''} ${capturePhase === 'SHAKE' || capturePhase === 'CAUGHT' ? 'caught-fade' : ''}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2, opacity: capturePhase === 'SHAKE' || capturePhase === 'CAUGHT' ? 0 : 1, transition: 'opacity 0.2s' }}
                  />
                ) : (
                  /* Fallback */
                  <img
                    src={battleData.enemy.frontSprite}
                    className="pokemon-sprite sprite-slide-enemy"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2 }}
                  />
                )}
              </div>
            </div>

            <div className="player-area">
              <div className="sprite-container">
                {activeEffect?.target === 'PLAYER' && (
                  <>
                    {activeEffect.type === 'THUNDERBOLT' && <div className="fx-thunderbolt-hit" />}
                    {activeEffect.type === 'IRON_TAIL' && <div className="fx-iron-tail-hit" />}
                    {activeEffect.type === 'QUICK_ATTACK' && <div className="fx-quick-attack-hit" />}
                    {activeEffect.type === 'VOLT_TACKLE' && <div className="fx-volt-tackle-hit" />}
                    {activeEffect.type === 'TACKLE' && <div className="fx-tackle-hit" />}
                    {activeEffect.type === 'SWIFT' && <div className="fx-swift-hit" />}
                    {activeEffect.type === 'SAND_ATTACK' && <div className="fx-sand-attack-hit" />}
                    {activeEffect.type === 'WORLD_SLASH' && <div className="fx-world-slash-hit" />}
                    {activeEffect.type === 'HEAL' && <div className="fx-heal" />}
                    {activeEffect.type === 'STAT_UP' && <div className="fx-stat-up" />}

                    {/* Eevee Specifics */}
                    {activeEffect.type === 'TACKLE_EEVEE' && <div className="fx-tackle-eevee" />}
                    {activeEffect.type === 'SWIFT_EEVEE' && <div className="fx-swift-eevee" />}
                    {activeEffect.type === 'SAND_EEVEE' && <div className="fx-sand-eevee" />}
                  </>
                )}

                {battlePhase === 'TRAINER_INTRO' || battlePhase === 'ENEMY_SEND_OUT' || battlePhase === 'PLAYER_INTRO' ? (
                  /* Phase 1 & 2 & 3: Show Player Trainer Slide In / Stay */
                  <img src={SPRITES.TRAINER_BACK} className="pokemon-sprite sprite-slide-player" style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', position: 'relative', zIndex: 2 }} />
                ) : battlePhase === 'PLAYER_SEND_OUT' ? (
                  /* Phase 4: Player Sends Out - Trainer Slides Out Left + Pokemon Pop In */
                  <>
                    <img
                      src={SPRITES.TRAINER_BACK}
                      className="pokemon-sprite sprite-slide-out-left"
                      style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2 }}
                    />
                    <img
                      src={battleData.player.backSprite}
                      className="pokemon-sprite sprite-pop-in"
                      style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2 }}
                    />
                  </>
                ) : (battlePhase === 'BATTLE') ? (
                  /* Phase 5: Battle */
                  <img
                    src={battleData.player.backSprite}
                    className={`pokemon-sprite ${lastMoveFx === 'fx-quick-attack-player' ? 'fx-quick-attack-player' : ''} ${playerAction ? playerAction : ''}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', imageRendering: 'pixelated', zIndex: 2 }}
                  />
                ) : null}
              </div>
            </div>

            {/* Player HUD - Bottom Right above menu */}
            {battlePhase === 'BATTLE' && (
              <div className="player-hud-container">
                <div className="status-hud">
                  <div className="status-name" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{battleData.player.name}</span>
                    <span>:L{battleData.player.level}</span>
                  </div>
                  <div className="status-bar-container">
                    <div className="hp-container">
                      <div className="hp-label">HP:</div>
                      <div className="hp-bar"><div className="hp-fill" style={{ width: `${(battleData.player.hp / battleData.player.maxHp) * 100}%` }} /></div>
                    </div>
                    <div style={{ fontSize: '14px', textAlign: 'right', marginTop: '4px', fontWeight: 'bold' }}>{battleData.player.hp}/{battleData.player.maxHp}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="battle-menu">
              <div className="inner-border">
                <div className="battle-text">{battleText}</div>
                {battlePhase === 'BATTLE' && <div className="command-grid">
                  {menuState === 'MAIN' ? (
                    <>
                      <button className={`menu-button ${selectedAction === 0 ? 'selected' : ''}`}>FIGHT</button>
                      <button className={`menu-button ${selectedAction === 1 ? 'selected' : ''}`}>BAG</button>
                      <button className={`menu-button ${selectedAction === 2 ? 'selected' : ''}`}>POKE</button>
                      <button className={`menu-button ${selectedAction === 3 ? 'selected' : ''}`}>RUN</button>
                    </>
                  ) : menuState === 'FIGHT' ? (
                    <>
                      {battleData.player.moves.map((move, i) => (
                        <button key={i} className={`menu-button ${selectedAction === i ? 'selected' : ''}`}>{move.name}</button>
                      ))}
                    </>
                  ) : (
                    <div className="bag-list">
                      <div className={`bag-item ${selectedAction === 0 ? 'selected' : ''}`}>
                        <span>Potion</span>
                        <span>x{inventory.potion}</span>
                      </div>
                      <div className={`bag-item ${selectedAction === 1 ? 'selected' : ''}`}>
                        <span>Pokeball</span>
                        <span>x{inventory.pokeball}</span>
                      </div>
                      <div className={`bag-item ${selectedAction === 2 ? 'selected' : ''}`}>
                        <span>Full Heal</span>
                        <span>x{inventory.fullHeal}</span>
                      </div>
                      <div className={`bag-item ${selectedAction === 3 ? 'selected' : ''}`}>
                        <span>X Attack</span>
                        <span>x{inventory.xAttack}</span>
                      </div>
                      <div className={`bag-item ${selectedAction === 4 ? 'selected' : ''}`}>
                        <span>CANCEL</span>
                      </div>
                    </div>
                  )}
                </div>
                }
              </div>
            </div>
          </div>
        )
      )}

      {
        gameState === GameState.VICTORY && victoryItems && (
          <div className="victory-screen">
            <div className="victory-box">
              <h1 className="victory-title">VICTORY!</h1>
              <div className="victory-stat">
                <span>EXP Gained:</span>
                <span>{victoryItems.xp}</span>
              </div>
              <div className="victory-stat">
                <span>Item Found:</span>
                <span>{victoryItems.item}</span>
              </div>
              <div className="victory-actions">
                <button className="victory-btn" onClick={handleVictoryExit}>KEEP</button>
                <button className="victory-btn discard" onClick={handleVictoryExit}>DISCARD</button>
              </div>
            </div>
          </div>
        )
      }

      {lastMoveFx && <div className={`fx-overlay ${lastMoveFx}`} />}
      {isIrisActive && <div className={`iris-transition ${isIrisActive ? 'iris-active' : ''}`} />}
      <div style={{ position: 'absolute', bottom: 10, right: 10, fontSize: '8px', color: '#888' }}>Move: WASD | Enter: Select | T: Trainer</div>
    </div >
  )
}

export default App
