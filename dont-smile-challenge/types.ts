export enum GameState {
  LOADING = 'LOADING',
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER'
}

export interface SmileData {
  score: number; // 0.0 to 1.0 (1.0 is full smile)
  isSmiling: boolean;
}