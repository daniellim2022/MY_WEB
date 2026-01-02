// 게임 상태 정의 (Game States)
export enum GameState {
  MENU = 'MENU',         // Action selection (Fight, Act, Item, Mercy)
  PLAYER_ATTACK_AIM = 'PLAYER_ATTACK_AIM', // Moving bar mini-game
  PLAYER_ATTACK_RESULT = 'PLAYER_ATTACK_RESULT', // Damage display
  DIALOGUE = 'DIALOGUE', // Asgore talking
  ATTACK = 'ATTACK',     // Bullet hell phase
  GAME_OVER = 'GAME_OVER',
  MERCY_ANIMATION = 'MERCY_ANIMATION', // Special state for destroying the button
  INTRO = 'INTRO',       // Click to start
  TRANSFORM = 'TRANSFORM', // Animation logic
  CUTSCENE = 'CUTSCENE'
}

// 총알 타입 정의 (Bullet Types)
export enum BulletType {
  FIREBALL = 'FIREBALL',
  TRIDENT_ORANGE = 'TRIDENT_ORANGE', // Move to survive
  TRIDENT_BLUE = 'TRIDENT_BLUE',     // Stop to survive
  RAINDROP = 'RAINDROP'
}

// 엔티티 인터페이스 (Interfaces)
export interface Entity {
  x: number;
  y: number;
  width: number;
  height: number;
  vx: number; // Velocity X
  vy: number; // Velocity Y
  color: string;
}

export interface Bullet extends Entity {
  type: BulletType;
  id: number;
  angle?: number; // For rotating fireballs
  warning?: boolean; // For Trident flash
  timer?: number; // Internal timer for logic
}

export interface Player extends Entity {
  invulnerable: number; // Invincibility frames
  isMoving: boolean;
}

export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 480;
export const BOX_BOUNDS = {
  x: 35,        // (640 - 570) / 2
  y: 250,       // Below Asgore
  width: 570,   // Wide box
  height: 140   // Shorter height
};
