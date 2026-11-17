import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Layers, 
  SlidersHorizontal,
  CheckCircle2,
  Zap
} from 'lucide-react';
import type { ProgressState, SavedResult } from '../types/big5';
import { DOMAINS, TEST_PRESETS } from '../data/big5Data';
import { MBTIComparisonSection } from './MBTIComparisonSection';

interface IntroViewProps {
  progress: ProgressState | null;
  savedResults: SavedResult[];
  selectedCount: number;
  onSelectCount: (count: number) => void;
  onStartTest: (continueProgress: boolean) => void;
  onViewSample: () => void;
  onViewHistory: () => void;
}

export function IntroView({
  progress,
  savedResults,
  selectedCount,
  onSelectCount,
  onStartTest,
  onViewSample,
  onViewHistory
}: IntroViewProps) {
  const answeredCount = progress ? progress.answers.filter((a) => a !== null).length : 0;
  const progressTarget = progress?.totalQuestions || 300;
  const progressPct = Math.round((answeredCount / progressTarget) * 100);

  // Facet items per domain
  const facetItems = Math.max(1, Math.round(selectedCount / 30));
  const estimatedMinutes = Math.round(selectedCount * 0.08); // roughly 5 seconds per question

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs font-bold mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        <span>글로벌 심리학계 공인 표준 (IPIP-NEO)</span>
      </div>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight sm:leading-tight mb-4 text-center">
        MBTI를 넘어, <br className="sm:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600">
          진짜 과학적인 나의 성격
        </span>
        을 만나보세요
      </h1>

      <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 text-center">
        사람의 성격은 16개 유형에 갇히지 않습니다. 전 세계 성격심리학 연구의 표준인{' '}
        <strong className="text-slate-800">5대 핵심 성격 요인(Big-5)과 30개 세부 척도(Facet)</strong>로 
        당신의 고유한 심리적 스펙트럼을 정밀하게 진단합니다.
      </p>

      {/* Question Count Selector Card (New Feature!) */}
      <div className="w-full bg-white rounded-2xl border-2 border-indigo-100 p-6 sm:p-7 shadow-sm mb-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">검사 문항 수 선택</h3>
              <p className="text-xs text-slate-500">
                시간과 목적에 맞게 최소 30문항부터 최대 300문항까지 자유롭게 선택하세요.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200/60 self-start sm:self-auto">
            <span className="text-xs text-slate-600">선택된 문항:</span>
            <strong className="text-sm font-black text-indigo-700">{selectedCount}문항</strong>
            <span className="text-[11px] text-slate-400 font-medium">(약 {estimatedMinutes}분 소요)</span>
          </div>
        </div>

        {/* 4 Presets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {TEST_PRESETS.map((preset) => {
            const isSelected = selectedCount === preset.count;
            return (
              <button
                key={preset.count}
                type="button"
                onClick={() => onSelectCount(preset.count)}
                className={`p-4 rounded-xl text-left border-2 transition-all relative flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/60 shadow-sm shadow-indigo-100 ring-2 ring-indigo-500/10'
                    : 'border-slate-200/80 bg-white hover:border-indigo-200 hover:bg-slate-50/50'
                }`}
              >
                {preset.isPopular && (
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold shadow-2xs">
                    가장 추천
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-indigo-700 bg-white border border-indigo-100 px-2 py-0.5 rounded">
                      {preset.badge}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    )}
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    {preset.count}문항
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                    {preset.desc}
                  </p>
                </div>

                <div className="text-[11px] font-semibold text-slate-600 pt-2 border-t border-slate-100 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{preset.time}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Custom Range Slider (30 to 300, step=30) */}
        <div className="pt-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>미세 조절 슬라이더 (30문항 단위):</span>
            </span>
            <span className="text-indigo-700 font-bold">
              30개 하위 척도(Facet)당 각 {facetItems}문항씩 균등 배정
            </span>
          </div>

          <input
            type="range"
            min={30}
            max={300}
            step={30}
            value={selectedCount}
            onChange={(e) => onSelectCount(parseInt(e.target.value, 10))}
            className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
          />

          <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
            <span>최소 30문항 (초고속)</span>
            <span>60</span>
            <span>90</span>
            <span>120 (표준)</span>
            <span>150</span>
            <span>180</span>
            <span>210</span>
            <span>240</span>
            <span>270</span>
            <span>최대 300문항 (정밀)</span>
          </div>
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-6">
        {progress && answeredCount > 0 ? (
          <>
            <button
              onClick={() => onStartTest(true)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>이어서 계속하기 ({answeredCount}/{progressTarget} 완료, {progressPct}%)</span>
            </button>
            <button
              onClick={() => onStartTest(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-slate-400" />
              <span>새로 시작 ({selectedCount}문항)</span>
            </button>
          </>
        ) : (
          <button
            onClick={() => onStartTest(false)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>검사 시작하기 ({selectedCount}문항)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={onViewSample}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-xs transition-colors cursor-pointer"
        >
          <BarChart3 className="w-4 h-4 text-slate-400" />
          <span>샘플 결과 보기</span>
        </button>

        {savedResults.length > 0 && (
          <button
            onClick={onViewHistory}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
          >
            <span>이전 결과 ({savedResults.length}건)</span>
          </button>
        )}
      </div>

      {/* Quick Specs Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 mb-14">
        <span className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-2xs">
          <Layers className="w-3.5 h-3.5 text-indigo-600" />
          선택한 {selectedCount}문항 맞춤 진단
        </span>
        <span className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-indigo-600" />
          약 {estimatedMinutes}분 소요
        </span>
        <span className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
          30개 모든 Facet 100% 반영
        </span>
        <span className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 text-emerald-800 px-3 py-1.5 rounded-full shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          100% 브라우저 연산 (개인정보 보호)
        </span>
      </div>

      {/* 5 Domains Grid Showcase */}
      <div className="w-full text-left mb-16">
        <div className="text-center mb-6">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
            Core Dimensions
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            진단하는 5가지 핵심 성격 영역
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {(Object.keys(DOMAINS) as Array<keyof typeof DOMAINS>).map((code) => {
            const domain = DOMAINS[code];
            return (
              <div
                key={code}
                className="p-5 rounded-2xl border border-slate-200/80 bg-white hover:border-indigo-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className="w-7 h-7 rounded-lg text-white flex items-center justify-center text-xs font-black shadow-2xs"
                    style={{ backgroundColor: domain.color }}
                  >
                    {domain.code}
                  </span>
                  <span className="font-bold text-sm text-slate-900">{domain.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{domain.desc}</p>
              </div>
            );
          })}

          <div className="p-5 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/50 flex flex-col justify-center items-center text-center">
            <span className="text-xs font-bold text-indigo-700 mb-1">30개 하위 척도(Facet) 정밀 분석</span>
            <span className="text-[11px] text-slate-500 leading-tight">선택한 문항 수에 맞춰 세부 지표 제공</span>
          </div>
        </div>
      </div>

      {/* MBTI vs BIG-5 Comprehensive Comparison Section */}
      <MBTIComparisonSection />

      {/* Academic Citation Footer */}
      <div className="w-full mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400 space-y-1">
        <p className="font-medium text-slate-500">IPIP-NEO 성격 검사 (공공 도메인 학술 척도)</p>
        <p>• 원작: Lewis R. Goldberg (Oregon Research Institute, ipip.ori.org)</p>
        <p>• 한국어 표준 번역: 김종범, 김지용, 최묘경</p>
        <p>• 본 웹도구는 개인정보 수집 없이 브라우저 로컬 저장소에서만 실행됩니다.</p>
      </div>
    </div>
  );
}
