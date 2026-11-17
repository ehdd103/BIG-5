import { X, CheckCircle2 } from 'lucide-react';
import type { FacetCode } from '../types/big5';
import { DOMAINS, FACETS, QUESTIONS, SCALE_OPTIONS } from '../data/big5Data';
import { getGradeBadgeClass, getGradeLabel } from '../utils/scoring';

interface FacetModalProps {
  facetCode: FacetCode | null;
  score: number;
  answers: (number | null)[];
  totalQuestions?: number;
  onClose: () => void;
}

export function FacetModal({ facetCode, score, answers, totalQuestions = 300, onClose }: FacetModalProps) {
  if (!facetCode) return null;

  const facet = FACETS[facetCode];
  const domain = DOMAINS[facet.domain];
  const grade = getGradeLabel(score);
  const badgeStyle = getGradeBadgeClass(grade);

  // Find questions for this facet within the test's scope
  const facetQuestions = QUESTIONS.filter((q) => q.facet === facetCode && q.id <= totalQuestions);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span 
                className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                style={{ backgroundColor: domain.color }}
              >
                {domain.short}
              </span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                {grade} ({score}점)
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {facet.name}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {facet.desc}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 10 Questions and User's responses */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
            <span>진단 문항 (총 {facetQuestions.length}문항)</span>
            <span>나의 응답</span>
          </div>

          <div className="space-y-2">
            {facetQuestions.map((q) => {
              const rawAns = answers[q.id - 1];
              const scoredVal = rawAns !== null && rawAns !== undefined
                ? (q.positive ? rawAns : 6 - rawAns)
                : null;
              const scaleOpt = SCALE_OPTIONS.find((opt) => opt.value === rawAns);

              return (
                <div
                  key={q.id}
                  className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 flex items-start justify-between gap-3 text-xs"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-bold text-slate-400 text-[10px]">Q{q.id}.</span>
                      {!q.positive && (
                        <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-medium">
                          역채점 문항
                        </span>
                      )}
                    </div>
                    <p className="text-slate-800 font-medium leading-relaxed">
                      {q.text}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    {rawAns !== null && rawAns !== undefined ? (
                      <div>
                        <span className="inline-flex items-center gap-1 font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-xs border border-indigo-100">
                          <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                          {rawAns}점
                        </span>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          {scaleOpt?.shortLabel} {!q.positive && `(환산 ${scoredVal}점)`}
                        </div>
                      </div>
                    ) : (
                      <span className="text-slate-400 text-[11px]">미응답</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
