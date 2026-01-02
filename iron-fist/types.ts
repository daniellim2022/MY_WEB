export enum FighterState {
  IDLE = 'IDLE',
  WALK = 'WALK',
  WALK_FORWARD = 'WALK_FORWARD',
  WALK_BACK = 'WALK_BACK',
  DUCK = 'DUCK',
  BLOCK = 'BLOCK',
  BLOCK_LOW = 'BLOCK_LOW',
  DASH_FORWARD = 'DASH_FORWARD',
  DASH_BACK = 'DASH_BACK',
  SIDESTEP_LEFT = 'SIDESTEP_LEFT',
  SIDESTEP_RIGHT = 'SIDESTEP_RIGHT',
  // TEKKEN LIMB SYSTEM
  ATTACK_LP = 'ATTACK_LP', // Left Punch (1) - U
  ATTACK_RP = 'ATTACK_RP', // Right Punch (2) - I
  ATTACK_LK = 'ATTACK_LK', // Left Kick (3) - J
  ATTACK_RK = 'ATTACK_RK', // Right Kick (4) - K

  // DIRECTIONAL VARIANTS
  FORWARD_LP = 'FORWARD_LP',
  FORWARD_RP = 'FORWARD_RP',
  FORWARD_LK = 'FORWARD_LK',
  FORWARD_RK = 'FORWARD_RK',

  DOWN_LP = 'DOWN_LP',
  DOWN_RP = 'DOWN_RP',
  DOWN_LK = 'DOWN_LK',
  DOWN_RK = 'DOWN_RK',

  BACK_LP = 'BACK_LP',
  BACK_RP = 'BACK_RP',
  BACK_LK = 'BACK_LK',
  BACK_RK = 'BACK_RK',
  // GILGAMESH SKILLS
  GOB_STANCE = 'GOB_STANCE',
  GOB_FIRE = 'GOB_FIRE',
  GOB_FINISH = 'GOB_FINISH',

  // ARCHER SKILLS
  UBW_TRACE = 'UBW_TRACE',
  UBW_RUSH_1 = 'UBW_RUSH_1',
  UBW_RUSH_2 = 'UBW_RUSH_2',
  UBW_RUSH_3 = 'UBW_RUSH_3',
  UBW_THROW = 'UBW_THROW',

  // GENERIC
  ATTACK_SPECIAL = 'ATTACK_SPECIAL',
  ATTACK_SPECIAL_2 = 'ATTACK_SPECIAL_2',
  ATTACK_SPECIAL_3 = 'ATTACK_SPECIAL_3',
  ATTACK_THROW = 'ATTACK_THROW',
  THROWN = 'THROWN',
  HIT = 'HIT',
  STUNNED = 'STUNNED',
  WALL_SPLAT = 'WALL_SPLAT',
  GROUNDED = 'GROUNDED',
  WAKE_UP = 'WAKE_UP',
  TORNADO = 'TORNADO',
  RAGE_ART = 'RAGE_ART',
  HEAT_SMASH = 'HEAT_SMASH',
  GRABBED = 'GRABBED', // Pre-throw state (Techable)
  AIRBORNE = 'AIRBORNE', // Juggle state
  STANCE_HEAVEN = 'STANCE_HEAVEN', // Tactical Stance
  DEAD = 'DEAD',
  VICTORY = 'VICTORY'
}

export enum Direction {
  LEFT = -1,
  RIGHT = 1
}

export type CharacterType = 'GILGAMESH' | 'ARCHER';

export interface PlayerStats {
  health: number;
  maxHealth: number;
  wins: number;
}

export interface GameState {
  p1Health: number;
  p2Health: number;
  timeLeft: number;
  gameOver: boolean;
  winner: string | null;
  isIntro: boolean; // Intro Sequence
  comboP1: number;
  comboP2: number;
  notification: string | null; // Keep track of "FIGHT", "ROUND 1", etc.
  p1Wins: number;
  p2Wins: number;
  currentRound: number;
}

export interface FrameData {
  startup: number;   // Frames before hit active
  active: number;    // Frames where hit is active
  recovery: number;  // Frames after hit (vulnerable)
  damage: number;
  stun: number;      // Frames opponent is stunned
  knockback: number;
  blockStun: number; // Frames opponent is stunned on block
  hitLevel: 'high' | 'mid' | 'low';
  launch?: number;    // Vertical launch force
  cancelWindow?: [number, number]; // Buffer window [startFrame, endFrame]
  nextMoves?: Partial<Record<string, FighterState>>; // Combo links
  isScrew?: boolean; // Triggers Tornado state on airborne opponents
  isElectric?: boolean; // Visual blue sparks
  isArmor?: boolean; // Power Crush (Absorbs High/Mid)
  isCinematic?: boolean; // Triggers Camera Sequence
  chipDamage?: number; // Damage on block (Heat)
}

export const GAME_CONFIG = {
  MAX_HEALTH: 100,
  ROUND_TIME: 60,
  GRAVITY: 80.0,     // Heavier Fall
  GROUND_Y: 0,
  JUMP_FORCE: 22.0,  // Snappy Jump

  // Tekken Movement: Weighted, controllable
  MOVE_SPEED: 4.5,   // Standard fighting game walk
  DASH_SPEED: 18.0,  // Controlled burst
  ACCELERATION: 60.0, // Weighty acceleration
  DRAG: 40.0,        // Firm stop but not instant glitch

  HIT_STUN_FRAMES: 30, // Default stun
  ATTACK_COOLDOWN: 0   // Frame data handles this
};