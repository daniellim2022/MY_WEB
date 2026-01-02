export interface CaseData {
  plaintiff: string; // 원고 (이름 A)
  defendant: string; // 피고 (이름 B)
  argument: string;  // 분쟁 내용
}

export interface Verdict {
  winner: string; // 승소한 사람의 이름
  loser: string;  // 패소한 사람의 이름
  title: string;  // 판결문 제목 (예: 탕수육 소스 부먹 사건)
  reasoning: string; // 판결 이유 (법적 어조)
  funQuote: string; // 판사님의 명언 (한 줄 요약)
}

export enum AppState {
  INPUT = 'INPUT',
  DELIBERATING = 'DELIBERATING',
  VERDICT = 'VERDICT',
}
