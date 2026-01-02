
export type GameState = 'START' | 'CHARACTER_SELECT' | 'STORY' | 'PLAYING' | 'GAMEOVER' | 'VICTORY' | 'LEVEL_CLEAR';

export type CharacterType = 'RIN' | 'REIKA' | 'KENTARO';

export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  vx: number;
  vy: number;
}

export enum EntityType {
  PLAYER,
  SPIRIT_SHARD,
  SHADOW_SOUL,
  SOUL_LORD,
  BOSS_MASTER,
  PROJECTILE_PLAYER,
  PROJECTILE_ENEMY,
  OBSTACLE_LASER,
  OBSTACLE_SOUL_TRAP,
  ITEM_HEALTH,
  ITEM_ENERGY,
  PARTICLE,
  SUMMON_MAHERA
}

export interface Entity extends Position, Velocity {
  id: string;
  type: EntityType;
  width: number;
  height: number;
  hp: number;
  maxHp: number;
  color: string;
  active: boolean;
  facing: number; 
  state?: string;
  cooldowns?: Record<string, number>;
  scoreValue?: number;
  timer?: number;
  specialEffect?: number;
}

export interface Particle extends Position, Velocity {
  id: string;
  color: string;
  life: number;
  maxLife: number;
  size: number;
}

export interface LevelConfig {
  id: number;
  title: string;
  description: string;
  targetScore: number;
  enemySpawnRate: number;
  hasBoss: boolean;
  theme: string;
}
