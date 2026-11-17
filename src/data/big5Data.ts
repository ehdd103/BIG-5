// IPIP-NEO-300 공인 데이터셋
// 번역: 김종범, 김지용, 최묘경 / 원작: Lewis R. Goldberg (ORI)

import type { DomainCode, DomainInfo, FacetCode, FacetInfo, QuestionItem, InterpretationLevel } from '../types/big5';

export const DOMAINS: Record<DomainCode, DomainInfo> = {
  "N": {
    "code": "N",
    "name": "신경성 (Neuroticism)",
    "short": "신경성",
    "color": "#ef4444",
    "light": "#fee2e2",
    "bgClass": "bg-rose-500",
    "textClass": "text-rose-600",
    "desc": "부정적 감정을 경험하는 경향. 점수가 높을수록 정서적으로 민감하며 스트레스에 취약합니다."
  },
  "E": {
    "code": "E",
    "name": "외향성 (Extraversion)",
    "short": "외향성",
    "color": "#f59e0b",
    "light": "#fef3c7",
    "bgClass": "bg-amber-500",
    "textClass": "text-amber-600",
    "desc": "사회적 상호작용과 활동성. 점수가 높을수록 활발하고 사교적이며 긍정 정서가 풍부합니다."
  },
  "O": {
    "code": "O",
    "name": "개방성 (Openness)",
    "short": "개방성",
    "color": "#8b5cf6",
    "light": "#ede9fe",
    "bgClass": "bg-purple-500",
    "textClass": "text-purple-600",
    "desc": "새로운 경험과 아이디어에 대한 개방적 태도. 점수가 높을수록 창의적이고 호기심이 많습니다."
  },
  "A": {
    "code": "A",
    "name": "우호성 (Agreeableness)",
    "short": "우호성",
    "color": "#10b981",
    "light": "#d1fae5",
    "bgClass": "bg-emerald-500",
    "textClass": "text-emerald-600",
    "desc": "타인에 대한 협력적·공감적 태도. 점수가 높을수록 친절하고 이타적이며 협조적입니다."
  },
  "C": {
    "code": "C",
    "name": "성실성 (Conscientiousness)",
    "short": "성실성",
    "color": "#3b82f6",
    "light": "#dbeafe",
    "bgClass": "bg-blue-500",
    "textClass": "text-blue-600",
    "desc": "목표 지향적이고 자기 규율적인 행동 경향. 점수가 높을수록 계획적이고 책임감이 강합니다."
  }
};

export const FACETS: Record<FacetCode, FacetInfo> = {
  "n1": {
    "name": "불안",
    "domain": "N",
    "desc": "걱정과 긴장, 불안 경향"
  },
  "n2": {
    "name": "분노",
    "domain": "N",
    "desc": "좌절 및 분노 반응 경향"
  },
  "n3": {
    "name": "우울",
    "domain": "N",
    "desc": "슬픔, 죄책감, 절망감 경향"
  },
  "n4": {
    "name": "자의식",
    "domain": "N",
    "desc": "사회적 상황에서의 당혹감과 수줍음"
  },
  "n5": {
    "name": "충동성",
    "domain": "N",
    "desc": "충동과 욕구를 조절하는 능력"
  },
  "n6": {
    "name": "취약성",
    "domain": "N",
    "desc": "스트레스 상황에서의 대처 능력"
  },
  "e1": {
    "name": "친화성",
    "domain": "E",
    "desc": "타인과 따뜻하고 친근한 관계 형성"
  },
  "e2": {
    "name": "사교성",
    "domain": "E",
    "desc": "사람 많은 자리를 즐기는 경향"
  },
  "e3": {
    "name": "주도성",
    "domain": "E",
    "desc": "리더십 발휘 및 사회적 영향력"
  },
  "e4": {
    "name": "활동성",
    "domain": "E",
    "desc": "에너지와 속도, 바쁜 생활 경향"
  },
  "e5": {
    "name": "자극추구",
    "domain": "E",
    "desc": "흥분과 자극, 모험을 추구하는 경향"
  },
  "e6": {
    "name": "긍정정서",
    "domain": "E",
    "desc": "행복, 기쁨, 열정 등 긍정적 감정"
  },
  "o1": {
    "name": "상상력",
    "domain": "O",
    "desc": "풍부한 상상과 공상, 창의적 사고"
  },
  "o2": {
    "name": "예술적 관심",
    "domain": "O",
    "desc": "예술, 음악, 자연 등 아름다움에 대한 감수성"
  },
  "o3": {
    "name": "감수성",
    "domain": "O",
    "desc": "자신의 감정과 내면에 대한 주의"
  },
  "o4": {
    "name": "모험성",
    "domain": "O",
    "desc": "새로운 활동, 장소, 음식에 대한 개방성"
  },
  "o5": {
    "name": "지적 호기심",
    "domain": "O",
    "desc": "아이디어와 이론적 탐구에 대한 흥미"
  },
  "o6": {
    "name": "진보적 가치관",
    "domain": "O",
    "desc": "사회적·도덕적 관습에 도전하는 경향"
  },
  "a1": {
    "name": "신뢰",
    "domain": "A",
    "desc": "타인의 동기와 의도를 선하게 보는 경향"
  },
  "a2": {
    "name": "도덕성",
    "domain": "A",
    "desc": "솔직하고 정직하며 속이지 않는 경향"
  },
  "a3": {
    "name": "이타성",
    "domain": "A",
    "desc": "다른 사람을 돕고 배려하는 경향"
  },
  "a4": {
    "name": "협조성",
    "domain": "A",
    "desc": "갈등을 피하고 협력하는 경향"
  },
  "a5": {
    "name": "겸손",
    "domain": "A",
    "desc": "자신을 낮추고 과시하지 않는 경향"
  },
  "a6": {
    "name": "공감",
    "domain": "A",
    "desc": "타인의 고통에 연민을 느끼는 경향"
  },
  "c1": {
    "name": "자기효능감",
    "domain": "C",
    "desc": "능력에 대한 자신감과 효능감"
  },
  "c2": {
    "name": "정돈성",
    "domain": "C",
    "desc": "질서와 정리정돈에 대한 선호"
  },
  "c3": {
    "name": "성실함",
    "domain": "C",
    "desc": "의무와 책임을 다하는 경향"
  },
  "c4": {
    "name": "성취지향",
    "domain": "C",
    "desc": "높은 목표를 세우고 달성하려는 동기"
  },
  "c5": {
    "name": "자기규율",
    "domain": "C",
    "desc": "어려운 과제도 끝까지 완수하는 능력"
  },
  "c6": {
    "name": "신중성",
    "domain": "C",
    "desc": "행동 전 신중하게 생각하는 경향"
  }
};

