import { Check, X, ShieldAlert, Award, Compass, Layers, Activity } from 'lucide-react';
import { MBTI_VS_BIG5 } from '../data/big5Data';

export function MBTIComparisonSection() {
  return (
    <section className="w-full space-y-12">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>과학적 심리학의 표준</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          {MBTI_VS_BIG5.intro.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {MBTI_VS_BIG5.intro.subtitle} <br className="hidden sm:inline" />
          MBTI는 일상의 대화용으로 재미있지만, <strong>나 자신을 깊이 이해하고 성장하기 위해서는 과학적 신뢰도가 검증된 도구</strong>가 필요합니다.
        </p>
      </div>

      {/* 4 Key Differences Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MBTI_VS_BIG5.differences.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  비교 {idx + 1} · {item.category}
                </span>
              </div>

              {/* MBTI vs BIG-5 Rows */}
              <div className="space-y-2.5 mb-4">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-rose-50/60 p-2.5 rounded-xl border border-rose-100/80">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </span>
                  <div>
                    <strong className="text-rose-900 font-semibold block text-[11px] mb-0.5">MBTI 방식</strong>
                    <span className="text-slate-700">{item.mbti}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100/80">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <div>
                    <strong className="text-emerald-900 font-semibold block text-[11px] mb-0.5">BIG-5 과학적 접근</strong>
                    <span className="text-emerald-950 font-medium">{item.big5}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              💡 {item.explanation}
            </p>
          </div>
        ))}
      </div>

      {/* MBTI to BIG-5 Mapping Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              내 MBTI 유형은 BIG-5에서 어떻게 대응될까요?
            </h3>
            <p className="text-xs text-slate-500">
              MBTI 4글자 지표와 심리학 BIG-5 5대 요인 간의 실제 상관관계
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                <th className="py-3 px-4 font-semibold">MBTI 지표</th>
                <th className="py-3 px-4 font-semibold">대응되는 BIG-5 요인</th>
                <th className="py-3 px-4 font-semibold">실제 측정하는 성격 내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {MBTI_VS_BIG5.mapping.map((map, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[11px]">
                      {map.mbtiDim}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">
                    {map.big5Domain}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 leading-relaxed">
                    {map.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 flex items-start gap-3 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">핵심 차이점: 신경증(N) 요인의 유무</strong>
            <p className="leading-relaxed text-amber-800 text-[11px]">
              MBTI 원본 검사에는 정서적 안정성, 스트레스 민감도, 회복탄력성을 측정하는 지표가 없습니다.
              (인터넷 무료 검사의 -A/-T는 BIG-5의 신경증 요인을 비공식 차용한 것입니다.)
              BIG-5는 <strong>신경증(Neuroticism)을 필수 5대 축 중 하나로 정밀 측정</strong>하여 마음 건강과 심리적 안정도를 함께 진단합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Pillars Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-indigo-50/60 border border-indigo-100 text-center">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3">
            <Layers className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">30개 Facet의 입체성</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            단순히 외향적이냐 내향적이냐가 아니라, 따뜻함, 사교성, 리더십, 모험성 각각을 따로 분석합니다.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-sky-50/60 border border-sky-100 text-center">
          <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center mx-auto mb-3">
            <Activity className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">시간이 지나도 일관된 결과</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            MBTI처럼 몇 주 뒤 다시 했을 때 유형이 뒤바뀌지 않으며, 성격의 안정적인 기저 특질을 보여줍니다.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-center">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3">
            <Award className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">학술 논문 및 실무 채용 공인</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            포춘 500대 기업의 인재 선발과 전 세계 심리학 연구 논문의 90% 이상이 BIG-5 모델을 기준으로 채택합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
