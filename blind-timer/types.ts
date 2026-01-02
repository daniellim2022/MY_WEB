export enum GameState {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  RESULT = 'RESULT',
}

export interface ScoreResult {
  time: number;
  diff: number;
  rank: string; // 'PERFECT', 'GREAT', 'GOOD', 'BAD'
  color: string;
}