export const QUESTIONS: QuestionItem[] = [
  {
    "id": 1,
    "text": "나는 걱정이 많다.",
    "facet": "n1",
    "positive": true
  },
  {
    "id": 2,
    "text": "나는 친구를 쉽게 사귄다.",
    "facet": "e1",
    "positive": true
  },
  {
    "id": 3,
    "text": "나는 눈에 보이듯 생생한 상상을 한다.",
    "facet": "o1",
    "positive": true
  },
  {
    "id": 4,
    "text": "나는 다른 사람을 잘 믿는다.",
    "facet": "a1",
    "positive": true
  },
  {
    "id": 5,
    "text": "나는 일을 성공적으로 잘 끝맺는다.",
    "facet": "c1",
    "positive": true
  },
  {
    "id": 6,
    "text": "나는 쉽게 화가 난다.",
    "facet": "n2",
    "positive": true
  },
  {
    "id": 7,
    "text": "나는 큰 파티나 모임을 매우 좋아한다.",
    "facet": "e2",
    "positive": true
  },
  {
    "id": 8,
    "text": "나는 예술의 중요성을 믿는다.",
    "facet": "o2",
    "positive": true
  },
  {
    "id": 9,
    "text": "나는 나의 세금을 절대 속이지 않는다.",
    "facet": "a2",
    "positive": true
  },
  {
    "id": 10,
    "text": "나는 정리정돈된 것을 좋아한다.",
    "facet": "c2",
    "positive": true
  },
  {
    "id": 11,
    "text": "나는 자주 우울해진다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 12,
    "text": "나는 일에 주도적으로 나선다.",
    "facet": "e3",
    "positive": true
  },
  {
    "id": 13,
    "text": "나는 감정에 격렬하게 휩싸일 때가 많다.",
    "facet": "o3",
    "positive": true
  },
  {
    "id": 14,
    "text": "나는 다른 사람들을 반갑게 대한다.",
    "facet": "a3",
    "positive": true
  },
  {
    "id": 15,
    "text": "나는 규칙을 지키려고 노력한다.",
    "facet": "c3",
    "positive": true
  },
  {
    "id": 16,
    "text": "나는 쉽게 겁이 난다.",
    "facet": "n4",
    "positive": true
  },
  {
    "id": 17,
    "text": "나는 항상 바쁘다.",
    "facet": "e4",
    "positive": true
  },
  {
    "id": 18,
    "text": "나는 틀에 박히지 않는 것을 좋아한다.",
    "facet": "o4",
    "positive": true
  },
  {
    "id": 19,
    "text": "나는 쉽게 납득하는 편이다.",
    "facet": "a4",
    "positive": true
  },
  {
    "id": 20,
    "text": "나는 목표를 향해 곧장 나아간다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 21,
    "text": "나는 가끔 폭식을 한다.",
    "facet": "n5",
    "positive": true
  },
  {
    "id": 22,
    "text": "나는 신나는 일을 굉장히 즐긴다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 23,
    "text": "나는 복잡한 문제를 해결하기 좋아한다.",
    "facet": "o5",
    "positive": true
  },
  {
    "id": 24,
    "text": "나는 주목받는 것을 싫어한다.",
    "facet": "a5",
    "positive": true
  },
  {
    "id": 25,
    "text": "나는 자질구레한 일은 바로 해치운다.",
    "facet": "c5",
    "positive": true
  },
  {
    "id": 26,
    "text": "나는 쉽게 공황 상태에 빠진다.",
    "facet": "n6",
    "positive": true
  },
  {
    "id": 27,
    "text": "나는 기쁠 때 티를 낸다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 28,
    "text": "나는 진보적인 후보자에게 투표하는 경향이 있다.",
    "facet": "o6",
    "positive": true
  },
  {
    "id": 29,
    "text": "나는 노숙자를 측은하게 생각한다.",
    "facet": "a6",
    "positive": true
  },
  {
    "id": 30,
    "text": "나는 실수를 안 하려고 노력하는 편이다.",
    "facet": "c6",
    "positive": true
  },
  {
    "id": 31,
    "text": "나는 최악의 사태를 두려워한다.",
    "facet": "n1",
    "positive": true
  },
  {
    "id": 32,
    "text": "나는 다른 사람들과 있을 때 분위기를 잘 띄운다.",
    "facet": "e1",
    "positive": true
  },
  {
    "id": 33,
    "text": "나는 한계를 두지 않고 상상하기를 매우 즐긴다.",
    "facet": "o1",
    "positive": true
  },
  {
    "id": 34,
    "text": "나는 다른 사람들이 좋은 의도를 가지고 있다고 믿는다.",
    "facet": "a1",
    "positive": true
  },
  {
    "id": 35,
    "text": "나는 내가 하는 일에 뛰어나다.",
    "facet": "c1",
    "positive": true
  },
  {
    "id": 36,
    "text": "나는 쉽게 짜증을 낸다.",
    "facet": "n2",
    "positive": true
  },
  {
    "id": 37,
    "text": "나는 모임에서 많은 사람들과 이야기한다.",
    "facet": "e2",
    "positive": true
  },
  {
    "id": 38,
    "text": "나는 음악을 좋아한다.",
    "facet": "o2",
    "positive": true
  },
  {
    "id": 39,
    "text": "나는 규칙을 굳게 지킨다.",
    "facet": "a2",
    "positive": true
  },
  {
    "id": 40,
    "text": "나는 정돈하기를 좋아한다.",
    "facet": "c2",
    "positive": true
  },
  {
    "id": 41,
    "text": "나는 나 자신을 혐오한다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 42,
    "text": "나는 다른 사람들을 이끌어 가려고 애쓴다.",
    "facet": "e3",
    "positive": true
  },
  {
    "id": 43,
    "text": "나는 다른 사람의 감정에 공감한다.",
    "facet": "o3",
    "positive": true
  },
  {
    "id": 44,
    "text": "나는 다른 사람이 무엇을 필요로 하는지 예상한다.",
    "facet": "a3",
    "positive": true
  },
  {
    "id": 45,
    "text": "나는 약속을 꼭 지킨다.",
    "facet": "c3",
    "positive": true
  },
  {
    "id": 46,
    "text": "나는 내가 틀릴까봐 두렵다.",
    "facet": "n4",
    "positive": true
  },
  {
    "id": 47,
    "text": "나는 항상 쉴새없이 움직인다.",
    "facet": "e4",
    "positive": true
  },
  {
    "id": 48,
    "text": "나는 새로운 곳을 찾아가는 것을 즐긴다.",
    "facet": "o4",
    "positive": true
  },
  {
    "id": 49,
    "text": "나는 다른 사람과의 대결 상황을 견딜 수 없다.",
    "facet": "a4",
    "positive": true
  },
  {
    "id": 50,
    "text": "나는 열심히 일한다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 51,
    "text": "내가 하는 일 중에는 왜 하는지 이유를 모르는 것들이 있다.",
    "facet": "n5",
    "positive": true
  },
  {
    "id": 52,
    "text": "나는 모험을 추구한다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 53,
    "text": "나는 내용이 어려운 자료들을 읽는 것을 좋아한다.",
    "facet": "o5",
    "positive": true
  },
  {
    "id": 54,
    "text": "나는 나 자신에 대해 이야기하는 것을 싫어한다.",
    "facet": "a5",
    "positive": true
  },
  {
    "id": 55,
    "text": "나는 항상 준비되어 있다.",
    "facet": "c5",
    "positive": true
  },
  {
    "id": 56,
    "text": "나는 주변에서 벌어지는 일들에 압도당한다.",
    "facet": "n6",
    "positive": true
  },
  {
    "id": 57,
    "text": "나는 아주 재미있는 사람이다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 58,
    "text": "나는 절대적인 옳고 그름은 없다고 믿는다.",
    "facet": "o6",
    "positive": true
  },
  {
    "id": 59,
    "text": "나는 나보다 못한 사람들에게 동정심을 느낀다.",
    "facet": "a6",
    "positive": true
  },
  {
    "id": 60,
    "text": "나는 말을 할 때 단어와 표현을 신중하게 선택한다.",
    "facet": "c6",
    "positive": true
  },
  {
    "id": 61,
    "text": "나는 많은 것을 두려워한다.",
    "facet": "n1",
    "positive": true
  },
  {
    "id": 62,
    "text": "나는 사람들과 있을 때 편안함을 느낀다.",
    "facet": "e1",
    "positive": true
  },
  {
    "id": 63,
    "text": "나는 공상하기를 좋아한다.",
    "facet": "o1",
    "positive": true
  },
  {
    "id": 64,
    "text": "나는 사람들이 말하는 것을 신뢰한다.",
    "facet": "a1",
    "positive": true
  },
  {
    "id": 65,
    "text": "나는 일을 매끄럽게 처리한다.",
    "facet": "c1",
    "positive": true
  },
  {
    "id": 66,
    "text": "나는 쉽게 속상해 한다.",
    "facet": "n2",
    "positive": true
  },
  {
    "id": 67,
    "text": "나는 어떤 모임의 일원이 되는 것을 즐긴다.",
    "facet": "e2",
    "positive": true
  },
  {
    "id": 68,
    "text": "나는 다른 사람들이 눈치채지 못하는 아름다움을 잘 발견한다.",
    "facet": "o2",
    "positive": true
  },
  {
    "id": 69,
    "text": "나는 다른 이들보다 앞서기 위해 아부를 하기도 한다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 70,
    "text": "나는 모든 것들이 정확하기를 원한다.",
    "facet": "c2",
    "positive": true
  },
  {
    "id": 71,
    "text": "나는 자주 의기소침해진다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 72,
    "text": "나는 다른 사람들이 일하도록 설득할 수 있다.",
    "facet": "e3",
    "positive": true
  },
  {
    "id": 73,
    "text": "나는 감정의 원인에 매우 얽매인다.",
    "facet": "o3",
    "positive": true
  },
  {
    "id": 74,
    "text": "나는 다른 사람들을 돕는 것을 좋아한다.",
    "facet": "a3",
    "positive": true
  },
  {
    "id": 75,
    "text": "나는 청구서를 받으면 제때 지불한다.",
    "facet": "c3",
    "positive": true
  },
  {
    "id": 76,
    "text": "나는 다른 사람들에게 먼저 다가서는 것을 어려워 한다.",
    "facet": "n4",
    "positive": true
  },
  {
    "id": 77,
    "text": "나는 여가시간에 많은 것들을 한다.",
    "facet": "e4",
    "positive": true
  },
  {
    "id": 78,
    "text": "나는 많은 것들에 흥미를 느낀다.",
    "facet": "o4",
    "positive": true
  },
  {
    "id": 79,
    "text": "나는 다른 사람에게 강요한다는 인상을 주기 싫다.",
    "facet": "a4",
    "positive": true
  },
  {
    "id": 80,
    "text": "나는 계획을 행동으로 옮긴다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 81,
    "text": "나는 나중에 후회할 일을 하기도 한다.",
    "facet": "n5",
    "positive": true
  },
  {
    "id": 82,
    "text": "나는 활동적인 일을 좋아한다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 83,
    "text": "나는 풍부한 어휘력을 가지고 있다.",
    "facet": "o5",
    "positive": true
  },
  {
    "id": 84,
    "text": "나는 자신을 평범한 사람으로 생각한다.",
    "facet": "a5",
    "positive": true
  },
  {
    "id": 85,
    "text": "나는 일을 미루지 않고 즉시 시작하는 편이다.",
    "facet": "c5",
    "positive": true
  },
  {
    "id": 86,
    "text": "나는 내 일을 처리할 능력이 없다고 느낄 때가 있다.",
    "facet": "n6",
    "positive": true
  },
  {
    "id": 87,
    "text": "나는 어린아이처럼 기쁨을 표현한다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 88,
    "text": "나는 범죄자들은 처벌보다는 도움을 받아야 한다고 믿는다.",
    "facet": "o6",
    "positive": true
  },
  {
    "id": 89,
    "text": "나는 경쟁보다는 협력이 중요하다고 여긴다.",
    "facet": "a6",
    "positive": true
  },
  {
    "id": 90,
    "text": "나는 내가 선택한 길을 고수한다.",
    "facet": "c6",
    "positive": true
  },
  {
    "id": 91,
    "text": "나는 쉽게 스트레스를 받는다.",
    "facet": "n1",
    "positive": true
  },
  {
    "id": 92,
    "text": "나는 다른 사람들과 어울릴 때 마음 편하게 행동한다.",
    "facet": "e1",
    "positive": true
  },
  {
    "id": 93,
    "text": "나는 생각에 잠기는 것을 좋아한다.",
    "facet": "o1",
    "positive": true
  },
  {
    "id": 94,
    "text": "나는 사람은 본래 도덕적이라고 믿는다.",
    "facet": "a1",
    "positive": true
  },
  {
    "id": 95,
    "text": "나는 나의 입장이나 주장을 확신한다.",
    "facet": "c1",
    "positive": true
  },
  {
    "id": 96,
    "text": "나는 종종 기분이 좋지 않다.",
    "facet": "n2",
    "positive": true
  },
  {
    "id": 97,
    "text": "나는 내가 하는 일에 다른 사람들을 참여시킨다.",
    "facet": "e2",
    "positive": true
  },
  {
    "id": 98,
    "text": "나는 꽃들을 사랑한다.",
    "facet": "o2",
    "positive": true
  },
  {
    "id": 99,
    "text": "나는 나의 목적을 위해 다른 사람들을 이용한다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 100,
    "text": "나는 질서와 규칙성을 좋아한다.",
    "facet": "c2",
    "positive": true
  },
  {
    "id": 101,
    "text": "나는 나 자신에 대해 과소 평가한다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 102,
    "text": "나는 다른 사람들에게 영향을 미치기 위해 애쓴다.",
    "facet": "e3",
    "positive": true
  },
  {
    "id": 103,
    "text": "나는 나 자신과 나의 삶을 살펴보기를 좋아한다.",
    "facet": "o3",
    "positive": true
  },
  {
    "id": 104,
    "text": "나는 다른 사람들을 걱정해주는 편이다.",
    "facet": "a3",
    "positive": true
  },
  {
    "id": 105,
    "text": "나는 진실을 말한다.",
    "facet": "c3",
    "positive": true
  },
  {
    "id": 106,
    "text": "나는 나에게 관심이 쏠리는 것을 두려워한다.",
    "facet": "n4",
    "positive": true
  },
  {
    "id": 107,
    "text": "나는 동시에 여러 가지 일을 처리할 수 있다.",
    "facet": "e4",
    "positive": true
  },
  {
    "id": 108,
    "text": "나는 새로운 일들을 시작하기 좋아한다.",
    "facet": "o4",
    "positive": true
  },
  {
    "id": 109,
    "text": "나는 독설을 퍼붓는 편이다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 110,
    "text": "나는 온 정성을 다해 일에 몰두한다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 111,
    "text": "나는 폭식을 즐긴다.",
    "facet": "n5",
    "positive": true
  },
  {
    "id": 112,
    "text": "나는 시끄러운 군중의 일부가 되는 것을 즐긴다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 113,
    "text": "나는 많은 정보를 처리할 수 있다.",
    "facet": "o5",
    "positive": true
  },
  {
    "id": 114,
    "text": "나는 거의 자화자찬하지 않는다.",
    "facet": "a5",
    "positive": true
  },
  {
    "id": 115,
    "text": "나는 즉시 주어진 일을 해치운다.",
    "facet": "c5",
    "positive": true
  },
  {
    "id": 116,
    "text": "나는 결정을 잘 내리지 못하고 우유부단하다.",
    "facet": "n6",
    "positive": true
  },
  {
    "id": 117,
    "text": "나는 대체로 잘 웃으며 지낸다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 118,
    "text": "나는 단 하나의 참된 종교를 믿는다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 119,
    "text": "나는 다른 사람들의 슬픔에 공감한다.",
    "facet": "a6",
    "positive": true
  },
  {
    "id": 120,
    "text": "나는 생각없이 일에 뛰어 든다.",
    "facet": "c6",
    "positive": false
  },
  {
    "id": 121,
    "text": "나는 내 문제들에 집착한다.",
    "facet": "n1",
    "positive": true
  },
  {
    "id": 122,
    "text": "나는 사람들을 격려한다.",
    "facet": "e1",
    "positive": true
  },
  {
    "id": 123,
    "text": "나는 내가 만든 환상에 흠뻑 빠져있다.",
    "facet": "o1",
    "positive": true
  },
  {
    "id": 124,
    "text": "나는 인간의 선함을 믿는다.",
    "facet": "a1",
    "positive": true
  },
  {
    "id": 125,
    "text": "나는 좋은 해결책을 생각해 낸다.",
    "facet": "c1",
    "positive": true
  },
  {
    "id": 126,
    "text": "나는 화가 날 때 평정을 유지하기가 어렵다.",
    "facet": "n2",
    "positive": true
  },
  {
    "id": 127,
    "text": "나는 깜짝 파티들을 좋아한다.",
    "facet": "e2",
    "positive": true
  },
  {
    "id": 128,
    "text": "나는 자연의 아름다움을 즐긴다.",
    "facet": "o2",
    "positive": true
  },
  {
    "id": 129,
    "text": "나는 규칙을 피할 줄 안다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 130,
    "text": "나는 계획에 따라 일 한다.",
    "facet": "c2",
    "positive": true
  },
  {
    "id": 131,
    "text": "나는 감정 기복이 심하다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 132,
    "text": "나는 내가 원하는 대로 상황을 통제하며 일한다.",
    "facet": "e3",
    "positive": true
  },
  {
    "id": 133,
    "text": "나는 자신을 이해하려고 노력한다.",
    "facet": "o3",
    "positive": true
  },
  {
    "id": 134,
    "text": "나는 모든 사람들에게 친절하다.",
    "facet": "a3",
    "positive": true
  },
  {
    "id": 135,
    "text": "나는 나의 양심에 귀 기울인다.",
    "facet": "c3",
    "positive": true
  },
  {
    "id": 136,
    "text": "나는 친구들과 함께 할 때만 편안함을 느낀다.",
    "facet": "n4",
    "positive": true
  },
  {
    "id": 137,
    "text": "나는 빠르게 반응한다.",
    "facet": "e4",
    "positive": true
  },
  {
    "id": 138,
    "text": "나는 내가 잘 아는 바를 고수하는 것을 좋아한다.",
    "facet": "o4",
    "positive": false
  },
  {
    "id": 139,
    "text": "나는 다른 사람들에게 반박하는 경우가 자주 있다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 140,
    "text": "나는 대체로 나에게 기대된 것보다 더 많은 일을 한다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 141,
    "text": "나는 먹는 것을 좋아한다.",
    "facet": "n5",
    "positive": true
  },
  {
    "id": 142,
    "text": "나는 앞뒤 재지 않고 행동한다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 143,
    "text": "나는 생각하기를 좋아한다.",
    "facet": "o5",
    "positive": true
  },
  {
    "id": 144,
    "text": "나는 내가 다른 사람들보다 낫다고 믿는다.",
    "facet": "a5",
    "positive": false
  },
  {
    "id": 145,
    "text": "나는 계획들을 실행한다.",
    "facet": "c5",
    "positive": true
  },
  {
    "id": 146,
    "text": "나는 감정에 쉽게 휩쓸린다.",
    "facet": "n6",
    "positive": true
  },
  {
    "id": 147,
    "text": "나는 삶을 사랑한다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 148,
    "text": "나는 보수적인 후보자에게 투표하는 경향이 있다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 149,
    "text": "나는 다른 사람들의 문제에 관심이 없다.",
    "facet": "a6",
    "positive": false
  },
  {
    "id": 150,
    "text": "나는 결정을 성급하게 내리는 편이다.",
    "facet": "c6",
    "positive": false
  },
  {
    "id": 151,
    "text": "나는 주변 상황에 쉽게 영향을 받지 않는다.",
    "facet": "n1",
    "positive": false
  },
  {
    "id": 152,
    "text": "나는 친해지기 어려운 사람이다.",
    "facet": "e1",
    "positive": false
  },
  {
    "id": 153,
    "text": "나는 상황에 대해 곰곰이 생각하며 시간을 보낸다.",
    "facet": "o1",
    "positive": true
  },
  {
    "id": 154,
    "text": "나는 모든 것이 잘되리라 생각한다.",
    "facet": "a1",
    "positive": true
  },
  {
    "id": 155,
    "text": "나는 일을 어떻게 해야할지 알고 있다.",
    "facet": "c1",
    "positive": true
  },
  {
    "id": 156,
    "text": "나는 짜증을 잘 내지 않는다.",
    "facet": "n2",
    "positive": false
  },
  {
    "id": 157,
    "text": "나는 혼자 있기를 좋아한다.",
    "facet": "e2",
    "positive": false
  },
  {
    "id": 158,
    "text": "나는 예술을 좋아하지 않는다.",
    "facet": "o2",
    "positive": false
  },
  {
    "id": 159,
    "text": "나는 다른 이보다 앞서 나가기 위해 속임수를 쓰기도 한다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 160,
    "text": "나는 종종 물건들을 제자리에 놓는 것을 잊는다.",
    "facet": "c2",
    "positive": false
  },
  {
    "id": 161,
    "text": "나는 절망감을 느낄 때가 많다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 162,
    "text": "나는 다른 사람이 앞장설 때까지 기다린다.",
    "facet": "e3",
    "positive": false
  },
  {
    "id": 163,
    "text": "나는 좀처럼 감정적이지 않다.",
    "facet": "o3",
    "positive": false
  },
  {
    "id": 164,
    "text": "나는 다른 사람을 깔보는 편이다.",
    "facet": "a3",
    "positive": false
  },
  {
    "id": 165,
    "text": "나는 규칙을 어기는 편이다.",
    "facet": "c3",
    "positive": false
  },
  {
    "id": 166,
    "text": "나는 말을 더듬는 편이다.",
    "facet": "n4",
    "positive": true
  },
  {
    "id": 167,
    "text": "나는 느긋한 것을 좋아한다.",
    "facet": "e4",
    "positive": false
  },
  {
    "id": 168,
    "text": "나는 변화를 싫어한다.",
    "facet": "o4",
    "positive": false
  },
  {
    "id": 169,
    "text": "나는 선의의 경쟁을 좋아한다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 170,
    "text": "나는 나와 남을 위해 높은 기준을 세운다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 171,
    "text": "나는 좀처럼 제멋대로 행동하지 않는다.",
    "facet": "n5",
    "positive": false
  },
  {
    "id": 172,
    "text": "나는 거칠게 미친듯이 행동한다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 173,
    "text": "나는 추상적인 생각에는 관심이 없다.",
    "facet": "o5",
    "positive": false
  },
  {
    "id": 174,
    "text": "나는 스스로를 높게 평가한다.",
    "facet": "a5",
    "positive": false
  },
  {
    "id": 175,
    "text": "나는 일을 시작하는 데 어려움을 느낀다.",
    "facet": "c5",
    "positive": false
  },
  {
    "id": 176,
    "text": "나는 압박이 느껴지는 상황에서도 침착함을 유지한다.",
    "facet": "n6",
    "positive": false
  },
  {
    "id": 177,
    "text": "나는 인생을 긍정적으로 바라본다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 178,
    "text": "나는 지나치게 많은 세금이 예술을 지원하는 데 쓰인다고 믿는다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 179,
    "text": "나는 마음이 여린 사람을 싫어하는 경향이 있다.",
    "facet": "a6",
    "positive": false
  },
  {
    "id": 180,
    "text": "나는 기분 내키는 대로 행동하기를 좋아한다.",
    "facet": "c6",
    "positive": false
  },
  {
    "id": 181,
    "text": "나는 대부분의 시간을 느긋하게 보낸다.",
    "facet": "n1",
    "positive": false
  },
  {
    "id": 182,
    "text": "나는 종종 사람들 사이에서 불편함을 느낀다.",
    "facet": "e1",
    "positive": false
  },
  {
    "id": 183,
    "text": "나는 거의 공상에 잠기지 않는다.",
    "facet": "o1",
    "positive": false
  },
  {
    "id": 184,
    "text": "나는 사람을 믿지 않는다.",
    "facet": "a1",
    "positive": false
  },
  {
    "id": 185,
    "text": "나는 상황을 잘못 판단하는 경우가 많다.",
    "facet": "c1",
    "positive": false
  },
  {
    "id": 186,
    "text": "나는 거칠게 화내는 경우가 거의 없다.",
    "facet": "n2",
    "positive": false
  },
  {
    "id": 187,
    "text": "나는 혼자 있고 싶어한다.",
    "facet": "e2",
    "positive": false
  },
  {
    "id": 188,
    "text": "나는 시를 좋아하지 않는다.",
    "facet": "o2",
    "positive": false
  },
  {
    "id": 189,
    "text": "나는 사람들에게 스트레스를 준다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 190,
    "text": "나는 방을 지저분하게 만든다.",
    "facet": "c2",
    "positive": false
  },
  {
    "id": 191,
    "text": "나는 내 삶이 방향성을 잃었다고 느낀다.",
    "facet": "n3",
    "positive": true
  },
  {
    "id": 192,
    "text": "나는 전면에 잘 나서지 않는다.",
    "facet": "e3",
    "positive": false
  },
  {
    "id": 193,
    "text": "나는 나의 감정에 쉽게 잘 영향받지 않는다.",
    "facet": "o3",
    "positive": false
  },
  {
    "id": 194,
    "text": "나는 다른 사람들의 기분에 무관심한 편이다.",
    "facet": "a3",
    "positive": false
  },
  {
    "id": 195,
    "text": "나는 약속을 잘 지키지 않는다.",
    "facet": "c3",
    "positive": false
  },
  {
    "id": 196,
    "text": "나는 쉽게 당황하지 않는다.",
    "facet": "n4",
    "positive": false
  },
  {
    "id": 197,
    "text": "나는 서두르지 않는다.",
    "facet": "e4",
    "positive": false
  },
  {
    "id": 198,
    "text": "나는 변화와 관련된 생각을 떠올리고 싶지 않다.",
    "facet": "o4",
    "positive": false
  },
  {
    "id": 199,
    "text": "나는 다른 사람들에게 소리지르는 편이다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 200,
    "text": "나는 질 높은 성취를 원한다.",
    "facet": "c4",
    "positive": true
  },
  {
    "id": 201,
    "text": "나는 유혹을 쉽게 물리친다.",
    "facet": "n5",
    "positive": false
  },
  {
    "id": 202,
    "text": "나는 무엇이든 한 번 시도해 보려고 한다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 203,
    "text": "나는 철학적 논의를 피한다.",
    "facet": "o5",
    "positive": false
  },
  {
    "id": 204,
    "text": "나는 스스로가 꽤 괜찮은 사람이라 생각한다.",
    "facet": "a5",
    "positive": false
  },
  {
    "id": 205,
    "text": "나는 시간을 낭비한다.",
    "facet": "c5",
    "positive": false
  },
  {
    "id": 206,
    "text": "나는 복잡한 문제를 처리할 수 있다.",
    "facet": "n6",
    "positive": false
  },
  {
    "id": 207,
    "text": "나는 크게 웃는 편이다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 208,
    "text": "나는 법이 엄격하게 지켜져야 한다고 믿는다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 209,
    "text": "나는 눈에 눈, 이에는 이라고 생각한다.",
    "facet": "a6",
    "positive": false
  },
  {
    "id": 210,
    "text": "나는 성급하게 일을 서두른다.",
    "facet": "c6",
    "positive": false
  },
  {
    "id": 211,
    "text": "나는 주변 일들에 의해 쉽게 방해받지 않는다.",
    "facet": "n1",
    "positive": false
  },
  {
    "id": 212,
    "text": "나는 다른 사람들과의 접촉을 피한다.",
    "facet": "e1",
    "positive": false
  },
  {
    "id": 213,
    "text": "나는 상상력이 좋지 않다.",
    "facet": "o1",
    "positive": false
  },
  {
    "id": 214,
    "text": "나는 다른 사람들에게 숨겨진 의도가 있을 것이라 생각한다.",
    "facet": "a1",
    "positive": false
  },
  {
    "id": 215,
    "text": "나는 주위 상황을 잘 고려하지 못하는 편이다.",
    "facet": "c1",
    "positive": false
  },
  {
    "id": 216,
    "text": "나는 쉽게 짜증내지 않는다.",
    "facet": "n2",
    "positive": false
  },
  {
    "id": 217,
    "text": "나는 사람들로 붐비는 행사를 좋아하지 않는다.",
    "facet": "e2",
    "positive": false
  },
  {
    "id": 218,
    "text": "나는 미술관에 가는 것을 즐기지 않는다.",
    "facet": "o2",
    "positive": false
  },
  {
    "id": 219,
    "text": "나는 다른 사람들을 걱정하는 척 한다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 220,
    "text": "나는 물건을 잘 잃어버린다.",
    "facet": "c2",
    "positive": false
  },
  {
    "id": 221,
    "text": "나는 우울함을 거의 느끼지 않는다.",
    "facet": "n3",
    "positive": false
  },
  {
    "id": 222,
    "text": "나는 내 주장을 거의 말하지 않는다.",
    "facet": "e3",
    "positive": false
  },
  {
    "id": 223,
    "text": "나는 내 감정적 반응들을 거의 눈치채지 못한다.",
    "facet": "o3",
    "positive": false
  },
  {
    "id": 224,
    "text": "나는 사람들을 불편하게 만든다.",
    "facet": "a3",
    "positive": false
  },
  {
    "id": 225,
    "text": "나는 다른 사람들에게 내가 해야할 일을 시킨다.",
    "facet": "c3",
    "positive": false
  },
  {
    "id": 226,
    "text": "나는 낯선 상황에서도 편안함을 느낀다.",
    "facet": "n4",
    "positive": false
  },
  {
    "id": 227,
    "text": "나는 여유로운 생활 방식을 좋아한다.",
    "facet": "e4",
    "positive": false
  },
  {
    "id": 228,
    "text": "나는 지금껏 해 오던 습관대로 지낸다.",
    "facet": "o4",
    "positive": false
  },
  {
    "id": 229,
    "text": "나는 사람들을 무시하는 편이다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 230,
    "text": "나는 성공하고자 하는 욕구가 별로 없다.",
    "facet": "c4",
    "positive": false
  },
  {
    "id": 231,
    "text": "나는 나의 갈망을 조절할 수 있다.",
    "facet": "n5",
    "positive": false
  },
  {
    "id": 232,
    "text": "나는 위험을 추구한다.",
    "facet": "e5",
    "positive": true
  },
  {
    "id": 233,
    "text": "나는 추상적인 생각을 이해하는 데 어려움을 겪는다.",
    "facet": "o5",
    "positive": false
  },
  {
    "id": 234,
    "text": "나는 매우 박학다식하다.",
    "facet": "a5",
    "positive": false
  },
  {
    "id": 235,
    "text": "나는 일을 시작하기 위해서는 재촉이나 자극이 필요하다.",
    "facet": "c5",
    "positive": false
  },
  {
    "id": 236,
    "text": "나는 상황에 대처하는 방법을 알고 있다.",
    "facet": "n6",
    "positive": false
  },
  {
    "id": 237,
    "text": "나는 친구들을 즐겁게 해 준다.",
    "facet": "e6",
    "positive": true
  },
  {
    "id": 238,
    "text": "나는 우리 사회가 범죄자들에게 매우 관대하다고 믿는다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 239,
    "text": "나는 어려운 사람들에 대해 생각하지 않으려고 노력한다.",
    "facet": "a6",
    "positive": false
  },
  {
    "id": 240,
    "text": "나는 때때로 터무니 없는 행동을 한다.",
    "facet": "c6",
    "positive": false
  },
  {
    "id": 241,
    "text": "나는 이미 일어난 일에 대해 걱정하지 않는다.",
    "facet": "n1",
    "positive": false
  },
  {
    "id": 242,
    "text": "나는 다른 사람들에게 정말 관심이 없다.",
    "facet": "e1",
    "positive": false
  },
  {
    "id": 243,
    "text": "나는 거의 사색에 잠기지 않는다.",
    "facet": "o1",
    "positive": false
  },
  {
    "id": 244,
    "text": "나는 다른 사람들을 경계한다.",
    "facet": "a1",
    "positive": false
  },
  {
    "id": 245,
    "text": "나는 기여하는 바가 거의 없다.",
    "facet": "c1",
    "positive": false
  },
  {
    "id": 246,
    "text": "나는 냉정함을 유지한다.",
    "facet": "n2",
    "positive": false
  },
  {
    "id": 247,
    "text": "나는 사람이 많은 것을 피한다.",
    "facet": "e2",
    "positive": false
  },
  {
    "id": 248,
    "text": "나는 콘서트를 좋아하지 않는다.",
    "facet": "o2",
    "positive": false
  },
  {
    "id": 249,
    "text": "나는 다른 사람을 이용한다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 250,
    "text": "나는 주변에 단정치 못한 사람이 있어도 신경을 안 쓴다.",
    "facet": "c2",
    "positive": false
  },
  {
    "id": 251,
    "text": "나는 내 자신에 대해 편안함을 느낀다.",
    "facet": "n3",
    "positive": false
  },
  {
    "id": 252,
    "text": "나는 나에게 관심이 쏠리는 것을 싫어한다.",
    "facet": "e3",
    "positive": false
  },
  {
    "id": 253,
    "text": "나는 감정기복이 거의 없다.",
    "facet": "o3",
    "positive": false
  },
  {
    "id": 254,
    "text": "나는 다른 사람들에게 도움을 주지 않고 외면한다.",
    "facet": "a3",
    "positive": false
  },
  {
    "id": 255,
    "text": "나는 요청받은 것과 반대로 한다.",
    "facet": "c3",
    "positive": false
  },
  {
    "id": 256,
    "text": "나는 어려운 사회적 상황에도 크게 개의치 않는다.",
    "facet": "n4",
    "positive": false
  },
  {
    "id": 257,
    "text": "나는 일이 자연스럽게 흘러가도록 두는 편이다.",
    "facet": "e4",
    "positive": false
  },
  {
    "id": 258,
    "text": "나는 새로운 음식을 싫어한다.",
    "facet": "o4",
    "positive": false
  },
  {
    "id": 259,
    "text": "나는 다른 사람에게 당한 것에 대해 되돌려 준다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 260,
    "text": "나는 그럭저럭 살아갈 수 있을 만큼만 일한다.",
    "facet": "c4",
    "positive": false
  },
  {
    "id": 261,
    "text": "나는 내가 감당할 수 있는 것 이상으로 소비하지 않는다.",
    "facet": "n5",
    "positive": false
  },
  {
    "id": 262,
    "text": "나는 행글라이딩이나 번지점프를 절대 하지 않을 것이다.",
    "facet": "e5",
    "positive": false
  },
  {
    "id": 263,
    "text": "나는 이론적인 논의들에 관심이 없다.",
    "facet": "o5",
    "positive": false
  },
  {
    "id": 264,
    "text": "나는 나의 선행을 자랑한다.",
    "facet": "a5",
    "positive": false
  },
  {
    "id": 265,
    "text": "나는 일을 시작하는 데 어려움을 겪는다.",
    "facet": "c5",
    "positive": false
  },
  {
    "id": 266,
    "text": "나는 좌절을 쉽게 극복한다.",
    "facet": "n6",
    "positive": false
  },
  {
    "id": 267,
    "text": "나는 쉽게 흥겨워하지 않는다.",
    "facet": "e6",
    "positive": false
  },
  {
    "id": 268,
    "text": "나는 우리가 범죄에 대해 엄격해야 한다고 믿는다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 269,
    "text": "나는 사람들은 스스로 자립해야 한다고 믿는다.",
    "facet": "a6",
    "positive": false
  },
  {
    "id": 270,
    "text": "나는 생각없이 행동하는 편이다.",
    "facet": "c6",
    "positive": false
  },
  {
    "id": 271,
    "text": "나는 새로운 상황에 쉽게 적응한다.",
    "facet": "n1",
    "positive": false
  },
  {
    "id": 272,
    "text": "나는 다른 사람들과 거리를 둔다.",
    "facet": "e1",
    "positive": false
  },
  {
    "id": 273,
    "text": "나는 무언가를 상상하는 데 어려움을 겪는다.",
    "facet": "o1",
    "positive": false
  },
  {
    "id": 274,
    "text": "나는 사람들이 본질적으로 악하다고 믿는다.",
    "facet": "a1",
    "positive": false
  },
  {
    "id": 275,
    "text": "나는 일의 결과들을 예측하지 못한다.",
    "facet": "c1",
    "positive": false
  },
  {
    "id": 276,
    "text": "나는 좀처럼 불평하지 않는다.",
    "facet": "n2",
    "positive": false
  },
  {
    "id": 277,
    "text": "나는 조용한 것을 추구한다.",
    "facet": "e2",
    "positive": false
  },
  {
    "id": 278,
    "text": "나는 댄스 공연을 보는 것을 즐기지 않는다.",
    "facet": "o2",
    "positive": false
  },
  {
    "id": 279,
    "text": "나는 다른 사람들의 계획을 방해한다.",
    "facet": "a2",
    "positive": false
  },
  {
    "id": 280,
    "text": "나는 어수선함에 영향을 받지 않는다.",
    "facet": "c2",
    "positive": false
  },
  {
    "id": 281,
    "text": "나는 내 자신에 대해 매우 만족감을 느낀다.",
    "facet": "n3",
    "positive": false
  },
  {
    "id": 282,
    "text": "나는 나의 의견을 억누른다.",
    "facet": "e3",
    "positive": false
  },
  {
    "id": 283,
    "text": "나는 감정적으로 행동하는 사람들을 이해하지 못한다.",
    "facet": "o3",
    "positive": false
  },
  {
    "id": 284,
    "text": "나는 다른 사람에게 시간을 할애하지 않는다.",
    "facet": "a3",
    "positive": false
  },
  {
    "id": 285,
    "text": "나는 사실을 틀리게 전달하는 편이다.",
    "facet": "c3",
    "positive": false
  },
  {
    "id": 286,
    "text": "나는 스스로 자립할 수 있다.",
    "facet": "n4",
    "positive": false
  },
  {
    "id": 287,
    "text": "나는 천천히 반응한다.",
    "facet": "e4",
    "positive": false
  },
  {
    "id": 288,
    "text": "나는 기존 방식에 집착한다.",
    "facet": "o4",
    "positive": false
  },
  {
    "id": 289,
    "text": "나는 원한을 품는 편이다.",
    "facet": "a4",
    "positive": false
  },
  {
    "id": 290,
    "text": "나는 나의 일에 시간과 노력을 거의 기울이지 않는다.",
    "facet": "c4",
    "positive": false
  },
  {
    "id": 291,
    "text": "나는 절대 낭비하지 않는다.",
    "facet": "n5",
    "positive": false
  },
  {
    "id": 292,
    "text": "나는 시끄러운 음악을 싫어한다.",
    "facet": "e5",
    "positive": false
  },
  {
    "id": 293,
    "text": "나는 어려운 읽을 거리를 피한다.",
    "facet": "o5",
    "positive": false
  },
  {
    "id": 294,
    "text": "나는 언제나 주변 사람들의 관심을 한몸에 받고 있다.",
    "facet": "a5",
    "positive": false
  },
  {
    "id": 295,
    "text": "나는 결정들을 미룬다.",
    "facet": "c5",
    "positive": false
  },
  {
    "id": 296,
    "text": "나는 긴장된 상황에서도 침착하다.",
    "facet": "n6",
    "positive": false
  },
  {
    "id": 297,
    "text": "나는 농담을 거의 하지 않는다.",
    "facet": "e6",
    "positive": false
  },
  {
    "id": 298,
    "text": "나는 애국가가 나오는 동안 서 있기를 좋아한다.",
    "facet": "o6",
    "positive": false
  },
  {
    "id": 299,
    "text": "나는 약자가 싫다.",
    "facet": "a6",
    "positive": false
  },
  {
    "id": 300,
    "text": "나는 자주 계획을 급하게 세우는 편이다.",
    "facet": "c6",
    "positive": false
  }
];

