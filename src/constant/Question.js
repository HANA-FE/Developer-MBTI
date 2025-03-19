// 이미지 import
import Q1 from '@/src/image/question/Q1.png';
import Q2 from '@/src/image/question/Q2.png';
import Q3 from '@/src/image/question/Q3.png';
import Q4 from '@/src/image/question/Q4.png';
import Q5 from '@/src/image/question/Q5.png';
import Q6 from '@/src/image/question/Q6.png';
import Q7 from '@/src/image/question/Q7.png';
import Q8 from '@/src/image/question/Q8.png';
import Q9 from '@/src/image/question/Q9.png';
import Q10 from '@/src/image/question/Q10.png';
import Q11 from '@/src/image/question/Q11.png';
import Q12 from '@/src/image/question/Q12.png';

const QUESTION = [
  null, // 0번 인덱스는 비워두어 1번부터 시작하도록 함
  {
    type: 'PJ',
    text: '업무 시작 전, \n 진행 상황을 체크해야 한다. \n 이 때 당신은?',
    image: Q1,
    answers: [
      { type: 'J', text: '협업툴(노션, 지라 등)을 \n켜서 오늘 해야 할 일을 정리해 봐야지!' },
      { type: 'P', text: '내 머리 속에 다 있지~ \n음 이것부터 하면 되겠다!' },
    ],
  },
  {
    type: 'PJ',
    text: '프로젝트 일정을 관리해야 한다. \n 당신은 어떻게 할 것인가?',
    image: Q2,
    answers: [
      { type: 'J', text: 'Daily, Weekly 별로 과업을 관리하고 \n 역할을 분담해야겠다. 모두 모여보세요~' },
      { type: 'P', text: '대략적인 데드라인만 정해야겠다. \n 어차피 프로젝트는 계획대로 안 돼…' },
    ],
  },
  {
    type: 'PJ',
    text: "상사가 \n '급한 일이니 빠르게 처리해주세요'\n라고 했다. 이 때 당신은?",
    image: Q3,
    answers: [
      { type: 'J', text: '"몇 시까지 해야 하는 거지? 빠르게가 언제일까?"\n라고 생각하며 스트레스 받는다.' },
      { type: 'P', text: '(바로 시작해야지)\n "네~ ^___^"' },
    ],
  },
  {
    type: 'EI',
    text: '팀 프로젝트 시작 전, \n 사기 충전을 위해 \n 다 같이 화이팅 회식을 하기로 했다. \n 이 떄 나는?',
    image: Q4,
    answers: [
      { type: 'E', text: '회식이라니 재밌겠다!\n 참석해서 모두와 친해져야지 ~' },
      { type: 'I', text: '헉 너무 많은 사람은 불편해…\n 나는 차근차근 친해질래...' },
    ],
  },
  {
    type: 'EI',
    text: '오늘 하루 할 일을 끝낸 후, \n 남아서 공부한 사람들끼리 \n 저녁을 먹으러 가자고 한다면?',
    image: Q5,
    answers: [
      { type: 'E', text: '더 많은 얘기를 하고 친해질 수 있는 기회다!\n 맛있는 것도 먹고 사람도 알고 ~' },
      { type: 'I', text: '불편한 상태에서 밥을 먹으면 체할 수도 있으니\n 나는 일단 집에 간다 해야겠다...' },
    ],
  },
  {
    type: 'EI',
    text: '주중에 열심히 일한 당신, \n 주말엔 어떻게 시간을 보낼 것인가?',
    image: Q6,
    answers: [
      { type: 'E', text: '피곤하지만 주말에나 약속을 잡을 수 있으니까 \n일단 나간다.' },
      { type: 'I', text: '주중에 열심히 나갔으니까 주말에는 \n집에서 푹 쉰다.' },
    ],
  },
  {
    type: 'TF',
    text: '팀원이 버그를 못 고쳐서 울고 있는데, \n알고 보니 ;(세미콜론) 문제였다. \n 이 때 나는?',
    image: Q7,
    answers: [
      { type: 'T', text: '"세미콜론 빠뜨렸잖아;;;;;;;;" \n(로그 확인하고 냉정하게 지적)' },
      { type: 'F', text: '"헉 ㅠㅠ 혹시 ; 때문인 거 아니야??\n 괜찮아... 괜찮아... 우리 다 그런 실수 해...😢"' },
    ],
  },
  {
    type: 'TF',
    text: "팀원이 갑자기 \n '이거 왜 안 되는지 모르겠어요!' \n 라고 한다. 나의 반응은?",
    image: Q8,
    answers: [
      { type: 'T', text: '"디버깅 해봤어?" \n(가차 없이 현실 직시)' },
      { type: 'F', text: '"헉 ㅠㅠ 너무 힘들지? 뭐가 문제일까? \n같이 한 번 보자! 😭"' },
    ],
  },
  {
    type: 'TF',
    text: "팀장님이 \n '이거 일정 앞당길 수 있어요?' \n 라고 묻는다. 나의 대답은?",
    image: Q9,
    answers: [
      { type: 'T', text: '"불가능한 일정은 현실적으로 어렵습니다."' },
      { type: 'F', text: '"(속으로 울면서) 네... 해볼게요..."' },
    ],
  },
  {
    type: 'SN',
    text: '지금 한창 아이디어 회의 중이다. \n 이때 나는?',
    image: Q10,
    answers: [
      { type: 'S', text: '여러 데이터들을 분석한 뒤 \n의견을 제시한다' },
      { type: 'N', text: '재밌는 아이디어가 떠오르면 \n즉흥적으로 제시한다' },
    ],
  },
  {
    type: 'SN',
    text: '최신 개발 트렌드를 공부할 때 \n 당신은?',
    image: Q11,
    answers: [
      { type: 'S', text: '바로 써 먹을 수 있는 기술들이 유용하지~' },
      { type: 'N', text: '당장은 못 써도 혁신적인 기술이 재밌어!' },
    ],
  },
  {
    type: 'SN',
    text: '평생 한 회사에서 일해야 한다면?',
    image: Q12,
    answers: [
      { type: 'S', text: '익숙하지만 자신 있는 업무를 반복하는 회사' },
      { type: 'N', text: '계속 새롭고 도전적인 업무를 하는 회사' },
    ],
  },
];

export default QUESTION;
