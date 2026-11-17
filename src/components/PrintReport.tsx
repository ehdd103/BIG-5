import { useRef } from 'react';
import { Printer, X } from 'lucide-react';
import type { SavedResult } from '../types/big5';
import { DOMAINS, FACETS } from '../data/big5Data';
import { getDomainInterpretation, getGradeLabel } from '../utils/scoring';

interface PrintReportProps {
  result: SavedResult;
  onClose: () => void;
}

export function PrintReport({ result, onClose }: PrintReportProps) {
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(result.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Controls Toolbar (Hidden in print) */}
        <div className="no-print p-4 bg-slate-800 text-white flex items-center justify-between border-b border-slate-700">
          <div>
            <span className="font-bold text-sm block">A4 공식 진단 보고서 미리보기</span>
            <span className="text-[11px] text-slate-300">
              인쇄 창에서 '대상'을 'PDF로 저장'으로 선택하면 고품질 PDF로 저장됩니다.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Body */}
        <div
          ref={printAreaRef}
          className="p-8 sm:p-12 overflow-y-auto flex-1 bg-white text-slate-900 space-y-8 print:p-0 print:space-y-6"
        >
          {/* Report Header */}
          <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block mb-1">
                Official Psychometric Report
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                IPIP-NEO-300 정밀 성격 진단 보고서
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                세계 표준 5대 성격 요인 모델 (Big Five / NEO-PI-R 30 Facets)
              </p>
            </div>
            <div className="text-right text-xs text-slate-600 space-y-0.5">
              <div><strong className="text-slate-800">응시자:</strong> {result.name || '익명'}</div>
              <div><strong className="text-slate-800">검사일:</strong> {formattedDate}</div>
              <div className="text-[10px] text-slate-400 font-mono">ID: {result.id}</div>
            </div>
          </div>

          {/* 5 Domains Summary Table */}
          <div className="print-break-inside-avoid">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
              1. 5대 핵심 도메인 (Big-5 Domains) 요약
            </h2>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <th className="py-2.5 px-3">도메인</th>
                    <th className="py-2.5 px-3">점수 (0~100)</th>
                    <th className="py-2.5 px-3">등급</th>
                    <th className="py-2.5 px-3">해석 요약</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {(Object.keys(DOMAINS) as Array<keyof typeof DOMAINS>).map((code) => {
                    const domain = DOMAINS[code];
                    const score = result.domainPct[code] || 0;
                    const grade = getGradeLabel(score);
                    const interpretation = getDomainInterpretation(code, score);

                    return (
                      <tr key={code}>
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full mr-2"
                            style={{ backgroundColor: domain.color }}
                          />
                          {domain.name}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-indigo-700">
                          {score}점
                        </td>
                        <td className="py-2.5 px-3 font-semibold">
                          {grade}
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 text-[11px]">
                          {interpretation.title}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 30 Facets Detailed Breakdown */}
          <div className="print-break-inside-avoid">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
              2. 30개 세부 척도 (Facets) 정밀 분석표
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(DOMAINS) as Array<keyof typeof DOMAINS>).map((code) => {
                const domain = DOMAINS[code];
                const domainFacets = Object.entries(FACETS).filter(([, f]) => f.domain === code);

                return (
                  <div key={code} className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/50 print-break-inside-avoid">
                    <div className="font-bold text-xs text-slate-900 mb-2 flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span>{domain.name}</span>
                      <span className="text-indigo-700">{result.domainPct[code]}점 ({getGradeLabel(result.domainPct[code])})</span>
                    </div>

                    <div className="space-y-1.5">
                      {domainFacets.map(([facetKey, fInfo]) => {
                        const score = result.facetPct[facetKey] || 0;
                        const grade = getGradeLabel(score);

                        return (
                          <div key={facetKey} className="flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-800 font-medium">{fInfo.name}</span>
                              <span className="text-[10px] text-slate-400">({fInfo.desc})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-700">{score}점</span>
                              <span className="text-[10px] text-slate-500 font-medium">{grade}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Domain Detailed Qualitative Insights */}
          <div className="space-y-4 print-break-inside-avoid">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              3. 도메인별 종합 심리 해석
            </h2>
            {(Object.keys(DOMAINS) as Array<keyof typeof DOMAINS>).map((code) => {
              const domain = DOMAINS[code];
              const score = result.domainPct[code] || 0;
              const interpretation = getDomainInterpretation(code, score);

              return (
                <div key={code} className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 text-xs print-break-inside-avoid">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded text-white text-[11px] font-bold"
                      style={{ backgroundColor: domain.color }}
                    >
                      {domain.short}
                    </span>
                    <strong className="text-slate-900 text-sm font-bold">{interpretation.title} ({score}점, {getGradeLabel(score)})</strong>
                  </div>
                  <div className="space-y-1 text-slate-600 leading-relaxed text-[11px]">
                    {interpretation.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Report Footer & Disclaimer */}
          <div className="border-t border-slate-200 pt-4 text-[10px] text-slate-400 space-y-1">
            <p>• 본 검사는 Lewis R. Goldberg 박사의 IPIP-NEO-300 공공 도메인 성격 검사 척도 및 표준 한국어 번역본(김종범, 김지용, 최묘경 역)을 사용합니다.</p>
            <p>• BIG-5 모델은 성격심리학계에서 가장 신뢰받는 5요인 성격 구조론에 기반하며, 개인의 심리적 경향성과 잠재력을 탐색하기 위한 참고 자료로 활용됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
