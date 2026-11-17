import { Calendar, Trash2, ArrowRight, RotateCcw, Award } from 'lucide-react';
import type { SavedResult } from '../types/big5';
import { DOMAINS } from '../data/big5Data';
import { deleteSavedResult } from '../utils/scoring';

interface HistoryViewProps {
  savedResults: SavedResult[];
  onSelectResult: (result: SavedResult) => void;
  onRefresh: () => void;
  onStartNewTest: () => void;
}

export function HistoryView({ 
  savedResults, 
  onSelectResult, 
  onRefresh, 
  onStartNewTest 
}: HistoryViewProps) {
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('이 검사 기록을 삭제하시겠습니까?')) {
      deleteSavedResult(id);
      onRefresh();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            과거 검사 기록
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            브라우저에 안전하게 저장된 나의 이전 BIG-5 검사 이력입니다.
          </p>
        </div>

        <button
          onClick={onStartNewTest}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>새 검사 시작</span>
        </button>
      </div>

      {savedResults.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">아직 완료된 검사 기록이 없습니다</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            300문항 정밀 검사를 완료하면 이곳에 일자별 성격 프로필 기록이 자동으로 보관됩니다.
          </p>
          <button
            onClick={onStartNewTest}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-200 transition-all cursor-pointer"
          >
            <span>지금 검사 시작하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {savedResults.map((item) => {
            const formattedDate = new Date(item.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });

            return (
              <div
                key={item.id}
                onClick={() => onSelectResult(item)}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{formattedDate}</span>
                    <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded text-[11px] border border-indigo-100">
                      {item.totalQuestions || 300}문항 모드
                    </span>
                    {item.name && (
                      <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.2 rounded text-[11px]">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* 5 Domains Mini Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(Object.keys(DOMAINS) as Array<keyof typeof DOMAINS>).map((code) => {
                      const domain = DOMAINS[code];
                      const score = item.domainPct[code] || 0;
                      return (
                        <span
                          key={code}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-50 border border-slate-200"
                        >
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: domain.color }}
                          />
                          <span className="text-slate-600">{domain.short}</span>
                          <strong className="text-slate-900 font-bold">{score}%</strong>
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                  <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>결과 보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <button
                    onClick={(e) => handleDelete(item.id, e)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    title="기록 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
