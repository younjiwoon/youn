
import { Question, LearningStyle, MBTITrait, MBTIResult } from './types';

export const QUESTIONS: Question[] = [
  {
    text: "새로운 스킬을 배울 때, 당신의 접근법은?",
    answers: [
      { text: "친구들과 그룹 스터디", trait: MBTITrait.E },
      { text: "혼자 조용히 탐구", trait: MBTITrait.I },
    ],
  },
  {
    text: "어려운 문제에 직면했을 때, 당신은...",
    answers: [
      { text: "실제 데이터를 분석한다", trait: MBTITrait.S },
      { text: "숨겨진 의미를 찾는다", trait: MBTITrait.N },
    ],
  },
  {
    text: "과제 피드백을 받을 때, 더 중요한 것은?",
    answers: [
      { text: "논리적인 분석", trait: MBTITrait.T },
      { text: "따뜻한 격려", trait: MBTITrait.F },
    ],
  },
  {
    text: "시험공부 계획을 세울 때, 당신은...",
    answers: [
      { text: "미리 꼼꼼하게 계획", trait: MBTITrait.J },
      { text: "상황에 맞춰 유연하게", trait: MBTITrait.P },
    ],
  },
  {
    text: "수업이 끝난 후, 에너지를 얻는 방법은?",
    answers: [
      { text: "친구들과 토론하며", trait: MBTITrait.E },
      { text: "혼자 내용을 정리하며", trait: MBTITrait.I },
    ],
  },
  {
    text: "새로운 지식을 접할 때, 더 끌리는 것은?",
    answers: [
      { text: "구체적인 사례와 사실", trait: MBTITrait.S },
      { text: "미래의 가능성과 비전", trait: MBTITrait.N },
    ],
  },
  {
    text: "팀 프로젝트에서 갈등이 생겼을 때, 당신의 역할은?",
    answers: [
      { text: "객관적인 해결책 제시", trait: MBTITrait.T },
      { text: "팀원들의 감정 조율", trait: MBTITrait.F },
    ],
  },
  {
    text: "장기 프로젝트를 시작할 때, 당신의 스타일은?",
    answers: [
      { text: "명확한 목표와 마감일 설정", trait: MBTITrait.J },
      { text: "새로운 아이디어를 탐색하며 진행", trait: MBTITrait.P },
    ],
  },
  {
    text: "당신이 선호하는 학습 환경은?",
    answers: [
      { text: "활발한 토론이 있는 곳", trait: MBTITrait.E },
      { text: "집중할 수 있는 조용한 곳", trait: MBTITrait.I },
    ],
  },
  {
    text: "설명을 들을 때, 더 이해하기 쉬운 방식은?",
    answers: [
      { text: "단계별로 차근차근", trait: MBTITrait.S },
      { text: "전체적인 그림을 먼저", trait: MBTITrait.N },
    ],
  },
  {
    text: "지식을 나눌 때, 당신은...",
    answers: [
      { text: "정확한 정보 전달에 집중", trait: MBTITrait.T },
      { text: "듣는 사람의 마음에 공감", trait: MBTITrait.F },
    ],
  },
  {
    text: "공부할 목록이 많을 때, 당신은?",
    answers: [
      { text: "체크리스트를 만들어 완수", trait: MBTITrait.J },
      { text: "그때그때 흥미로운 것부터", trait: MBTITrait.P },
    ],
  },
];

