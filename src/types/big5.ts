export type DomainCode = 'N' | 'E' | 'O' | 'A' | 'C';

export type FacetCode =
  | 'n1' | 'n2' | 'n3' | 'n4' | 'n5' | 'n6'
  | 'e1' | 'e2' | 'e3' | 'e4' | 'e5' | 'e6'
  | 'o1' | 'o2' | 'o3' | 'o4' | 'o5' | 'o6'
  | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6'
  | 'c1' | 'c2' | 'c3' | 'c4' | 'c5' | 'c6';

export interface DomainInfo {
  code: DomainCode;
  name: string;
  short: string;
  color: string;
  light: string;
  bgClass: string;
  textClass: string;
  desc: string;
}

export interface FacetInfo {
  name: string;
  domain: DomainCode;
  desc: string;
}

export interface QuestionItem {
  id: number;
  text: string;
  facet: string;
  positive: boolean;
}

export interface InterpretationLevel {
  minScore: number;
  title: string;
  paragraphs: string[];
}

export interface ScoreResult {
  facetRaw: Record<string, number>;
  facetPct: Record<string, number>;
  domainPct: Record<DomainCode, number>;
}

export interface SavedResult {
  id: string;
  date: string;
  name?: string;
  totalQuestions: number;
  answers: (number | null)[];
  domainPct: Record<DomainCode, number>;
  facetPct: Record<string, number>;
}

export interface ProgressState {
  totalQuestions: number;
  answers: (number | null)[];
  page: number;
  updatedAt: string;
}

export type GradeLevel = '매우 높음' | '높음' | '보통' | '낮음' | '매우 낮음';

export interface TestPreset {
  count: number;
  name: string;
  badge: string;
  time: string;
  desc: string;
  isPopular?: boolean;
}