export const SCALE_OPTIONS = [
  { value: 1, label: '전혀 그렇지 않다', shortLabel: '전혀 아니다' },
  { value: 2, label: '그렇지 않다', shortLabel: '아니다' },
  { value: 3, label: '보통이다', shortLabel: '보통' },
  { value: 4, label: '그렇다', shortLabel: '그렇다' },
  { value: 5, label: '매우 그렇다', shortLabel: '매우 그렇다' }
] as const;

export const DOMAIN_INTERPRETATIONS: Record<DomainCode, InterpretationLevel[]> = {
  "N": [
    {
      "minScore": 80,
      "title": "정서적으로 매우 민감한 편입니다",
      "paragraphs": [
        "부정적 감정(불안, 분노, 우울 등)을 일반인보다 훨씬 강하게, 자주 경험합니다. 일상적인 스트레스도 큰 부담으로 느껴질 수 있으며, 감정이 빠르게 치솟거나 가라앉기도 합니다.",
        "이러한 높은 감수성은 예술적·공감적 능력과 연결되는 경우도 많지만, 장기적으로는 소진(burnout)이나 대인 갈등의 원인이 될 수 있습니다. 마음챙김(mindfulness), 규칙적인 운동, 신뢰할 수 있는 상담자와의 대화가 감정 조절에 실질적인 도움을 줍니다.",
        "자신의 감정 촉발 요인(trigger)을 파악하고, '감정은 사실이 아니라 신호'임을 기억하는 것이 회복탄력성을 높이는 첫걸음입니다."
      ]
    },
    {
      "minScore": 60,
      "title": "스트레스에 비교적 민감한 편입니다",
      "paragraphs": [
        "평균보다 부정적 감정을 더 자주, 더 강하게 느끼는 편입니다. 걱정이 머릿속을 맴돌거나, 사소한 일에도 기분이 영향받는 경험이 익숙할 것입니다.",
        "감정을 억누르기보다 건강하게 표현하고 처리하는 루틴이 중요합니다. 일기 쓰기, 충분한 수면, 사회적 지지망 유지가 심리적 완충제 역할을 합니다.",
        "어려운 상황에서 '최악의 시나리오'보다 '현실적 시나리오'에 집중하는 연습을 꾸준히 하면 일상이 한결 편안해집니다."
      ]
    },
    {
      "minScore": 40,
      "title": "감정적으로 비교적 균형 잡혀 있습니다",
      "paragraphs": [
        "스트레스 상황에서 부정적 감정을 경험하지만, 이를 적절히 다스리는 능력도 갖추고 있습니다. 극단적으로 흔들리기보다는 상황을 파악하고 차분히 대응하는 편입니다.",
        "일반적인 생활 압박에 잘 적응하며, 감정의 기복이 삶의 질을 크게 해치는 수준은 아닙니다. 다만 특정 상황(큰 변화, 인간관계 갈등 등)에서는 스트레스 관리 전략을 의식적으로 활용하면 도움이 됩니다."
      ]
    },
    {
      "minScore": 20,
      "title": "정서적으로 안정적인 편입니다",
      "paragraphs": [
        "대부분의 상황에서 감정의 균형을 잘 유지합니다. 타인이 동요할 만한 상황에서도 침착하게 행동하는 경향이 있으며, 스트레스를 효율적으로 처리합니다.",
        "이러한 안정성은 리더십 발휘, 위기 상황 대응, 장기 프로젝트 수행 등에서 강점으로 작용합니다. 단, 지나치게 감정을 억제하고 있지는 않은지 가끔 내면을 살피는 것도 좋습니다."
      ]
    },
    {
      "minScore": 0,
      "title": "탁월한 정서적 안정성을 지니고 있습니다",
      "paragraphs": [
        "압박·갈등·불확실성 속에서도 평정심을 유지하는 능력이 매우 뛰어납니다. 부정적 감정에 거의 흔들리지 않으며, 회복탄력성(resilience)이 높습니다.",
        "이는 만성 스트레스 환경에서도 높은 성과를 유지하는 데 큰 자산입니다. 다만, 타인의 감정적 고통에 충분히 공감하고 있는지 점검해보면 대인 관계를 더욱 풍부하게 만들 수 있습니다."
      ]
    }
  ],
  "E": [
    {
      "minScore": 80,
      "title": "에너지 넘치는 사교형입니다",
      "paragraphs": [
        "사람들과의 교류에서 활력을 얻으며, 새로운 만남과 자극적인 활동을 적극적으로 추구합니다. 대화를 주도하고 분위기를 띄우는 데 자연스러운 재능이 있습니다.",
        "리더십, 영업·협상, 네트워킹이 필요한 역할에서 강점을 발휘합니다. 혼자 하는 심층 작업보다 팀 기반 협업이 더 잘 맞을 수 있습니다.",
        "높은 자극 추구 성향으로 인해 루틴한 업무에서 쉽게 지루함을 느낄 수 있으니, 다양성과 변화를 의도적으로 일과에 배치하면 지속적인 동기를 유지하기 좋습니다."
      ]
    },
    {
      "minScore": 60,
      "title": "활발하고 사교적인 편입니다",
      "paragraphs": [
        "사람들과 어울리는 것을 즐기고 사회적 상황에서 자신감 있게 행동합니다. 긍정적인 감정을 자주 경험하며, 낯선 환경에서도 빠르게 적응합니다.",
        "팀 협업이나 발표·소통이 많은 업무 환경이 잘 맞습니다. 혼자 집중해야 하는 시간이 길어지면 에너지가 소진될 수 있으므로, 중간중간 사람들과의 상호작용 시간을 확보하는 것이 좋습니다."
      ]
    },
    {
      "minScore": 40,
      "title": "상황에 따라 유연하게 사교성을 조절합니다",
      "paragraphs": [
        "외향성과 내향성을 균형 있게 지닌 양향형(ambivert)에 가깝습니다. 사람들과의 교류도 즐기지만, 혼자만의 시간도 충분히 필요로 합니다.",
        "다양한 사회적 상황에 무리 없이 적응하며, 팀 환경과 독립 작업 모두에서 능력을 발휘합니다. 이러한 유연성은 다양한 역할에서 폭넓게 활용될 수 있는 강점입니다."
      ]
    },
    {
      "minScore": 20,
      "title": "사려 깊은 내향형입니다",
      "paragraphs": [
        "혼자 또는 소수의 친밀한 사람들과 함께하는 시간을 선호하며, 대규모 사교 모임에서는 에너지가 소모되는 경향이 있습니다.",
        "혼자 깊이 생각하고, 집중해서 일하는 환경에서 최고의 성과를 냅니다. 글쓰기, 분석, 연구, 창작 등 독립적인 작업에 강점이 있습니다.",
        "사회적 상황이 부담스럽게 느껴질 때는 '짧게 참여하고 충분히 휴식하는' 전략이 효과적입니다."
      ]
    },
    {
      "minScore": 0,
      "title": "뚜렷한 내향형으로 깊이 있는 집중을 즐깁니다",
      "paragraphs": [
        "고요한 환경과 혼자만의 시간을 통해 에너지를 충전합니다. 넓은 네트워크보다 소수의 깊은 관계를 소중히 여기며, 내면 탐구와 집중적인 사고에서 진정한 만족감을 얻습니다.",
        "긴 집중력이 필요한 작업(연구, 프로그래밍, 집필, 설계 등)에서 탁월한 성과를 낼 수 있습니다. 사회적 상황에서의 에너지 소진을 예방하기 위해 명확한 경계를 설정하고 회복 시간을 확보하는 것이 중요합니다."
      ]
    }
  ],
  "O": [
    {
      "minScore": 80,
      "title": "지적 호기심과 창의성이 매우 풍부합니다",
      "paragraphs": [
        "새로운 아이디어, 예술, 철학, 과학에 폭넓고 깊은 관심을 가지며, 독창적인 사고방식으로 세상을 탐구합니다. 기존의 틀을 벗어난 해결책을 떠올리는 데 탁월합니다.",
        "창의적인 분야(예술, 디자인, 연구, 기획, 교육 등)에서 두드러진 강점을 발휘합니다. 변화와 새로운 자극을 즐기기 때문에 반복적이고 구조화된 업무보다는 탐구와 혁신이 중심인 환경이 잘 맞습니다.",
        "다양한 분야를 넘나드는 광범위한 관심사가 때로 집중력 분산이나 완성을 어렵게 할 수 있습니다. 아이디어를 실행까지 연결하는 구체적인 루틴을 함께 갖추면 더욱 강력해집니다."
      ]
    },
    {
      "minScore": 60,
      "title": "열린 마음으로 새로운 경험을 즐깁니다",
      "paragraphs": [
        "다양한 분야에 관심을 가지며, 예술적 감수성과 지적 탐구를 즐깁니다. 새로운 관점과 아이디어에 자연스럽게 흥미를 느끼고 기꺼이 탐험에 나섭니다.",
        "창의적 문제 해결과 새로운 환경 적응에 강점이 있습니다. 다양한 배경의 사람들과 소통하며 영감을 주고받는 것을 즐기는 편입니다."
      ]
    },
    {
      "minScore": 40,
      "title": "실용성과 개방성을 균형 있게 조화시킵니다",
      "paragraphs": [
        "새로운 것에 흥미를 느끼면서도 검증된 방식을 신뢰하는 균형 잡힌 태도를 지니고 있습니다. 상황에 따라 창의적으로 접근하거나 안정적인 방법을 선택할 수 있는 유연성이 있습니다.",
        "지나치게 보수적이지도, 지나치게 이상적이지도 않은 실용적인 판단력이 강점입니다. 이 균형감은 팀 내에서 혁신과 안정을 잇는 역할을 하는 데 유용합니다."
      ]
    },
    {
      "minScore": 20,
      "title": "실용적이고 현실 중심적인 편입니다",
      "paragraphs": [
        "검증된 방법과 구체적인 결과를 선호하며, 친숙한 환경과 루틴에서 안정감을 느낍니다. 추상적 이론보다 실질적이고 손에 잡히는 것에 더 가치를 둡니다.",
        "안정적인 실행력과 일관성이 강점입니다. 다만, 빠르게 변화하는 환경에서 새로운 접근 방식을 의식적으로 탐색해보면 적응 폭을 넓힐 수 있습니다."
      ]
    },
    {
      "minScore": 0,
      "title": "전통적·실용적 가치를 강하게 선호합니다",
      "paragraphs": [
        "구체적이고 검증된 것을 강하게 선호하며, 추상적 개념이나 급격한 변화보다는 예측 가능하고 안정적인 환경에서 최고의 성과를 냅니다.",
        "일관성과 신뢰성이 높아 장기 프로젝트나 안정적인 운영이 중요한 역할에서 강점을 발휘합니다. 새로운 시각을 다양한 사람들로부터 적극적으로 받아들이면 사고의 폭이 넓어질 수 있습니다."
      ]
    }
  ],
  "A": [
    {
      "minScore": 80,
      "title": "매우 따뜻하고 배려 깊은 협력자입니다",
      "paragraphs": [
        "타인의 감정과 필요를 세심하게 배려하며, 갈등보다 조화를 추구합니다. 이타적이고 공감 능력이 뛰어나 주변 사람들에게 든든한 지지자가 됩니다.",
        "상담, 돌봄, 교육, 사회복지, 팀 갈등 조정 등 협력과 공감이 핵심인 역할에서 두드러진 강점을 발휘합니다.",
        "다른 사람을 배려하다 보면 자신의 필요와 경계를 소홀히 하기 쉽습니다. '노(No)'라고 말하는 연습과 자신을 우선시하는 건강한 자기 돌봄이 장기적인 소진을 막아줍니다."
      ]
    },
    {
      "minScore": 60,
      "title": "친절하고 협력적인 편입니다",
      "paragraphs": [
        "타인을 신뢰하고 배려하는 성향이 강하며, 팀워크를 중시합니다. 갈등 상황에서 중재자 역할을 자연스럽게 맡기도 하며, 사람들이 편안함을 느끼는 환경을 만드는 데 기여합니다.",
        "인간관계에서 신뢰와 호감을 쉽게 얻는 편입니다. 협력과 개인 목표 사이의 균형을 유지하면서, 자신의 의견도 명확하게 표현하는 연습을 병행하면 더욱 균형 잡힌 관계를 만들 수 있습니다."
      ]
    },
    {
      "minScore": 40,
      "title": "협력과 자기주장 사이에서 유연하게 균형을 잡습니다",
      "paragraphs": [
        "상황에 따라 배려와 자기주장을 적절히 조절합니다. 타인을 존중하면서도 자신의 이익과 경계를 지키는 실용적인 대인 관계를 맺습니다.",
        "팀 환경과 독립 환경 모두에서 무리 없이 협업하는 유연성이 있습니다. 관계에서 불필요한 마찰을 피하면서도 필요할 때는 명확하게 의사를 전달할 수 있습니다."
      ]
    },
    {
      "minScore": 20,
      "title": "자기주장이 강하고 직접적인 편입니다",
      "paragraphs": [
        "자신의 의견을 분명히 표현하고, 경쟁적인 상황에서 자신의 이익을 적극적으로 추구합니다. 직접적이고 솔직한 의사소통을 선호하며, 목표를 향해 단호하게 행동합니다.",
        "협상, 경쟁, 주도적인 의사결정이 필요한 역할에서 강점을 발휘합니다. 타인의 감정적 반응을 의식적으로 고려하는 습관을 들이면 관계의 마찰을 줄이고 더 효과적으로 협력할 수 있습니다."
      ]
    },
    {
      "minScore": 0,
      "title": "독립적이고 경쟁적인 성향이 강합니다",
      "paragraphs": [
        "타인의 의견에 쉽게 흔들리지 않으며, 자신의 판단과 목표를 강하게 추구합니다. 경쟁적 상황에서 두드러진 강인함을 보이며, 자기 이익을 명확히 지키는 능력이 뛰어납니다.",
        "협력보다 독립적인 성과가 중시되는 환경에서 강점이 발휘됩니다. 타인과의 협력을 의식적으로 연습하고, 공통의 목표를 찾아 협업하는 경험을 쌓으면 더 폭넓은 성과를 이룰 수 있습니다."
      ]
    }
  ],
  "C": [
    {
      "minScore": 80,
      "title": "매우 체계적이고 목표 지향적입니다",
      "paragraphs": [
        "높은 자기 규율과 책임감으로 맡은 일을 철저히 완수합니다. 세부 사항에 주의를 기울이고, 계획에 따라 행동하며, 약속과 기한을 지키는 것을 매우 중요하게 여깁니다.",
        "장기 목표 달성, 복잡한 프로젝트 관리, 신뢰가 필요한 역할에서 탁월한 성과를 냅니다. '해야 할 일' 목록이 잘 정리되어 있을 때 안정감을 느끼는 편입니다.",
        "지나친 완벽주의는 실행 속도를 늦추거나 타인에게 높은 기준을 강요하는 결과로 이어질 수 있습니다. 80% 완성도에서 출시·공유하는 연습이 유연성을 키우는 데 도움이 됩니다."
      ]
    },
    {
      "minScore": 60,
      "title": "성실하고 계획적인 편입니다",
      "paragraphs": [
        "목표를 명확히 세우고 이를 달성하기 위해 꾸준히 노력하며, 약속과 기한을 잘 지킵니다. 주변 사람들로부터 신뢰할 수 있는 파트너로 여겨지는 경우가 많습니다.",
        "업무 환경에서 높은 생산성을 보이고, 장기 계획의 실행력이 뛰어납니다. 예상치 못한 변화나 즉흥적인 상황에서도 대응 능력을 유지하도록 약간의 유연성을 더하면 더욱 균형 잡힌 강점이 됩니다."
      ]
    },
    {
      "minScore": 40,
      "title": "필요에 따라 체계성과 유연성을 균형 있게 활용합니다",
      "paragraphs": [
        "중요한 일에는 집중력과 계획성을 발휘하면서, 덜 중요한 부분에서는 여유롭게 대응합니다. 지나치게 경직되지도, 지나치게 즉흥적이지도 않은 실용적인 균형감이 있습니다.",
        "이 균형은 다양한 상황에서 적응력 있게 행동하게 해주는 강점입니다. 마감이 촉박하거나 중요한 프로젝트에서는 계획을 더 세밀하게 세우면 결과가 좋아질 수 있습니다."
      ]
    },
    {
      "minScore": 20,
      "title": "자유롭고 융통성 있는 생활 방식을 선호합니다",
      "paragraphs": [
        "엄격한 계획보다는 상황의 흐름에 따라 유연하게 대응하는 것을 즐깁니다. 즉흥적이고 창의적인 문제 해결 방식을 선호하며, 지나치게 구조화된 환경에서는 답답함을 느낄 수 있습니다.",
        "변화에 빠르게 적응하고 새로운 방향으로 전환하는 유연성이 강점입니다. 중요한 마감과 약속을 관리하는 간단한 시스템(예: 캘린더 알림, 할 일 목록)을 도입하면 유연성을 유지하면서도 실수를 줄일 수 있습니다."
      ]
    },
    {
      "minScore": 0,
      "title": "자유롭고 즉흥적인 삶의 방식을 추구합니다",
      "paragraphs": [
        "구조화된 계획보다 상황의 흐름에 따라 행동하는 것을 강하게 선호합니다. 엄격한 루틴이나 세밀한 계획 수립이 답답하게 느껴질 수 있으며, 자유롭고 개방된 환경에서 더 잘 기능합니다.",
        "이러한 자유로운 성향은 창의적 탐구와 적응적 문제 해결에 도움이 될 수 있습니다. 장기 목표를 향한 일관된 진전을 위해, 작은 습관부터 하나씩 쌓아가는 접근이 효과적입니다. 완벽한 시스템보다 '충분히 좋은' 루틴이 실천 가능성을 높입니다."
      ]
    }
  ]
};

