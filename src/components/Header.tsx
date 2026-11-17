import { ShieldCheck, History, BrainCircuit } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'test' | 'result' | 'history' | 'compare';
  onNavigate: (tab: 'home' | 'test' | 'history' | 'compare') => void;
  hasSavedResults: boolean;
}

export function Header({ currentTab, onNavigate, hasSavedResults }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-100 group-hover:shadow-indigo-200 transition-all">
            B5
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight block leading-tight">
              BIG-5 정밀 성격 진단
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium block leading-none">
              IPIP-NEO-300 표준 모델
            </span>
          </div>
        </button>

        {/* Navigation Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onNavigate('compare')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              currentTab === 'compare'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">MBTI와 비교</span>
            <span className="sm:hidden">MBTI비교</span>
          </button>

          {hasSavedResults && (
            <button
              onClick={() => onNavigate('history')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                currentTab === 'history'
                  ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <History className="w-3.5 h-3.5 text-indigo-600" />
              <span>검사 기록</span>
            </button>
          )}

          <div className="hidden md:flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full ml-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% 로컬 보안 (서버 미전송)</span>
          </div>
        </div>
      </div>
    </header>
  );
}
