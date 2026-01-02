export interface Message {
  role: 'user' | 'model' | 'system';
  text: string;
  isTyping?: boolean;
}

export interface Evidence {
  id: string;
  name: string;
  description: string;
  icon: string;
  revealed: boolean;
}

export enum GameState {
  INTRO,
  PLAYING,
  GAME_OVER_WON,
  GAME_OVER_LOST
}