export const MBTI_VS_BIG5 = {
  intro: {
    title: 'MBTI와 BIG-5의 과학적 차이',
    subtitle: '왜 현대 심리학과 인사조직에서는 MBTI 대신 BIG-5를 신뢰할까요?',
  },
  differences: [
    {
      category: '측정 방식',
      mbti: '흑백논리형 이분법 (E vs I, S vs N)',
      big5: '연속 스펙트럼 백분위 (0~100점 정규분포)',
      explanation: 'MBTI는 외향성 51%와 49%를 완전히 다른 사람(E vs I)으로 분류하지만, BIG-5는 내 위치가 인구의 상위 몇 %인지 정확한 점수로 진단합니다.'
    },
    {
      category: '하위 요인 정밀도',
      mbti: '16가지 성격 유형으로 단순화',
      big5: '5대 도메인 × 6개 = 30개 세부 Facet',
      explanation: '사람을 16개 박스에 가두지 않고, "사교성은 낮지만 리더십(주도성)은 높은" 복합적인 고유성을 입체적으로 포착합니다.'
    },
    {
      category: '정서적 안정성 진단',
      mbti: '스트레스/불안 취약성 측정 불가 (-T/-A는 비공식 변형)',
      big5: '신경증(N) 축을 통한 멘탈 건강도 정밀 측정',
      explanation: '사회생활과 웰빙에서 가장 중요한 스트레스 대처력, 불안, 충동 조절 능력을 정식 축(Neuroticism)으로 측정합니다.'
    },
    {
      category: '학술적 신뢰도',
      mbti: '재검사 시 50%가 유형 변경 (낮은 신뢰도)',
      big5: '수십 년간 전 세계 심리학계가 검증한 표준 모델',
      explanation: '시간이 흘러도 높은 재검사 일치도를 보이며, 직무 성과와 대인 관계 만족도를 예측하는 타당도가 탁월합니다.'
    }
  ],
  mapping: [
    { mbtiDim: 'E / I (외향 vs 내향)', big5Domain: 'E (외향성)', desc: '사회적 에너지, 사교성, 주도성, 활동성' },
    { mbtiDim: 'S / N (감각 vs 직관)', big5Domain: 'O (개방성)', desc: '지적 호기심, 창의성, 예술적 감수성, 새로운 경험에 대한 수용' },
    { mbtiDim: 'T / F (사고 vs 감정)', big5Domain: 'A (우호성)', desc: '타인에 대한 공감, 신뢰, 이타심, 협조적 태도' },
    { mbtiDim: 'J / P (판단 vs 인식)', big5Domain: 'C (성실성)', desc: '목표 지향성, 체계성, 계획성, 자기 규율' },
    { mbtiDim: 'MBTI에 없음 (-T / -A)', big5Domain: 'N (신경성)', desc: '스트레스 민감도, 정서적 불안정성, 회복탄력성' }
  ]
};
