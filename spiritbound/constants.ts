
import { LevelConfig, CharacterType } from './types';

export const CANVAS_WIDTH = 1200;
export const CANVAS_HEIGHT = 600;
export const GRAVITY = 0.55;
export const PLAYER_SPEED = 7.2;
export const JUMP_FORCE = -14;
export const GROUND_Y = 500;

export const SKILLS = {
  PIERCE: { id: '1', name: '영혼 찌르기', cd: 3000, color: '#ff00ff', energyCost: 0 },
  // Unique 2nd Skills
  RIN_FIRE: { id: '2', name: '극번: 「가(嘉)」', cd: 6000, color: '#ff4400', energyCost: 40 },
  REIKA_NUE: { id: '2', name: '식신: 「누에」', cd: 6000, color: '#00ccff', energyCost: 40 },
  KENTARO_VOLC: { id: '2', name: '화염: 「화어」', cd: 6000, color: '#ff6600', energyCost: 40 },

  DOMAIN: { id: '3', name: '영역전개: 복마멸계(伏魔滅界)', cd: 25000, color: '#ff0033', duration: 600, energyCost: 100 },
  SUMMON: { id: '4', name: '식신소환: 팔악검 이계신장 마허라', cd: 35000, color: '#d4af37', duration: 900, energyCost: 100 },
  GEGWAN: { id: '5', name: '영역전개: 개관철위산(蓋棺鉄囲山)', cd: 28000, color: '#ff6600', duration: 750, energyCost: 100 }
};

export const CHARACTERS: Record<CharacterType, { name: string, color: string, skills: string[], description: string }> = {
  RIN: {
    name: "린 (Rin)",
    color: "#00f7ff",
    skills: ['PIERCE', 'RIN_FIRE', 'DOMAIN'],
    description: "공포의 주술사. 영역전개 '복마멸계'를 통해 범위 내의 모든 생명체를 무차별적으로 난도질합니다."
  },
  REIKA: {
    name: "레이카 (Reika)",
    color: "#00ffaa",
    skills: ['PIERCE', 'REIKA_NUE', 'SUMMON'],
    description: "고대 식신 소환술의 계승자. 강력한 주령 '마허라'를 소환하여 전세를 역전시킵니다."
  },
  KENTARO: {
    name: "진무 켄타로 (Kentaro)",
    color: "#ff6600",
    skills: ['PIERCE', 'KENTARO_VOLC', 'GEGWAN'],
    description: "화염의 주령 술사. 영역전개 '개관철위산'으로 전장을 불타는 화산으로 바꾸어 적들을 녹여버립니다."
  }
};

export const LEVELS: LevelConfig[] = [
  {
    id: 1,
    title: "폐허가 된 거리",
    description: "영혼도시의 경계가 무너졌습니다. 흩어진 영혼의 파편들을 제령하고 도심으로 진입하세요.",
    targetScore: 2500,
    enemySpawnRate: 0.012,
    hasBoss: false,
    theme: "#120520"
  },
  {
    id: 2,
    title: "영혼 계곡",
    description: "그림자 영혼들이 실체화되기 시작했습니다. 중간 관리자 '영혼 군주'가 당신의 길을 막아섭니다.",
    targetScore: 5000,
    enemySpawnRate: 0.018,
    hasBoss: true,
    theme: "#051020"
  },
  {
    id: 3,
    title: "주령계의 문",
    description: "가족의 영혼이 가깝습니다. 차원의 문을 열고 주령대사를 제령하여 모든 것을 끝내십시오.",
    targetScore: 8500,
    enemySpawnRate: 0.025,
    hasBoss: true,
    theme: "#200505"
  }
];
