import { useState, useEffect } from 'react';
import type { ProgressState, SavedResult } from './types/big5';
import { QUESTIONS } from './data/big5Data';
import { 
  calculateScores, 
  clearProgress, 
  loadProgress, 
  loadSavedResults, 
  saveResult 
} from './utils/scoring';
import { Header } from './components/Header';
import { IntroView } from './components/IntroView';
import { TestView } from './components/TestView';
import { ResultView } from './components/ResultView';
import { HistoryView } from './components/HistoryView';
import { MBTIComparisonSection } from './components/MBTIComparisonSection';

export function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'test' | 'result' | 'history' | 'compare'>('home');
  const [progress, setProgress] = useState<ProgressState | null>(null);
  const [savedResults, setSavedResults] = useState<SavedResult[]>([]);
  const [activeResult, setActiveResult] = useState<SavedResult | null>(null);

  // Load progress and saved results on mount
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setProgress(loadProgress());
    setSavedResults(loadSavedResults());
  };

  // Start test (new or continue)
  const handleStartTest = (continueProgress: boolean) => {
    if (!continueProgress) {
      clearProgress();
      setProgress(null);
    }
    setCurrentTab('test');
  };

  // Test completed
  const handleTestComplete = (answers: number[]) => {
    const scores = calculateScores(answers);
    const newSaved = saveResult(answers, scores, '응시자');
    clearProgress();
    refreshData();
    setActiveResult(newSaved);
    setCurrentTab('result');
  };

  // View sample result
  const handleViewSample = () => {
    // Generate realistic, rich psychological test response
    const sampleAnswers = QUESTIONS.map((q) => {
      // Create interesting profile: High Openness, High Conscientiousness, Moderate Extraversion, Low Neuroticism
      const facetDomain = q.facet[0].toUpperCase();
      let tendency = 3;
      if (facetDomain === 'O') tendency = q.positive ? 4 : 2;
      else if (facetDomain === 'C') tendency = q.positive ? 4 : 2;
      else if (facetDomain === 'E') tendency = q.positive ? 4 : 3;
      else if (facetDomain === 'A') tendency = q.positive ? 4 : 2;
      else if (facetDomain === 'N') tendency = q.positive ? 2 : 4;

      // Add slight jitter (1 to 5)
      const jitter = (q.id % 3) - 1;
      const val = Math.max(1, Math.min(5, tendency + jitter));
      return val;
    });

    const sampleScores = calculateScores(sampleAnswers);
    const sampleResult: SavedResult = {
      id: 'sample-result-demo',
      date: new Date().toISOString(),
      name: '샘플 진단 (예시)',
      answers: sampleAnswers,
      domainPct: sampleScores.domainPct,
      facetPct: sampleScores.facetPct
    };

    setActiveResult(sampleResult);
    setCurrentTab('result');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Header (Only on non-testing views) */}
      {currentTab !== 'test' && (
        <Header
          currentTab={currentTab}
          onNavigate={(tab) => {
            if (tab === 'home') setActiveResult(null);
            setCurrentTab(tab);
          }}
          hasSavedResults={savedResults.length > 0}
        />
      )}

      {/* Main Views */}
      <div className="flex-1">
        {currentTab === 'home' && (
          <IntroView
            progress={progress}
            savedResults={savedResults}
            onStartTest={handleStartTest}
            onViewSample={handleViewSample}
            onViewHistory={() => setCurrentTab('history')}
          />
        )}

        {currentTab === 'test' && (
          <TestView
            initialAnswers={progress?.answers}
            initialPage={progress?.page || 1}
            onComplete={handleTestComplete}
            onExit={() => {
              refreshData();
              setCurrentTab('home');
            }}
          />
        )}

        {currentTab === 'result' && activeResult && (
          <ResultView
            result={activeResult}
            onRetest={() => handleStartTest(false)}
            onViewHistory={() => setCurrentTab('history')}
          />
        )}

        {currentTab === 'history' && (
          <HistoryView
            savedResults={savedResults}
            onSelectResult={(res) => {
              setActiveResult(res);
              setCurrentTab('result');
            }}
            onRefresh={refreshData}
            onStartNewTest={() => handleStartTest(false)}
          />
        )}

        {currentTab === 'compare' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                MBTI vs BIG-5 심층 비교 가이드
              </h1>
              <button
                onClick={() => handleStartTest(false)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer"
              >
                검사 시작하기
              </button>
            </div>
            <MBTIComparisonSection />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
