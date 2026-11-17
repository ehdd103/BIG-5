import { useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { 
  Printer, 
  RotateCcw, 
  Share2, 
  Layers, 
  Sparkles, 
  Compass,
  Check
} from 'lucide-react';
import type { DomainCode, FacetCode, SavedResult } from '../types/big5';
import { DOMAINS, FACETS } from '../data/big5Data';
import { getDomainInterpretation, getGradeBadgeClass, getGradeLabel } from '../utils/scoring';
import { FacetModal } from './FacetModal';
import { PrintReport } from './PrintReport';

interface ResultViewProps {
  result: SavedResult;
  onRetest: () => void;
  onViewHistory: () => void;
}

export function ResultView({ result, onRetest, onViewHistory }: ResultViewProps) {
  const [selectedFacet, setSelectedFacet] = useState<FacetCode | null>(null);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Prepare radar chart data
  const radarData = (Object.keys(DOMAINS) as DomainCode[]).map((code) => ({
    domain: DOMAINS[code].short,
    score: result.domainPct[code] || 0,
    fullMark: 100
  }));

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  // Approximate MBTI mapping based on continuous scores
  const getApproximateMBTI = () => {
    const e = result.domainPct.E >= 50 ? 'E' : 'I';
    const o = result.domainPct.O >= 50 ? 'N' : 'S'; // Openness aligns with Intuition
    const a = result.domainPct.A >= 50 ? 'F' : 'T'; // Agreeableness aligns with Feeling
    const c = result.domainPct.C >= 50 ? 'J' : 'P'; // Conscientiousness aligns with Judging
    const n = result.domainPct.N <= 50 ? '-A (자기확신)' : '-T (신중민감)'; // Low neuroticism = Assertive, High = Turbulent
    return `${e}${o}${a}${c} ${n}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-indigo-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IPIP-NEO {result.totalQuestions || 300}문항 정밀 진단 완료</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            나의 BIG-5 종합 성격 프로필
          </h1>

          <p className="text-indigo-200 text-sm max-w-xl mx-auto leading-relaxed">
            300문항 응답을 바탕으로 분석된 5대 핵심 도메인과 30개 세부 성향 지표입니다.
          </p>

          <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-700/50 px-4 py-2 rounded-xl text-xs">
            <span className="text-indigo-300 font-medium">참고용 유사 MBTI 경향:</span>
            <strong className="text-white text-sm font-bold tracking-wider">{getApproximateMBTI()}</strong>
          </div>
        </div>
      </div>

      {/* Main Analysis Container */}
      <main className="max-w-4xl mx-auto px-4 -mt-6 space-y-8">
        {/* Action Toolbar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            검사일시: {new Date(result.date).toLocaleString('ko-KR')}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPrintModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm shadow-indigo-100 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>A4 PDF 보고서 인쇄</span>
            </button>

            <button
              onClick={handleShareLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              {copiedNotification ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">링크 복사됨</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>공유</span>
                </>
              )}
            </button>

            <button
              onClick={onViewHistory}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              기록 목록
            </button>
          </div>
        </div>

        {/* Charts Section: Radar Chart + 5 Domains Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Radar Chart */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-2">
              <h3 className="font-bold text-slate-900 text-sm">5대 요인 균형 다이어그램</h3>
              <span className="text-[11px] text-slate-400">오각형 방사형 차트</span>
            </div>

            <div className="w-full h-64 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis 
                    dataKey="domain" 
                    tick={{ fill: '#334155', fontSize: 12, fontWeight: 700 }} 
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }} 
                  />
                  <Tooltip 
                    formatter={(val) => [`${val}점`, '점수']}
                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: 8, fontSize: 12, border: '1px solid #cbd5e1' }}
                  />
                  <Radar
                    name="나의 점수"
                    dataKey="score"
                    stroke="#6366f1"
                    fill="#6366f1"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 5 Domains Overview List */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <h3 className="font-bold text-slate-900 text-sm mb-4">도메인별 백분율 점수 및 등급</h3>

            <div className="space-y-4 flex-1 flex flex-col justify-around">
              {(Object.keys(DOMAINS) as DomainCode[]).map((code) => {
                const domain = DOMAINS[code];
                const score = result.domainPct[code] || 0;
                const grade = getGradeLabel(score);
                const badgeStyle = getGradeBadgeClass(grade);

                return (
                  <div key={code} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-2.5 h-2.5 rounded-full" 
                          style={{ backgroundColor: domain.color }} 
                        />
                        <span className="font-bold text-slate-800">{domain.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                          {grade}
                        </span>
                        <span className="font-black text-indigo-700 min-w-10 text-right">{score}%</span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${score}%`,
                          backgroundColor: domain.color
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* In-depth Domain Interpretation Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              <span>5대 영역 심층 해석 & 30개 하위 척도(Facet)</span>
            </h2>
            <span className="text-xs text-slate-500">
              하위 척도 카드를 클릭하면 문항별 상세 응답을 볼 수 있습니다.
            </span>
          </div>

          {(Object.keys(DOMAINS) as DomainCode[]).map((code) => {
            const domain = DOMAINS[code];
            const score = result.domainPct[code] || 0;
            const grade = getGradeLabel(score);
            const badgeStyle = getGradeBadgeClass(grade);
            const interpretation = getDomainInterpretation(code, score);
            const domainFacets = Object.entries(FACETS).filter(([, f]) => f.domain === code);

            return (
              <div 
                key={code} 
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden"
              >
                {/* Domain Header Card */}
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span 
                        className="w-8 h-8 rounded-xl text-white flex items-center justify-center font-bold text-sm shadow-xs"
                        style={{ backgroundColor: domain.color }}
                      >
                        {domain.code}
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">
                          {domain.name}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {domain.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                        {grade} ({score}점)
                      </span>
                    </div>
                  </div>

                  {/* Interpretation text */}
                  <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/60 space-y-2">
                    <h4 className="font-bold text-slate-900 text-sm text-indigo-900">
                      💡 {interpretation.title}
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                      {interpretation.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 6 Facets Breakdown */}
                <div className="p-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {domain.short} 하위 6개 세부 척도 (클릭 시 세부 문항 열람)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {domainFacets.map(([facetKey, fInfo]) => {
                      const fScore = result.facetPct[facetKey] || 0;
                      const fGrade = getGradeLabel(fScore);
                      const fBadge = getGradeBadgeClass(fGrade);

                      return (
                        <button
                          key={facetKey}
                          onClick={() => setSelectedFacet(facetKey as FacetCode)}
                          className="p-3.5 rounded-xl border border-slate-200/70 hover:border-indigo-400 hover:shadow-xs transition-all text-left bg-white group cursor-pointer"
                        >
                          <div className="flex items-center justify-between text-xs mb-1.5">
                            <span className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                              {fInfo.name}
                            </span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${fBadge.bg} ${fBadge.text} ${fBadge.border}`}>
                              {fScore}점
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-500 mb-2 line-clamp-1">
                            {fInfo.desc}
                          </p>

                          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full group-hover:opacity-90 transition-all"
                              style={{ 
                                width: `${fScore}%`,
                                backgroundColor: domain.color
                              }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MBTI vs BIG-5 Comparison Highlight */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                MBTI로는 보이지 않던 나의 진짜 성격
              </h3>
              <p className="text-xs text-slate-600">
                BIG-5 결과가 MBTI보다 훨씬 정확한 이유
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
            <p>
              • 나의 점수는 단순한 4글자가 아니라, 각 영역에서 <strong>내가 인구의 상위 몇 %에 위치하는지</strong>를 보여줍니다.
            </p>
            <p>
              • 특히 <strong>신경증(N, 정서 안정성)</strong> 지표는 MBTI에는 없는 필수 요소로, 번아웃 위험도와 스트레스 대처 방식을 과학적으로 이해할 수 있는 중요한 열쇠입니다.
            </p>
            <p>
              • 30개의 하위 척도를 통해 '사교적인 내향인'이나 '꼼꼼하지만 즉흥적인 개방형 인재'처럼 인간 심리의 입체성을 온전히 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <button
            onClick={onRetest}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>새로운 검사 시작하기</span>
          </button>

          <button
            onClick={() => setShowPrintModal(true)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-200 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>공식 A4 PDF 보고서 저장하기</span>
          </button>
        </div>
      </main>

      {/* Facet Detail Modal */}
      {selectedFacet && (
        <FacetModal
          facetCode={selectedFacet}
          score={result.facetPct[selectedFacet] || 0}
          answers={result.answers}
          totalQuestions={result.totalQuestions || 300}
          onClose={() => setSelectedFacet(null)}
        />
      )}

      {/* Print PDF Modal */}
      {showPrintModal && (
        <PrintReport
          result={result}
          onClose={() => setShowPrintModal(false)}
        />
      )}
    </div>
  );
}
