export const ANIMALS = [
  '자유로운 코알라',
  '정리왕 코뿔소',
  '냉철한 뱀',
  '원칙주의자 거북이',
  '감성적인 고양이',
  '생각 깊은 팬더',
  '탐구하는 부엉이',
  '치밀한 호랑이',
  '실험정신 여우',
  // '팀워크 최강 코끼리',
  '문제해결 표범',
  '원칙주의 리더 사자',
  // '에너자이저 돌고래',
  '팔방미인형 강아지',
  '토론 마스터 앵무새',
  '전략가 늑대',
];

export const NODES = ANIMALS.map(v => ({ id: v }));
export const LINKS = ANIMALS.reduce((acc, cur, idx, origin) => {
  let arr = [];
  for (let i = idx + 1; i < origin.length; i++) {
    arr.push({ source: cur, target: origin[i] });
  }
  return [...acc, ...arr];
}, []);
