export enum Category {
  Technology = '기술',
  News = '뉴스',
  Social = '소셜',
  Entertainment = '엔터테인먼트',
  Education = '교육',
  Shopping = '쇼핑',
  Work = '업무',
  Game = '게임',
  Utility = '유틸리티',
  Other = '기타'
}

export interface WebLink {
  id: string;
  title: string;
  url: string;
  description: string;
  category: Category;
  tags: string[];
  createdAt: number;
  isSystem?: boolean;
}

export interface AIAnalysisResult {
  title?: string;
  description: string;
  category: Category;
  tags: string[];
}
