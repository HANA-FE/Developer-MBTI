// 이미지 import
import PJ1 from '../image/question/PJ_1.png';
import PJ2 from '../image/question/PJ_2.png';
import PJ3 from '../image/question/PJ_3.png';
import EI1 from '../image/question/EI_1.png';
import EI2 from '../image/question/EI_2.png';
import EI3 from '../image/question/EI_3.png';
import TF1 from '../image/question/TF_1.png';
import TF2 from '../image/question/TF_2.png';
import TF3 from '../image/question/TF_3.png';
import SN1 from '../image/question/SN_1.png';
import SN2 from '../image/question/SN_2.png';
import SN3 from '../image/question/SN_3.png';

const QUESTION = {
  PJ: {
    title: 'P vs J 유형',
    questions: {
      1: {
        question: '업무 시작 전, 진행 상황을 체크할 때 당신은?',
        image: PJ1,
        answers: {
          J: '협업툴(노션, 지라 등)을 일단 켜서 오늘 해야 할 일을 정리해 봐야지!',
          P: '내 머리 속에 다 있지~ 음 이것부터 하면 되겠다!',
        },
      },
      2: {
        question: '프로젝트 일정을 관리해야 한다면 어떻게 할 것인가?',
        image: PJ2,
        answers: {
          J: 'Daily, Weekly 별로 과업을 관리하고 역할을 분담해야겠다. 모두 모여보세요~',
          P: '대략적인 데드라인만 정해야겠다. 어차피 프로젝트는 계획대로 안 돼…',
        },
      },
      3: {
        question: "상사가 '급한 일이니 빠르게 처리해주세요'라고 했다.",
        image: PJ3,
        answers: {
          J: '"몇 시까지 해야 하는 거지? 빠르게가 언제일까?"라고 생각하며 스트레스 받는다.',
          P: '"(바로 시작해야지) 네~" ^___^',
        },
      },
    },
  },
  EI: {
    title: 'E vs I 유형',
    questions: {
      1: {
        question: '팀 프로젝트 시작 전, 사기 충전을 위해 다 같이 화이팅 회식을 하기로 했다. 참석할 것인가?',
        image: EI1,
        answers: {
          E: '회식이라니 재밌겠다! 참석해서 모두와 친해져야지 ~',
          I: '헉 너무 많은 사람은 불편해… 나는 차근차근 친해질래...',
        },
      },
      2: {
        question: '오늘 하루 할 일을 끝낸 후, 남아서 공부한 사람들끼리 저녁을 먹으러 가자고 한다면?',
        image: EI2,
        answers: {
          E: '더 많은 얘기를 하고 친해질 수 있는 기회다! 맛있는 것도 먹고 사람도 알고 ~',
          I: '불편한 상태에서 밥을 먹으면 체할 수도 있으니 나는 일단 집에 간다 해야겠다...',
        },
      },
      3: {
        question: '주중에 열심히 일한 당신, 주말엔 어떻게 시간을 보낼 것인가?',
        image: EI3,
        answers: {
          E: '피곤하지만 주말에나 약속을 잡을 수 있으니까 일단 나간다.',
          I: '주중에 열심히 나갔으니까 주말에는 집에서 푹 쉰다.',
        },
      },
    },
  },
  TF: {
    title: 'T vs F 유형',
    questions: {
      1: {
        question: '팀원이 버그를 못 고쳐서 울고 있는데, 알고 보니 ;(세미콜론) 문제였다. 나는?',
        image: TF1,
        answers: {
          T: '"세미콜론 빠뜨렸잖아;;;;;;;;" (로그 확인하고 냉정하게 지적)',
          F: '"헉 ㅠㅠ 혹시 ; 때문인 거 아니야?? 괜찮아... 괜찮아... 우리 다 그런 실수 해...😢"',
        },
      },
      2: {
        question: "팀원이 갑자기 '이거 왜 안 되는지 모르겠어요!'라고 한다. 나는?",
        image: TF2,
        answers: {
          T: '"디버깅 해봤어?" (가차 없이 현실 직시)',
          F: '"헉 ㅠㅠ 너무 힘들지? 뭐가 문제일까? 같이 한 번 보자! 😭"',
        },
      },
      3: {
        question: "팀장이 '이거 일정 앞당길 수 있어요?'라고 묻는다. 나는?",
        image: TF3,
        answers: {
          T: '"불가능한 일정은 현실적으로 어렵습니다."',
          F: '"(속으로 울면서) 네... 해볼게요..."',
        },
      },
    },
  },
  SN: {
    title: 'S vs N 유형',
    questions: {
      1: {
        question: '지금 한창 아이디어 회의 중이다. 당신은?',
        image: SN1,
        answers: {
          S: '여러 데이터들을 분석한 뒤 의견을 제시한다.',
          N: '재밌는 아이디어가 떠오르면 즉흥적으로 제시한다.',
        },
      },
      2: {
        question: '최신 개발 트렌드를 공부할 때 당신은?',
        image: SN2,
        answers: {
          S: '바로 써 먹을 수 있는 기술들이 유용하지.',
          N: '당장은 못 써도 혁신적인 기술이 재밌어!',
        },
      },
      3: {
        question: '평생 한 회사에서 일해야 한다면?',
        image: SN3,
        answers: {
          S: '익숙하지만 자신 있는 업무를 반복하는 회사',
          N: '계속 새롭고 도전적인 업무를 하는 회사',
        },
      },
    },
  },
};

// 유틸리티 함수들
const QuestionUtils = {
  // 특정 타입과 번호의 이미지 경로 가져오기
  getImagePath: (type, questionNumber) => {
    return QUESTION[type]?.questions[questionNumber]?.image;
  },

  // 특정 타입과 번호의 질문 데이터 가져오기
  getQuestion: (type, questionNumber) => {
    return QUESTION[type]?.questions[questionNumber];
  },

  // 특정 타입의 모든 질문 가져오기
  getQuestionsByType: type => {
    return QUESTION[type]?.questions;
  },

  // 특정 타입의 제목 가져오기
  getTypeTitle: type => {
    return QUESTION[type]?.title;
  },

  // 모든 타입 목록 가져오기
  getAllTypes: () => {
    return Object.keys(QUESTION);
  },

  // 특정 타입의 질문 개수 가져오기
  getQuestionCount: type => {
    return Object.keys(QUESTION[type]?.questions || {}).length;
  },
};

// QUESTION 객체와 유틸리티 함수들을 함께 내보내기
export { QUESTION as default, QuestionUtils };
