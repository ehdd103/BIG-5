import { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Save, 
  AlertCircle, 
  HelpCircle,
  Home
} from 'lucide-react';
import { QUESTIONS, SCALE_OPTIONS } from '../data/big5Data';
import { saveProgress } from '../utils/scoring';

interface TestViewProps {
  totalQuestions?: number;
  initialAnswers?: (number | null)[];
  initialPage?: number;
  onComplete: (answers: number[], totalQuestions: number) => void;
  onExit: () => void;
}

const PAGE_SIZE = 30;

export function TestView({ 
  totalQuestions = 300,
  initialAnswers, 
  initialPage = 1, 
  onComplete, 
  onExit 
}: TestViewProps) {
  const activeQuestions = QUESTIONS.slice(0, totalQuestions);
  const totalPages = Math.ceil(totalQuestions / PAGE_SIZE);

  const [answers, setAnswers] = useState<(number | null)[]>(() => {
    if (initialAnswers && initialAnswers.length >= totalQuestions) {
      return initialAnswers.slice(0, totalQuestions);
    }
    return new Array(totalQuestions).fill(null);
  });

  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [activeQuestionId, setActiveQuestionId] = useState<number>(
    (initialPage - 1) * PAGE_SIZE + 1
  );
  const [saveIndicator, setSaveIndicator] = useState<boolean>(false);

  // References for questions to enable smooth scrolling
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Current page question slice
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalQuestions);
  const currentQuestions = activeQuestions.slice(startIndex, endIndex);

  // Completed count overall and current page
  const totalAnswered = answers.filter((a) => a !== null).length;
  const pageAnsweredCount = currentQuestions.filter((q) => answers[q.id - 1] !== null).length;
  const isPageComplete = pageAnsweredCount === currentQuestions.length;
  const progressPct = Math.round((totalAnswered / totalQuestions) * 100);

  // Auto-save whenever answers change
  useEffect(() => {
    saveProgress(answers, currentPage, totalQuestions);
    setSaveIndicator(true);
    const timer = setTimeout(() => setSaveIndicator(false), 1200);
    return () => clearTimeout(timer);
  }, [answers, currentPage, totalQuestions]);

  // Scroll to first unanswered question on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const firstUnanswered = currentQuestions.find((q) => answers[q.id - 1] === null);
    if (firstUnanswered) {
      setActiveQuestionId(firstUnanswered.id);
    } else {
      setActiveQuestionId(startIndex + 1);
    }
  }, [currentPage]);

  // Trigger slight burst particle on answer
  const triggerAnswerEffect = (x?: number, y?: number) => {
    if (x && y) {
      const normalizedX = x / window.innerWidth;
      const normalizedY = y / window.innerHeight;
      confetti({
        particleCount: 8,
        spread: 30,
        origin: { x: normalizedX, y: normalizedY },
        colors: ['#6366f1', '#3b82f6', '#10b981'],
        disableForReducedMotion: true,
        ticks: 50,
        gravity: 1.2
      });
    }
  };

  // Handle question selection
  const handleSelectAnswer = useCallback((
    questionId: number, 
    value: number, 
    event?: React.MouseEvent
  ) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionId - 1] = value;
      return next;
    });

    if (event) {
      triggerAnswerEffect(event.clientX, event.clientY);
    }

    // Determine next question to focus and scroll
    const currentIndex = currentQuestions.findIndex((q) => q.id === questionId);
    let nextTargetId: number | null = null;

    // First search forward on the current page for an unanswered question
    for (let i = currentIndex + 1; i < currentQuestions.length; i++) {
      const q = currentQuestions[i];
      if (answers[q.id - 1] === null && q.id !== questionId) {
        nextTargetId = q.id;
        break;
      }
    }

    // If none found forward, search backwards on current page
    if (!nextTargetId) {
      for (let i = 0; i < currentIndex; i++) {
        const q = currentQuestions[i];
        if (answers[q.id - 1] === null && q.id !== questionId) {
          nextTargetId = q.id;
          break;
        }
      }
    }

    if (nextTargetId) {
      setActiveQuestionId(nextTargetId);
      const el = questionRefs.current[nextTargetId];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [answers, currentQuestions]);

  // Keyboard shortcut handler (keys 1~5)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const keyVal = parseInt(e.key, 10);
      if (keyVal >= 1 && keyVal <= 5) {
        e.preventDefault();
        if (activeQuestionId) {
          handleSelectAnswer(activeQuestionId, keyVal);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeQuestionId, handleSelectAnswer]);

  // Next page / Finish handler
  const handleNextPage = () => {
    if (!isPageComplete) return;

    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
      onComplete(answers as number[], totalQuestions);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-28">
      {/* Sticky Progress Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={onExit}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="메인으로 나가기 (자동 저장됨)"
              >
                <Home className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm text-slate-900">
                페이지 {currentPage} <span className="text-slate-400 font-normal">/ {totalPages}</span>
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                ({startIndex + 1} ~ {endIndex}번 문항)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                {totalAnswered} / {totalQuestions} 완료 ({progressPct}%)
              </span>
              <div className="flex items-center gap-1 text-[11px] text-slate-400">
                <Save className="w-3.5 h-3.5" />
                <span className={saveIndicator ? 'text-indigo-600 font-semibold' : ''}>
                  {saveIndicator ? '저장됨' : '자동 저장'}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Questions Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 flex-1 w-full space-y-4">
        {/* Helper Tip */}
        <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-100/80 flex items-center justify-between text-xs text-indigo-900">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              <strong>빠른 응답 팁:</strong> 키보드 숫자키 <strong>1~5</strong>를 누르거나, 화면 하단 플로팅 버튼을 터치하면 다음 문항으로 자동 스크롤됩니다.
            </span>
          </div>
          <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded shrink-0 hidden md:inline">
            단축키 1~5 지원
          </span>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {currentQuestions.map((q) => {
            const currentAnswer = answers[q.id - 1];
            const isActive = activeQuestionId === q.id;

            return (
              <div
                key={q.id}
                ref={(el) => { questionRefs.current[q.id] = el; }}
                onClick={() => setActiveQuestionId(q.id)}
                className={`p-5 rounded-2xl border transition-all duration-200 bg-white ${
                  isActive
                    ? 'border-indigo-500 ring-2 ring-indigo-500/10 shadow-md'
                    : currentAnswer !== null
                    ? 'border-slate-200/80 shadow-xs'
                    : 'border-slate-200/60 shadow-xs hover:border-slate-300'
                }`}
              >
                {/* Question Title */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-start gap-2.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md mt-0.5 ${
                      currentAnswer !== null
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      Q.{q.id}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {q.text}
                    </h3>
                  </div>

                  {currentAnswer !== null && (
                    <span className="shrink-0 text-emerald-600" title="응답 완료">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  )}
                </div>

                {/* 5 Likert Buttons */}
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {SCALE_OPTIONS.map((opt) => {
                    const isSelected = currentAnswer === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={(e) => handleSelectAnswer(q.id, opt.value, e)}
                        className={`py-2.5 sm:py-3 px-1 rounded-xl text-center text-xs font-semibold transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-[1.02]'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
                        }`}>
                          {opt.value}
                        </span>
                        <span className="text-[10px] sm:text-[11px] leading-tight line-clamp-1">
                          {opt.shortLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Page Bottom Navigation */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              currentPage === 1
                ? 'opacity-40 cursor-not-allowed text-slate-400 border-slate-200'
                : 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200 shadow-xs'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전 페이지</span>
          </button>

          {!isPageComplete && (
            <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60">
              <AlertCircle className="w-4 h-4" />
              <span>현재 페이지 {currentQuestions.length - pageAnsweredCount}개 문항에 더 응답해주세요</span>
            </div>
          )}

          <button
            onClick={handleNextPage}
            disabled={!isPageComplete}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer ${
              isPageComplete
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200 hover:-translate-y-0.5'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <span>{currentPage === totalPages ? '결과 분석하기 (검사 완료)' : '다음 페이지'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Floating Bottom Thumb Action Bar (Mobile & Desktop Quick Control) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-between gap-2">
          <div className="text-[11px] font-bold text-slate-500 whitespace-nowrap hidden sm:block">
            Q.{activeQuestionId} 빠른 선택
          </div>

          <div className="flex items-center justify-around flex-1 gap-2">
            {[
              { val: 1, label: '전혀아님', color: 'bg-rose-500 hover:bg-rose-600 ring-rose-200' },
              { val: 2, label: '아님', color: 'bg-amber-500 hover:bg-amber-600 ring-amber-200' },
              { val: 3, label: '보통', color: 'bg-slate-500 hover:bg-slate-600 ring-slate-200' },
              { val: 4, label: '그렇다', color: 'bg-emerald-500 hover:bg-emerald-600 ring-emerald-200' },
              { val: 5, label: '매우그렇다', color: 'bg-indigo-600 hover:bg-indigo-700 ring-indigo-200' }
            ].map((btn) => (
              <button
                key={btn.val}
                type="button"
                onClick={(e) => handleSelectAnswer(activeQuestionId, btn.val, e)}
                className={`flex-1 py-2 rounded-xl text-white font-bold text-xs flex flex-col items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-sm ${btn.color}`}
              >
                <span className="text-xs font-black">{btn.val}</span>
                <span className="text-[9px] opacity-90">{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
