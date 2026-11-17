import type { DomainCode, GradeLevel, InterpretationLevel, ProgressState, SavedResult, ScoreResult } from '../types/big5';
import { FACETS, QUESTIONS, DOMAIN_INTERPRETATIONS } from '../data/big5Data';

const STORAGE_KEY_PROGRESS = 'big5_current_progress_v2';
const STORAGE_KEY_SAVED_RESULTS = 'big5_saved_results_v2';

/**
 * 응답 배열(1~5, 미응답은 null)과 전체 문항수(30~300)를 받아
 * Facet 원점수, Facet 백분위 점수(0~100), 5대 도메인 평균 점수(0~100)를 산출합니다.
 */
export function calculateScores(answers: (number | null)[], totalQuestions: number = 300): ScoreResult {
  const activeQuestions = QUESTIONS.slice(0, totalQuestions);

  // 1. Facet별 문항 개수(k) 및 원점수 집계
  const facetRaw: Record<string, number> = {};
  const facetItemCount: Record<string, number> = {};

  Object.keys(FACETS).forEach((facetKey) => {
    facetRaw[facetKey] = 0;
    facetItemCount[facetKey] = 0;
  });

  activeQuestions.forEach((q) => {
    facetItemCount[q.facet] = (facetItemCount[q.facet] || 0) + 1;
    const rawVal = answers[q.id - 1];
    if (rawVal === null || rawVal === undefined) return;
    // 긍정 문항: 그대로 (1~5), 부정 문항: 역채점 6 - raw (1->5, 5->1)
    const scoredVal = q.positive ? rawVal : 6 - rawVal;
    facetRaw[q.facet] = (facetRaw[q.facet] || 0) + scoredVal;
  });

  // 2. Facet 백분율 점수 변환 (Min-Max Scaling)
  // 문항수가 k개일 때: 최소점수 = k*1, 최대점수 = k*5, 점수범위 = 4*k
  const facetPct: Record<string, number> = {};
  Object.keys(facetRaw).forEach((facetKey) => {
    const raw = facetRaw[facetKey];
    const k = facetItemCount[facetKey] || 1;
    const minVal = k * 1;
    const range = k * 4;
    facetPct[facetKey] = Math.round(((raw - minVal) / range) * 100);
  });

  // 3. 5대 핵심 도메인 점수 (각 도메인 소속 6개 Facet 백분율 점수의 산술 평균)
  const domainFacetMap: Record<DomainCode, string[]> = {
    N: [],
    E: [],
    O: [],
    A: [],
    C: []
  };

  Object.entries(FACETS).forEach(([facetCode, info]) => {
    domainFacetMap[info.domain].push(facetCode);
  });

  const domainPct: Record<DomainCode, number> = {
    N: 0,
    E: 0,
    O: 0,
    A: 0,
    C: 0
  };

  (Object.keys(domainFacetMap) as DomainCode[]).forEach((domain) => {
    const facetsInDomain = domainFacetMap[domain];
    const sum = facetsInDomain.reduce((acc, fCode) => acc + (facetPct[fCode] || 0), 0);
    domainPct[domain] = Math.round(sum / facetsInDomain.length);
  });

  return {
    facetRaw,
    facetPct,
    domainPct
  };
}

/**
 * 점수(0~100)를 5단계 심리학적 등급으로 변환
 */
export function getGradeLabel(score: number): GradeLevel {
  if (score >= 80) return '매우 높음';
  if (score >= 60) return '높음';
  if (score >= 40) return '보통';
  if (score >= 20) return '낮음';
  return '매우 낮음';
}

/**
 * 등급별 뱃지 스타일 컬러
 */
export function getGradeBadgeClass(grade: GradeLevel): { bg: string; text: string; border: string } {
  switch (grade) {
    case '매우 높음':
      return { bg: 'bg-indigo-100', text: 'text-indigo-800', border: 'border-indigo-200' };
    case '높음':
      return { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' };
    case '보통':
      return { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200' };
    case '낮음':
      return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200' };
    case '매우 낮음':
      return { bg: 'bg-rose-100', text: 'text-rose-800', border: 'border-rose-200' };
  }
}

/**
 * 도메인과 점수에 해당하는 상세 심리 해석 텍스트 반환
 */
export function getDomainInterpretation(domain: DomainCode, score: number): InterpretationLevel {
  const levels = DOMAIN_INTERPRETATIONS[domain];
  for (const level of levels) {
    if (score >= level.minScore) {
      return level;
    }
  }
  return levels[levels.length - 1];
}

/* ============================================================
 * LocalStorage 진행 상태 및 과거 검사 기록 관리 (100% 프라이빗)
 * ============================================================ */

export function saveProgress(answers: (number | null)[], page: number, totalQuestions: number): void {
  try {
    const state: ProgressState = {
      answers,
      page,
      totalQuestions,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
}

export function loadProgress(): ProgressState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (!raw) return null;
    return JSON.parse(raw) as ProgressState;
  } catch {
    return null;
  }
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
  } catch (err) {
    console.error('Failed to clear progress:', err);
  }
}

export function saveResult(
  answers: (number | null)[],
  scoreResult: ScoreResult,
  totalQuestions: number = 300,
  name?: string
): SavedResult {
  const result: SavedResult = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    name: name?.trim() || undefined,
    totalQuestions,
    answers: [...answers],
    domainPct: scoreResult.domainPct,
    facetPct: scoreResult.facetPct
  };

  try {
    const existing = loadSavedResults();
    existing.unshift(result);
    localStorage.setItem(STORAGE_KEY_SAVED_RESULTS, JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to save result to localStorage:', err);
  }

  return result;
}

export function loadSavedResults(): SavedResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SAVED_RESULTS);
    if (!raw) return [];
    return JSON.parse(raw) as SavedResult[];
  } catch {
    return [];
  }
}

export function deleteSavedResult(id: string): void {
  try {
    const existing = loadSavedResults();
    const filtered = existing.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY_SAVED_RESULTS, JSON.stringify(filtered));
  } catch (err) {
    console.error('Failed to delete saved result:', err);
  }
}