export const LEARNING_STYLES: Record<MBTIResult, LearningStyle> = {
  ISTJ: {
    title: "현실적인 전략가",
    description: "사실에 기반하여 체계적으로 학습하는 것을 선호합니다. 구체적인 목표를 세우고 꾸준히 노력하며, 신뢰할 수 있는 정보를 바탕으로 지식을 쌓아갑니다.",
    keywords: ["체계적", "사실 기반", "꾸준함"],
  },
  ISFJ: {
    title: "따뜻한 현실주의자",
    description: "다른 사람을 도우며 배울 때 가장 효과적입니다. 구체적인 예시와 실제 경험을 통해 배우는 것을 좋아하며, 안정적인 학습 환경에서 뛰어난 능력을 보입니다.",
    keywords: ["헌신적", "실용적", "안정감"],
  },
  INFJ: {
    title: "통찰력 있는 예언가",
    description: "개념과 아이디어의 깊은 의미를 탐구하는 것을 즐깁니다. 장기적인 비전을 가지고 학습하며, 자신의 가치관과 일치하는 지식을 습득할 때 동기부여됩니다.",
    keywords: ["통찰력", "의미 추구", "비전"],
  },
  INTJ: {
    title: "독창적인 설계자",
    description: "복잡한 이론과 시스템을 파악하는 데 능숙합니다. 논리적이고 비판적인 사고를 통해 지식을 재구성하며, 독립적으로 학습하는 환경에서 최고의 효율을 보입니다.",
    keywords: ["전략적", "논리적", "독립성"],
  },
  ISTP: {
    title: "논리적인 탐험가",
    description: "직접 부딪히고 경험하며 배우는 것을 가장 좋아합니다. 문제 해결 과정 자체를 즐기며, 실용적인 기술을 습득하는 데 뛰어난 재능을 보입니다.",
    keywords: ["실습", "문제 해결", "효율성"],
  },
  ISFP: {
    title: "유연한 예술가",
    description: "자신의 가치관에 따라 유연하게 학습합니다. 미적 감각이 뛰어나며, 직접 체험하고 느낄 수 있는 학습 방식을 선호합니다. 편안하고 자유로운 분위기에서 능력을 발휘합니다.",
    keywords: ["경험 중시", "유연함", "가치관"],
  },
  INFP: {
    title: "열정적인 중재자",
    description: "자신의 이상과 가치를 실현하기 위해 학습합니다. 창의적인 아이디어를 탐구하고, 인간 중심적인 주제에 깊이 몰입하는 경향이 있습니다.",
    keywords: ["창의성", "이상 추구", "공감"],
  },
  INTP: {
    title: "논리적인 사색가",
    description: "지적 호기심이 왕성하여 끊임없이 '왜?'라는 질문을 던집니다. 복잡한 이론을 분석하고 새로운 아이디어를 탐구하는 것을 즐기며, 논리적 모순을 찾는 데 뛰어납니다.",
    keywords: ["지적 호기심", "분석적", "아이디어"],
  },
  ESTP: {
    title: "활동적인 해결사",
    description: "경쟁과 도전을 통해 배우는 것을 즐깁니다. 실제 상황에 뛰어들어 문제를 해결하며, 이론보다는 실제적인 결과와 경험을 중요하게 생각합니다.",
    keywords: ["도전", "실전 감각", "에너지"],
  },
  ESFP: {
    title: "사교적인 엔터테이너",
    description: "사람들과 어울리며 즐거운 분위기에서 학습할 때 가장 효과적입니다. 실제 경험과 오감을 활용하는 학습을 선호하며, 긍정적인 에너지를 발산합니다.",
    keywords: ["사교성", "체험 학습", "긍정적"],
  },
  ENFP: {
    title: "재기발랄한 활동가",
    description: "새로운 가능성을 탐험하고 다양한 아이디어를 연결하는 것을 좋아합니다. 열정적이고 창의적이며, 다른 사람들과 함께 브레인스토밍하는 것을 즐깁니다.",
    keywords: ["열정", "가능성 탐험", "상상력"],
  },
  ENTP: {
    title: "뜨거운 논쟁을 즐기는 변론가",
    description: "지적인 도전을 즐기며, 기존의 방식에 의문을 제기합니다. 두뇌 싸움을 통해 배우는 것을 선호하며, 복잡한 문제를 해결하기 위한 독창적인 방법을 찾아냅니다.",
    keywords: ["논쟁", "지적 도전", "독창성"],
  },
  ESTJ: {
    title: "체계적인 관리자",
    description: "명확한 목표와 구조화된 계획에 따라 학습합니다. 효율성과 생산성을 중요하게 생각하며, 배운 것을 즉시 적용하여 실질적인 결과를 만들어냅니다.",
    keywords: ["효율성", "체계적", "결과 중심"],
  },
  ESFJ: {
    title: "사교적인 외교관",
    description: "다른 사람들과 협력하고 조화로운 관계 속에서 학습합니다. 실제적이고 구체적인 정보를 선호하며, 다른 사람에게 도움을 줄 때 큰 보람을 느낍니다.",
    keywords: ["협력", "조화", "실용성"],
  },
  ENFJ: {
    title: "정의로운 사회운동가",
    description: "사람들의 성장을 돕고 영감을 주면서 함께 배웁니다. 다른 사람의 잠재력을 이끌어내는 데 능숙하며, 공동의 목표를 위해 학습하는 것을 중요하게 생각합니다.",
    keywords: ["리더십", "영감", "공동체"],
  },
  ENTJ: {
    title: "대담한 통솔자",
    description: "장기적인 비전을 세우고, 목표 달성을 위해 전략적으로 학습합니다. 타고난 리더로서, 논리적인 분석과 결단력을 통해 복잡한 시스템을 이해하고 개선합니다.",
    keywords: ["리더십", "전략", "결단력"],
  },
};
